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
  return item.category === "Additional Insights" || item.scientificName === "N/A";
}

function getInsightSupportCopy(item: Species) {
  if (item.slug.startsWith("plant-insight-")) {
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
  const descriptionSection = sections.find((section) => section.title === "Description");
  const remainingSections = sections.filter((section) => section.title !== "Description");
  const additionalImages = item.inat_additional_images || [];
  const additionalWithoutCover = item.cover_image_url
    ? additionalImages.filter((image) => image.url !== item.cover_image_url)
    : additionalImages;
  const collagePool = [
    ...additionalWithoutCover,
    ...(item.cover_image_url
      ? [{
          url: item.cover_image_url,
          attribution: item.cover_image_attribution || "",
          license: item.cover_image_license || "",
        }]
      : []),
  ];
  const collageTargetCount = Math.min(12, Math.max(6, collagePool.length));
  const collageImages =
    collagePool.length > 0
      ? Array.from({ length: collageTargetCount }, (_, index) => collagePool[index % collagePool.length])
      : [];
  const leftStack = collageImages.filter((_, index) => index % 2 === 0);
  const rightStack = collageImages.filter((_, index) => index % 2 === 1);
  const sizeCycle = [
    { width: 92, height: 74 },
    { width: 132, height: 94 },
    { width: 116, height: 162 },
    { width: 166, height: 108 },
    { width: 144, height: 196 },
    { width: 208, height: 130 },
    { width: 124, height: 228 },
    { width: 248, height: 154 },
    { width: 178, height: 264 },
    { width: 286, height: 182 },
  ];
  const rotationCycleLeft = [-14, 9, -7, 12, -10, 6];
  const rotationCycleRight = [13, -8, 7, -12, 10, -6];
  const leftInsetCycle = [0, 84, 32, 116, 52, 92];
  const rightInsetCycle = [0, 80, 30, 110, 48, 88];
  const yJitterCycle = [-28, 14, -10, 24, -18, 8];
  const visibleAtIndexClass = (index: number) => {
    if (index < 4) return "hidden xl:block";
    if (index < 6) return "hidden 2xl:block";
    return "hidden min-[1800px]:block";
  };

  if (insight) {
    const detailBlocks =
      item.description.trim() === item.summary.trim()
        ? []
        : renderTextBlock(item.description, "mt-3 text-county-text leading-7");
    const supportCopy = getInsightSupportCopy(item);
    const insightLabel = item.category === "Additional Insights" ? "Library Insight" : `${item.category} Insight`;

    return (
      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="grid gap-6 bg-county-bg p-6 sm:p-8 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-county-text-secondary">
                {insightLabel}
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
              <Link
                href="/species"
                className="inline-flex items-center rounded-full bg-county-green px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-county-dark-green"
              >
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
      <article className="relative overflow-visible rounded-2xl bg-white shadow-sm">
        <div className="relative h-72 w-full overflow-hidden rounded-t-2xl sm:h-80">
          <Image
            src={item.image}
            alt={`${item.commonName} (${item.scientificName})`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 space-y-5 bg-white p-6 sm:p-8">
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
          {descriptionSection && (
            <section className="relative space-y-4">
              <h2 className="text-2xl font-semibold text-county-dark-green">{descriptionSection.title}</h2>

              {renderTextBlock(descriptionSection.value)}
            </section>
          )}

          {remainingSections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-county-dark-green">{section.title}</h2>
              {renderTextBlock(section.value)}
            </section>
          ))}

          <div className="pt-2">
            <Link
              href="/species"
              className="inline-flex items-center rounded-full bg-county-green px-5 py-2 font-semibold text-white transition-colors duration-200 hover:bg-county-dark-green"
            >
              Back to Species Library
            </Link>
          </div>
        </div>

        {collageImages.length > 3 && (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden xl:block">
            {leftStack.map((image, index) => {
              const topPercent = ((index + 0.5) / Math.max(leftStack.length, 1)) * 100;
              const inset = leftInsetCycle[index % leftInsetCycle.length];
              const size = sizeCycle[index % sizeCycle.length];
              const yJitter = yJitterCycle[index % yJitterCycle.length];
              const isLeadLeft = index === 0;
              const isSecondLeft = index === 1;
              const isThirdLeft = index === 2;
              const scale = isLeadLeft
                ? 1.24
                : isSecondLeft || isThirdLeft
                  ? 1.03
                  : 0.86 + (index % 7) * 0.09;
              const tileSizeMultiplier = isLeadLeft ? 2.1 : isSecondLeft ? 1.58 : isThirdLeft ? 1.4 : 1;
              const tileWidth = Math.round(size.width * tileSizeMultiplier);
              const tileHeight = Math.round(size.height * tileSizeMultiplier);
              const adjustedTopPercent = isLeadLeft
                ? topPercent + 4
                : isSecondLeft
                  ? topPercent + 20
                  : isThirdLeft
                    ? topPercent - 8
                    : topPercent;
              const leftOffset = isSecondLeft
                ? `calc(-1 * clamp(246px, 15vw, 340px) + ${Math.max(0, inset + 2)}px)`
                : isThirdLeft
                  ? `calc(-1 * clamp(304px, 20vw, 430px) + ${Math.max(0, inset - 14)}px)`
                  : `calc(-1 * clamp(258px, 17vw, 372px) + ${inset}px)`;
              const baseZClass = isSecondLeft ? "z-50" : isThirdLeft ? "z-40" : isLeadLeft ? "z-30" : "z-20";
              return (
                <div
                  key={`${image.url}-left-full-${index}`}
                  className={`group pointer-events-auto absolute ${visibleAtIndexClass(index)} ${baseZClass} overflow-hidden rounded-xl border border-white/80 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:z-[2147483647] hover:-translate-y-1.5 hover:scale-[1.06] hover:shadow-2xl hover:shadow-black/45`}
                  style={{
                    width: `${tileWidth}px`,
                    height: `${tileHeight}px`,
                    left: leftOffset,
                    top: `calc(${adjustedTopPercent}% - ${Math.round(tileHeight / 2)}px + ${yJitter}px)`,
                    rotate: `${rotationCycleLeft[index % rotationCycleLeft.length]}deg`,
                    transform: `scale(${scale})`,
                  }}
                >
                  <Image
                    src={image.url}
                    alt={`${item.commonName} additional iNaturalist photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {(image.attribution || image.license) && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/65 px-2 py-1 text-[10px] leading-tight text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <p className="line-clamp-2">{image.attribution || "iNaturalist contributor"}</p>
                      {image.license && <p className="mt-0.5 opacity-90">License: {image.license}</p>}
                    </div>
                  )}
                </div>
              );
            })}

            {rightStack.map((image, index) => {
              const topPercent = ((index + 0.5) / Math.max(rightStack.length, 1)) * 100;
              const inset = rightInsetCycle[index % rightInsetCycle.length];
              const size = sizeCycle[(index + 2) % sizeCycle.length];
              const yJitter = yJitterCycle[(index + 3) % yJitterCycle.length];
              const isTopRight = index < 2;
              const rightMultiplier = isTopRight ? 1.35 : 1;
              const tileWidth = Math.round(size.width * rightMultiplier);
              const tileHeight = Math.round(size.height * rightMultiplier);
              const scale = 0.84 + ((index + 2) % 7) * 0.09;
              const baseZClass = "z-20";
              return (
                <div
                  key={`${image.url}-right-full-${index}`}
                  className={`group pointer-events-auto absolute ${visibleAtIndexClass(index)} ${baseZClass} overflow-hidden rounded-xl border border-white/80 shadow-lg shadow-black/20 transition-all duration-300 ease-out hover:z-[2147483647] hover:-translate-y-1.5 hover:scale-[1.06] hover:shadow-2xl hover:shadow-black/45`}
                  style={{
                    width: `${tileWidth}px`,
                    height: `${tileHeight}px`,
                    right: `calc(-1 * clamp(258px, 17vw, 372px) + ${inset}px)`,
                    top: `calc(${topPercent}% - ${Math.round(tileHeight / 2)}px + ${yJitter}px)`,
                    rotate: `${rotationCycleRight[index % rotationCycleRight.length]}deg`,
                    transform: `scale(${scale})`,
                  }}
                >
                  <Image
                    src={image.url}
                    alt={`${item.commonName} additional iNaturalist photo ${leftStack.length + index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {(image.attribution || image.license) && (
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-black/65 px-2 py-1 text-[10px] leading-tight text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <p className="line-clamp-2">{image.attribution || "iNaturalist contributor"}</p>
                      {image.license && <p className="mt-0.5 opacity-90">License: {image.license}</p>}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </article>
    </main>
  );
}
