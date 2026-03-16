export type SpeciesCategory =
  | "Plants"
  | "Birds"
  | "Mammals"
  | "Reptiles"
  | "Insects"
  | "Trees";

export type NativeStatus = "Native" | "Invasive" | "Unknown";

export interface Species {
  slug: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  nativeStatus: NativeStatus;
  image: string;
  summary: string;
  description: string;
  habitat: string;
  parkLocation: string;
  ecologicalRole: string;
  funFact: string;
}

export interface Trail {
  slug: string;
  name: string;
  overview: string;
  image: string;
  highlights: string[];
  commonSpeciesSlugs: string[];
  stopMarkers: string[];
}

export interface SignStop {
  slug: string;
  title: string;
  parkName: string;
  trailSlug: string;
  image: string;
  educationalText: string;
  featuredSpeciesSlugs: string[];
}

export interface IdentificationCandidate {
  commonName: string;
  scientificName: string;
  confidence: number;
  summary: string;
  nativeStatus: NativeStatus;
  slug?: string;
}

export interface IdentificationResult {
  type: "plant" | "animal";
  primary: IdentificationCandidate;
  alternatives: IdentificationCandidate[];
  analyzedAt: string;
  source?: "inaturalist" | "plantnet" | "mock";
  providerNote?: string;
}
