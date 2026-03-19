import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { speciesBySlug } from "@/data/species";
import { Species } from "@/lib/types";

export function generateStaticParams() {
  return Object.keys(speciesBySlug).map((slug) => ({ slug }));
}

function normalizeInlineBulletLists(text: string) {
  return text
    .split("\n\n")
    .map((paragraph) => {
      const block = paragraph.trim();
      if (!block || block.includes("\n- ")) return block;

      const dashMatches = block.match(/\s-\s/g) ?? [];
      const hasInlineListPattern = block.includes(": - ") || dashMatches.length >= 2;
      if (!hasInlineListPattern) return block;

      const segments = block.split(/\s-\s/).map((part) => part.trim()).filter(Boolean);
      if (segments.length <= 1) return block;

      const [lead, ...items] = segments;
      const lines = [lead, ...items.map((item) => `- ${item}`)];
      return lines.join("\n");
    })
    .join("\n\n");
}

function renderTextBlock(text: string, className = "mt-1 text-county-text") {
  const normalized = normalizeInlineBulletLists(text);
  const blocks = normalized
    .split("\n\n")
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const bulletLines = lines.filter((line) => line.startsWith("- "));
    const nonBulletLines = lines.filter((line) => !line.startsWith("- "));
    const isList = lines.length > 0 && bulletLines.length === lines.length;
    const hasMixedList = bulletLines.length > 0 && nonBulletLines.length > 0;

    if (isList) {
      return (
        <ul key={`${block}-${index}`} className={`${className} ml-5 list-disc space-y-2`}>
          {lines.map((line) => (
            <li key={line}>{line.slice(2)}</li>
          ))}
        </ul>
      );
    }

    if (hasMixedList) {
      return (
        <div key={`${block}-${index}`} className="space-y-2">
          <p className={className}>{nonBulletLines.join(" ")}</p>
          <ul className={`${className} ml-5 list-disc space-y-2`}>
            {bulletLines.map((line) => (
              <li key={line}>{line.slice(2)}</li>
            ))}
          </ul>
        </div>
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

function getInsightSupportCopy(item: Species) {
  if (item.category === "Plants") {
    return {
      title: "Why this matters on the trail",
      body:
        "Plant knowledge becomes more useful when it connects to place. These insight pages tie species profiles to habitats, seasonal patterns, and stewardship questions that visitors can actually notice while walking the park.",
      titleTwo: "How to use this page",
      bodyTwo:
        "Start with the main idea, then use the full text to connect what you see on the trail with the larger structure of the Brushy Creek landscape.",
    };
  }

  return {
    title: "Why this matters",
    body:
      "This article adds context around the species library so visitors can connect individual sightings to habitat, behavior, and broader park ecology.",
    titleTwo: "How to use this page",
    bodyTwo:
      "Use the overview to get oriented, then read the main text for the deeper ecological frame behind the category.",
  };
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
    const detailBlocks =
      item.description.trim() === item.summary.trim()
        ? []
        : renderTextBlock(item.description, "mt-3 text-county-text leading-7");
    const supportCopy = getInsightSupportCopy(item);

    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="grid gap-6 bg-county-bg p-6 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-county-text-secondary">
                {item.category} Insight
              </p>
              <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-county-dark-green sm:text-5xl">
                {item.commonName}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-county-text">
                {item.summary}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
              <div className="relative aspect-[4/3] w-full p-3">
                <Image
                  src={item.image}
                  alt={item.commonName}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            <section className="rounded-2xl bg-county-bg p-5">
              <h2 className="text-xl font-semibold text-county-dark-green">Overview</h2>
              {renderTextBlock(item.summary, "mt-3 text-county-text leading-7")}
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="rounded-2xl border border-county-panel p-5">
                <h2 className="text-lg font-semibold text-county-dark-green">{supportCopy.title}</h2>
                <p className="mt-2 text-county-text">{supportCopy.body}</p>
              </section>
              <section className="rounded-2xl border border-county-panel p-5">
                <h2 className="text-lg font-semibold text-county-dark-green">{supportCopy.titleTwo}</h2>
                <p className="mt-2 text-county-text">{supportCopy.bodyTwo}</p>
              </section>
            </div>

            {detailBlocks.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-county-dark-green">In Depth</h2>
                <div className="space-y-4">{detailBlocks}</div>
              </section>
            )}

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
          <Image
            src={item.image}
            alt={`${item.commonName} (${item.scientificName})`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 p-6 sm:p-8">
          <p className="text-sm text-county-text-secondary">Species Library</p>
          <h1 className="text-4xl font-semibold text-county-green">{item.commonName}</h1>
          <p className="text-lg italic text-county-text-secondary">{item.scientificName}</p>
          <span className="inline-block rounded-full bg-county-panel px-3 py-1 text-sm font-semibold text-county-text">
            {item.nativeStatusRaw || item.nativeStatus}
          </span>
          {item.cover_image_source === "iNaturalist" && item.cover_image_attribution && (
            <p className="text-xs text-county-text-secondary">
              Photo: {item.cover_image_attribution}
              {item.cover_image_license ? ` • License: ${item.cover_image_license}` : ""}
            </p>
          )}

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
