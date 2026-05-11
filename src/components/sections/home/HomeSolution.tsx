"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { HOME_SOLUTION } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 7 — The BFR Pros Difference, condensed. Beliefs 3 (cuff bias) +
// 4 (right shape). Awareness 3-4. Three pillars; full comparison lives at
// /get-certified#solution.

export default function HomeSolution() {
  return (
    <section id="difference" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_SOLUTION.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_SOLUTION.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-ink/80"
          >
            {HOME_SOLUTION.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {HOME_SOLUTION.pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.12)]"
            >
              <h3 className="font-display text-2xl text-navy text-balance">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/80">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-base leading-relaxed text-ink/75">{HOME_SOLUTION.closing}</p>
          <Link
            href={HOME_SOLUTION.ctaHref}
            className="mt-5 inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
          >
            {HOME_SOLUTION.ctaLabel}
            <span aria-hidden>{"→"}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
