import { SpeciesEnrichmentResult } from "@/lib/types";

type InaturalistTaxon = {
  id?: number;
  name?: string;
  preferred_common_name?: string;
  wikipedia_summary?: string;
  default_photo?: {
    medium_url?: string;
    square_url?: string;
    url?: string;
  };
  ancestors?: Array<{ name?: string; preferred_common_name?: string }>;
  iconic_taxon_name?: string;
  rank?: string;
};

type TaxaResponse = {
  results?: InaturalistTaxon[];
};

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function scoreTaxonMatch(taxon: InaturalistTaxon, query: string): number {
  const q = query.toLowerCase();
  const common = taxon.preferred_common_name?.toLowerCase() ?? "";
  const scientific = taxon.name?.toLowerCase() ?? "";
  let score = 0;
  if (common === q || scientific === q) score += 4;
  if (common.includes(q) || scientific.includes(q)) score += 2;
  if (taxon.iconic_taxon_name?.toLowerCase() === "animalia") score += 1;
  return score;
}

export async function fetchInaturalistEnrichment(label: string): Promise<SpeciesEnrichmentResult> {
  const baseUrl = normalizeBaseUrl(process.env.INATURALIST_PUBLIC_API_BASE_URL || "https://api.inaturalist.org/v1");
  const endpoint = `${baseUrl}/taxa?q=${encodeURIComponent(label)}&per_page=8`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: { Accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Public iNaturalist taxa lookup failed (${response.status}): ${text || "No response body"}`);
  }

  const data = (await response.json()) as TaxaResponse;
  const taxa = (data.results || []).filter((item) => item.id && item.name);
  if (!taxa.length) {
    return { unavailableReason: "Species reference data unavailable for this detection." };
  }

  const sorted = taxa
    .map((item) => ({ taxon: item, score: scoreTaxonMatch(item, label) }))
    .sort((a, b) => b.score - a.score);
  const primary = sorted[0]?.taxon;
  if (!primary || !primary.id) {
    return { unavailableReason: "Species reference data unavailable for this detection." };
  }

  const similarSpecies = sorted.slice(1, 4).flatMap(({ taxon }) => {
    if (!taxon.id || !taxon.name) return [];
    return [
      {
        taxonId: taxon.id,
        commonName: taxon.preferred_common_name || taxon.name,
        scientificName: taxon.name,
      },
    ];
  });

  const taxonomy = (primary.ancestors || [])
    .map((ancestor) => ancestor.preferred_common_name || ancestor.name)
    .filter((name): name is string => Boolean(name));

  return {
    taxonId: primary.id,
    commonName: primary.preferred_common_name || primary.name,
    scientificName: primary.name,
    referenceImageUrl: primary.default_photo?.medium_url || primary.default_photo?.url || primary.default_photo?.square_url,
    taxonomy,
    descriptionSummary: primary.wikipedia_summary,
    similarSpecies,
  };
}
