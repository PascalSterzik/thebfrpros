"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Highlighted from "@/components/shared/Highlighted";
import { TEAM_TRAINING_CLOSER } from "@/content/team-training";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 12 — Final CTA / closer. First person in Nick's voice, calm and
// em-dash-free (the pre-ship em-dash gate applies to composed site copy). The
// P.S. speaks to the staff champion so the page works when forwarded to a boss
// (spec §6.3). CTA opens the qualify form (#start).

export default function TeamTrainingCloser() {
  const c = TEAM_TRAINING_CLOSER;
  return (
    <section className="section-wrap navy-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={c.eyebrow} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white text-balance"
          >
            <Highlighted text={c.headline} phrase={c.highlight} />
          </motion.h2>
          {c.paragraphs.map((p, i) => (
            <motion.p key={i} variants={fadeUp} className="mt-5 text-lg leading-relaxed text-white/85">
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-9">
            <a href="#start" className="btn-primary">
              <span>{c.ctaLabel}</span>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <p className="font-display text-2xl text-white">{c.signatureName}</p>
            <p className="mt-1 text-sm text-white/70">{c.signatureRole}</p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-2xl border-t border-white/15 pt-7 text-left text-base leading-relaxed text-white/75"
          >
            {c.ps}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
