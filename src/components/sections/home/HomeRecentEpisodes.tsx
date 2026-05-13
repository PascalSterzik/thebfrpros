"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BFR_PODCAST_EPISODES } from "@/lib/constants";
import { HOME_RECENT_EPISODES } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): homepage brand-richness strip — 3 most recent
// BFR Better-For-Results episodes. Cards are eye-catch only: tap routes
// to /podcast (single, scannable exit), no inline iframe. YouTube
// thumbnails via the stable i.ytimg.com hqdefault.jpg URL pattern.

export default function HomeRecentEpisodes() {
  const recent = [...BFR_PODCAST_EPISODES]
    .sort((a, b) => b.number - a.number)
    .slice(0, 3);

  return (
    <section id="recent-episodes" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_RECENT_EPISODES.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_RECENT_EPISODES.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {HOME_RECENT_EPISODES.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {recent.map((ep) => (
            <motion.li key={ep.number} variants={fadeUp}>
              <Link
                href={HOME_RECENT_EPISODES.ctaHref}
                aria-label={`Listen to Episode ${ep.number}: ${ep.title}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-cream shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
              >
                <div className="relative aspect-video bg-navy-deeper overflow-hidden">
                  <Image
                    src={`https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition group-hover:brightness-75"
                    unoptimized
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_14px_28px_-10px_rgba(173,26,39,0.6)] transition group-hover:scale-110">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                        className="ml-0.5"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <p className="small-caps-line text-muted text-xs">
                    Episode {ep.number}
                  </p>
                  <h3 className="font-display text-lg text-navy leading-tight group-hover:text-accent transition">
                    {ep.title}
                  </h3>
                  <p className="mt-1 inline-block self-start rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-navy/70">
                    {ep.topic}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-10 text-center">
          <Link
            href={HOME_RECENT_EPISODES.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
          >
            {HOME_RECENT_EPISODES.ctaLabel}
            <span aria-hidden>{` (${BFR_PODCAST_EPISODES.length})`}</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
