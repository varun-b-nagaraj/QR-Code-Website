import { SpeciesLibraryClient } from "@/components/SpeciesLibraryClient";
import { species } from "@/data/species";
import { inatSpeciesMediaBySlug } from "@/data/inat-species-media";
import { SpeciesCategory } from "@/lib/types";

const validCategories = new Set<SpeciesCategory>([
  "Plants",
  "Birds",
  "Mammals",
  "Amphibians",
  "Fish",
  "Reptiles",
  "Insects",
  "Additional Insights",
]);

export default async function SpeciesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const parsedCategory = params.category as SpeciesCategory | undefined;
  const initialCategory = parsedCategory && validCategories.has(parsedCategory) ? parsedCategory : undefined;
  const speciesWithMedia = species.map((item) => {
    const media = inatSpeciesMediaBySlug[item.slug];
    if (!media) return item;
    return {
      ...item,
      ...media,
      image: media.cover_image_url || item.image,
    };
  });

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SpeciesLibraryClient items={speciesWithMedia} initialCategory={initialCategory} />
    </main>
  );
}
