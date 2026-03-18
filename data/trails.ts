import { Trail } from "@/lib/types";

export const trails: Trail[] = [
  {
    slug: "champion-park-trail",
    name: "Champion Park Educational Trail",
    overview:
      "A family-friendly trail featuring native habitat stops, pollinator pockets, and QR learning markers.",
    image: "/images/champion-trail.svg",
    highlights: [
      "Native plant demonstration zones",
      "Bird observation overlook",
      "Creekside conservation stop",
      "Pollinator meadow learning loop",
    ],
    commonSpeciesSlugs: [
      "escarpment-live-oak",
      "little-bluestem",
      "northern-mockingbird",
      "monarch-butterfly",
    ],
    stopMarkers: [
      "Trailhead Orientation",
      "Native Plants Stop",
      "Pollinator Garden Stop",
      "Creek Ecology Stop",
    ],
  },
];

export const trailBySlug = Object.fromEntries(
  trails.map((item) => [item.slug, item]),
);
