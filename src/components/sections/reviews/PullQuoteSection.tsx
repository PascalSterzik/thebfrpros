"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { REVIEWS_PULL_QUOTE } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2c (2026-05-13): the one standalone .editorial-quote pull-quote
// on the page. Lee's competitor-comparison quote in EB Garamond italic,
// generous whitespace, navy field background. Brand-guide.md:
// "Quote font is for STANDALONE quotes only" — this is it.

export default function PullQuoteSection() {
  return (
    <section className="section-wrap navy-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={REVIEWS_PULL_QUOTE.eyebrow} variant="light" />
          </motion.div>
          <motion.blockquote
            variants={fadeUp}
            className="mt-10 editorial-quote text-white"
          >
            &ldquo;{REVIEWS_PULL_QUOTE.quote}&rdquo;
          </motion.blockquote>
          <motion.div variants={fadeUp} className="mt-10">
            <p className="font-display text-2xl text-white">
              {REVIEWS_PULL_QUOTE.attribution.name}
            </p>
            <p className="mt-2 text-sm text-white/70">
              {REVIEWS_PULL_QUOTE.attribution.role}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
