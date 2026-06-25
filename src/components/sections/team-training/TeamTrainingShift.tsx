"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_SHIFT } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 4 — The shift (the Big Idea in full). "What is the better way?" The
// unit changes from a seat to a team. Inline CTA opens the qualify form (#start).

export default function TeamTrainingShift() {
  const s = TEAM_TRAINING_SHIFT;
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="text-center">
            <SectionLabel label={s.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-center font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={s.headline} phrase={s.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-center text-lg font-semibold leading-relaxed text-navy"
          >
            {s.subhead}
          </motion.p>
          {s.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink/80">
              {p}
            </motion.p>
          ))}
          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <a href="#start" className="btn-primary">
              <span>{s.ctaLabel}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
