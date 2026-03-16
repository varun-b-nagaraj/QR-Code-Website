"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { identifyAnimal } from "@/lib/identifyAnimal";
import { identifyPlant } from "@/lib/identifyPlant";
import { IdentificationResult } from "@/lib/types";

export function IdentifyClient() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<"plant" | "animal">("plant");
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const [loading, setLoading] = useState(false);

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
    const response = mode === "plant" ? await identifyPlant(file) : await identifyAnimal(file);
    setResult(response);
    setLoading(false);
  }

  return (
    <section className="space-y-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <header>
        <h1 className="text-3xl font-semibold text-county-green">Identify Species</h1>
        <p className="mt-2 text-county-text-secondary">
          Upload a photo from the trail to view a mocked identification result for this concept prototype.
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
          {loading ? "Analyzing..." : "Identify Species"}
        </button>
      </div>

      {result && (
        <section className="space-y-4 rounded-lg bg-county-panel p-5" aria-live="polite">
          <h2 className="text-2xl font-semibold text-county-text">Identification Result</h2>
          <div className="rounded-lg bg-white p-4 shadow-sm">
            <p className="text-xl font-semibold text-county-green">{result.primary.commonName}</p>
            <p className="italic text-county-text-secondary">{result.primary.scientificName}</p>
            <p className="mt-2 text-sm text-county-text">Confidence: {(result.primary.confidence * 100).toFixed(0)}%</p>
            <p className="mt-1 text-sm text-county-text">{result.primary.summary}</p>
            <p className="mt-1 text-sm text-county-text">Status: {result.primary.nativeStatus}</p>
            {result.primary.slug && (
              <Link
                href={`/species/${result.primary.slug}`}
                className="mt-3 inline-block rounded-full bg-county-blue px-4 py-2 text-sm font-semibold text-white"
              >
                Learn More
              </Link>
            )}
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-county-text">Other Possible Matches</h3>
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
        </section>
      )}
    </section>
  );
}
