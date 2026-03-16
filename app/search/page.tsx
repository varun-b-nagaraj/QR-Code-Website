import Link from "next/link";
import { getSearchResults } from "@/lib/search";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = params.q ?? "";
  const results = getSearchResults(q);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-semibold text-county-green">Search Results</h1>
        <p className="mt-2 text-county-text-secondary">
          {q ? `Showing results for "${q}"` : "Enter a search term from the home page."}
        </p>

        <div className="mt-6 space-y-3">
          {results.map((item) => (
            <Link key={`${item.type}-${item.href}`} href={item.href} className="block rounded-lg border border-county-panel p-4 hover:bg-county-bg">
              <p className="text-sm font-semibold text-county-blue">{item.type}</p>
              <p className="mt-1 text-xl font-semibold text-county-text">{item.title}</p>
              <p className="mt-1 text-sm text-county-text-secondary">{item.description}</p>
            </Link>
          ))}

          {q && results.length === 0 && (
            <p className="rounded-lg bg-county-panel p-4 text-county-text">
              No matching results. Try terms like <span className="font-semibold">live oak</span>, <span className="font-semibold">trail</span>, or <span className="font-semibold">native plants</span>.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
