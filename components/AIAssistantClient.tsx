"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ClientChatMessage, streamAssistant } from "@/lib/aiClient";
import { identifyBestFromPhoto } from "@/lib/identifyBest";
import { IdentificationResult } from "@/lib/types";

type CameraState = "closed" | "open";

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
    .replace(/^#{1,6}\s*/gm, "")
    .replace(/^\s*>\s?/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/\*([^*\n]+)\*/g, "$1")
    .replace(/_([^_\n]+)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/^\s*\d+\.\s+/gm, "• ")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

function findDroppedImage(files: FileList): File | null {
  for (const entry of Array.from(files)) {
    if (entry.type.startsWith("image/")) {
      return entry;
    }
  }
  return null;
}

export function AIAssistantClient() {
  const [messages, setMessages] = useState<ClientChatMessage[]>([
    {
      role: "assistant",
      content: "Tap + to add a photo. I will run plant + wildlife detection and use the highest-confidence result for chat context.",
    },
  ]);
  const [input, setInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [identifyLoading, setIdentifyLoading] = useState(false);
  const [identifyError, setIdentifyError] = useState<string | null>(null);
  const [identified, setIdentified] = useState<IdentificationResult | null>(null);

  const [dragActive, setDragActive] = useState(false);
  const [isPinnedToBottom, setIsPinnedToBottom] = useState(true);
  const [actionsOpen, setActionsOpen] = useState(false);
  const [cameraState, setCameraState] = useState<CameraState>("closed");
  const [cameraError, setCameraError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cameraStreamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const container = chatScrollRef.current;
    if (!container || !isPinnedToBottom) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, chatLoading, isPinnedToBottom]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
      setDragActive(true);
    };

    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      setDragActive(false);
      const files = event.dataTransfer?.files;
      if (!files?.length) return;
      const dropped = findDroppedImage(files);
      if (dropped) {
        void processSelectedFile(dropped);
      }
    };

    const onDragEnd = () => setDragActive(false);

    window.addEventListener("dragover", onDragOver);
    window.addEventListener("drop", onDrop);
    window.addEventListener("dragleave", onDragEnd);

    return () => {
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("drop", onDrop);
      window.removeEventListener("dragleave", onDragEnd);
    };
    // Intentionally register global drag/drop listeners once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const speciesContext = useMemo(() => buildSpeciesContext(identified), [identified]);

  function handleChatScroll() {
    const container = chatScrollRef.current;
    if (!container) return;
    const threshold = 24;
    const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
    setIsPinnedToBottom(distanceFromBottom <= threshold);
  }

  async function processSelectedFile(selected: File) {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(URL.createObjectURL(selected));
    await handleIdentify(selected);
  }

  async function handleIdentify(file: File) {
    setIdentifyLoading(true);
    setIdentifyError(null);

    try {
      const result = await identifyBestFromPhoto(file);
      setIdentified(result);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Photo analyzed as ${result.primary.commonName} (${result.primary.scientificName}) at ${(result.primary.confidence * 100).toFixed(0)}% confidence from best-of animal and plant detection.`,
        },
      ]);

      const autoPrompt = `Give me a concise field guide for ${result.primary.commonName}. Include habitat, behavior, and safe observation tips.`;
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

  async function openCamera() {
    setActionsOpen(false);
    setCameraError(null);

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError("Camera access is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
        },
      });

      cameraStreamRef.current = stream;
      setCameraState("open");

      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          void videoRef.current.play();
        }
      });
    } catch {
      setCameraError("Unable to access camera. Check browser camera permissions.");
    }
  }

  function closeCamera() {
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      cameraStreamRef.current = null;
    }
    setCameraState("closed");
  }

  async function handleCameraScan() {
    const video = videoRef.current;
    if (!video || video.videoWidth === 0 || video.videoHeight === 0) {
      setCameraError("Camera is not ready yet.");
      return;
    }

    const scanWidth = Math.floor(video.videoWidth * 0.74);
    const scanHeight = Math.floor(video.videoHeight * 0.56);
    const sx = Math.floor((video.videoWidth - scanWidth) / 2);
    const sy = Math.floor((video.videoHeight - scanHeight) / 2);

    const canvas = document.createElement("canvas");
    canvas.width = scanWidth;
    canvas.height = scanHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCameraError("Unable to process camera frame.");
      return;
    }

    ctx.drawImage(video, sx, sy, scanWidth, scanHeight, 0, 0, scanWidth, scanHeight);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) {
      setCameraError("Unable to create scan image.");
      return;
    }

    const photo = new File([blob], `camera-scan-${Date.now()}.jpg`, { type: "image/jpeg" });
    closeCamera();
    await processSelectedFile(photo);
  }

  return (
    <section className="relative flex h-[calc(100vh-64px)] w-full bg-county-white">
      {dragActive && (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-county-green/15">
          <div className="rounded-xl border border-county-green bg-white px-5 py-3 text-sm font-semibold text-county-green">
            Drop image anywhere to analyze
          </div>
        </div>
      )}

      {cameraState === "open" && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/75 p-4">
          <div className="w-full max-w-md rounded-xl bg-black p-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <video ref={videoRef} playsInline muted className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[56%] w-[74%] -translate-x-1/2 -translate-y-1/2 border-2 border-county-green shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]" />
            </div>
            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={closeCamera}
                className="flex-1 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void handleCameraScan()}
                className="flex-1 rounded-full bg-county-green px-4 py-2 text-sm font-semibold text-white"
              >
                Scan
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="pointer-events-none absolute right-4 top-3 z-20 sm:right-6">
          <div className="pointer-events-auto">
            <button
              type="button"
              onClick={() => setActionsOpen((prev) => !prev)}
              className="rounded-full bg-county-green px-3 py-1 text-xl leading-none text-white shadow-sm"
              aria-label="Add photo"
            >
              +
            </button>

            {actionsOpen && (
              <div className="absolute right-0 top-12 z-20 w-56 rounded-xl border border-county-panel bg-white p-2 shadow-md">
                <button
                  type="button"
                  onClick={() => {
                    setActionsOpen(false);
                    fileInputRef.current?.click();
                  }}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-county-text hover:bg-county-bg"
                >
                  Add image from device
                </button>
                <button
                  type="button"
                  onClick={() => void openCamera()}
                  className="mt-1 w-full rounded-lg px-3 py-2 text-left text-sm text-county-text hover:bg-county-bg"
                >
                  Open camera and scan
                </button>
              </div>
            )}
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const selected = event.target.files?.[0] ?? null;
            if (selected) {
              void processSelectedFile(selected);
            }
            event.currentTarget.value = "";
          }}
        />

        {(previewUrl || identified || identifyLoading || identifyError || cameraError) && (
          <div className="border-b border-county-panel bg-county-bg px-4 py-3 sm:px-6">
            {previewUrl && <img src={previewUrl} alt="Species upload preview" className="h-24 w-24 rounded-lg object-cover" />}
            {identifyLoading && <p className="mt-2 text-sm text-county-text">Analyzing photo with plant + animal models...</p>}
            {identified && (
              <div className="mt-2 space-y-1 text-sm text-county-text">
                <p>
                  Best match: <span className="font-semibold text-county-green">{identified.primary.commonName}</span>{" "}
                  <span className="italic">({identified.primary.scientificName})</span>
                </p>
                <p>
                  Confidence: {(identified.primary.confidence * 100).toFixed(0)}% • Type: {identified.type}
                  {identified.detection?.normalizedLabel ? ` • AI label: ${identified.detection.normalizedLabel}` : ""}
                </p>
                {identified.enrichment?.taxonomy?.length ? <p>Taxonomy: {identified.enrichment.taxonomy.join(" > ")}</p> : null}
                {identified.providerNote ? <p className="text-county-text-secondary">{identified.providerNote}</p> : null}
              </div>
            )}
            {identifyError && <p className="mt-2 text-sm text-red-700">{identifyError}</p>}
            {cameraError && <p className="mt-2 text-sm text-red-700">{cameraError}</p>}
          </div>
        )}

        <div ref={chatScrollRef} onScroll={handleChatScroll} className="flex-1 space-y-4 overflow-y-auto bg-white p-4 sm:p-6">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`max-w-3xl rounded-2xl px-4 py-3 text-sm sm:text-base ${
                message.role === "user" ? "ml-auto bg-county-green text-white" : "mr-auto border border-county-panel bg-county-bg text-county-text"
              }`}
            >
              <span className="whitespace-pre-wrap">
                {(message.role === "assistant" ? cleanAssistantText(message.content) : message.content) ||
                  (chatLoading && index === messages.length - 1 ? "Thinking..." : "")}
              </span>
            </div>
          ))}
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
    </section>
  );
}
