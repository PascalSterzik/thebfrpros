"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Shared bio-page narrative section. eyebrow + headline + 3-4 paragraphs.
// Used by both bio sub-pages.

export default function BioBody({
  eyebrow,
  headline,
  paragraphs,
}: {
  eyebrow: string;
  headline: string;
  paragraphs: ReadonlyArray<string>;
}) {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-prose-wide"
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
          <div className="mt-10 space-y-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-base leading-relaxed text-ink/85"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
