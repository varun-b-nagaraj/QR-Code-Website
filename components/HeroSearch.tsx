"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

interface HeroSearchProps {
  imageSrc: string;
  title?: string;
  placeholder: string;
}

export function HeroSearch({ imageSrc, title, placeholder }: HeroSearchProps) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section
      className="relative h-[340px] overflow-hidden bg-cover bg-center md:h-[370px]"
      style={{ backgroundImage: `url(${imageSrc})` }}
      aria-label="Trail hero image"
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center">
          {title && <h1 className="mb-6 text-3xl font-semibold text-white drop-shadow sm:text-4xl">{title}</h1>}

          <form onSubmit={onSubmit} className="mx-auto flex items-center rounded-full bg-white px-5 py-4 shadow-lg">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="w-full bg-transparent text-base text-county-text outline-none placeholder:text-county-text-secondary"
              aria-label="Search"
            />
            <button
              type="submit"
              className="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-county-green text-county-blue transition-colors hover:bg-county-panel"
              aria-label="Search"
            >
              🔍
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
