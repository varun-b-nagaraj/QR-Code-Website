export interface ClientChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface AskAssistantOptions {
  prompt: string;
  context?: string;
  speciesContext?: string;
}

interface StreamAssistantOptions {
  messages: ClientChatMessage[];
  context?: string;
  speciesContext?: string;
  onDelta: (delta: string) => void;
}

export async function askAssistant({ prompt, context, speciesContext }: AskAssistantOptions): Promise<string> {
  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt, context, speciesContext }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Unable to get AI response.");
  }

  return data.answer as string;
}

export async function streamAssistant({ messages, context, speciesContext, onDelta }: StreamAssistantOptions): Promise<void> {
  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages, context, speciesContext, stream: true }),
  });

  if (!response.ok) {
    let message = "Unable to stream AI response.";
    try {
      const data = await response.json();
      message = data?.error || message;
    } catch {
      // Ignore parse failures and use fallback message.
    }
    throw new Error(message);
  }

  if (!response.body) {
    throw new Error("AI stream did not include a response body.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });

    let boundary = buffer.indexOf("\n\n");
    while (boundary !== -1) {
      const eventBlock = buffer.slice(0, boundary);
      buffer = buffer.slice(boundary + 2);

      const dataLines = eventBlock
        .split("\n")
        .filter((line) => line.startsWith("data:"))
        .map((line) => line.slice(5).trim())
        .filter(Boolean);

      if (dataLines.length) {
        const payloadText = dataLines.join("\n");
        try {
          const payload = JSON.parse(payloadText) as { delta?: string; done?: boolean; error?: string };
          if (payload.error) {
            throw new Error(payload.error);
          }
          if (typeof payload.delta === "string" && payload.delta) {
            onDelta(payload.delta);
          }
          if (payload.done) {
            return;
          }
        } catch (error) {
          throw error instanceof Error ? error : new Error("Unable to parse AI stream event.");
        }
      }

      boundary = buffer.indexOf("\n\n");
    }
  }

  buffer += decoder.decode();

  // Backward-compatible fallback if non-SSE content is ever returned.
  if (buffer.trim()) {
    onDelta(buffer);
  }
}
