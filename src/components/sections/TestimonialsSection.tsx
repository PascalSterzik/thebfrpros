"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import PrimaryCTA from "@/components/shared/PrimaryCTA";
import Stars from "@/components/shared/Stars";
import { STATS, VIDEO_TESTIMONIALS } from "@/lib/constants";
import { STUDENT_TESTIMONIALS } from "@/content/student-reviews";
import {
  StarBar,
  formatDate,
  type WallEntry,
} from "@/components/sections/reviews/WallOfLove";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Pascal review (2026-05-23): the 3 long-form expert quotes (Lee / Whyte /
// Toderico) moved out into TopTestimonials, rendered right under the brand
// CredibilityBar. The 4th expert (Nightingale, no photo) is no longer
// rendered on /get-certified. This section is now the deep social-proof
// block: 5 video testimonials + a paginated written-review wall styled for
// the dark navy-field background.
//
// Mirrors the King-Kong WallOfLove pattern from /reviews but with
// PAGE_SIZE=9 (the /reviews wall uses 99) and pulls only from
// STUDENT_TESTIMONIALS, since the 3 long-form TESTIMONIALS already render
// above in TopTestimonials.

const PAGE_SIZE = 9;
const FALLBACK_DATE = "2023-03-01";

type CardSpec = {
  key: string;
  name: string;
  role: string;
  poster: string;
  embedSrc: string;
  animated?: { webm: string; mp4: string };
};

const VIDEO_CARDS: CardSpec[] = VIDEO_TESTIMONIALS.map((v) => ({
  key: v.veedId,
  name: v.name,
  role: v.role,
  poster: v.poster,
  embedSrc: `https://www.veed.io/embed/${v.veedId}?watermark=0&color=blue&sharing=0&title=0`,
  animated: v.animated,
}));

function VideoCard({ card }: { card: CardSpec }) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Same IntersectionObserver gating as the shared VideoPoster: play while
  // on-screen, pause off-screen, skip entirely for prefers-reduced-motion.
  useEffect(() => {
    const el = videoRef.current;
    if (!card.animated || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [card.animated]);

  return (
    <motion.li
      variants={fadeUp}
      className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm"
    >
      <div className="relative aspect-video bg-black/40">
        {active ? (
          <iframe
            src={card.embedSrc}
            title={`Video testimonial from ${card.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play testimonial from ${card.name}`}
            className="group absolute inset-0 h-full w-full"
          >
            {card.animated ? (
              <video
                ref={videoRef}
                poster={card.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition group-hover:brightness-75"
              >
                <source src={card.animated.webm} type="video/webm" />
                <source src={card.animated.mp4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={card.poster}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition group-hover:brightness-75"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-accent text-white shadow-[0_14px_28px_-10px_rgba(173,26,39,0.6)] transition group-hover:scale-110">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                  className="ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      <div className="px-5 py-4">
        <p className="font-display text-lg text-white leading-tight">{card.name}</p>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
          {card.role}
        </p>
      </div>
    </motion.li>
  );
}

export default function TestimonialsSection() {
  const entries = useMemo<WallEntry[]>(
    () =>
      STUDENT_TESTIMONIALS.map((t, i) => ({
        id: `s-${i}-${t.name}`,
        name: t.name,
        quote: t.quote,
        date: "date" in t ? (t as { date: string }).date : FALLBACK_DATE,
        rating: "rating" in t ? (t as { rating: number }).rating : 5,
      })).sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );
  const [shown, setShown] = useState(PAGE_SIZE);

  const visible = entries.slice(0, shown);
  const remaining = entries.length - shown;
  const hasMore = remaining > 0;

  return (
    <section className="section-wrap navy-field" id="testimonials">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="What clinicians say" variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white"
          >
            {STATS.ratingValue} stars from {STATS.reviewCount}+ reviews,{" "}
            {STATS.certifiedPractitioners} certified practitioners
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-6 flex justify-center">
            <Stars variant="dark" size="md" linkTo="/reviews" />
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            Five video testimonials and {STATS.reviewCount}+ written reviews from the{" "}
            {STATS.certifiedPractitioners} certified practitioners.
          </motion.p>
        </motion.div>

        {/* 5 video testimonials. 3-column grid on desktop with cards 4 + 5
            centered on row 2, matching /certification's CertVideoTestimonials
            and /reviews's VideoTestimonials grids. */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 [&>li:nth-child(4)]:lg:col-start-2 [&>li:nth-child(5)]:lg:col-start-3"
        >
          {VIDEO_CARDS.map((card) => (
            <VideoCard key={card.key} card={card} />
          ))}
        </motion.ul>

        {/* Written reviews wall. Same card structure as /reviews WallOfLove
            but dark-mode styled to sit on the navy-field background, and
            paginated 9 per batch. */}
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => (
            <li
              key={e.id}
              className="flex flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <StarBar rating={e.rating} />
                <span className="small-caps-line text-white/60 text-[0.65rem] whitespace-nowrap">
                  {formatDate(e.date)}
                </span>
              </div>
              <div className="mt-4">
                <p className="font-display text-base text-white leading-tight">
                  {e.name}
                </p>
                {e.role ? (
                  <p className="mt-1 text-sm text-white/70">{e.role}</p>
                ) : null}
              </div>
              <p className="mt-4 flex-1 text-base leading-relaxed text-white/90">
                &ldquo;{e.quote}&rdquo;
              </p>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() =>
                setShown((s) => Math.min(s + PAGE_SIZE, entries.length))
              }
              className="rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-accent hover:text-accent"
            >
              Show more reviews
            </button>
            <p className="text-xs text-white/60">
              {shown.toLocaleString("en-US")} of{" "}
              {entries.length.toLocaleString("en-US")} written reviews shown
            </p>
          </div>
        ) : null}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <PrimaryCTA starsVariant="dark" />
        </motion.div>
      </div>
    </section>
  );
}
