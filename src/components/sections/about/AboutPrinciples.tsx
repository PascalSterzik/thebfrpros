"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_PRINCIPLES } from "@/content/about";
import Highlighted from "@/components/shared/Highlighted";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Three brand principles. Equipment-agnostic / Research-led / Implementation-first.
// Card pattern matches WhatBFRDoes pillar grid so the visual rhythm reads as
// "established" by the time the visitor reaches this section.

export default function AboutPrinciples() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={ABOUT_PRINCIPLES.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            <Highlighted text={ABOUT_PRINCIPLES.headline} phrase={ABOUT_PRINCIPLES.highlight} />
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {ABOUT_PRINCIPLES.principles.map((p) => (
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
