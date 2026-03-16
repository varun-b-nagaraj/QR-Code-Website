import { speciesBySlug } from "@/data/species";
import { IdentificationResult } from "@/lib/types";

export async function identifyAnimal(
  _file: File,
): Promise<IdentificationResult> {
  // Placeholder: replace with wildlife classifier or CV model endpoint in future.
  const primary = speciesBySlug["northern-mockingbird"];
  const altOne = speciesBySlug["monarch-butterfly"];
  const altTwo = speciesBySlug["eastern-cottontail"];

  return {
    type: "animal",
    primary: {
      commonName: primary.commonName,
      scientificName: primary.scientificName,
      confidence: 0.89,
      summary: primary.summary,
      nativeStatus: primary.nativeStatus,
      slug: primary.slug,
    },
    alternatives: [
      {
        commonName: altOne.commonName,
        scientificName: altOne.scientificName,
        confidence: 0.74,
        summary: altOne.summary,
        nativeStatus: altOne.nativeStatus,
        slug: altOne.slug,
      },
      {
        commonName: altTwo.commonName,
        scientificName: altTwo.scientificName,
        confidence: 0.63,
        summary: altTwo.summary,
        nativeStatus: altTwo.nativeStatus,
        slug: altTwo.slug,
      },
    ],
    analyzedAt: new Date().toISOString(),
  };
}
