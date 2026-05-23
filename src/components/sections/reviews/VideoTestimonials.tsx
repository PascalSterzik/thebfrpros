"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { VIDEO_TESTIMONIALS } from "@/lib/constants";
import { REVIEWS_VIDEO_INTRO } from "@/content/reviews";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2c (2026-05-13): 4 VEED.io video embeds with poster-thumbnail
// facade (click to load iframe). Same lazy pattern as the YouTube
// EpisodeGrid — avoids loading 4 iframes at page paint. Each card
// renders the converted-to-WebP thumbnail at 16:9 + play overlay;
// click swaps in the VEED iframe with watermark=0 + sharing=0 + title=0
// per the existing VEED query-string convention used elsewhere on the
// site (lib/constants.ts VIDEOS).

type VideoT = (typeof VIDEO_TESTIMONIALS)[number];

function VideoCard({ v }: { v: VideoT }) {
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const embedSrc = `https://www.veed.io/embed/${v.veedId}?watermark=0&color=blue&sharing=0&title=0`;

  // Same IntersectionObserver gating as the shared VideoPoster: play the
  // muted loop only while on-screen, pause off-screen, skip entirely for
  // prefers-reduced-motion. Static v.poster stays as the <video> poster
  // fallback for slow connections and reduced-motion users.
  useEffect(() => {
    const el = videoRef.current;
    if (!v.animated || !el) return;
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
  }, [v.animated]);

  return (
    <motion.li
      variants={fadeUp}
      className="flex flex-col rounded-lg border border-line bg-white overflow-hidden shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
    >
      <div className="relative aspect-video bg-navy-deeper">
        {active ? (
          <iframe
            src={embedSrc}
            title={`Video testimonial from ${v.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play testimonial from ${v.name}`}
            className="group absolute inset-0 h-full w-full"
          >
            {v.animated ? (
              <video
                ref={videoRef}
                poster={v.poster}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                aria-hidden
                className="absolute inset-0 h-full w-full object-cover transition group-hover:brightness-75"
              >
                <source src={v.animated.webm} type="video/webm" />
                <source src={v.animated.mp4} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={v.poster}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition group-hover:brightness-75"
              />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-[0_14px_28px_-10px_rgba(173,26,39,0.6)] transition group-hover:scale-110">
                <svg
                  width="22"
                  height="22"
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
      <div className="flex flex-col gap-1 p-5">
        <p className="font-display text-lg text-navy leading-tight">{v.name}</p>
        <p className="text-sm text-muted">{v.role}</p>
      </div>
    </motion.li>
  );
}

export default function VideoTestimonials() {
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
            <SectionLabel label={REVIEWS_VIDEO_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {REVIEWS_VIDEO_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {REVIEWS_VIDEO_INTRO.intro}
          </motion.p>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 [&>li:nth-child(4)]:lg:col-start-2 [&>li:nth-child(5)]:lg:col-start-3"
        >
          {VIDEO_TESTIMONIALS.map((v) => (
            <VideoCard key={v.veedId} v={v} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
