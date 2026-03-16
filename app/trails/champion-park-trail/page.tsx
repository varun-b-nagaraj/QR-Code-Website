import Image from "next/image";
import Link from "next/link";
import { speciesBySlug } from "@/data/species";
import { trailBySlug } from "@/data/trails";

export default function ChampionParkTrailPage() {
  const trail = trailBySlug["champion-park-trail"];
  const commonSpecies = trail.commonSpeciesSlugs.map((slug) => speciesBySlug[slug]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-4xl font-semibold text-county-green">{trail.name}</h1>
        <p className="mt-2 text-county-text-secondary">{trail.overview}</p>

        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl">
          <Image src={trail.image} alt={trail.name} fill className="object-cover" />
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Educational Highlights</h2>
            <ul className="mt-3 space-y-2 text-county-text">
              {trail.highlights.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-county-dark-green">Stop Markers</h2>
            <ul className="mt-3 space-y-2 text-county-text">
              {trail.stopMarkers.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-county-dark-green">Species Commonly Seen</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2 text-county-text">
            {commonSpecies.map((item) => (
              <li key={item.slug} className="rounded-lg bg-county-bg p-3">
                <p className="font-semibold">{item.commonName}</p>
                <p className="text-sm italic text-county-text-secondary">{item.scientificName}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/identify" className="rounded-full bg-county-green px-5 py-2 font-semibold text-white">
            Identify a Species
          </Link>
          <Link href="/sign/native-plants-stop" className="rounded-full bg-county-blue px-5 py-2 font-semibold text-white">
            Explore Nearby Sign Stops
          </Link>
        </div>
      </section>
    </main>
  );
}
