"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BFR_PODCAST_PLATFORMS } from "@/lib/constants";
import { PODCAST_PLATFORMS_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 3-card platform CTA. Each card opens the platform feed for the show.
// Same card pattern as ContactWays so tap targets read consistent
// across the site.

function PlatformIcon({ platform }: { platform: string }) {
  // Brand-neutral monoline icons (Apple Podcasts / Spotify / YouTube) —
  // avoids licensing/colour issues with platform logos while staying
  // visually distinct per card.
  if (platform === "Apple Podcasts") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M9.5 14a3 3 0 0 0 5 0M8.2 16.5a5.5 5.5 0 0 0 7.6 0M11 18.5a1 1 0 0 0 2 0"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }
  if (platform === "Spotify") {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 9c3-1 7-1 10 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7.5 12.5c2.5-.8 6-.5 8.5 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 16c2-.7 4.5-.5 6.5.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.5v5l5-2.5z" fill="currentColor" />
    </svg>
  );
}

export default function PodcastPlatforms() {
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
            <SectionLabel label={PODCAST_PLATFORMS_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {PODCAST_PLATFORMS_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PODCAST_PLATFORMS_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-3 mx-auto max-w-4xl"
        >
          {BFR_PODCAST_PLATFORMS.map((p) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              className="group flex flex-col items-center rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent ring-1 ring-line">
                <PlatformIcon platform={p.name} />
              </span>
              <p className="mt-5 font-display text-2xl text-navy group-hover:text-accent transition">
                {p.name}
              </p>
              <p className="mt-2 text-xs text-muted uppercase tracking-[0.16em]">
                Open feed
                <span aria-hidden className="ml-1">↗</span>
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
