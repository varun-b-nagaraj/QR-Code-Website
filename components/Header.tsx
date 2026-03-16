"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNavItems = [
  { label: "County Parks & Trails", href: "/" },
  { label: "Trail Map", href: "/trails/champion-park-trail" },
  { label: "Native Plants", href: "/species?category=Plants" },
  { label: "Wildlife", href: "/species?category=Birds" },
  { label: "Educational Stops", href: "/sign/native-plants-stop" },
];

const moreInfoItems = [
  { label: "Nature Library", href: "/species" },
  { label: "About", href: "/about" },
  { label: "Identify", href: "/identify" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-county-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[70px] w-full max-w-7xl items-center gap-4 px-3 sm:px-5 lg:px-6">
        <Link href="/" className="mr-2 flex shrink-0 items-center gap-2" aria-label="County Parks Home">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-county-blue text-sm font-semibold text-white">
            W
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-county-text">County Parks</p>
            <p className="text-xs text-county-text-secondary">Educational Trail</p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-start gap-1 lg:flex" aria-label="Primary">
          {primaryNavItems.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("?")[0]));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-county-green" : "text-county-blue hover:text-county-green"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <details className="group relative ml-1">
            <summary className="list-none cursor-pointer whitespace-nowrap rounded-md px-2 py-2 text-sm font-semibold text-county-blue transition-colors hover:text-county-green">
              More Info
            </summary>
            <div className="absolute left-0 top-10 z-40 w-52 rounded-lg border border-county-panel bg-white p-2 shadow-md">
              {moreInfoItems.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("?")[0]));
                return (
                  <Link
                    key={`${item.label}-${item.href}`}
                    href={item.href}
                    className={`block rounded px-3 py-2 text-sm font-semibold ${
                      active ? "bg-county-panel text-county-green" : "text-county-blue hover:bg-county-panel hover:text-county-green"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </details>
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            href="/ai"
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition-colors ${
              pathname.startsWith("/ai")
                ? "border-county-green bg-county-panel text-county-green"
                : "border-county-green text-county-blue hover:bg-county-panel"
            }`}
            aria-label="AI Assistant"
          >
            <span aria-hidden>✦</span>
            <span>AI Assistant</span>
          </Link>
          <Link
            href="/"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-county-green text-county-blue transition-colors hover:bg-county-panel"
            aria-label="Home"
          >
            ⌂
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-county-panel text-county-blue lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="border-t border-county-panel bg-county-white px-4 py-3 lg:hidden" aria-label="Mobile Primary">
          <ul className="space-y-1">
            {[...primaryNavItems, ...moreInfoItems, { label: "AI Assistant", href: "/ai" }].map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("?")[0]));
              return (
                <li key={`${item.label}-${item.href}`}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-2 py-2 text-sm font-semibold ${
                      active ? "bg-county-panel text-county-green" : "text-county-blue hover:bg-county-panel hover:text-county-green"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded px-2 py-2 text-sm font-semibold text-county-blue hover:bg-county-panel hover:text-county-green"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
