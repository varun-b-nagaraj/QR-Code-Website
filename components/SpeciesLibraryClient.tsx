"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InfoCard } from "@/components/InfoCard";
import { PlantSubcategory, Species, SpeciesCategory } from "@/lib/types";

const categoryFilters: SpeciesCategory[] = [
  "Plants",
  "Birds",
  "Mammals",
  "Reptiles",
  "Insects",
];

const plantSubcategoryFilters: PlantSubcategory[] = [
  "Trees",
  "Shrubs",
  "Vines",
  "Grasses",
  "Wildflowers",
  "Invasive Watchlist",
  "Additional Insights",
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
  const [plantSubcategories, setPlantSubcategories] = useState<Set<PlantSubcategory>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [plantDropdownOpen, setPlantDropdownOpen] = useState(initialCategory === "Plants");
  const plantsCheckboxRef = useRef<HTMLInputElement>(null);

  const plantsChecked = categories.has("Plants");
  const selectedPlantSubcategoryCount = plantSubcategories.size;
  const allPlantSubcategoriesSelected = selectedPlantSubcategoryCount === plantSubcategoryFilters.length;

  useEffect(() => {
    if (!plantsCheckboxRef.current) return;
    plantsCheckboxRef.current.indeterminate =
      plantsChecked && selectedPlantSubcategoryCount > 0 && !allPlantSubcategoriesSelected;
  }, [allPlantSubcategoriesSelected, plantsChecked, selectedPlantSubcategoryCount]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const textMatch =
        item.commonName.toLowerCase().includes(query.toLowerCase()) ||
        item.scientificName.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = categories.size === 0 || categories.has(item.category);
      const statusMatch = statusFilter === "all" || item.nativeStatus === statusFilter;
      const plantSubcategoryMatch =
        item.category !== "Plants" ||
        plantSubcategories.size === 0 ||
        (item.plantSubcategory ? plantSubcategories.has(item.plantSubcategory) : false);
      return textMatch && categoryMatch && statusMatch && plantSubcategoryMatch;
    });
  }, [categories, items, plantSubcategories, query, statusFilter]);

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
                  if (category === "Plants") {
                    return (
                      <div key={category} className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <input
                              ref={plantsCheckboxRef}
                              type="checkbox"
                              checked={checked}
                              onChange={() => {
                                const next = new Set(categories);
                                if (next.has(category)) next.delete(category);
                                else next.add(category);
                                setCategories(next);
                                if (!next.has(category)) {
                                  setPlantSubcategories(new Set());
                                } else {
                                  setPlantDropdownOpen(true);
                                }
                              }}
                            />
                            <button
                              type="button"
                              className="text-sm text-county-text"
                              onClick={() => {
                                setPlantDropdownOpen((value) => !value);
                                if (!categories.has("Plants")) {
                                  const next = new Set(categories);
                                  next.add("Plants");
                                  setCategories(next);
                                }
                              }}
                              aria-expanded={plantDropdownOpen}
                              aria-controls="plant-subcategory-filters"
                            >
                              Plants
                            </button>
                            {selectedPlantSubcategoryCount > 0 && (
                              <span className="rounded-full bg-county-panel px-2 py-0.5 text-xs font-semibold text-county-text">
                                {selectedPlantSubcategoryCount}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            className="text-sm font-semibold text-county-green"
                            onClick={() => setPlantDropdownOpen((value) => !value)}
                            aria-expanded={plantDropdownOpen}
                            aria-controls="plant-subcategory-filters"
                          >
                            {plantDropdownOpen ? "▾" : "▸"}
                          </button>
                        </div>

                        {plantDropdownOpen && (
                          <div id="plant-subcategory-filters" className="ml-5 space-y-2">
                            {plantSubcategoryFilters.map((subcategory) => {
                              const subcategoryChecked = plantSubcategories.has(subcategory);
                              return (
                                <label key={subcategory} className="flex items-center gap-2 text-sm text-county-text">
                                  <input
                                    type="checkbox"
                                    checked={subcategoryChecked}
                                    onChange={() => {
                                      const next = new Set(plantSubcategories);
                                      if (next.has(subcategory)) next.delete(subcategory);
                                      else next.add(subcategory);
                                      setPlantSubcategories(next);
                                      if (!categories.has("Plants")) {
                                        const nextCategories = new Set(categories);
                                        nextCategories.add("Plants");
                                        setCategories(nextCategories);
                                      }
                                    }}
                                  />
                                  {subcategory}
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

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
