"use client";

import { FormEvent, PointerEvent as ReactPointerEvent, useEffect, useMemo, useRef, useState } from "react";
import { ClientChatMessage, streamAssistant } from "@/lib/aiClient";
import { identifyBestFromPhoto } from "@/lib/identifyBest";
import { IdentificationResult } from "@/lib/types";

type CameraState = "closed" | "open" | "review";
type CropHandle = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type CropRect = { x: number; y: number; width: number; height: number };
const MIN_CROP_SIZE = 0.16;

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

function findDroppedImage(dataTransfer: DataTransfer | null): File | null {
  if (!dataTransfer) return null;

  for (const item of Array.from(dataTransfer.items ?? [])) {
    if (item.kind !== "file") continue;
    const file = item.getAsFile();
    if (file && file.type.startsWith("image/")) {
      return file;
    }
  }

  for (const file of Array.from(dataTransfer.files ?? [])) {
    if (file.type.startsWith("image/")) {
      return file;
    }
  }

  return null;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
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
  const [isComposerFocused, setIsComposerFocused] = useState(false);
  const [composerInset, setComposerInset] = useState(0);
  const [mobileSpeciesExpanded, setMobileSpeciesExpanded] = useState(false);
  const [capturedPhotoUrl, setCapturedPhotoUrl] = useState<string | null>(null);
  const [cropRect, setCropRect] = useState<CropRect>({ x: 0.2, y: 0.2, width: 0.6, height: 0.6 });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatScrollRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cropStageRef = useRef<HTMLDivElement | null>(null);
  const cameraStreamRef = useRef<MediaStream | null>(null);
  const hasUserSentMessage = messages.some((message) => message.role === "user");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.body.classList.add("ai-chat-page");

    return () => {
      document.body.classList.remove("ai-chat-page");
    };
  }, []);

  useEffect(() => {
    const container = chatScrollRef.current;
    if (!container || !isPinnedToBottom) return;
    container.scrollTop = container.scrollHeight;
  }, [messages, chatLoading, isPinnedToBottom]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    const viewport = window.visualViewport;

    const updateComposerInset = () => {
      if (!media.matches || !viewport || !isComposerFocused) {
        setComposerInset(0);
        return;
      }

      const keyboardOffset = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
      setComposerInset(keyboardOffset > 12 ? keyboardOffset : 0);
    };

    updateComposerInset();

    if (!viewport) return () => setComposerInset(0);
    viewport.addEventListener("resize", updateComposerInset);
    viewport.addEventListener("scroll", updateComposerInset);
    window.addEventListener("resize", updateComposerInset);

    return () => {
      viewport.removeEventListener("resize", updateComposerInset);
      viewport.removeEventListener("scroll", updateComposerInset);
      window.removeEventListener("resize", updateComposerInset);
      setComposerInset(0);
    };
  }, [isComposerFocused]);

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (capturedPhotoUrl) {
        URL.revokeObjectURL(capturedPhotoUrl);
      }
    };
  }, [capturedPhotoUrl, previewUrl]);

  useEffect(() => {
    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
      setDragActive(true);
    };

    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      setDragActive(false);
      const dropped = findDroppedImage(event.dataTransfer);
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

  useEffect(() => {
    if (cameraState !== "open" || !videoRef.current || !cameraStreamRef.current) return;

    const video = videoRef.current;
    const stream = cameraStreamRef.current;
    video.srcObject = stream;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        setCameraError("Camera preview failed to start. Please try again.");
      }
    };

    video.onloadedmetadata = () => {
      void playVideo();
    };
    void playVideo();

    return () => {
      video.onloadedmetadata = null;
      if (video.srcObject) {
        video.srcObject = null;
      }
    };
  }, [cameraState]);

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
      setMobileSpeciesExpanded(false);

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

  function stopCameraStream() {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject = null;
    }
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      cameraStreamRef.current = null;
    }
  }

  function clearCapturedPhoto() {
    if (capturedPhotoUrl) {
      URL.revokeObjectURL(capturedPhotoUrl);
    }
    setCapturedPhotoUrl(null);
  }

  async function openCamera() {
    setActionsOpen(false);
    setCameraError(null);

    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError("Camera access is not supported in this browser.");
      return;
    }

    clearCapturedPhoto();
    setCropRect({ x: 0.2, y: 0.2, width: 0.6, height: 0.6 });

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
        },
      });

      cameraStreamRef.current = stream;
      setCameraState("open");
    } catch {
      setCameraError("Unable to access camera. Check browser camera permissions.");
    }
  }

  function closeCamera() {
    stopCameraStream();
    clearCapturedPhoto();
    setCameraState("closed");
  }

  async function captureCameraPhoto() {
    const video = videoRef.current;
    if (!video || video.videoWidth === 0 || video.videoHeight === 0) {
      setCameraError("Camera is not ready yet.");
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCameraError("Unable to process camera frame.");
      return;
    }

    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) {
      setCameraError("Unable to create scan image.");
      return;
    }

    const objectUrl = URL.createObjectURL(blob);
    setCapturedPhotoUrl((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous);
      }
      return objectUrl;
    });
    setCropRect({ x: 0.2, y: 0.2, width: 0.6, height: 0.6 });
    stopCameraStream();
    setCameraState("review");
  }

  async function applyCroppedSelection() {
    if (!capturedPhotoUrl) {
      setCameraError("No photo available to crop.");
      return;
    }

    const image = new Image();
    image.src = capturedPhotoUrl;

    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("Unable to load captured image."));
    });

    const sx = Math.floor(clamp(cropRect.x, 0, 1) * image.naturalWidth);
    const sy = Math.floor(clamp(cropRect.y, 0, 1) * image.naturalHeight);
    const sw = Math.floor(clamp(cropRect.width, MIN_CROP_SIZE, 1) * image.naturalWidth);
    const sh = Math.floor(clamp(cropRect.height, MIN_CROP_SIZE, 1) * image.naturalHeight);

    const canvas = document.createElement("canvas");
    canvas.width = sw;
    canvas.height = sh;

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      setCameraError("Unable to crop selected area.");
      return;
    }

    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) {
      setCameraError("Unable to create selected crop.");
      return;
    }

    const photo = new File([blob], `camera-crop-${Date.now()}.jpg`, { type: "image/jpeg" });
    closeCamera();
    await processSelectedFile(photo);
  }

  function beginCropHandleDrag(handle: CropHandle, event: ReactPointerEvent<HTMLButtonElement>) {
    const stage = cropStageRef.current;
    if (!stage) return;
    event.preventDefault();

    const stageRect = stage.getBoundingClientRect();
    const startX = event.clientX;
    const startY = event.clientY;
    const initial = { ...cropRect };

    const onMove = (moveEvent: PointerEvent) => {
      const dx = (moveEvent.clientX - startX) / stageRect.width;
      const dy = (moveEvent.clientY - startY) / stageRect.height;

      setCropRect(() => {
        let x = initial.x;
        let y = initial.y;
        let width = initial.width;
        let height = initial.height;

        if (handle === "top-left") {
          const nextX = clamp(initial.x + dx, 0, initial.x + initial.width - MIN_CROP_SIZE);
          const nextY = clamp(initial.y + dy, 0, initial.y + initial.height - MIN_CROP_SIZE);
          width = initial.width - (nextX - initial.x);
          height = initial.height - (nextY - initial.y);
          x = nextX;
          y = nextY;
        }

        if (handle === "top-right") {
          const nextWidth = clamp(initial.width + dx, MIN_CROP_SIZE, 1 - initial.x);
          const nextY = clamp(initial.y + dy, 0, initial.y + initial.height - MIN_CROP_SIZE);
          x = initial.x;
          y = nextY;
          width = nextWidth;
          height = initial.height - (nextY - initial.y);
        }

        if (handle === "bottom-left") {
          const nextX = clamp(initial.x + dx, 0, initial.x + initial.width - MIN_CROP_SIZE);
          const nextHeight = clamp(initial.height + dy, MIN_CROP_SIZE, 1 - initial.y);
          x = nextX;
          y = initial.y;
          width = initial.width - (nextX - initial.x);
          height = nextHeight;
        }

        if (handle === "bottom-right") {
          x = initial.x;
          y = initial.y;
          width = clamp(initial.width + dx, MIN_CROP_SIZE, 1 - initial.x);
          height = clamp(initial.height + dy, MIN_CROP_SIZE, 1 - initial.y);
        }

        return { x, y, width, height };
      });
    };

    const onUp = () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  return (
    <section className="relative flex h-[calc(100svh-64px)] min-h-[calc(100vh-64px)] w-full bg-county-white">
      {dragActive && (
        <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-county-green/15">
          <div className="rounded-xl border border-county-green bg-white px-5 py-3 text-sm font-semibold text-county-green">
            Drop image anywhere to analyze
          </div>
        </div>
      )}

      {cameraState === "open" && (
        <div className="absolute inset-0 z-40 bg-black">
          <video ref={videoRef} playsInline muted className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-6 text-center text-sm font-semibold tracking-wide text-white/95">
            Align subject, then capture
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-10">
            <div className="mx-auto flex max-w-md items-center justify-between">
              <button
                type="button"
                onClick={closeCamera}
                className="rounded-full border border-white/50 px-4 py-2 text-sm font-semibold text-white"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => void captureCameraPhoto()}
                className="relative h-20 w-20 rounded-full border-4 border-white bg-white/20"
                aria-label="Capture photo"
              >
                <span className="absolute inset-2 rounded-full bg-white" />
              </button>
              <div className="w-[74px]" aria-hidden />
            </div>
          </div>
        </div>
      )}

      {cameraState === "review" && capturedPhotoUrl && (
        <div className="absolute inset-0 z-40 bg-black">
          <div ref={cropStageRef} className="relative h-full w-full overflow-hidden">
            <img src={capturedPhotoUrl} alt="Captured preview" className="h-full w-full object-contain" />

            <div
              className="pointer-events-none absolute border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.52)]"
              style={{
                left: `${cropRect.x * 100}%`,
                top: `${cropRect.y * 100}%`,
                width: `${cropRect.width * 100}%`,
                height: `${cropRect.height * 100}%`,
              }}
            />

            <button
              type="button"
              aria-label="Adjust top left crop corner"
              onPointerDown={(event) => beginCropHandleDrag("top-left", event)}
              className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-white bg-county-green/90"
              style={{ left: `${cropRect.x * 100}%`, top: `${cropRect.y * 100}%` }}
            />
            <button
              type="button"
              aria-label="Adjust top right crop corner"
              onPointerDown={(event) => beginCropHandleDrag("top-right", event)}
              className="absolute h-8 w-8 -translate-y-1/2 translate-x-1/2 rounded-md border-2 border-white bg-county-green/90"
              style={{ left: `${(cropRect.x + cropRect.width) * 100}%`, top: `${cropRect.y * 100}%` }}
            />
            <button
              type="button"
              aria-label="Adjust bottom left crop corner"
              onPointerDown={(event) => beginCropHandleDrag("bottom-left", event)}
              className="absolute h-8 w-8 -translate-x-1/2 translate-y-1/2 rounded-md border-2 border-white bg-county-green/90"
              style={{ left: `${cropRect.x * 100}%`, top: `${(cropRect.y + cropRect.height) * 100}%` }}
            />
            <button
              type="button"
              aria-label="Adjust bottom right crop corner"
              onPointerDown={(event) => beginCropHandleDrag("bottom-right", event)}
              className="absolute h-8 w-8 translate-x-1/2 translate-y-1/2 rounded-md border-2 border-white bg-county-green/90"
              style={{ left: `${(cropRect.x + cropRect.width) * 100}%`, top: `${(cropRect.y + cropRect.height) * 100}%` }}
            />
          </div>

          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent px-5 pt-6 text-center text-sm font-semibold tracking-wide text-white/95">
            Drag the four corners to crop the subject
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/88 via-black/45 to-transparent px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-10">
            <div className="mx-auto flex max-w-md gap-3">
              <button
                type="button"
                onClick={() => void openCamera()}
                className="flex-1 rounded-full border border-white/50 px-4 py-3 text-sm font-semibold text-white"
              >
                Retake
              </button>
              <button
                type="button"
                onClick={() => void applyCroppedSelection()}
                className="flex-1 rounded-full bg-county-green px-4 py-3 text-sm font-semibold text-white"
              >
                Use selection
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col">
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
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Species upload preview"
                className={`h-24 w-24 rounded-lg object-cover ${identified && !mobileSpeciesExpanded ? "hidden sm:block" : ""}`}
              />
            )}
            {identifyLoading && <p className="mt-2 text-sm text-county-text">Analyzing photo with plant + animal models...</p>}
            {identified && (
              <>
                <button
                  type="button"
                  onClick={() => setMobileSpeciesExpanded((prev) => !prev)}
                  className="mt-2 flex w-full items-center justify-between rounded-lg border border-county-panel bg-white px-3 py-2 text-left sm:hidden"
                  aria-expanded={mobileSpeciesExpanded}
                  aria-label="Toggle species details"
                >
                  <span className="min-w-0 truncate text-sm text-county-text">
                    <span className="font-semibold text-county-blue">AI</span>
                    <span className="px-1.5 text-county-text-secondary">•</span>
                    <span className="font-semibold text-county-green">{identified.primary.commonName}</span>
                    <span className="px-1.5 text-county-text-secondary">•</span>
                    <span className="italic text-county-text-secondary">{identified.primary.scientificName}</span>
                  </span>
                  <span className="ml-3 text-xs font-semibold text-county-blue">{mobileSpeciesExpanded ? "Hide" : "Show"}</span>
                </button>

                <div className={`mt-2 space-y-1 text-sm text-county-text ${mobileSpeciesExpanded ? "block" : "hidden"} sm:block`}>
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
              </>
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

        <form
          onSubmit={(event) => void handleSend(event)}
          className="sticky bottom-0 border-t border-county-panel bg-county-bg p-4 sm:p-6"
          style={{ paddingBottom: `calc(env(safe-area-inset-bottom, 0px) + ${composerInset}px)` }}
        >
          <div className={`mb-3 flex-wrap gap-2 ${hasUserSentMessage ? "hidden sm:flex" : "flex"}`}>
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

          <div className="flex items-end gap-2">
            <div className="relative">
              <button
                type="button"
                onClick={() => setActionsOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-county-green text-xl leading-none text-white shadow-sm"
                aria-label="Add photo"
              >
                +
              </button>

              {actionsOpen && (
                <div className="absolute bottom-12 left-0 z-20 w-56 rounded-xl border border-county-panel bg-white p-2 shadow-md">
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

            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onFocus={() => setIsComposerFocused(true)}
              onBlur={() => setIsComposerFocused(false)}
              placeholder="Ask about the species from your photo..."
              className="flex-1 rounded-full border border-county-panel bg-white px-4 py-3 text-sm outline-none focus:border-county-green"
            />
            <button
              type="submit"
              disabled={chatLoading || !input.trim()}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-county-blue text-white hover:bg-county-green disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={chatLoading ? "Streaming response" : "Send message"}
            >
              {chatLoading ? "…" : (
                <svg viewBox="0 0 20 20" aria-hidden className="h-5 w-5">
                  <path
                    d="M10 15V5M10 5l-4 4M10 5l4 4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>

          {chatError && <p className="mt-2 text-sm text-red-700">{chatError}</p>}
        </form>
      </div>
    </section>
  );
}
