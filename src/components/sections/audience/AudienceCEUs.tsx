"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import type { AudienceCEUItem } from "@/content/audiences";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Audience-specific CEU coverage. Pattern matches /get-certified's
// CEUSection but compressed: this is a "yes this counts for your renewal"
// reassurance section, not the deep CEU-state-by-state breakdown that lives
// at /get-certified/ceu-credits.

export default function AudienceCEUs({
  eyebrow,
  headline,
  intro,
  items,
}: {
  eyebrow: string;
  headline: string;
  intro: string;
  items: ReadonlyArray<AudienceCEUItem>;
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
            {headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {intro}
          </motion.p>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 mx-auto max-w-3xl divide-y divide-line border-y border-line"
        >
          {items.map((item) => (
            <motion.div
              key={item.body}
              variants={fadeUp}
              className="py-6 grid gap-2 sm:grid-cols-[1fr_2fr] sm:items-baseline sm:gap-8"
            >
              <dt className="font-display text-xl text-navy">{item.body}</dt>
              <dd className="text-base leading-relaxed text-ink/85">{item.detail}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
