"use client";

import Link from "next/link";
import { useState } from "react";

interface SidebarNavProps {
  items: { label: string; href: string }[];
  activeLabel?: string;
  title?: string;
}

export function SidebarNav({ items, activeLabel, title = "Section Menu" }: SidebarNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <aside aria-label={title}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="mb-3 w-full rounded-md border border-county-panel bg-county-white px-4 py-3 text-left text-county-blue shadow-sm md:hidden"
      >
        {title} {open ? "−" : "+"}
      </button>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <ul className="rounded-xl bg-county-bg p-2">
          {items.map((item) => {
            const active = item.label === activeLabel;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block rounded-md border-l-4 px-4 py-3 text-base transition-colors ${
                    active
                      ? "border-county-green bg-county-panel font-semibold text-county-green"
                      : "border-transparent text-county-text hover:bg-county-panel hover:text-county-green"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
