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
];

interface SpeciesLibraryClientProps {
  items: Species[];
  initialCategory?: SpeciesCategory;
}

function buildCardTag(item: Species): string {
  const base = item.category === "Plants" ? (item.subcategory === "Trees" ? "Tree" : "Plant") : "Animal";
  if (!item.subcategory) return base;
  if (base === "Tree" && item.subcategory === "Trees") return "Tree";
  return `${base}/${item.subcategory}`;
}

export function SpeciesLibraryClient({ items, initialCategory }: SpeciesLibraryClientProps) {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState<Set<SpeciesCategory>>(
    initialCategory ? new Set([initialCategory]) : new Set(),
  );
  const [statusFilter, setStatusFilter] = useState<"all" | "Native" | "Invasive" | "Introduced">("all");
  const [selectedSubcategories, setSelectedSubcategories] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<SpeciesCategory>>(
    initialCategory ? new Set([initialCategory]) : new Set(),
  );
  const [filtersOpen, setFiltersOpen] = useState(false);

  const subcategoriesByCategory = useMemo(() => {
    const map = new Map<SpeciesCategory, string[]>();

    for (const category of categoryFilters) {
      const values = Array.from(
        new Set(
          items
            .filter((item) => item.category === category)
            .map((item) => item.subcategory)
            .filter((value): value is string => Boolean(value)),
        ),
      ).sort((a, b) => a.localeCompare(b));

      map.set(category, values);
    }

    return map;
  }, [items]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<SpeciesCategory, number>();

    for (const category of categoryFilters) {
      counts.set(
        category,
        items.filter((item) => item.category === category && item.scientificName !== "N/A").length,
      );
    }

    return counts;
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const textMatch =
        item.commonName.toLowerCase().includes(query.toLowerCase()) ||
        item.scientificName.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = categories.size === 0 || categories.has(item.category);
      const statusMatch = statusFilter === "all" || item.nativeStatus === statusFilter;
      const subcategoryMatch =
        selectedSubcategories.size === 0 || (item.subcategory ? selectedSubcategories.has(item.subcategory) : false);

      return textMatch && categoryMatch && statusMatch && subcategoryMatch;
    });
  }, [categories, items, query, selectedSubcategories, statusFilter]);

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-county-green">Species Library</h1>
          <p className="mt-2 text-county-text-secondary">Search Central Texas plants and wildlife found near educational trail stops.</p>
        </div>

        <button
          type="button"
          onClick={() => setFiltersOpen((value) => !value)}
          className="inline-flex items-center rounded-full border border-county-panel bg-county-bg px-4 py-2 text-sm font-semibold text-county-text hover:border-county-green"
          aria-expanded={filtersOpen}
          aria-controls="species-filters"
        >
          {filtersOpen ? "Close Filters" : "Filters"}
        </button>
      </div>

      {filtersOpen && (
        <div id="species-filters" className="mt-3 rounded-lg bg-county-bg p-4">
          <h2 className="mb-3 text-lg font-semibold text-county-text">Filters</h2>
          <div className="space-y-2">
            {categoryFilters.map((category) => {
              const checked = categories.has(category);
              const subcategories = subcategoriesByCategory.get(category) || [];
              const isExpanded = expandedCategories.has(category);
              const selectedCount = subcategories.filter((value) => selectedSubcategories.has(value)).length;

              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                        <label className="flex items-center gap-2 text-sm text-county-text">
                          <input
                            type="checkbox"
                        checked={checked}
                        onChange={() => {
                          const next = new Set(categories);
                          if (next.has(category)) next.delete(category);
                          else next.add(category);
                          setCategories(next);

                          if (!next.has(category)) {
                            const nextSubcategories = new Set(selectedSubcategories);
                            for (const value of subcategories) nextSubcategories.delete(value);
                            setSelectedSubcategories(nextSubcategories);
                          }
                            }}
                          />
                          {category} ({categoryCounts.get(category) ?? 0})
                        </label>

                    <div className="flex items-center gap-2">
                      {selectedCount > 0 && (
                        <span className="rounded-full bg-county-panel px-2 py-0.5 text-xs font-semibold text-county-text">
                          {selectedCount}
                        </span>
                      )}
                      {subcategories.length > 0 && (
                        <button
                          type="button"
                          className="text-sm font-semibold text-county-green"
                          onClick={() => {
                            const next = new Set(expandedCategories);
                            if (next.has(category)) next.delete(category);
                            else next.add(category);
                            setExpandedCategories(next);
                          }}
                          aria-expanded={isExpanded}
                          aria-controls={`subcategory-${category}`}
                        >
                          {isExpanded ? "▾" : "▸"}
                        </button>
                      )}
                    </div>
                  </div>

                  {isExpanded && subcategories.length > 0 && (
                    <div id={`subcategory-${category}`} className="ml-5 space-y-2">
                      {subcategories.map((value) => {
                        const isSelected = selectedSubcategories.has(value);
                        return (
                          <label key={`${category}-${value}`} className="flex items-center gap-2 text-sm text-county-text">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => {
                                const next = new Set(selectedSubcategories);
                                if (next.has(value)) next.delete(value);
                                else next.add(value);
                                setSelectedSubcategories(next);

                                if (!categories.has(category)) {
                                  const nextCategories = new Set(categories);
                                  nextCategories.add(category);
                                  setCategories(nextCategories);
                                }
                              }}
                            />
                            {value}
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
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
              <input type="radio" checked={statusFilter === "Invasive"} onChange={() => setStatusFilter("Invasive")} />
              Invasive
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" checked={statusFilter === "Introduced"} onChange={() => setStatusFilter("Introduced")} />
              Introduced
            </label>
          </div>
        </div>
      )}

      <div className="mt-6">
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
              description={
                item.subcategory === "Additional Insights" || item.scientificName === "N/A"
                  ? "Additional Insights"
                  : `${item.scientificName} • ${item.nativeStatusRaw || item.nativeStatus}`
              }
              image={item.image}
              href={`/species/${item.slug}`}
              tag={buildCardTag(item)}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-6 rounded-lg bg-county-panel p-4 text-sm text-county-text">No species match these filters.</p>
        )}
      </div>
    </section>
  );
}
