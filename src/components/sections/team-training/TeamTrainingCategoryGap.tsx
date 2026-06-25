"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_CATEGORY_GAP } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 3 — The category gap. One question: "Why isn't BFR already something
// my whole team delivers?" Sets up the shift; no CTA.

export default function TeamTrainingCategoryGap() {
  const c = TEAM_TRAINING_CATEGORY_GAP;
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
            <SectionLabel label={c.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-center font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={c.headline} phrase={c.highlight} />
          </motion.h2>
          {c.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink/80">
              {p}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
