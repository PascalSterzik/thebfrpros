"use client";

import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import Stars from "@/components/shared/Stars";
import { CERTIFICATION } from "@/content/certification";
import { CERTIFICATION_ENROLL_URL, PRICING, STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 1 (2026-05-20, REVISION-01.md §3 + §4): campaign-only final CTA.
// Forks the shared FinalCTABlock so the cert page can:
//   - Route the primary CTA to CERTIFICATION_ENROLL_URL (the campaign-scoped
//     Teachable checkout) instead of the global ENROLL_URL.
//   - Apply its own Highlighted phrase (finalCta.highlight) on the headline.
//     The shared FinalCTABlock hardcodes "which clinic answers" which is
//     not present in the cert finalCta headline, so the shared component
//     would have rendered no highlight at all on /certification.
//   - Render stars as non-clickable (campaign LP has no exits to /reviews).
// Visual pattern intentionally mirrors the shared block so the cert page
// reads as part of the same brand surface.
export default function CertFinalCTABlock() {
  const { finalCta } = CERTIFICATION;
  return (
    <section className="section-wrap navy-field" aria-label="Final call to action">
      <div className="container-narrow text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Last call" variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-2xl text-white text-balance"
          >
            <Highlighted text={finalCta.headline} phrase={finalCta.highlight} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-7 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {finalCta.subhead}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4">
            <a
              href={CERTIFICATION_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-5 sm:px-10 font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white transition hover:bg-accent-deeper text-balance"
              style={{ letterSpacing: "-0.015em" }}
            >
              {finalCta.primary}
            </a>
            {/* Stars non-clickable (no /reviews exit from campaign LP). */}
            <Stars variant="dark" size="md" />
            <p className="text-xs text-white/70">
              {PRICING.guaranteeDays}-day money-back guarantee · 1 of {STATS.certifiedPractitioners} graduates has ever taken it
            </p>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="mt-14 mx-auto max-w-prose-narrow rounded-lg border border-accent/40 bg-accent/[0.08] p-7 text-center"
            aria-label="Cost of inaction"
          >
            <p className="small-caps-line text-accent">A warning</p>
            <p className="mt-3 text-base leading-relaxed text-white/90">
              {finalCta.warning}
            </p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
