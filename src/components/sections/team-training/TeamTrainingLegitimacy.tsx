"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_LEGITIMACY } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 5 — Is it legit? "Is BFR a fad, or worth building a service around?"
// Counts only, never "most-published" (spec §9.1). The third paragraph surfaces
// the honest limit (BFR matches heavy lifting for size, not peak strength). No CTA.

export default function TeamTrainingLegitimacy() {
  const l = TEAM_TRAINING_LEGITIMACY;
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-center">
            <SectionLabel label={l.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-center font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={l.headline} phrase={l.highlight} />
          </motion.h2>
          {l.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink/80">
              {p}
            </motion.p>
          ))}

          <motion.dl
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8"
          >
            {l.stats.map((s) => (
              <div key={s.label} className="stat-block text-center">
                <dt className="stat-value">{s.value}</dt>
                <dd className="stat-label">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
