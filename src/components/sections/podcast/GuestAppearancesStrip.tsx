"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PODCASTS } from "@/lib/constants";
import { PODCAST_GUEST_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2a (2026-05-13): rebuilt from RTL marquee into clickable card
// grid. A marquee is wrong-shape for discovery (visitors can't pause +
// pick); a card grid is the right shape. Each card shows the show's
// cover image + name. Per-episode deep-link URLs aren't in source data
// yet — flagged for Pascal supply; until then the cards render as
// static proof and we'll wire href onto ROLNICK_PODCASTS entries as
// they arrive.

export default function GuestAppearancesStrip() {
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
            <SectionLabel label={PODCAST_GUEST_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PODCAST_GUEST_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PODCAST_GUEST_INTRO.intro}
          </motion.p>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {ROLNICK_PODCASTS.map((show) => (
            <motion.li
              key={show.name}
              variants={fadeUp}
              className="flex flex-col items-center text-center rounded-lg border border-line bg-white p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <span className="relative block h-20 w-20 overflow-hidden rounded-md ring-1 ring-line">
                <Image
                  src={show.src}
                  alt={`${show.name} cover`}
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              </span>
              <p className="mt-4 font-display text-sm text-navy leading-tight">
                {show.name}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
