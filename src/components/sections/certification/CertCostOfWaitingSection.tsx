"use client";

import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Cost of waiting (Belief 6). Real, external urgency only: search-volume
// growth + patient-demand pressure. No countdown, no seat count, no fake
// scarcity, per brand-guide Forbidden Claims gate and FTC Universal
// Violations rule (certification.complianceNotes[4]).
export default function CertCostOfWaitingSection() {
  const { costOfWaiting } = CERTIFICATION;
  return (
    <section className="section-wrap bg-white" aria-label="Why now and not next year">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={costOfWaiting.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={costOfWaiting.headline} phrase={costOfWaiting.highlight} />
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl space-y-6 text-left"
        >
          {costOfWaiting.body.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-ink/85"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-3xl rounded-lg border-l-4 border-accent bg-cream/70 px-6 py-6"
        >
          <p className="small-caps-line text-accent">Real demand, real data</p>
          <p className="mt-3 text-base leading-relaxed text-ink/90">
            {costOfWaiting.demandStat}
          </p>
        </motion.div>

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-10 mx-auto max-w-3xl rounded-lg border border-line bg-white px-7 py-7"
        >
          <p className="editorial-quote font-quote text-2xl leading-snug text-navy">
            &ldquo;{costOfWaiting.firefighterQuote}&rdquo;
          </p>
          <figcaption className="mt-4 text-sm leading-relaxed text-ink/80">
            {costOfWaiting.firefighterFrame}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
