"use client";

import { motion } from "framer-motion";
import type { Variant } from "@/content/variants";
import { fadeUp, inViewOnce } from "@/lib/motion";

export default function BridgeBlock({ variant }: { variant: Variant }) {
  return (
    <section className="bg-white py-10 lg:py-14" aria-label="Solution bridge">
      <div className="container-narrow">
        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={fadeUp}
          className="relative mx-auto max-w-2xl text-center"
        >
          <span
            aria-hidden
            className="block font-display text-5xl text-accent leading-none mb-3"
          >
            “
          </span>
          <blockquote className="editorial-quote">{variant.bridge.line}</blockquote>
        </motion.figure>
      </div>
    </section>
  );
}
