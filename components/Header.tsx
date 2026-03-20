"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryNavItems = [
  { label: "Conservation Info", href: "/conservation-information" },
  { label: "Trail Map", href: "/trails/champion-park-trail" },
  { label: "Nature Library", href: "/species" },
  { label: "Park History", href: "/park-history" },
];

const aboutNavItem = { label: "About", href: "/about" };

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-county-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-3 sm:px-5 lg:px-6">
        <Link href="/" className="mr-2 flex shrink-0 items-center gap-2" aria-label="County Parks Home">
          <div className="relative h-9 w-14 overflow-hidden rounded">
            <Image src="/favicon.svg" alt="County Parks logo" fill className="object-contain" priority />
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
          <Link
            href={aboutNavItem.href}
            className={`whitespace-nowrap rounded-md px-2 py-2 text-sm font-semibold transition-colors ${
              pathname === aboutNavItem.href || pathname.startsWith(`${aboutNavItem.href}/`)
                ? "text-county-green"
                : "text-county-blue hover:text-county-green"
            }`}
          >
            {aboutNavItem.label}
          </Link>
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

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            href="/ai"
            className="inline-flex h-10 min-w-[112px] items-center justify-center rounded-full border-2 border-county-green bg-white px-4 text-sm font-semibold text-county-green"
            aria-label="Open AI Scan"
          >
            AI Scan
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-county-panel text-county-blue"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-county-panel bg-county-white px-4 py-3 lg:hidden" aria-label="Mobile Primary">
          <ul className="space-y-1">
            {[...primaryNavItems, aboutNavItem].map((item) => {
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
