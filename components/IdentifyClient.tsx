"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { identifyAnimal } from "@/lib/identifyAnimal";
import { askAssistant } from "@/lib/aiClient";
import { identifyPlant } from "@/lib/identifyPlant";
import { IdentificationResult } from "@/lib/types";

export function IdentifyClient() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<"plant" | "animal">("plant");
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const instruction = useMemo(
    () =>
      mode === "plant"
        ? "Upload a clear photo of a plant leaf, flower, or bark."
        : "Upload a clear photo of a bird, insect, or wildlife subject.",
    [mode],
  );

  async function onIdentify() {
    if (!file) return;
    setLoading(true);
    setResult(null);
    setAiError(null);
    setAiAnswer(null);
    try {
      const response = mode === "plant" ? await identifyPlant(file) : await identifyAnimal(file);
      setResult(response);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "Image analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function onAskAI() {
    if (!result || !aiPrompt.trim()) return;

    setAiLoading(true);
    setAiError(null);
    try {
      const context = `Primary species: ${result.primary.commonName} (${result.primary.scientificName}), status: ${result.primary.nativeStatus}, summary: ${result.primary.summary}`;
      const answer = await askAssistant({ prompt: aiPrompt.trim(), context });
      setAiAnswer(answer);
    } catch (error) {
      setAiError(error instanceof Error ? error.message : "AI request failed.");
      setAiAnswer(null);
    } finally {
      setAiLoading(false);
    }
  }

  return (
    <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <header>
        <h1 className="text-3xl font-semibold text-county-green">Identify Species</h1>
        <p className="mt-2 text-county-text-secondary">
          Upload a photo from the trail to run AI detection and enrich results with public biodiversity reference data.
        </p>
      </header>

      <div className="space-y-4 rounded-lg border border-county-panel p-4">
        <div className="inline-flex rounded-full bg-county-panel p-1">
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm ${mode === "plant" ? "bg-white font-semibold text-county-green" : "text-county-text"}`}
            onClick={() => setMode("plant")}
          >
            Plant
          </button>
          <button
            type="button"
            className={`rounded-full px-4 py-2 text-sm ${mode === "animal" ? "bg-white font-semibold text-county-green" : "text-county-text"}`}
            onClick={() => setMode("animal")}
          >
            Animal / Wildlife
          </button>
        </div>

        <p className="text-sm text-county-text-secondary">{instruction}</p>
        <p className="text-xs text-county-text-secondary">
          Wildlife flow: AI detection first, then species enrichment from public iNaturalist read endpoints.
        </p>

        <label
          htmlFor="species-upload"
          className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-county-green bg-county-bg p-8 text-center"
        >
          <span className="text-3xl" aria-hidden>
            📷
          </span>
          <span className="text-county-text">Tap to upload a photo</span>
          <input
            id="species-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              const selected = event.target.files?.[0] ?? null;
              if (!selected) return;
              setFile(selected);
              setResult(null);
              const objectUrl = URL.createObjectURL(selected);
              setPreviewUrl(objectUrl);
            }}
          />
        </label>

        {previewUrl && (
          <div>
            <p className="mb-2 text-sm text-county-text-secondary">Preview</p>
            <img src={previewUrl} alt="User upload preview" className="h-52 w-full rounded-lg object-cover" />
          </div>
        )}

        <button
          type="button"
          onClick={onIdentify}
          disabled={!file || loading}
          className="rounded-full bg-county-green px-6 py-3 font-semibold text-white transition-colors hover:bg-county-dark-green disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Detect and Enrich"}
        </button>
        {aiError && <p className="text-sm text-red-700">{aiError}</p>}
      </div>

      {result && (
        <section className="space-y-4 rounded-lg bg-county-panel p-5" aria-live="polite">
          <h2 className="text-2xl font-semibold text-county-text">Detection Result</h2>
          {result.type === "animal" && (
            <p className="text-xs text-county-text-secondary">
              The AI detection model made the initial animal guess. Species details below are enriched using public biodiversity data.
            </p>
          )}
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-county-text">AI Detection</h3>
            <p className="mt-1 text-sm text-county-text">
              Detected Animal: <span className="font-semibold text-county-green">{result.detection?.normalizedLabel || result.primary.commonName}</span>
            </p>
            <p className="mt-1 text-sm text-county-text">AI Confidence: {(result.primary.confidence * 100).toFixed(0)}%</p>
            {result.detection?.boundingBox && previewUrl && (
              <div className="mt-3">
                <p className="mb-2 text-sm text-county-text">Bounding Box Preview</p>
                <div className="relative h-52 w-full overflow-hidden rounded-lg">
                  <img src={previewUrl} alt="Uploaded wildlife preview" className="h-52 w-full object-cover" />
                  <div
                    className="pointer-events-none absolute border-2 border-county-green"
                    style={{
                      left: `${result.detection.boundingBox.x * 100}%`,
                      top: `${result.detection.boundingBox.y * 100}%`,
                      width: `${result.detection.boundingBox.width * 100}%`,
                      height: `${result.detection.boundingBox.height * 100}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-county-text">Species Enrichment</h3>
            <p className="mt-1 text-sm text-county-text">
              Species Reference: <span className="font-semibold">{result.enrichment?.commonName || result.primary.commonName}</span>
            </p>
            <p className="italic text-county-text-secondary">
              {result.enrichment?.scientificName || result.primary.scientificName}
            </p>
            {result.enrichment?.referenceImageUrl && (
              <img
                src={result.enrichment.referenceImageUrl}
                alt={`${result.enrichment.commonName || result.primary.commonName} reference`}
                className="mt-3 h-40 w-full rounded-lg object-cover"
              />
            )}
            <p className="mt-2 text-sm text-county-text">{result.enrichment?.descriptionSummary || result.primary.summary}</p>
            <p className="mt-2 text-sm text-county-text">
              Related Taxonomy: {result.enrichment?.taxonomy?.join(" > ") || "Unavailable"}
            </p>
            <p className="mt-2 text-xs text-county-text-secondary">
              Enriched using public biodiversity data.
            </p>
            {result.enrichment?.unavailableReason && (
              <p className="mt-2 text-sm text-county-text-secondary">{result.enrichment.unavailableReason}</p>
            )}
            {result.primary.slug && (
              <Link
                href={`/species/${result.primary.slug}`}
                className="mt-3 inline-block rounded-full bg-county-blue px-4 py-2 text-sm font-semibold text-white"
              >
                Learn More
              </Link>
            )}
          </div>

          {result.alternatives.length > 0 && (
            <div>
            <h3 className="mb-2 text-lg font-semibold text-county-text">Similar Species</h3>
            <ul className="space-y-2">
              {result.alternatives.map((item) => (
                <li key={item.scientificName} className="rounded-lg bg-white p-3 text-sm text-county-text shadow-sm">
                  <p className="font-semibold">{item.commonName}</p>
                  <p className="italic text-county-text-secondary">{item.scientificName}</p>
                  <p>{(item.confidence * 100).toFixed(0)}% confidence</p>
                </li>
              ))}
            </ul>
            </div>
          )}

          <div className="space-y-3 rounded-lg bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-county-text">Ask AI About This Species</h3>
            <textarea
              rows={3}
              value={aiPrompt}
              onChange={(event) => setAiPrompt(event.target.value)}
              placeholder="Example: Is this species dangerous for kids or pets, and what should we observe safely?"
              className="w-full rounded-lg border border-county-panel px-3 py-2 outline-none focus:border-county-green"
            />
            <button
              type="button"
              onClick={onAskAI}
              disabled={aiLoading || !aiPrompt.trim()}
              className="rounded-full bg-county-blue px-5 py-2 text-sm font-semibold text-white hover:bg-county-green disabled:cursor-not-allowed disabled:opacity-50"
            >
              {aiLoading ? "Asking AI..." : "Ask AI"}
            </button>
            {aiError && <p className="text-sm text-red-700">{aiError}</p>}
            {aiAnswer && <p className="text-sm text-county-text">{aiAnswer}</p>}
          </div>
        </section>
      )}
    </section>
  );
}
