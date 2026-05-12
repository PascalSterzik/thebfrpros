"use client";

import { motion } from "framer-motion";
import { REVIEWS_STATS } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Reviews stat strip. 4 stats anchored on the rating, review count,
// certified-practitioner count, and the refund ratio. Display-font
// numerals with sentence-case labels — matches the BioStats grid pattern
// for visual consistency across the site.

export default function ReviewsStatStrip() {
  return (
    <section className="bg-white">
      <div className="container-rail py-16 lg:py-20">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 border-y border-line py-10 lg:py-12"
        >
          {REVIEWS_STATS.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-center sm:text-left">
              <dt className="font-display text-5xl sm:text-6xl text-navy leading-none">
                {s.value}
              </dt>
              <dd className="mt-3 stat-label text-[0.7rem]">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
