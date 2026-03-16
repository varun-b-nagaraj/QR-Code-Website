import Image from "next/image";
import Link from "next/link";
import { signBySlug } from "@/data/signs";
import { speciesBySlug } from "@/data/species";

export default function NativePlantsStopPage() {
  const stop = signBySlug["native-plants-stop"];
  const featured = stop.featuredSpeciesSlugs.map((slug) => speciesBySlug[slug]);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm text-county-text-secondary">QR Sign Stop</p>
        <h1 className="text-4xl font-semibold text-county-green">{stop.title}</h1>
        <p className="mt-1 text-county-text-secondary">{stop.parkName} • Champion Park Educational Trail</p>

        <div className="relative mt-6 h-60 overflow-hidden rounded-xl">
          <Image src={stop.image} alt={stop.title} fill className="object-cover" />
        </div>

        <p className="mt-6 text-county-text">{stop.educationalText}</p>

        <section className="mt-6">
          <h2 className="text-2xl font-semibold text-county-dark-green">Featured Plants Nearby</h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {featured.map((item) => (
              <li key={item.slug} className="rounded-lg bg-county-bg p-3">
                <p className="font-semibold text-county-text">{item.commonName}</p>
                <p className="text-sm italic text-county-text-secondary">{item.scientificName}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/ai" className="rounded-full bg-county-green px-5 py-2 font-semibold text-white">
            Identify From Photo
          </Link>
          <Link href="/species" className="rounded-full bg-county-blue px-5 py-2 font-semibold text-white">
            Browse Species
          </Link>
        </div>
      </section>
    </main>
  );
}
