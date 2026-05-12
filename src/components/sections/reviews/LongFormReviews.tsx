"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Stars from "@/components/shared/Stars";
import { TESTIMONIALS } from "@/lib/constants";
import { REVIEWS_EXPERT_INTRO } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Long-form expert reviews. Pulls from the canonical TESTIMONIALS array
// in lib/constants.ts so any future addition to that array (verified
// course-grad clinic owner / consultant quotes) automatically surfaces
// here. Cards are EB-Garamond editorial-quote serif italic for the
// pull-quote feel; the rest of the card stays in DM Sans.

export default function LongFormReviews() {
  return (
    <section className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={REVIEWS_EXPERT_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {REVIEWS_EXPERT_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {REVIEWS_EXPERT_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-7 lg:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <Stars variant="light" size="sm" />
              <p className="mt-5 editorial-quote text-navy-deeper">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto pt-6 border-t border-line">
                <p className="font-display text-lg text-navy">{t.name}</p>
                <p className="mt-1 text-sm text-muted">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
