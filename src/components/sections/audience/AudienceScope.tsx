"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Narrow scope-statement card. Belief 3 install for the audience: BFR is
// inside the audience's scope of practice. Anchors are the governing body
// (APTA / NATA / professional context) + state-level CEU approvals.

export default function AudienceScope({
  eyebrow,
  headline,
  body,
  citationLabel,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  citationLabel: string;
}) {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.article
            variants={fadeUp}
            className="rounded-lg border-l-4 border-accent bg-white p-7 lg:p-9 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <SectionLabel label={eyebrow} />
            <h2 className="mt-4 font-display text-display-md text-navy text-balance">
              {headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/85">{body}</p>
            <p className="mt-5 small-caps-line text-muted text-xs">
              Source: {citationLabel}
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
