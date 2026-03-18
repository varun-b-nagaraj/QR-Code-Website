import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { speciesBySlug } from "@/data/species";

export function generateStaticParams() {
  return Object.keys(speciesBySlug).map((slug) => ({ slug }));
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = speciesBySlug[slug];

  if (!item) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative h-72 w-full sm:h-80">
          <Image src={item.image} alt={item.commonName} fill className="object-cover" priority />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <p className="text-sm text-county-text-secondary">Species Library</p>
          <h1 className="text-4xl font-semibold text-county-green">{item.commonName}</h1>
          <p className="text-lg italic text-county-text-secondary">{item.scientificName}</p>
          <span className="inline-block rounded-full bg-county-panel px-3 py-1 text-sm font-semibold text-county-text">
            {item.nativeStatusRaw || item.nativeStatus}
          </span>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Description</h2>
            <p className="mt-1 text-county-text">{item.description}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Habitat</h2>
            <p className="mt-1 text-county-text">{item.habitat}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Where Found In The Park</h2>
            <p className="mt-1 text-county-text">{item.parkLocation}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Ecological Role</h2>
            <p className="mt-1 text-county-text">{item.ecologicalRole}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Fun Fact</h2>
            <p className="mt-1 text-county-text">{item.funFact}</p>
          </section>

          <div className="pt-2">
            <Link href="/species" className="rounded-full bg-county-blue px-5 py-2 font-semibold text-white">
              Back to Species Library
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
