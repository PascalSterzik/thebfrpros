"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import Stars from "@/components/shared/Stars";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Renders a filtered testimonial set. The filter happens on the server in
// the audience page route (so we don't pass a non-serializable RegExp to a
// client component). Items must be plain objects matching the TESTIMONIALS
// shape from lib/constants.ts.

export type AudienceTestimonialItem = {
  name: string;
  role: string;
  quote: string;
};

export default function AudienceTestimonials({
  items,
}: {
  items: ReadonlyArray<AudienceTestimonialItem>;
}) {
  if (items.length === 0) return null;

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
            <SectionLabel label="What they say" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            From practitioners who completed the course
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((t) => (
            <motion.article
              key={t.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <Stars variant="light" size="sm" />
              <p className="mt-5 text-base leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-line pt-5">
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
