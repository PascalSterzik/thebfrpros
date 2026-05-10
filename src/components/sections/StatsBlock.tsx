"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { STATS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Dedicated stats section per §D.5. Big numerals, descriptive labels, scroll
// stagger reveal. Mobile is 2x2 (4 numbers fit even on small screens).
const STAT_TILES = [
  {
    value: STATS.publications,
    label: "peer-reviewed BFR publications",
    sub: "by the lead instructor, Dr. Nicholas Rolnick",
  },
  {
    value: STATS.ceus,
    label: "CEUs in one purchase",
    sub: "BOC + NY State PT + NJ State PT",
  },
  {
    value: `${STATS.ratingValue}★`,
    label: `from ${STATS.reviewCount}+ reviews`,
    sub: `${STATS.certifiedPractitioners} graduates`,
  },
  {
    value: STATS.clinicsTrusted,
    label: "clinics trust the curriculum",
    sub: "Ivy Rehab Network and others",
  },
];

export default function StatsBlock() {
  return (
    <section className="section-wrap cream-field" aria-label="Authority by the numbers">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="Authority by the numbers" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy"
          >
            Four numbers that don't show up on any other BFR certification page.
          </motion.h2>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10"
        >
          {STAT_TILES.map((tile) => (
            <motion.div
              key={tile.label}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-6 sm:p-8 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <dt
                className="font-display text-navy leading-none"
                style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
              >
                {tile.value}
              </dt>
              <dd className="mt-3 small-caps-line text-accent">{tile.label}</dd>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tile.sub}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
