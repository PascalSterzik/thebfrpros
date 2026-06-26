"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION } from "@/content/certification";
import { VIDEO_TESTIMONIALS, gumletEmbed } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 2 (2026-05-21, REVISION-02.md §3): full rewrite.
//
// Two bugs the rewrite fixes:
//  1. Wrong data source. Rev 1's `slots` array in certification.ts wired
//     three FACE photos from /images/students/ (Lee/Whyte/Toderico) into the
//     video-testimonial cards; those headshots back the verbatim text
//     testimonials in TESTIMONIALS, not the video posters. The canonical
//     video-testimonial source is VIDEO_TESTIMONIALS (src/lib/constants.ts),
//     already consumed by /reviews (the legacy VIDEOS.testimonial clip was
//     dropped in the 2026-06-26 Gumlet migration). gotcha #91 source-of-truth:
//     when wiring an asset by name, the canonical const is the named one in
//     constants.ts.
//  2. Wrong embed mechanism. The previous component mounted an HTML
//     `<video src>` on click. Gumlet embed URLs only render inside `<iframe>`,
//     never inside `<video>`, so the click did nothing.
//
// The fix mirrors src/components/sections/reviews/VideoTestimonials.tsx:
// static poster -> `<button onClick>` -> mount the Gumlet iframe with
// autoplay=true (the click is the required user gesture) per the Phase-2c
// click-to-play pattern.

type CardSpec = {
  key: string;
  name: string;
  role: string;
  poster: string;
  embedSrc: string;
  animated?: { webm: string; mp4: string };
};

// Compose the card list from canonical constants. As of the 2026-06-26 Gumlet
// migration VIDEO_TESTIMONIALS holds the four named PT/AT graduates; Dhimant
// Indrayan was dropped from the live list and parked in VIDEOS_ARSENAL, so this
// section now renders four cards. embedSrc carries autoplay=true because the
// card only mounts the iframe after the poster click (the required gesture).
const CARDS: CardSpec[] = VIDEO_TESTIMONIALS.map((v) => ({
  key: v.gumletId,
  name: v.name,
  role: v.role,
  poster: v.poster,
  embedSrc: gumletEmbed(v.gumletId, true),
  animated: v.animated,
}));

function VideoCard({ card }: { card: CardSpec }) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Same IntersectionObserver gating as the shared VideoPoster: play the
  // muted loop only while on-screen, pause off-screen, skip entirely for
  // prefers-reduced-motion. The static poster stays as the <video> poster
  // fallback for slow connections and reduced-motion users.
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
            loading="lazy"
            referrerPolicy="origin"
            allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;fullscreen;clipboard-write;"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
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
                preload="none"
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

export default function CertVideoTestimonials() {
  const { videoTestimonials } = CERTIFICATION.proof;
  return (
    <section className="section-wrap navy-field" aria-label="Video testimonials">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={videoTestimonials.label} variant="light" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-white text-balance"
          >
            <Highlighted
              text={videoTestimonials.headline}
              phrase={videoTestimonials.highlight}
            />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/80"
          >
            {videoTestimonials.intro}
          </motion.p>
        </motion.div>

        {/* Rev 2 grid (REVISION-02.md §3): 3 columns on desktop instead of 5
            so cards are ~2x larger. Five cards lay out as 3 + 2, with the
            last two shifted into cols 2 and 3 of the second row per the
            REVISION-02 spec. */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 [&>li:nth-child(4)]:lg:col-start-2 [&>li:nth-child(5)]:lg:col-start-3"
        >
          {CARDS.map((card) => (
            <VideoCard key={card.key} card={card} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
