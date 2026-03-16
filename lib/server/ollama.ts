export interface OllamaMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OllamaChatOptions {
  messages: OllamaMessage[];
  model?: string;
}

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function getRequestConfig(model?: string) {
  const baseUrl = normalizeBaseUrl(process.env.OLLAMA_BASE_URL || "http://localhost:11434");
  const selectedModel = model || process.env.OLLAMA_MODEL || "deepseek-v3.1:671b-cloud";
  const apiKey = process.env.OLLAMA_API_KEY;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }

  return {
    endpoints: [`${baseUrl}/api/chat`, `${baseUrl}/api/api/chat`],
    selectedModel,
    headers,
  };
}

export async function chatWithOllama({ messages, model }: OllamaChatOptions): Promise<string> {
  const { endpoints, selectedModel, headers } = getRequestConfig(model);
  const body = {
    model: selectedModel,
    messages,
    stream: false,
  };

  let lastError = "Unable to reach AI provider.";

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const text = await response.text();
        lastError = `AI request failed (${response.status}): ${text || "No response body"}`;
        continue;
      }

      const data = await response.json();
      const content = data?.message?.content;
      if (typeof content === "string" && content.trim().length > 0) {
        return content;
      }

      lastError = "AI response did not contain message content.";
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Unknown AI request error.";
    }
  }

  throw new Error(lastError);
}

export async function* streamChatWithOllama({ messages, model }: OllamaChatOptions): AsyncGenerator<string> {
  const { endpoints, selectedModel, headers } = getRequestConfig(model);
  const body = {
    model: selectedModel,
    messages,
    stream: true,
  };

  let lastError = "Unable to reach AI provider.";

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const text = await response.text();
        lastError = `AI request failed (${response.status}): ${text || "No response body"}`;
        continue;
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

        let newlineIndex = buffer.indexOf("\n");
        while (newlineIndex !== -1) {
          const line = buffer.slice(0, newlineIndex).trim();
          buffer = buffer.slice(newlineIndex + 1);

          if (line) {
            const payload = JSON.parse(line) as {
              message?: { content?: string };
              done?: boolean;
              error?: string;
            };

            if (payload.error) {
              throw new Error(payload.error);
            }

            const delta = payload.message?.content;
            if (typeof delta === "string" && delta.length > 0) {
              yield delta;
            }

            if (payload.done) {
              return;
            }
          }

          newlineIndex = buffer.indexOf("\n");
        }
      }

      const tail = buffer.trim();
      if (tail) {
        const payload = JSON.parse(tail) as {
          message?: { content?: string };
          done?: boolean;
          error?: string;
        };

        if (payload.error) {
          throw new Error(payload.error);
        }

        const delta = payload.message?.content;
        if (typeof delta === "string" && delta.length > 0) {
          yield delta;
        }
      }

      return;
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Unknown AI stream request error.";
    }
  }

  throw new Error(lastError);
}
