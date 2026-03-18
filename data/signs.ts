import { SignStop } from "@/lib/types";

export const signs: SignStop[] = [
  {
    slug: "native-plants-stop",
    title: "Native Plants Learning Stop",
    parkName: "Champion Park",
    trailSlug: "champion-park-trail",
    image: "/images/native-plants-stop.svg",
    educationalText:
      "This station introduces drought-adapted native plants that support birds, pollinators, and healthy soils throughout the year.",
    featuredSpeciesSlugs: ["escarpment-live-oak", "texas-redbud", "texas-bluebonnet"],
  },
];

export const signBySlug = Object.fromEntries(
  signs.map((item) => [item.slug, item]),
);
