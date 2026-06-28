"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/shared/SectionLabel";

// The on-site publications library: every publication, filterable by type and
// year, grouped by year (newest first), each row linking to its detail page.
// Replaces the old "see the rest on ResearchGate" link-out. Client component
// for the filter state; receives a LIGHT projection (no abstracts) as props so
// the heavy dataset never enters this bundle.

export type LibraryItem = {
  slug: string;
  title: string;
  year: number;
  type: string;
  typeBadge: string;
  journal: string;
  role: string;
  hasAbstract: boolean;
};

type TypeFilter = { type: string; label: string; count: number };

export default function PublicationsLibrary({
  eyebrow,
  headline,
  intro,
  items,
  typeFilters,
  years,
}: {
  eyebrow: string;
  headline: string;
  intro: string;
  items: LibraryItem[];
  typeFilters: TypeFilter[];
  years: number[];
}) {
  const [type, setType] = useState<string>("all");
  const [year, setYear] = useState<number | "all">("all");

  const filtered = useMemo(
    () =>
      items.filter(
        (it) => (type === "all" || it.type === type) && (year === "all" || it.year === year),
      ),
    [items, type, year],
  );

  const groups = useMemo(() => {
    const map = new Map<number, LibraryItem[]>();
    for (const it of filtered) {
      const g = map.get(it.year) ?? [];
      g.push(it);
      map.set(it.year, g);
    }
    return Array.from(map.entries())
      .sort((a, b) => b[0] - a[0])
      .map(([y, list]) => ({
        year: y,
        items: list.sort((a, b) => a.title.localeCompare(b.title)),
      }));
  }, [filtered]);

  const chip = (active: boolean) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      active
        ? "bg-accent text-white"
        : "bg-navy/5 text-navy/70 hover:bg-navy/10 hover:text-navy"
    }`;

  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel label={eyebrow} />
          <h2 className="mt-5 font-display text-display-xl text-navy text-balance">{headline}</h2>
          <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80">{intro}</p>
        </div>

        {/* Filters */}
        <div className="mt-12 space-y-5">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">Filter by type</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setType("all")} className={chip(type === "all")}>
                All ({items.length})
              </button>
              {typeFilters.map((t) => (
                <button
                  key={t.type}
                  type="button"
                  onClick={() => setType(t.type)}
                  className={chip(type === t.type)}
                >
                  {t.label} ({t.count})
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">Filter by year</p>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setYear("all")} className={chip(year === "all")}>
                All years
              </button>
              {years.map((y) => (
                <button
                  key={y}
                  type="button"
                  onClick={() => setYear(y)}
                  className={chip(year === y)}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted" aria-live="polite">
          Showing {filtered.length} of {items.length} records
        </p>

        {/* Grouped list */}
        {groups.length > 0 ? (
          <div className="mt-6 space-y-12">
            {groups.map((g) => (
              <div key={g.year}>
                <h3 className="font-display text-2xl text-navy">{g.year}</h3>
                <div className="mt-3 hairline" />
                <ul className="mt-6 space-y-4">
                  {g.items.map((it) => (
                    <li key={it.slug}>
                      <Link
                        href={`/research/publications/${it.slug}`}
                        className="group block rounded-lg border border-line bg-white p-5 lg:p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                          <p className="small-caps-line text-accent text-xs">
                            {it.typeBadge} · {it.year}
                          </p>
                          {!it.hasAbstract ? (
                            <span className="text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                              Citation only
                            </span>
                          ) : null}
                        </div>
                        <h4 className="mt-2 font-display text-lg lg:text-xl text-navy leading-snug group-hover:text-accent transition">
                          {it.title}
                        </h4>
                        <p className="mt-2 text-sm text-ink/70">
                          {it.journal ? `${it.journal} · ` : ""}Dr. Rolnick: {it.role}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-center text-base text-muted">
            No publications match these filters.
          </p>
        )}
      </div>
    </section>
  );
}
