"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import type { AudiencePillar } from "@/content/audiences";
import Highlighted from "@/components/shared/Highlighted";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 3-pillar grid for the audience-specific solution. Same card pattern as
// the homepage WhatBFRDoes pillars + the /about Principles cards, so the
// rhythm reads as part of the brand.

export default function AudienceSolution({
  eyebrow,
  headline,
  highlight,
  intro,
  pillars,
}: {
  eyebrow: string;
  headline: string;
  highlight?: string;
  intro: string;
  pillars: ReadonlyArray<AudiencePillar>;
}) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={headline} phrase={highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <p className="small-caps-line text-accent">{p.eyebrow}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{p.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/85">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
