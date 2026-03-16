import { speciesBySlug } from "@/data/species";
import { IdentificationResult } from "@/lib/types";

export async function identifyPlant(_file: File): Promise<IdentificationResult> {
  // Placeholder: replace with Pl@ntNet (or similar) request in future implementation.
  const primary = speciesBySlug["texas-sage"];
  const altOne = speciesBySlug["live-oak"];
  const altTwo = speciesBySlug["chinaberry"];

  return {
    type: "plant",
    primary: {
      commonName: primary.commonName,
      scientificName: primary.scientificName,
      confidence: 0.93,
      summary: primary.summary,
      nativeStatus: primary.nativeStatus,
      slug: primary.slug,
    },
    alternatives: [
      {
        commonName: altOne.commonName,
        scientificName: altOne.scientificName,
        confidence: 0.81,
        summary: altOne.summary,
        nativeStatus: altOne.nativeStatus,
        slug: altOne.slug,
      },
      {
        commonName: altTwo.commonName,
        scientificName: altTwo.scientificName,
        confidence: 0.58,
        summary: altTwo.summary,
        nativeStatus: altTwo.nativeStatus,
        slug: altTwo.slug,
      },
    ],
    analyzedAt: new Date().toISOString(),
  };
}
