"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_TOPIC_EDITOR } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2b (2026-05-13): Dr. Rolnick's editorial roles at Frontiers. Two
// research-collection volumes (2024-2025, 2025-2026) plus a Community
// Reviewer (Editor) role. Major credibility signal not previously
// surfaced on the site.

export default function TopicEditorBlock() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Editorial roles" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            Topic Editor for the BFR device-features collection at Frontiers
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            Dr. Rolnick serves as Topic Editor at {ROLNICK_TOPIC_EDITOR.publisher} for the {ROLNICK_TOPIC_EDITOR.collection} research collection across two consecutive volumes. The role shapes which methodological papers get accepted into the literature on cuff design, autoregulation, and pressure standardization.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 mx-auto max-w-3xl"
        >
          {ROLNICK_TOPIC_EDITOR.volumes.map((v) => (
            <motion.div
              key={v.label}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <span className="small-caps-line text-muted text-xs">
                Research collection
              </span>
              <p className="mt-3 font-display text-2xl text-navy leading-tight">
                {v.label}
              </p>
              <p className="mt-2 text-sm text-ink/80">{v.years}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 mx-auto max-w-3xl text-sm text-muted text-center"
        >
          Also serves as {ROLNICK_TOPIC_EDITOR.alsoCommunityReviewer}.
        </motion.p>
      </div>
    </section>
  );
}
