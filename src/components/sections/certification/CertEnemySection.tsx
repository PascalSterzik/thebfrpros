"use client";

import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// The Enemy section, Beliefs 3 + 4. Vendor-neutral reveal, drawer-cuff named
// out loud. Core of the Big Idea. The verbatim avatar quote anchors the
// section so the visceral pain leads into the named reveal.
export default function CertEnemySection() {
  const { enemy } = CERTIFICATION;
  return (
    <section className="section-wrap navy-field" aria-label="The part nobody says out loud">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={enemy.label} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-2xl text-white text-balance"
          >
            <Highlighted text={enemy.headline} phrase={enemy.highlight} />
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl space-y-6 text-left"
        >
          {enemy.body.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-lg leading-relaxed text-white/85"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="mt-12 mx-auto max-w-2xl rounded-lg border border-accent/40 bg-accent/[0.08] px-7 py-6"
        >
          <p
            className="editorial-quote font-quote text-2xl leading-snug text-white/95"
          >
            &ldquo;{enemy.voiceQuote}&rdquo;
          </p>
          <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-white/55">
            Forum quote, named verbatim per source-of-truth rule
          </figcaption>
        </motion.figure>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-2xl space-y-6 text-left"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-white"
          >
            {enemy.namedReveal}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-white/85"
          >
            {enemy.drawerLine}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
