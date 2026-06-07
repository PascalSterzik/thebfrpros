"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { CONSULTING_FAQ } from "@/content/consulting";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Small FAQ. Five tight objection-handlers. Also emitted as FAQPage JSON-LD by
// buildConsultingSchemaGraph. Questions render in DM Sans semibold (readable)
// rather than Compacta caps; the section H2 carries the display type.

export default function ConsultingFaq() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={CONSULTING_FAQ.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {CONSULTING_FAQ.headline}
          </motion.h2>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto mt-12 max-w-3xl divide-y divide-line"
        >
          {CONSULTING_FAQ.items.map((item) => (
            <motion.div key={item.q} variants={fadeUp} className="py-6 first:pt-0">
              <dt className="font-body text-lg font-semibold text-navy">{item.q}</dt>
              <dd className="mt-3 text-base leading-relaxed text-ink/80">{item.a}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
