"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import { fadeUp, inViewOnce } from "@/lib/motion";

export default function BridgeBlock({ variant }: { variant: Variant }) {
  return (
    <section className="bg-white pb-2 pt-2" aria-label="Solution bridge">
      <div className="container-narrow">
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="relative mx-auto max-w-prose-narrow rounded-2xl border-l-2 border-accent bg-cream/60 px-7 py-8 text-left"
        >
          <span
            aria-hidden
            className="absolute -left-3 top-6 font-display text-4xl text-accent leading-none"
          >
            “
          </span>
          <blockquote className="editorial-quote">{variant.bridge.line}</blockquote>
        </motion.figure>
      </div>
    </section>
  );
}
