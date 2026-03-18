import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { speciesBySlug } from "@/data/species";
import { Species } from "@/lib/types";

export function generateStaticParams() {
  return Object.keys(speciesBySlug).map((slug) => ({ slug }));
}

function renderTextBlock(text: string, className = "mt-1 text-county-text") {
  const blocks = text
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const isList = lines.every((line) => line.startsWith("- "));

    if (isList) {
      return (
        <ul key={`${block}-${index}`} className={`${className} ml-5 list-disc space-y-2`}>
          {lines.map((line) => (
            <li key={line}>{line.slice(2)}</li>
          ))}
        </ul>
      );
    }

    return (
      <p key={`${block}-${index}`} className={className}>
        {block}
      </p>
    );
  });
}

function isInsight(item: Species) {
  return item.subcategory === "Additional Insights" || item.scientificName === "N/A";
}

export default async function SpeciesDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = speciesBySlug[slug];

  if (!item) notFound();

  const insight = isInsight(item);
  const sections = [
    { title: "Description", value: item.description },
    { title: "Habitat", value: item.habitat },
    { title: "Where Found In The Park", value: item.parkLocation },
    { title: "Ecological Role", value: item.ecologicalRole },
    { title: "Fun Fact", value: item.funFact },
  ].filter((section) => section.value.trim());

  if (insight) {
    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="relative h-72 w-full sm:h-96">
            <Image src={item.image} alt={item.commonName} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                {item.category} Insight
              </p>
              <h1 className="mt-2 max-w-3xl text-4xl font-semibold">{item.commonName}</h1>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            <section className="rounded-2xl bg-county-bg p-5">
              <h2 className="text-xl font-semibold text-county-dark-green">Article Overview</h2>
              {renderTextBlock(item.description, "mt-3 text-county-text leading-7")}
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-county-panel p-5">
                <h2 className="text-lg font-semibold text-county-dark-green">Library Type</h2>
                <p className="mt-2 text-county-text">{item.category} Additional Insight</p>
              </section>
              <section className="rounded-2xl border border-county-panel p-5">
                <h2 className="text-lg font-semibold text-county-dark-green">Format</h2>
                <p className="mt-2 text-county-text">Long-form article content for context, habitat framing, and interpretation.</p>
              </section>
            </div>

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

          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-county-dark-green">{section.title}</h2>
              {renderTextBlock(section.value)}
            </section>
          ))}

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
