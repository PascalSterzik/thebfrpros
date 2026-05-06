"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import { STATS, TESTIMONIALS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

export default function TestimonialsSection() {
  return (
    <section className="section-wrap navy-field" id="testimonials">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl text-white"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="What clinicians say" variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-balance text-white"
          >
            {STATS.ratingValue} stars from {STATS.reviewCount} certified practitioners.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Three voices from the {STATS.reviewCount}. Each shopped Owens, Smart Tools, or PESI before they shopped us, and each picked us for a specific reason.
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.li
              key={t.name}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm"
            >
              <span aria-hidden className="font-display text-4xl text-accent leading-none">
                “
              </span>
              <blockquote className="mt-3 text-lg leading-relaxed text-white/95">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-display text-base text-white">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/60">
                  {t.role}
                </p>
              </figcaption>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12"
        >
          <PrimaryCTA label={`Join ${STATS.reviewCount}+ certified practitioners`} />
        </motion.div>
      </div>
    </section>
  );
}
