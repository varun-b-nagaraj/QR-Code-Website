"use client";

import { useMemo, useState } from "react";
import { InfoCard } from "@/components/InfoCard";
import { Species, SpeciesCategory } from "@/lib/types";

const categoryFilters: SpeciesCategory[] = [
  "Plants",
  "Birds",
  "Mammals",
  "Reptiles",
  "Insects",
  "Trees",
];

interface SpeciesLibraryClientProps {
  items: Species[];
  initialCategory?: SpeciesCategory;
}

export function SpeciesLibraryClient({ items, initialCategory }: SpeciesLibraryClientProps) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<SpeciesCategory>>(
    initialCategory ? new Set([initialCategory]) : new Set(),
  );
  const [statusFilter, setStatusFilter] = useState<"all" | "Native" | "Invasive">("all");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const textMatch =
        item.commonName.toLowerCase().includes(query.toLowerCase()) ||
        item.scientificName.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = categories.size === 0 || categories.has(item.category);
      const statusMatch = statusFilter === "all" || item.nativeStatus === statusFilter;
      return textMatch && categoryMatch && statusMatch;
    });
  }, [categories, items, query, statusFilter]);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <h1 className="text-3xl font-semibold text-county-green">Species Library</h1>
      <p className="mt-2 text-county-text-secondary">Search Central Texas plants and wildlife found near educational trail stops.</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-[240px,1fr]">
        <aside>
          <button
            type="button"
            onClick={() => setFiltersOpen((value) => !value)}
            className="inline-flex items-center rounded-full border border-county-panel bg-county-bg px-4 py-2 text-sm font-semibold text-county-text hover:border-county-green"
            aria-expanded={filtersOpen}
            aria-controls="species-filters"
          >
            {filtersOpen ? "Close Filters" : "Filters"}
          </button>

          {filtersOpen && (
            <div id="species-filters" className="mt-3 rounded-lg bg-county-bg p-4">
              <h2 className="mb-3 text-lg font-semibold text-county-text">Filters</h2>
              <div className="space-y-2">
                {categoryFilters.map((category) => {
                  const checked = categories.has(category);
                  return (
                    <label key={category} className="flex items-center gap-2 text-sm text-county-text">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {
                          const next = new Set(categories);
                          if (next.has(category)) next.delete(category);
                          else next.add(category);
                          setCategories(next);
                        }}
                      />
                      {category}
                    </label>
                  );
                })}
              </div>

              <div className="mt-4 space-y-2 text-sm text-county-text">
                <label className="flex items-center gap-2">
                  <input type="radio" checked={statusFilter === "all"} onChange={() => setStatusFilter("all")} />
                  All
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" checked={statusFilter === "Native"} onChange={() => setStatusFilter("Native")} />
                  Native
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    checked={statusFilter === "Invasive"}
                    onChange={() => setStatusFilter("Invasive")}
                  />
                  Invasive
                </label>
              </div>
            </div>
          )}
        </aside>

        <div>
          <input
            type="search"
            placeholder="Search species"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="mb-4 w-full rounded-full border border-county-panel px-5 py-3 outline-none focus:border-county-green"
            aria-label="Search species"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((item) => (
              <InfoCard
                key={item.slug}
                title={item.commonName}
                description={`${item.scientificName} • ${item.nativeStatus}`}
                image={item.image}
                href={`/species/${item.slug}`}
              />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-6 rounded-lg bg-county-panel p-4 text-sm text-county-text">No species match these filters.</p>
          )}
        </div>
      </div>
    </section>
  );
}
