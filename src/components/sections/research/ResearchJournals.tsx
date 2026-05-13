"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_JOURNAL_CARDS } from "@/lib/constants";
import { RESEARCH_JOURNALS } from "@/content/research";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2b (2026-05-13): rebuilt from the prior 6-logo RTL marquee into
// a 6-card grid. Cards carry the journal name + Rolnick publication-count
// badge + a one-line note on which BFR threads Rolnick has published
// there + outbound link to a representative article in that journal.
// The marquee on the bio page (RolnickJournals) keeps the marquee for
// that context; this one's job is "see WHERE the work appears" which a
// browsable grid does better than a scrolling strip.

export default function ResearchJournals() {
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
            <SectionLabel label={RESEARCH_JOURNALS.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {RESEARCH_JOURNALS.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {RESEARCH_JOURNALS.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ROLNICK_JOURNAL_CARDS.map((j) => (
            <motion.li
              key={j.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="small-caps-line text-muted text-xs">
                  Journal of record
                </span>
                <span className="font-display text-3xl text-accent leading-none">
                  {j.count}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl text-navy leading-tight">
                {j.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/85 flex-1">
                {j.note}
              </p>
              <a
                href={j.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-xs uppercase tracking-[0.16em] text-accent font-semibold hover:text-accent-deeper transition"
              >
                Read a Rolnick paper there
                <span aria-hidden className="ml-1">↗</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
