"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_STORY } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Origin-story narrative. Belief 3 install (equipment-agnostic positioning)
// in prose form, not feature-list form. Pulls from the avatar's recurring
// language without quoting it verbatim ("Half of being a clinician is being
// marketed to by people who used to be clinicians" stays in the avatar sheet).

export default function AboutStory() {
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
            <SectionLabel label={ABOUT_STORY.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {ABOUT_STORY.headline}
          </motion.h2>
          <div className="mt-10 space-y-6">
            {ABOUT_STORY.paragraphs.map((p, i) => (
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
