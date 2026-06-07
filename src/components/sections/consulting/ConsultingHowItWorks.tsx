"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_HOW } from "@/content/consulting";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// How it works. Three steps, one question answered: "what is the path from
// here to talking with Nick?"

export default function ConsultingHowItWorks() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONSULTING_HOW.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {CONSULTING_HOW.headline}
          </motion.h2>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3"
        >
          {CONSULTING_HOW.steps.map((step) => (
            <motion.li
              key={step.n}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-7"
            >
              <span className="font-display text-display-md text-accent">{step.n}</span>
              <h3 className="mt-3 font-display text-2xl text-navy">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
