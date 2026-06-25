"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_HOW_IT_WORKS } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 6 — Why it sticks (the two-part model). "Why will this stick when other
// CE didn't?" The origin story: live workshops hit a lecture ceiling, so the
// foundation moved online and the live time became pure hands-on application.
// "It sticks" stays qualitative; no retention percentage (spec §9.3.7). The
// pull-quote is a graduate of the included course, verbatim, course-context proof.

export default function TeamTrainingHowItWorks() {
  const h = TEAM_TRAINING_HOW_IT_WORKS;
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
            <SectionLabel label={h.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-center font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={h.headline} phrase={h.highlight} />
          </motion.h2>
          {h.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-ink/80">
              {p}
            </motion.p>
          ))}

          <motion.figure
            variants={fadeUp}
            className="mt-10 border-l-2 border-accent/40 pl-6 text-left"
          >
            <blockquote className="editorial-quote">{h.pullQuote}</blockquote>
            <figcaption className="mt-3 text-sm text-muted">
              A graduate of the included Introduction to BFR course
            </figcaption>
          </motion.figure>

          <motion.div variants={fadeUp} className="mt-9 flex justify-center">
            <a href="#start" className="btn-primary">
              <span>{h.ctaLabel}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
