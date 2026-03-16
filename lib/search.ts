import { signBySlug } from "@/data/signs";
import { species } from "@/data/species";
import { trailBySlug } from "@/data/trails";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "Page" | "Species" | "Trail" | "Sign Stop";
}

const staticPages: SearchResult[] = [
  {
    title: "Identify Species",
    description: "Upload a photo and get a mocked species result.",
    href: "/ai",
    type: "Page",
  },
  {
    title: "Species Library",
    description: "Browse plants and wildlife found around trail areas.",
    href: "/species",
    type: "Page",
  },
  {
    title: "Park History",
    description: "Read the timeline and background of local parks and trail development.",
    href: "/park-history",
    type: "Page",
  },
  {
    title: "About This Project",
    description: "Read the concept overview and county presentation notes.",
    href: "/about",
    type: "Page",
  },
];

export function getSearchResults(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const trail = trailBySlug["champion-park-trail"];
  const sign = signBySlug["native-plants-stop"];

  const dynamicResults: SearchResult[] = [
    {
      title: trail.name,
      description: trail.overview,
      href: "/trails/champion-park-trail",
      type: "Trail",
    },
    {
      title: sign.title,
      description: sign.educationalText,
      href: "/sign/native-plants-stop",
      type: "Sign Stop",
    },
    ...species.map((item) => ({
      title: item.commonName,
      description: `${item.scientificName} • ${item.summary}`,
      href: `/species/${item.slug}`,
      type: "Species" as const,
    })),
  ];

  return [...staticPages, ...dynamicResults].filter((item) => {
    const haystack = `${item.title} ${item.description}`.toLowerCase();
    return haystack.includes(q);
  });
}
