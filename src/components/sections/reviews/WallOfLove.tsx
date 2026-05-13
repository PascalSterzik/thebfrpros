"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { TESTIMONIALS } from "@/lib/constants";
import { STUDENT_TESTIMONIALS } from "@/content/student-reviews";
import { REVIEWS_WALL_INTRO } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13, Pascal feedback): unified card grid, no filter.
// The Clinic-owner / Course-feedback split (4 vs 681) is meaningless,
// so the filter chips + source chip on each card are removed.
// Each card now shows:
//   - per-card star rating (top-left)
//   - submission date (top-right, replacing the source chip)
//   - name + optional role ABOVE the verbatim quote
// All 685 reviews stream in one date-desc order. The 4 long-form
// clinic-owner entries (TESTIMONIALS in lib/constants.ts) are assigned
// 2023-03-01 as a proxy date — the live course-page image filenames
// for Lee, Whyte, Toderico are under /wp-content/uploads/2023/03/...
// so the testimonials were collected before then. Rating defaulted
// to 5 for those four (the live course page renders them all as 5★).
//
// Pascal feedback round 2: 685 cards rendered at once pushed the video
// testimonials section too far down the page. Now paginated 99 per
// batch with a Show More button that reveals the next batch in place.
// Initial render is 99 cards (about the same height as the WallOfLove
// pre-expansion plus a comfortable gap to the soft gateway below).
//
// All cards are DM Sans body type — .editorial-quote serif italic is
// reserved for the standalone PullQuoteSection below, per brand-guide.

const PAGE_SIZE = 99;

type WallEntry = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  date: string;
  rating: number;
};

const EXPERT_FALLBACK_DATE = "2023-03-01";

function StarBar({ rating }: { rating: number }) {
  const Star = ({ filled }: { filled: boolean }) => (
    <svg width={14} height={14} viewBox="0 0 20 20" aria-hidden>
      <polygon
        points="10,1.6 12.6,7 18.5,7.9 14.2,12.1 15.2,18 10,15.2 4.8,18 5.8,12.1 1.5,7.9 7.4,7"
        fill="#F4B400"
        opacity={filled ? 1 : 0.25}
      />
    </svg>
  );
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`${rating} of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < Math.round(rating)} />
      ))}
    </span>
  );
}

function buildEntries(): WallEntry[] {
  const expert: WallEntry[] = TESTIMONIALS.map((t) => ({
    id: `e-${t.name}`,
    name: t.name,
    role: t.role,
    quote: t.quote,
    date: EXPERT_FALLBACK_DATE,
    rating: 5,
  }));
  const student: WallEntry[] = STUDENT_TESTIMONIALS.map((t, i) => ({
    id: `s-${i}-${t.name}`,
    name: t.name,
    quote: t.quote,
    date: "date" in t ? (t as { date: string }).date : EXPERT_FALLBACK_DATE,
    rating: "rating" in t ? (t as { rating: number }).rating : 5,
  }));
  return [...expert, ...student].sort((a, b) => b.date.localeCompare(a.date));
}

function formatDate(iso: string): string {
  // ISO YYYY-MM-DD → "Mar 1, 2023" style. Keeps the column compact.
  const [y, m, d] = iso.split("-");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const mi = parseInt(m, 10) - 1;
  if (Number.isNaN(mi) || mi < 0 || mi > 11) return iso;
  return `${months[mi]} ${parseInt(d, 10)}, ${y}`;
}

export default function WallOfLove() {
  const entries = useMemo(() => buildEntries(), []);
  const [shown, setShown] = useState(PAGE_SIZE);

  const visible = entries.slice(0, shown);
  const remaining = entries.length - shown;
  const hasMore = remaining > 0;
  const nextBatch = Math.min(PAGE_SIZE, remaining);

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

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => (
            <li
              key={e.id}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-start justify-between gap-3">
                <StarBar rating={e.rating} />
                <span className="small-caps-line text-muted text-[0.65rem] whitespace-nowrap">
                  {formatDate(e.date)}
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-base text-navy leading-tight">
                  {e.name}
                </p>
                {e.role ? (
                  <p className="mt-1 text-sm text-muted">{e.role}</p>
                ) : null}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/90">
                &ldquo;{e.quote}&rdquo;
              </p>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-12 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setShown((s) => Math.min(s + PAGE_SIZE, entries.length))
              }
              className="rounded-lg border border-line bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-navy transition hover:border-accent hover:text-accent"
            >
              Show {nextBatch} more reviews
            </button>
            <p className="text-xs text-muted">
              {shown.toLocaleString("en-US")} of {entries.length.toLocaleString("en-US")} shown
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
