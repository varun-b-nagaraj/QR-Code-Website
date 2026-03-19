"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InfoCard } from "@/components/InfoCard";
import { Species, SpeciesCategory } from "@/lib/types";

const categoryFilters: SpeciesCategory[] = [
  "Plants",
  "Birds",
  "Mammals",
  "Amphibians",
  "Fish",
  "Reptiles",
  "Insects",
  "Additional Insights",
];

interface SpeciesLibraryClientProps {
  items: Species[];
  initialCategory?: SpeciesCategory;
}

function buildCardTag(item: Species): string {
  if (item.category === "Additional Insights") return "Additional Insight";
  if (item.category === "Birds") {
    return item.subcategory ? `Bird/${item.subcategory}` : "Bird";
  }
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
  const filtersButtonRef = useRef<HTMLButtonElement | null>(null);
  const filtersPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!filtersOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (filtersPanelRef.current?.contains(target)) return;
      if (filtersButtonRef.current?.contains(target)) return;

      setFiltersOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [filtersOpen]);

  const subcategoriesByCategory = useMemo(() => {
    const map = new Map<SpeciesCategory, string[]>();

    for (const category of categoryFilters) {
      if (category === "Additional Insights") {
        map.set(category, []);
        continue;
      }

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
      const count =
        category === "Additional Insights"
          ? items.filter((item) => item.category === category).length
          : items.filter((item) => item.category === category && item.scientificName !== "N/A").length;
      counts.set(category, count);
    }

    return counts;
  }, [items]);

  const subcategoryCountsByCategory = useMemo(() => {
    const map = new Map<SpeciesCategory, Map<string, number>>();

    for (const category of categoryFilters) {
      const counts = new Map<string, number>();
      if (category === "Additional Insights") {
        map.set(category, counts);
        continue;
      }

      for (const item of items) {
        if (item.category !== category || !item.subcategory) continue;
        if (item.scientificName === "N/A") continue;
        counts.set(item.subcategory, (counts.get(item.subcategory) ?? 0) + 1);
      }

      map.set(category, counts);
    }

    return map;
  }, [items]);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const textMatch =
        item.commonName.toLowerCase().includes(query.toLowerCase()) ||
        item.scientificName.toLowerCase().includes(query.toLowerCase());
      const categoryMatch = categories.size === 0 || categories.has(item.category);
      const statusMatch =
        statusFilter === "all"
          ? true
          : item.category !== "Additional Insights" && item.nativeStatus === statusFilter;
      const subcategoryMatch =
        selectedSubcategories.size === 0 ||
        item.category === "Additional Insights" ||
        (item.subcategory ? selectedSubcategories.has(item.subcategory) : false);

      return textMatch && categoryMatch && statusMatch && subcategoryMatch;
    });
  }, [categories, items, query, selectedSubcategories, statusFilter]);

  const toggleCategoryWithSubcategories = (
    category: SpeciesCategory,
    subcategories: string[],
    shouldSelectAll: boolean,
  ) => {
    const nextSubcategories = new Set(selectedSubcategories);
    const nextCategories = new Set(categories);

    if (shouldSelectAll) {
      for (const value of subcategories) nextSubcategories.add(value);
      nextCategories.add(category);
    } else {
      for (const value of subcategories) nextSubcategories.delete(value);
      nextCategories.delete(category);
    }

    setSelectedSubcategories(nextSubcategories);
    setCategories(nextCategories);
  };

  const toggleSubcategorySelection = (
    category: SpeciesCategory,
    subcategories: string[],
    value: string,
  ) => {
    const nextSubcategories = new Set(selectedSubcategories);
    if (nextSubcategories.has(value)) nextSubcategories.delete(value);
    else nextSubcategories.add(value);

    const nextCategories = new Set(categories);
    const hasAnySelectedInCategory = subcategories.some((item) => nextSubcategories.has(item));
    if (hasAnySelectedInCategory) nextCategories.add(category);
    else nextCategories.delete(category);

    setSelectedSubcategories(nextSubcategories);
    setCategories(nextCategories);
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-county-green">Species Library</h1>
          <p className="mt-2 text-county-text-secondary">Search Central Texas plants and wildlife found near educational trail stops.</p>
        </div>

        <button
          ref={filtersButtonRef}
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
        <div id="species-filters" ref={filtersPanelRef} className="mt-3 rounded-lg bg-county-bg p-4">
          <h2 className="mb-3 text-lg font-semibold text-county-text">Filters</h2>
          <div className="space-y-2">
            {categoryFilters.map((category) => {
              const subcategories = subcategoriesByCategory.get(category) || [];
              const subcategoryCounts = subcategoryCountsByCategory.get(category) ?? new Map<string, number>();
              const hasSubcategories = subcategories.length > 0;
              const allSubcategoriesSelected =
                hasSubcategories && subcategories.every((value) => selectedSubcategories.has(value));
              const someSubcategoriesSelected =
                hasSubcategories &&
                !allSubcategoriesSelected &&
                subcategories.some((value) => selectedSubcategories.has(value));
              const checked = hasSubcategories ? allSubcategoriesSelected : categories.has(category);
              const isExpanded = expandedCategories.has(category);
              const selectedCount = subcategories.filter((value) => selectedSubcategories.has(value)).length;
              const canExpand = hasSubcategories;

              const toggleExpanded = () => {
                if (!canExpand) return;
                const next = new Set(expandedCategories);
                if (next.has(category)) next.delete(category);
                else next.add(category);
                setExpandedCategories(next);
              };

              return (
                <div key={category} className="space-y-2">
                  <div
                    className={`flex items-center justify-between gap-2 rounded px-1 py-1 ${
                      canExpand ? "cursor-pointer hover:bg-white/40" : ""
                    }`}
                    onClick={toggleExpanded}
                    aria-expanded={canExpand ? isExpanded : undefined}
                    aria-controls={canExpand ? `subcategory-${category}` : undefined}
                  >
                    <div className="flex items-center gap-2 text-sm text-county-text">
                      <input
                        type="checkbox"
                        checked={checked}
                        ref={(node) => {
                          if (node) node.indeterminate = someSubcategoriesSelected;
                        }}
                        onChange={() => {
                          if (hasSubcategories) {
                            toggleCategoryWithSubcategories(category, subcategories, !checked);
                            return;
                          }

                          const next = new Set(categories);
                          if (next.has(category)) next.delete(category);
                          else next.add(category);
                          setCategories(next);
                        }}
                        onClick={(event) => event.stopPropagation()}
                      />
                      <span>
                        {category} ({categoryCounts.get(category) ?? 0})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {selectedCount > 0 && (
                        <span className="rounded-full bg-county-panel px-2 py-0.5 text-xs font-semibold text-county-text">
                          {selectedCount}
                        </span>
                      )}
                      {canExpand && (
                        <span className="text-sm font-semibold text-county-green" aria-hidden>
                          {isExpanded ? "▾" : "▸"}
                        </span>
                      )}
                    </div>
                  </div>

                  {isExpanded && subcategories.length > 0 && (
                    <div id={`subcategory-${category}`} className="ml-5 space-y-2">
                      {subcategories.map((value) => {
                        const isSelected = selectedSubcategories.has(value);
                        return (
                          <div
                            key={`${category}-${value}`}
                            className="flex cursor-pointer items-center gap-2 rounded px-1 py-1 text-sm text-county-text hover:bg-white/40"
                            onClick={() => toggleSubcategorySelection(category, subcategories, value)}
                          >
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => toggleSubcategorySelection(category, subcategories, value)}
                              onClick={(event) => event.stopPropagation()}
                            />
                            <span>
                              {value} ({subcategoryCounts.get(value) ?? 0})
                            </span>
                          </div>
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
                item.category === "Additional Insights" || item.scientificName === "N/A"
                  ? "Additional Insights"
                  : `${item.scientificName} • ${item.nativeStatusRaw || item.nativeStatus}`
              }
              image={item.image}
              imageAlt={item.scientificName === "N/A" ? item.commonName : `${item.commonName} (${item.scientificName})`}
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
