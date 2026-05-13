"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import Stars from "@/components/shared/Stars";
import { TESTIMONIALS, STUDENT_TESTIMONIALS } from "@/lib/constants";
import { REVIEWS_WALL_INTRO } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2c (2026-05-13): unified card grid replacing the prior split
// LongFormReviews + StudentReviewsGrid surfaces. All 17 verbatim reviews
// in one place with working filter chips. Chips are source-based
// (Clinic owners / Course feedback) — the data supports a clean split
// there, and a source split is more meaningful than the audience split
// for this dataset (only 4 entries have explicit credentials).
//
// All cards are DM Sans body type — the .editorial-quote serif italic is
// reserved for STANDALONE quotes only (the dedicated PullQuoteSection
// below); review cards stay in body type per Phase 1i + brand-guide.

type WallEntry = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  source: "expert" | "student";
};

const FILTERS = [
  { key: "all" as const, label: "All" },
  { key: "expert" as const, label: "Clinic owners" },
  { key: "student" as const, label: "Course feedback" },
];

type FilterKey = (typeof FILTERS)[number]["key"];

function buildEntries(): WallEntry[] {
  const expert = TESTIMONIALS.map((t) => ({
    id: `e-${t.name}`,
    name: t.name,
    role: t.role,
    quote: t.quote,
    source: "expert" as const,
  }));
  const student = STUDENT_TESTIMONIALS.map((t) => ({
    id: `s-${t.name}`,
    name: t.name,
    quote: t.quote,
    source: "student" as const,
  }));
  return [...expert, ...student];
}

export default function WallOfLove() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const entries = useMemo(() => buildEntries(), []);
  const counts = useMemo(
    () => ({
      all: entries.length,
      expert: entries.filter((e) => e.source === "expert").length,
      student: entries.filter((e) => e.source === "student").length,
    }),
    [entries],
  );
  const visible = entries.filter((e) =>
    filter === "all" ? true : e.source === filter,
  );

  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={REVIEWS_WALL_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {REVIEWS_WALL_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {REVIEWS_WALL_INTRO.intro}
          </motion.p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] transition ${
                  active
                    ? "bg-accent text-white"
                    : "bg-white text-navy hover:bg-navy/5 border border-line"
                }`}
              >
                {f.label}
                <span className="ml-2 text-xs opacity-80">{counts[f.key]}</span>
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => (
            <li
              key={e.id}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-center justify-between gap-3">
                <Stars variant="light" size="sm" />
                <span className="small-caps-line text-muted text-[0.65rem]">
                  {e.source === "expert" ? "Clinic owner" : "Course feedback"}
                </span>
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/90">
                &ldquo;{e.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="font-display text-base text-navy leading-tight">
                  {e.name}
                </p>
                {e.role ? (
                  <p className="mt-1 text-sm text-muted">{e.role}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
