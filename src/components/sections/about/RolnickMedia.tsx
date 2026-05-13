"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PERSONAL_MEDIA } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2f (2026-05-13) — fixes gotcha 71/72 on the bio page. The prior
// version of this component reused the homepage FEATURED_IN modality
// logos under a tighter "Dr. Rolnick's BFR work has reached mainstream
// and clinical press" headline. Per brand-guide.md modality-vs-brand
// discipline, that's a fabrication: the FEATURED_IN bar is a MODALITY-
// level claim (outlets that have covered BFR-the-modality) and cannot
// stretch to "Dr. Rolnick's work appeared in [those same outlets]"
// without verifying each one personally featured Nick.
//
// New version uses ROLNICK_PERSONAL_MEDIA — 18 entries with the specific
// article title + date verified against Assets/CV Nicholas Rolnick.pdf
// and Research/rolnick-cv-facts.md. Card grid with one entry per
// verified piece. Brand-level claim, defensible because each card
// names the article Nick was personally featured in.

export default function RolnickMedia() {
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
            <SectionLabel label="In the press" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            Where Dr. Rolnick has been personally featured
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            Each line is a specific article — title, outlet, date. Distinct from the homepage Featured-In bar, which is a modality-level claim about where BFR-the-modality has been covered.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {ROLNICK_PERSONAL_MEDIA.map((m) => (
            <motion.li
              key={`${m.outlet}-${m.date}`}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-base text-navy">
                  {m.outlet}
                </span>
                <span className="small-caps-line text-muted text-[0.65rem]">
                  {m.date}
                </span>
              </div>
              <p className="mt-3 text-sm leading-snug text-ink/85">
                &ldquo;{m.headline}&rdquo;
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
