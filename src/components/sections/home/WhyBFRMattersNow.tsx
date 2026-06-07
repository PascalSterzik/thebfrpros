"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { WHY_BFR_MATTERS_NOW } from "@/content/home";
import Highlighted from "@/components/shared/Highlighted";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 5 — Belief 1 evidence stack. 60-year history, mainstream adoption,
// and the strength stat as the closing punch. Awareness 2-3.

export default function WhyBFRMattersNow() {
  return (
    <section id="why-now" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={WHY_BFR_MATTERS_NOW.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={WHY_BFR_MATTERS_NOW.headline} phrase={WHY_BFR_MATTERS_NOW.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {WHY_BFR_MATTERS_NOW.intro}
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 mx-auto max-w-4xl grid gap-6 md:grid-cols-3"
        >
          {WHY_BFR_MATTERS_NOW.proofPoints.map((p) => (
            <motion.li
              key={p.stat}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <span
                className="font-display text-navy leading-none block"
                style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
              >
                {p.stat}
              </span>
              <h3 className="mt-4 font-display text-xl text-navy text-balance">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/80">{p.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 mx-auto max-w-3xl text-center text-base leading-relaxed text-ink/80"
        >
          {WHY_BFR_MATTERS_NOW.closing}
        </motion.p>
      </div>
    </section>
  );
}
