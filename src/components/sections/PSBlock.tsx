"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function PSBlock({ variant }: { variant: Variant }) {
  return (
    <section className="bg-white pt-16 lg:pt-20 pb-24 lg:pb-32" aria-label="Postscript">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-2xl lg:border-l-2 lg:border-accent/40 lg:pl-8"
        >
          {variant.ps.map((line, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="mt-6 first:mt-0 text-base sm:text-lg leading-relaxed text-ink/90"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
