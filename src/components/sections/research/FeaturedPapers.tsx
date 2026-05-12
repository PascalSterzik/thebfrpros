"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_FEATURED_PAPERS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Featured-papers section. Used in two modes:
//   preview  = on /research, shows the 6 papers as compact cards with an
//              outbound link to the full publications page.
//   full     = on /research/publications, shows each paper as a card with
//              the abstract expanded.

export type FeaturedPapersMode = "preview" | "full";

export default function FeaturedPapers({
  mode,
  eyebrow,
  headline,
  intro,
  ctaLabel,
  ctaHref,
}: {
  mode: FeaturedPapersMode;
  eyebrow: string;
  headline: string;
  intro?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {headline}
          </motion.h2>
          {intro ? (
            <motion.p
              variants={fadeUp}
              className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
            >
              {intro}
            </motion.p>
          ) : null}
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className={
            mode === "preview"
              ? "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
              : "mt-14 space-y-6"
          }
        >
          {ROLNICK_FEATURED_PAPERS.map((p) => (
            <motion.li
              key={p.title}
              variants={fadeUp}
              className={
                mode === "preview"
                  ? "flex flex-col rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
                  : "rounded-lg border border-line bg-white p-7 lg:p-9 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
              }
            >
              <p className="small-caps-line text-accent">
                {p.journal} · {p.year}
              </p>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 font-display text-xl text-navy hover:text-accent transition"
                >
                  {p.title}
                  <span aria-hidden className="ml-1 text-sm text-muted">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="mt-3 font-display text-xl text-navy">{p.title}</p>
              )}
              {mode === "full" ? (
                <p className="mt-4 text-base leading-relaxed text-ink/85">{p.abstract}</p>
              ) : (
                <p className="mt-3 text-sm leading-relaxed text-ink/70 line-clamp-3">
                  {p.abstract}
                </p>
              )}
              {p.tags.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-navy/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>

        {mode === "preview" && ctaLabel && ctaHref ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={inViewOnce}
            transition={{ duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
