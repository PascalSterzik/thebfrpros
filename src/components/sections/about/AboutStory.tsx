"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_STORY } from "@/content/about";
import { STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2d (2026-05-13): rebuilt as a 2-column grid. The prior layout
// hugged the left rail (max-w-prose-wide without mx-auto) and left
// big whitespace on the right of the 76rem container-rail. New layout
// puts the existing narrative in the left column (7 of 12) and an
// anchored stat-card on the right (5 of 12) — same Belief-3 install
// in prose form, plus the numerical anchors that the narrative names.
// Mobile stacks the stats above the narrative so the visitor gets the
// proof points first, then the explanation.

const ABOUT_STATS = [
  { value: STATS.certifiedPractitioners, label: "Certified practitioners" },
  { value: STATS.publications, label: "Peer-reviewed BFR publications" },
  { value: "60+", label: "Continuing-ed sessions taught" },
  { value: "26+", label: "Journals peer-reviewed" },
] as const;

export default function AboutStory() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-7 max-w-prose-wide">
            <motion.div variants={fadeUp}>
              <SectionLabel label={ABOUT_STORY.eyebrow} />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-5 font-display text-display-xl text-navy text-balance"
            >
              {ABOUT_STORY.headline}
            </motion.h2>
            <div className="mt-10 space-y-6">
              {ABOUT_STORY.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-ink/85"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-8 lg:p-10 lg:sticky lg:top-28 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <p className="small-caps-line text-muted">
                The proof, in numbers
              </p>
              <dl className="mt-6 space-y-6">
                {ABOUT_STATS.map((s) => (
                  <div key={s.label} className="border-b border-line pb-5 last:border-b-0 last:pb-0">
                    <dt className="font-display text-5xl text-accent leading-none">
                      {s.value}
                    </dt>
                    <dd className="mt-2 text-sm text-ink/80 leading-snug">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-xs uppercase tracking-[0.16em] text-muted">
                Built on the literature, taught from the clinic floor.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
