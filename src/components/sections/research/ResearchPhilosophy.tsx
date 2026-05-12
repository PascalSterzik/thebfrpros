"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { RESEARCH_PHILOSOPHY } from "@/content/research";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// How the research feeds the curriculum. Narrative prose section, prose
// width, matches the BioBody pattern used on the bio pages.

export default function ResearchPhilosophy() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={RESEARCH_PHILOSOPHY.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {RESEARCH_PHILOSOPHY.headline}
          </motion.h2>
          <div className="mt-10 space-y-6">
            {RESEARCH_PHILOSOPHY.paragraphs.map((p, i) => (
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
