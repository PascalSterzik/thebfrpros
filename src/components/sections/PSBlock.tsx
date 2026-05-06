"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function PSBlock({ variant }: { variant: Variant }) {
  return (
    <section className="bg-white pt-2 pb-24 lg:pb-32" aria-label="Postscript">
      <div className="container-narrow">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-prose-narrow border-l-2 border-accent/60 pl-7"
        >
          {variant.ps.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mt-5 first:mt-0 text-lg leading-relaxed text-ink/90"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
