"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Stars from "@/components/shared/Stars";
import { STUDENT_TESTIMONIALS } from "@/lib/constants";
import { REVIEWS_STUDENT_INTRO } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 13 short student testimonials in a 3-column grid. Lighter card pattern
// than the long-form expert reviews so the page rhythm reads as a step
// down (long-form -> short-form) without losing weight.

export default function StudentReviewsGrid() {
  return (
    <section className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={REVIEWS_STUDENT_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {REVIEWS_STUDENT_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {REVIEWS_STUDENT_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {STUDENT_TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <Stars variant="light" size="sm" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-5 font-display text-base text-navy border-t border-line pt-4">
                {t.name}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
