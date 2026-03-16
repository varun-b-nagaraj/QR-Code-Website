import { NextRequest, NextResponse } from "next/server";
import { chatWithOllama, OllamaMessage, streamChatWithOllama } from "@/lib/server/ollama";

interface ChatBody {
  prompt?: string;
  context?: string;
  speciesContext?: string;
  model?: string;
  stream?: boolean;
  messages?: Array<{ role?: string; content?: string }>;
}

function toChatMessages(body: ChatBody): OllamaMessage[] {
  const messages: OllamaMessage[] = [
    {
      role: "system",
      content:
        "You are a county park educational assistant. Provide clear, concise, family-friendly info on plants, animals, and conservation. If uncertain, say what is uncertain.",
    },
  ];

  const context = body.context?.trim();
  if (context) {
    messages.push({ role: "system", content: `General context: ${context}` });
  }

  const speciesContext = body.speciesContext?.trim();
  if (speciesContext) {
    messages.push({ role: "system", content: `Photo identification context: ${speciesContext}` });
  }

  if (Array.isArray(body.messages) && body.messages.length > 0) {
    const conversation = body.messages
      .map((item) => {
        const role = item.role === "assistant" || item.role === "system" ? item.role : "user";
        const content = item.content?.trim();
        if (!content) return null;
        return { role, content } as OllamaMessage;
      })
      .filter((item): item is OllamaMessage => Boolean(item));

    messages.push(...conversation);
    return messages;
  }

  const prompt = body.prompt?.trim();
  if (prompt) {
    messages.push({ role: "user", content: prompt });
  }

  return messages;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ChatBody;
    const messages = toChatMessages(body);

    const hasUserMessage = messages.some((item) => item.role === "user");
    if (!hasUserMessage) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    if (body.stream) {
      const encoder = new TextEncoder();
      const stream = new ReadableStream<Uint8Array>({
        async start(controller) {
          try {
            for await (const chunk of streamChatWithOllama({ messages, model: body.model })) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ delta: chunk })}\n\n`));
            }
            controller.enqueue(encoder.encode("data: {\"done\":true}\n\n"));
            controller.close();
          } catch (error) {
            const message = error instanceof Error ? error.message : "AI stream failed.";
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: message })}\n\n`));
            controller.close();
          }
        },
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          "X-Accel-Buffering": "no",
        },
      });
    }

    const answer = await chatWithOllama({ messages, model: body.model });
    return NextResponse.json({ answer });
  } catch (error) {
    const message = error instanceof Error ? error.message : "AI service failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
