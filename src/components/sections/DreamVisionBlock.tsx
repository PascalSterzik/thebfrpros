"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function DreamVisionBlock({ variant }: { variant: Variant }) {
  return (
    <section className="section-wrap bg-white" id="dream">
      <div className="container-narrow text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={variant.dreamVision.label} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {variant.dreamVision.headline}
          </motion.h2>
          <motion.div
            variants={fadeUp}
            className="mt-10 mx-auto max-w-prose-narrow text-left space-y-6 text-lg leading-relaxed text-ink"
          >
            {variant.dreamVision.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
