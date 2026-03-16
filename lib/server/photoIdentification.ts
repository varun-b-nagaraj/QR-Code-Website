import { species } from "@/data/species";
import { getInaturalistJwt } from "@/lib/server/inaturalistAuth";
import { IdentificationCandidate, IdentificationResult, NativeStatus, Species } from "@/lib/types";

type IdentifyMode = "plant" | "animal";

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

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

function inaturalistEndpoints(baseUrl: string): string[] {
  const normalized = normalizeBaseUrl(baseUrl);

  if (normalized.endsWith("/v1")) {
    return [`${normalized}/computervision/score_image`];
  }

  return [`${normalized}/v1/computervision/score_image`];
}

async function identifyAnimalWithInaturalist(file: File): Promise<IdentificationResult> {
  const baseUrl =
    process.env.INATURALIST_BASE_URL || process.env.NEXT_PUBLIC_FUTURE_INATURALIST_BASE_URL || "https://api.inaturalist.org/v1";
  const accessToken = await getInaturalistJwt();
  const endpoints = inaturalistEndpoints(baseUrl);
  let lastError = "iNaturalist request failed.";

  for (const endpoint of endpoints) {
    const formData = new FormData();
    formData.append("image", file, file.name || "upload.jpg");

    try {
      const headers: HeadersInit = {};
      headers.Authorization = `Bearer ${accessToken}`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        if (response.status === 401) {
          lastError = "iNaturalist unauthorized. Check INATURALIST OAuth service-account credentials.";
          continue;
        }
        lastError = `iNaturalist request failed (${response.status}): ${text || "No response body"}`;
        continue;
      }

      const data = (await response.json()) as {
        results?: Array<{
          score?: number;
          taxon?: {
            name?: string;
            preferred_common_name?: string;
            wikipedia_summary?: string;
            iconic_taxon_name?: string;
          };
        }>;
      };

      const ranked = (data.results || [])
        .filter((item) => item.taxon?.name)
        .filter((item) => {
          const iconic = item.taxon?.iconic_taxon_name?.toLowerCase();
          return iconic !== "plantae" && iconic !== "fungi";
        })
        .slice(0, 3);

      if (!ranked.length) {
        lastError = "iNaturalist did not return any animal matches.";
        continue;
      }

      const candidates = ranked.map((item) => {
        const scientificName = item.taxon?.name || "Unknown species";
        const commonName = item.taxon?.preferred_common_name || scientificName;
        const confidence = item.score ?? 0;
        const fallbackSummary =
          item.taxon?.wikipedia_summary || "Identified from uploaded photo using iNaturalist computer vision.";

        return toCandidate({ commonName, scientificName, confidence, fallbackSummary });
      });

      return {
        type: "animal",
        primary: candidates[0],
        alternatives: candidates.slice(1),
        analyzedAt: new Date().toISOString(),
        source: "inaturalist",
      };
    } catch (error) {
      lastError = error instanceof Error ? error.message : "Unknown iNaturalist error.";
    }
  }

  throw new Error(lastError);
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

    return await identifyAnimalWithInaturalist(file);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown identification error.";
    const allowMockFallback = process.env.ALLOW_MOCK_IDENTIFICATION === "true";
    if (!allowMockFallback) {
      throw new Error(message);
    }
    return mockFallbackResult(mode, message);
  }
}
