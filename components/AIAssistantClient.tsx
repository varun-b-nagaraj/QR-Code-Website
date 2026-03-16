"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ClientChatMessage, streamAssistant } from "@/lib/aiClient";
import { identifyAnimal } from "@/lib/identifyAnimal";
import { identifyPlant } from "@/lib/identifyPlant";
import { IdentificationResult } from "@/lib/types";

type IdentifyMode = "animal" | "plant";

const quickPrompts = [
  "Give me a quick field guide for this species.",
  "Is this species dangerous for kids or pets?",
  "What should I observe without disturbing it?",
];

function buildSpeciesContext(identified: IdentificationResult | null): string {
  if (!identified) return "";

  const alternativeText = identified.alternatives
    .map((item) => `${item.commonName} (${item.scientificName}) ${(item.confidence * 100).toFixed(0)}%`)
    .join(", ");

  return [
    `Type: ${identified.type}`,
    `Primary: ${identified.primary.commonName} (${identified.primary.scientificName})`,
    `AI detection confidence: ${(identified.primary.confidence * 100).toFixed(0)}%`,
    identified.detection ? `Detected label: ${identified.detection.detectedLabel} -> ${identified.detection.normalizedLabel}` : null,
    identified.enrichment?.taxonomy?.length ? `Taxonomy: ${identified.enrichment.taxonomy.join(" > ")}` : null,
    `Native status: ${identified.primary.nativeStatus}`,
    `Summary: ${identified.primary.summary}`,
    alternativeText ? `Alternatives: ${alternativeText}` : null,
    identified.providerNote ? `Provider note: ${identified.providerNote}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

function cleanAssistantText(value: string): string {
  return value
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^[-*]\s+/gm, "• ");
}

export function AIAssistantClient() {
  const [messages, setMessages] = useState<ClientChatMessage[]>([
    {
      role: "assistant",
      content:
        "Upload a photo of an animal or plant, then ask questions. I will use that identification context while answering.",
    },
  ]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);

  const [mode, setMode] = useState<IdentifyMode>("animal");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [identifyLoading, setIdentifyLoading] = useState(false);
  const [identifyError, setIdentifyError] = useState<string | null>(null);
  const [identified, setIdentified] = useState<IdentificationResult | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatLoading]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function selectFile(selected: File | null) {
    setFile(selected);
    setIdentified(null);
    setIdentifyError(null);

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    if (selected) {
      setPreviewUrl(URL.createObjectURL(selected));
      return;
    }

    setPreviewUrl(null);
  }

  function findDroppedImage(files: FileList): File | null {
    for (const entry of Array.from(files)) {
      if (entry.type.startsWith("image/")) {
        return entry;
      }
    }
    return null;
  }

  const speciesContext = useMemo(() => buildSpeciesContext(identified), [identified]);

  async function handleIdentify() {
    if (!file) return;

    setIdentifyLoading(true);
    setIdentifyError(null);

    try {
      const result = mode === "plant" ? await identifyPlant(file) : await identifyAnimal(file);
      setIdentified(result);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `AI detected ${result.detection?.normalizedLabel || result.primary.commonName} at ${(result.primary.confidence * 100).toFixed(0)}% confidence, then enriched species references with public biodiversity data. Ask anything about this species.`,
        },
      ]);

      const autoPrompt =
        mode === "plant"
          ? `Tell me about this plant: ${result.primary.commonName}. Include key traits, habitat, and safe observation tips.`
          : `Tell me about this animal: ${result.primary.commonName}. Include behavior, habitat, and safe observation tips.`;

      await handleSend(undefined, autoPrompt, buildSpeciesContext(result));
    } catch (error) {
      setIdentifyError(error instanceof Error ? error.message : "Unable to identify image.");
    } finally {
      setIdentifyLoading(false);
    }
  }

  async function handleSend(event?: FormEvent<HTMLFormElement>, forcedPrompt?: string, forcedSpeciesContext?: string) {
    event?.preventDefault();
    if (chatLoading) return;

    const prompt = (forcedPrompt ?? input).trim();
    if (!prompt) return;

    const nextMessages: ClientChatMessage[] = [...messages, { role: "user", content: prompt }];

    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setChatError(null);
    setChatLoading(true);

    try {
      await streamAssistant({
        messages: nextMessages,
        context: "County educational trail prototype. Focus on safe, local, family-friendly guidance.",
        speciesContext: forcedSpeciesContext ?? speciesContext,
        onDelta: (delta) => {
          setMessages((prev) => {
            if (!prev.length) return prev;
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last.role !== "assistant") return prev;
            updated[updated.length - 1] = { ...last, content: `${last.content}${delta}` };
            return updated;
          });
        },
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "AI request failed.";
      setChatError(message);
      setMessages((prev) => {
        if (!prev.length) return prev;
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last.role !== "assistant") return prev;
        updated[updated.length - 1] = {
          ...last,
          content: last.content || `Unable to respond: ${message}`,
        };
        return updated;
      });
    } finally {
      setChatLoading(false);
    }
  }

  return (
    <section
      className="relative flex h-[calc(100vh-70px)] w-full bg-county-white"
      onDragEnter={(event) => {
        event.preventDefault();
        setDragActive(true);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        const nextTarget = event.relatedTarget as Node | null;
        if (!nextTarget || !event.currentTarget.contains(nextTarget)) {
          setDragActive(false);
        }
      }}
      onDrop={(event) => {
        event.preventDefault();
        setDragActive(false);
        const dropped = findDroppedImage(event.dataTransfer.files);
        if (dropped) {
          selectFile(dropped);
        }
      }}
    >
      {dragActive && (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-county-green/15">
          <div className="rounded-xl border border-county-green bg-white px-5 py-3 text-sm font-semibold text-county-green">
            Drop image to upload
          </div>
        </div>
      )}

      <aside className="hidden h-full w-[340px] shrink-0 border-r border-county-panel bg-county-bg p-4 lg:sticky lg:top-0 lg:block">
        <div className="rounded-xl border border-county-panel bg-white p-4">
          <p className="text-sm font-semibold text-county-text">Photo Identification</p>
          <div className="mt-3 inline-flex rounded-full bg-county-panel p-1 text-sm">
            <button
              type="button"
              onClick={() => setMode("animal")}
              className={`rounded-full px-3 py-1 ${mode === "animal" ? "bg-white font-semibold text-county-green" : "text-county-text"}`}
            >
              Animal
            </button>
            <button
              type="button"
              onClick={() => setMode("plant")}
              className={`rounded-full px-3 py-1 ${mode === "plant" ? "bg-white font-semibold text-county-green" : "text-county-text"}`}
            >
              Plant
            </button>
          </div>

          <label
            htmlFor="chat-identify-upload"
            className="mt-4 block cursor-pointer rounded-lg border border-dashed border-county-green bg-county-bg px-4 py-8 text-center text-sm text-county-text"
          >
            Tap or drop photo anywhere
            <input
              id="chat-identify-upload"
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(event) => {
                const selected = event.target.files?.[0] ?? null;
                selectFile(selected);
              }}
            />
          </label>

          {previewUrl && <img src={previewUrl} alt="Species upload preview" className="mt-3 h-40 w-full rounded-lg object-cover" />}

          <button
            type="button"
            disabled={!file || identifyLoading}
            onClick={handleIdentify}
            className="mt-3 w-full rounded-full bg-county-green px-4 py-2 text-sm font-semibold text-white hover:bg-county-dark-green disabled:cursor-not-allowed disabled:opacity-50"
          >
            {identifyLoading ? "Identifying..." : "Identify from Photo"}
          </button>

          {identifyError && <p className="mt-2 text-xs text-red-700">{identifyError}</p>}

          {identified && (
            <div className="mt-3 rounded-lg border border-county-panel bg-county-bg p-3 text-sm text-county-text">
              <p className="font-semibold text-county-green">{identified.detection?.normalizedLabel || identified.primary.commonName}</p>
              <p className="italic text-county-text-secondary">{identified.primary.scientificName}</p>
              <p className="mt-1">AI Confidence: {(identified.primary.confidence * 100).toFixed(0)}%</p>
              <p className="mt-1 text-xs text-county-text-secondary">Enriched using public biodiversity data.</p>
              {identified.providerNote && <p className="mt-1 text-xs text-county-text-secondary">{identified.providerNote}</p>}
            </div>
          )}
        </div>
      </aside>

      <div className="flex min-h-0 flex-1 flex-col">
        <header className="border-b border-county-panel px-4 py-3 sm:px-6">
          <h1 className="text-2xl font-semibold text-county-green">Trail Chatbot</h1>
          <p className="text-sm text-county-text-secondary">
            Full-screen chat with live Ollama streaming and optional photo identification context.
          </p>
        </header>

        <div className="border-b border-county-panel bg-county-bg p-3 lg:hidden">
          <label
            htmlFor="chat-identify-upload-mobile"
            className="block cursor-pointer rounded-lg border border-dashed border-county-green bg-white px-4 py-3 text-center text-xs text-county-text"
          >
            Upload / drop image to identify species
            <input
              id="chat-identify-upload-mobile"
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(event) => {
                const selected = event.target.files?.[0] ?? null;
                selectFile(selected);
              }}
            />
          </label>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto bg-white p-4 sm:p-6">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-3xl rounded-2xl px-4 py-3 text-sm sm:text-base ${
                  message.role === "user"
                    ? "ml-auto bg-county-green text-white"
                    : "mr-auto border border-county-panel bg-county-bg text-county-text"
                }`}
              >
                <span className="whitespace-pre-wrap">
                  {(message.role === "assistant" ? cleanAssistantText(message.content) : message.content) ||
                    (chatLoading && index === messages.length - 1 ? "Thinking..." : "")}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={(event) => void handleSend(event)} className="border-t border-county-panel bg-county-bg p-4 sm:p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setInput(item);
                    void handleSend(undefined, item);
                  }}
                  className="rounded-full border border-county-panel bg-white px-3 py-1 text-xs text-county-text hover:border-county-green"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about the species from your photo..."
                className="flex-1 rounded-full border border-county-panel bg-white px-4 py-3 text-sm outline-none focus:border-county-green"
              />
              <button
                type="submit"
                disabled={chatLoading || !input.trim()}
                className="rounded-full bg-county-blue px-5 py-3 text-sm font-semibold text-white hover:bg-county-green disabled:cursor-not-allowed disabled:opacity-50"
              >
                {chatLoading ? "Streaming..." : "Send"}
              </button>
            </div>

            {chatError && <p className="mt-2 text-sm text-red-700">{chatError}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
