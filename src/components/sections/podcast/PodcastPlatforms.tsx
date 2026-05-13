"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BFR_PODCAST_PLATFORMS } from "@/lib/constants";
import { PODCAST_PLATFORMS_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2a (2026-05-13): real platform brand marks in their canonical
// colors, replacing the prior monoline placeholders. Each mark is
// inlined SVG so no external image asset, no licensing per logo file,
// stays sharp at any size.

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "Apple Podcasts") {
    return (
      <svg width="44" height="44" viewBox="0 0 256 256" aria-hidden>
        <defs>
          <linearGradient id="apIcon" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F452FF" />
            <stop offset="100%" stopColor="#832BC1" />
          </linearGradient>
        </defs>
        <rect width="256" height="256" rx="56" fill="url(#apIcon)" />
        <path
          fill="#fff"
          d="M128 64a44 44 0 0 0-12 86.4V178a12 12 0 0 0 24 0v-27.6A44 44 0 0 0 128 64Zm0 64a20 20 0 1 1 0-40 20 20 0 0 1 0 40Z"
        />
        <path
          fill="#fff"
          d="M168.6 175.2a8 8 0 0 1-5.5-13.8 50 50 0 1 0-70.2 0 8 8 0 1 1-11 11.6 66 66 0 1 1 92.2 0 8 8 0 0 1-5.5 2.2Z"
        />
      </svg>
    );
  }
  if (platform === "Spotify") {
    return (
      <svg width="44" height="44" viewBox="0 0 168 168" aria-hidden>
        <circle cx="84" cy="84" r="84" fill="#1DB954" />
        <path
          fill="#fff"
          d="M122.6 75.4c-22.7-13.5-60.2-14.7-81.9-8.2a5.4 5.4 0 1 1-3.2-10.4c25-7.5 66.4-6.1 92.6 9.4a5.4 5.4 0 1 1-7.5 9.2zm-.6 18.6c-1.7 2.8-5.4 3.6-8.2 1.9-19-11.6-47.8-15-70.3-8.2a6 6 0 1 1-3.4-11.4c25.7-7.8 57.4-4.1 79.2 9.4 2.8 1.6 3.7 5.4 1.9 8.2zm-9.6 17.8a4.8 4.8 0 0 1-6.6 1.6c-16.6-10.1-37.4-12.4-61.9-6.8a4.8 4.8 0 1 1-2.2-9.3c26.8-6.1 49.9-3.5 68.4 7.7 2.3 1.4 3 4.4 1.6 6.7z"
        />
      </svg>
    );
  }
  // YouTube
  return (
    <svg width="44" height="44" viewBox="0 0 256 180" aria-hidden>
      <path
        fill="#FF0000"
        d="M250.7 28.1a32 32 0 0 0-22.6-22.6C208 0 128 0 128 0S48 0 27.9 5.5A32 32 0 0 0 5.3 28.1C0 48.2 0 90 0 90s0 41.8 5.3 61.9a32 32 0 0 0 22.6 22.6C48 180 128 180 128 180s80 0 100.1-5.5a32 32 0 0 0 22.6-22.6C256 131.8 256 90 256 90s0-41.8-5.3-61.9Z"
      />
      <path fill="#fff" d="M102.4 128.6 168.7 90l-66.3-38.6v77.2Z" />
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
              <PlatformIcon platform={p.name} />
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
