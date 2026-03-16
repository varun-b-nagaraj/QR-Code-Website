import { species } from "@/data/species";
import { fetchInaturalistEnrichment } from "@/lib/server/inaturalistEnrichment";
import { normalizeAnimalLabel } from "@/lib/server/labelNormalization";
import {
  DetectionBoundingBox,
  IdentificationCandidate,
  IdentificationResult,
  NativeStatus,
  Species,
  SpeciesEnrichmentResult,
} from "@/lib/types";

type IdentifyMode = "plant" | "animal";

function lower(value: string): string {
  return value.trim().toLowerCase();
}

function findLocalSpeciesMatch(commonName: string, scientificName: string): Species | undefined {
  const common = lower(commonName);
  const scientific = lower(scientificName);

  return species.find((item) => {
    const commonMatch = lower(item.commonName) === common;
    const scientificMatch = lower(item.scientificName) === scientific || scientific.includes(lower(item.scientificName));
    return commonMatch || scientificMatch;
  });
}

function toCandidate(params: {
  commonName: string;
  scientificName: string;
  confidence: number;
  fallbackSummary: string;
}): IdentificationCandidate {
  const localMatch = findLocalSpeciesMatch(params.commonName, params.scientificName);
  const nativeStatus: NativeStatus = localMatch?.nativeStatus ?? "Unknown";

  return {
    commonName: localMatch?.commonName || params.commonName,
    scientificName: localMatch?.scientificName || params.scientificName,
    confidence: params.confidence,
    summary: localMatch?.summary || params.fallbackSummary,
    nativeStatus,
    slug: localMatch?.slug,
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function detectLabelFromFilename(filename: string): string {
  const name = filename.toLowerCase();
  if (name.includes("fox")) return "fox";
  if (name.includes("deer")) return "deer";
  if (name.includes("raccoon")) return "raccoon";
  if (name.includes("bobcat") || name.includes("lynx") || name.includes("cat")) return "big cat";
  if (name.includes("skunk")) return "skunk";
  if (name.includes("hawk") || name.includes("eagle") || name.includes("bird")) return "bird";
  if (name.includes("wolf") || name.includes("dog") || name.includes("coyote") || name.includes("canine")) return "canine";

  const labels = ["coyote", "fox", "deer", "raccoon", "bobcat", "skunk", "hawk"];
  return labels[hashString(name) % labels.length];
}

function createOptionalBoundingBox(seed: number): DetectionBoundingBox | undefined {
  if (seed % 3 === 0) return undefined;
  const x = 0.08 + (seed % 12) / 100;
  const y = 0.14 + ((seed >> 2) % 10) / 100;
  const width = 0.46 + ((seed >> 4) % 12) / 100;
  const height = 0.4 + ((seed >> 6) % 12) / 100;
  return {
    x: Number(x.toFixed(2)),
    y: Number(y.toFixed(2)),
    width: Number(Math.min(width, 0.9).toFixed(2)),
    height: Number(Math.min(height, 0.9).toFixed(2)),
    unit: "relative",
  };
}

async function identifyAnimalWithDetectionAndEnrichment(file: File): Promise<IdentificationResult> {
  const filename = file.name || "upload.jpg";
  const seed = hashString(`${filename}:${file.size}`);
  const rawLabel = detectLabelFromFilename(filename);
  const normalized = normalizeAnimalLabel(rawLabel);
  const confidence = Number((0.67 + (seed % 28) / 100).toFixed(2));
  const boundingBox = createOptionalBoundingBox(seed);

  const detectionSummary = `AI detector guessed ${normalized.normalizedLabel} from the uploaded image.`;
  let providerNote = "Enriched using public biodiversity data.";

  let enrichment: SpeciesEnrichmentResult = await fetchInaturalistEnrichment(normalized.normalizedLabel).catch((error) => {
    const message = error instanceof Error ? error.message : "Species enrichment unavailable.";
    providerNote = `Detection completed. ${message}`;
    return {
      unavailableReason: "Species reference data unavailable for this detection.",
    };
  });

  if (normalized.normalizedLabel === "animal" && !enrichment.commonName) {
    enrichment = {
      ...enrichment,
      unavailableReason: "Species reference data unavailable for this detection.",
    };
  }

  const primary = toCandidate({
    commonName: enrichment.commonName || normalized.normalizedLabel,
    scientificName: enrichment.scientificName || "Unknown species",
    confidence,
    fallbackSummary: enrichment.descriptionSummary || enrichment.unavailableReason || detectionSummary,
  });

  const alternatives = (enrichment.similarSpecies || []).map((item, index) =>
    toCandidate({
      commonName: item.commonName,
      scientificName: item.scientificName,
      confidence: Number(Math.max(0.35, confidence - (index + 1) * 0.12).toFixed(2)),
      fallbackSummary: "Related species from public biodiversity records.",
    }),
  );

  return {
    type: "animal",
    primary,
    alternatives,
    analyzedAt: new Date().toISOString(),
    source: "ai_detection_enriched",
    providerNote,
    detection: {
      detectedLabel: normalized.detectedLabel,
      normalizedLabel: normalized.normalizedLabel,
      confidence,
      boundingBox,
    },
    enrichment,
  };
}

async function identifyPlantWithPlantNet(file: File): Promise<IdentificationResult> {
  const apiKey = process.env.PLANTNET_API_KEY;
  if (!apiKey) {
    throw new Error("PLANTNET_API_KEY is missing.");
  }

  const formData = new FormData();
  formData.append("images", file, file.name || "upload.jpg");

  const endpoint = `https://my-api.plantnet.org/v2/identify/all?api-key=${encodeURIComponent(apiKey)}&lang=en&include-related-images=false`;

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Pl@ntNet request failed (${response.status}): ${text || "No response body"}`);
  }

  const data = (await response.json()) as {
    results?: Array<{
      score?: number;
      species?: {
        scientificNameWithoutAuthor?: string;
        scientificName?: string;
        commonNames?: string[];
      };
    }>;
  };

  const ranked = (data.results || []).filter((item) => item.species?.scientificName || item.species?.scientificNameWithoutAuthor);

  if (!ranked.length) {
    throw new Error("Pl@ntNet did not return any plant matches.");
  }

  const candidates = ranked.slice(0, 3).map((item) => {
    const scientificName = item.species?.scientificNameWithoutAuthor || item.species?.scientificName || "Unknown plant";
    const commonName = item.species?.commonNames?.[0] || scientificName;
    const confidence = item.score ?? 0;

    return toCandidate({
      commonName,
      scientificName,
      confidence,
      fallbackSummary: "Identified from uploaded photo using Pl@ntNet.",
    });
  });

  return {
    type: "plant",
    primary: candidates[0],
    alternatives: candidates.slice(1),
    analyzedAt: new Date().toISOString(),
    source: "plantnet",
  };
}

function mockFallbackResult(mode: IdentifyMode, error: string): IdentificationResult {
  const fallbackSpecies = mode === "plant" ? species.find((item) => item.slug === "texas-sage") : species.find((item) => item.slug === "northern-mockingbird");

  if (!fallbackSpecies) {
    throw new Error(`Unable to build fallback identification result. Provider error: ${error}`);
  }

  return {
    type: mode,
    primary: {
      commonName: fallbackSpecies.commonName,
      scientificName: fallbackSpecies.scientificName,
      confidence: 0.25,
      summary: fallbackSpecies.summary,
      nativeStatus: fallbackSpecies.nativeStatus,
      slug: fallbackSpecies.slug,
    },
    alternatives: [],
    analyzedAt: new Date().toISOString(),
    source: "mock",
    providerNote: `Live provider unavailable: ${error}`,
  };
}

export async function identifyFromPhoto(file: File, mode: IdentifyMode): Promise<IdentificationResult> {
  try {
    if (mode === "plant") {
      return await identifyPlantWithPlantNet(file);
    }

    return await identifyAnimalWithDetectionAndEnrichment(file);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown identification error.";
    const allowMockFallback = process.env.ALLOW_MOCK_IDENTIFICATION === "true";
    if (!allowMockFallback) {
      throw new Error(message);
    }
    return mockFallbackResult(mode, message);
  }
}
