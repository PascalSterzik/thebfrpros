"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PODCASTS } from "@/lib/constants";
import { PRESS_PODCASTS_INTRO } from "@/content/press";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): /press page section #4. Card grid of 15 podcasts
// that hosted Nick as a guest. Adapted from GuestAppearancesStrip on
// /podcast (same data, same shape). Per-episode deep-link URLs aren't
// in source data yet — when Pascal supplies them, wire href onto each
// ROLNICK_PODCASTS entry and add a Listen-on-YouTube CTA per card.

export default function PressPodcasts() {
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
            <SectionLabel label={PRESS_PODCASTS_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PRESS_PODCASTS_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PRESS_PODCASTS_INTRO.intro}
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
            <motion.li key={show.name} variants={fadeUp}>
              <a
                href={show.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Listen to Dr. Rolnick on ${show.name}`}
                className="group flex h-full flex-col items-center text-center rounded-lg border border-line bg-cream p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
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
                <p className="mt-4 font-display text-sm text-navy leading-tight group-hover:text-accent transition">
                  {show.name}
                </p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-muted">
                  Listen
                  <span aria-hidden className="ml-1 text-accent">↗</span>
                </p>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
