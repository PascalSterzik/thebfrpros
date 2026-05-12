"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import type { AudienceProblem as AudienceProblemItem } from "@/content/audiences";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 4-item pain stack. Each item is a title + body paragraph. Visually a
// numbered grid so the four pains read as a sequence the visitor recognizes
// from their own week.

export default function AudienceProblem({
  eyebrow,
  headline,
  items,
}: {
  eyebrow: string;
  headline: string;
  items: ReadonlyArray<AudienceProblemItem>;
}) {
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
            <SectionLabel label={eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {headline}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <p className="small-caps-line text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl text-navy">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-ink/85">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
