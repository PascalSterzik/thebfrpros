"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function DreamDeepBlock({ variant }: { variant: Variant }) {
  return (
    <section className="relative section-wrap" id="dream-deep">
      <div className="absolute inset-x-0 top-0 mx-auto max-w-3xl px-6">
        <div className="hairline" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={variant.dreamDeep.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-navy text-balance"
          >
            {variant.dreamDeep.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.8 }}
          className="mt-12 mx-auto max-w-prose-narrow space-y-7 text-lg leading-relaxed text-ink"
        >
          {variant.dreamDeep.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
