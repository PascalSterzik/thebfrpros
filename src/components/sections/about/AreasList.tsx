"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Generic bullet-list section used across bio pages for "what they cover" /
// "certifications and disciplines" / similar enumerations. Same visual
// rhythm wherever it appears, content passed by the consuming page.

export default function AreasList({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: ReadonlyArray<string>;
}) {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-prose-wide"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {headline}
          </motion.h2>
          <motion.ul variants={stagger} className="mt-10 space-y-4">
            {items.map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start gap-4 border-b border-line pb-4"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-accent"
                />
                <span className="text-base leading-relaxed text-ink/85">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
