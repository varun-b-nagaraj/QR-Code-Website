import { Species } from "@/lib/types";

export interface SpeciesEnrichment {
  observationCount?: number;
  recentObservations?: string[];
  nearbyHotspots?: string[];
}

export async function enrichSpecies(_species: Species): Promise<SpeciesEnrichment> {
  // Placeholder for future biodiversity provider integration (e.g. iNaturalist).
  // Future implementation can merge external observations and metadata here.
  return {};
}
