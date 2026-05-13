"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import {
  ROLNICK_INTERVIEWS,
  ROLNICK_PERSONAL_MEDIA,
  ROLNICK_PODCASTS,
} from "@/lib/constants";
import { HOME_RECENT_MEDIA } from "@/content/home";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): homepage media-cluster preview. One card from
// each of the three /press buckets so a Stage-2 visitor sees that Nick
// has been a source in mainstream press, on camera, and on independent
// podcasts. Tap on any card routes to /press for the full catalog (no
// inline player on the homepage).

export default function HomeRecentMedia() {
  // Pick: most recent personal media feature (first entry is newest by date).
  const topFeature = ROLNICK_PERSONAL_MEDIA[0];
  // Marquee long-form interview (Pascal-supplied as the lead in ROLNICK_INTERVIEWS).
  const topInterview = ROLNICK_INTERVIEWS[0];
  // Marquee podcast appearance — (P)REHAB, the most recognizable PT brand in the strip.
  const topPodcast = ROLNICK_PODCASTS[0];

  return (
    <section id="recent-media" className="section-wrap bg-white">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_RECENT_MEDIA.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_RECENT_MEDIA.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {HOME_RECENT_MEDIA.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.li variants={fadeUp}>
            <Link
              href={HOME_RECENT_MEDIA.ctaHref}
              className="group flex h-full flex-col rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <p className="small-caps-line text-accent text-xs">In the press</p>
              <p className="mt-3 font-display text-base text-navy">{topFeature.outlet}</p>
              <p className="mt-3 flex-1 text-sm leading-snug text-ink/85">
                &ldquo;{topFeature.headline}&rdquo;
              </p>
              <p className="mt-5 small-caps-line text-muted text-[0.65rem]">{topFeature.date}</p>
            </Link>
          </motion.li>

          <motion.li variants={fadeUp}>
            <Link
              href={HOME_RECENT_MEDIA.ctaHref}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-cream shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <div className="relative aspect-video bg-navy-deeper overflow-hidden">
                <Image
                  src={`https://i.ytimg.com/vi/${topInterview.youtubeId}/hqdefault.jpg`}
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
                <p className="small-caps-line text-accent text-xs">Long-form interview</p>
                <p className="font-display text-base text-navy leading-tight">{topInterview.title}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-muted">{topInterview.host}</p>
              </div>
            </Link>
          </motion.li>

          <motion.li variants={fadeUp}>
            <Link
              href={HOME_RECENT_MEDIA.ctaHref}
              className="group flex h-full flex-col items-center text-center rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)] transition hover:border-accent/40 hover:shadow-[0_18px_40px_-22px_rgba(25,55,99,0.32)]"
            >
              <p className="self-start small-caps-line text-accent text-xs">Podcast guest</p>
              <span className="relative mt-4 block h-24 w-24 overflow-hidden rounded-md ring-1 ring-line bg-white">
                <Image
                  src={topPodcast.src}
                  alt={`${topPodcast.name} cover`}
                  fill
                  sizes="96px"
                  className="object-contain p-2"
                />
              </span>
              <p className="mt-4 font-display text-base text-navy leading-tight">
                {topPodcast.name}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-muted">
                + 14 more on the press page
              </p>
            </Link>
          </motion.li>
        </motion.ul>

        <div className="mt-10 text-center">
          <Link
            href={HOME_RECENT_MEDIA.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
          >
            {HOME_RECENT_MEDIA.ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
