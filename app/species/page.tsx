import { SpeciesLibraryClient } from "@/components/SpeciesLibraryClient";
import { species } from "@/data/species";
import { SpeciesCategory } from "@/lib/types";

const validCategories = new Set<SpeciesCategory>([
  "Plants",
  "Birds",
  "Mammals",
  "Amphibians",
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

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SpeciesLibraryClient items={species} initialCategory={initialCategory} />
    </main>
  );
}
