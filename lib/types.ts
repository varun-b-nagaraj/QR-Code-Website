export type SpeciesCategory =
  | "Plants"
  | "Birds"
  | "Mammals"
  | "Reptiles"
  | "Insects"
  | "Trees";

export type NativeStatus = "Native" | "Invasive" | "Unknown";
export type PlantSubcategory =
  | "Trees"
  | "Shrubs"
  | "Vines"
  | "Grasses"
  | "Wildflowers"
  | "Invasive Watchlist"
  | "Additional Insights";

export interface Species {
  slug: string;
  commonName: string;
  scientificName: string;
  category: SpeciesCategory;
  plantSubcategory?: PlantSubcategory;
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

export interface DetectionBoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
  unit: "relative";
}

export interface DetectionStageResult {
  detectedLabel: string;
  normalizedLabel: string;
  confidence: number;
  boundingBox?: DetectionBoundingBox;
}

export interface SpeciesEnrichmentResult {
  taxonId?: number;
  commonName?: string;
  scientificName?: string;
  referenceImageUrl?: string;
  taxonomy?: string[];
  descriptionSummary?: string;
  similarSpecies?: Array<{
    taxonId: number;
    commonName: string;
    scientificName: string;
  }>;
  unavailableReason?: string;
}

export interface SightingRecordPayload {
  uploaded_image_url: string;
  detected_label: string;
  detection_confidence: number;
  bounding_box?: DetectionBoundingBox | null;
  inaturalist_taxon_id?: number | null;
  common_name?: string | null;
  scientific_name?: string | null;
  reference_image_url?: string | null;
  taxonomy?: string[] | null;
  description_summary?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  created_at: string;
  status: string;
  source_type: string;
}

export interface IdentificationResult {
  type: "plant" | "animal";
  primary: IdentificationCandidate;
  alternatives: IdentificationCandidate[];
  analyzedAt: string;
  source?: "ai_detection_enriched" | "plantnet" | "mock";
  providerNote?: string;
  detection?: DetectionStageResult;
  enrichment?: SpeciesEnrichmentResult;
  sighting?: {
    status: "saved" | "skipped" | "failed";
    id?: string | number;
    message?: string;
  };
}
