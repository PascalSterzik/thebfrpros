"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Unique Mechanism of the Problem (Belief 1). Names the mechanism in the
// avatar's language: standard toolkit cannot produce the stimulus, the 6 to
// 12 week atrophy window predicts re-injury. Sits between Problem and Shift
// so the reader sees the mechanism BEFORE the solution is named.
export default function CertUmpSection() {
  const { ump } = CERTIFICATION;
  return (
    <section className="section-wrap bg-white" aria-label="Unique mechanism of the problem">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={ump.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {ump.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl space-y-6 text-left"
        >
          {ump.body.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-ink/85"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-2xl rounded-lg border-l-4 border-accent bg-cream/80 px-6 py-6"
          aria-label="Pull stat"
        >
          <p className="font-display text-display-md text-navy leading-none">
            {ump.pullStat.value}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink/80">
            {ump.pullStat.label}
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
