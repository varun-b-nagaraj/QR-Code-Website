import { CardGrid } from "@/components/CardGrid";
import { ContactPanel } from "@/components/ContactPanel";
import { HeroSearch } from "@/components/HeroSearch";

const cardItems = [
  {
    title: "Identify Plants and Wildlife",
    description: "Upload a photo to identify plants and wildlife around the park.",
    image: "/images/identify-card.svg",
    href: "/ai",
  },
  {
    title: "Trail Map",
    description: "Explore park trails and discover educational stops.",
    image: "/images/trail-map-card.svg",
    href: "/trails/champion-park-trail",
  },
  {
    title: "Native Species Library",
    description: "Browse native plants and animals found in the park.",
    image: "/images/species-library-card.svg",
    href: "/species",
  },
  {
    title: "Conservation Information",
    description: "Learn how to protect local ecosystems and habitats.",
    image: "/images/conservation-card.svg",
    href: "/about",
  },
  {
    title: "Park History",
    description: "Learn how these parks, trails, and conservation efforts developed over time.",
    image: "/images/history-card.svg",
    href: "/park-history",
  },
  {
    title: "About",
    description: "Understand this project concept, educational goals, and technology approach.",
    image: "/images/conservation-card.svg",
    href: "/about",
  },
];

export default function Home() {
  return (
    <main>
      <HeroSearch
        imageSrc="/images/hero-park.svg"
        title="Educational Trail Experience"
        placeholder="Search plants, animals, trails, or park info..."
      />

      <section className="relative z-10 mx-auto -mt-10 w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr,280px]">
            <section>
              <p className="text-sm text-county-text-secondary">Home › Departments › Parks</p>
              <h1 className="mt-2 text-4xl font-semibold text-county-green">Educational Trail Experience</h1>
              <div className="mt-5">
                <CardGrid items={cardItems} />
              </div>
            </section>

            <ContactPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
