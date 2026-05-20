"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import SectionLabel from "@/components/shared/SectionLabel";
import { CERTIFICATION, type CertificationContent } from "@/content/certification";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Rev 1 (2026-05-20, REVISION-01.md §6): 5 short video testimonials placed
// in the Proof region, above the existing CertProofSection text wall. The
// thumbnail UX uses MUTED LOOPING <video> elements (not GIFs). Per the
// rationale captured in REVISION-01.md §6:
//   - A typical GIF for a 3 to 5s clip is 1 to 10MB, re-decodes every loop,
//     hammers mobile battery, and tanks LCP when 5 are on the same page.
//   - A short muted <video loop playsInline preload="metadata" autoPlay>
//     produces the same UX upside (movement attracts the click) at a
//     fraction of the bandwidth and CPU.
//   - IntersectionObserver pauses loops that scroll out of view so only
//     visible cards are running.
//   - Click swaps the muted loop for the full audio version with controls.
//
// Asset dependency: Pascal supplies the 5 short loops + posters + full
// audio versions. Until they land, each slot in certification.ts has
// posters only (loopSrc / videoSrc omitted). When that happens, this
// component falls back gracefully to a static poster + play icon and never
// ships an empty player.

type Slot = CertificationContent["proof"]["videoTestimonials"]["slots"][number];

function TestimonialCard({ slot }: { slot: Slot }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const loopVideoRef = useRef<HTMLVideoElement | null>(null);
  const [showFull, setShowFull] = useState(false);

  // Lazy-start the muted loop only when the card is in viewport. Pause and
  // reset when it scrolls out so the browser doesn't keep decoding offscreen.
  useEffect(() => {
    if (!slot.loopSrc) return;
    const el = containerRef.current;
    const video = loopVideoRef.current;
    if (!el || !video) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            void video.play().catch(() => {
              // Some browsers reject autoplay even when muted — fall back
              // silently. The static poster underneath stays visible.
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [slot.loopSrc]);

  const hasFullVideo = Boolean(slot.videoSrc);
  const hasLoop = Boolean(slot.loopSrc);

  return (
    <motion.li
      variants={fadeUp}
      className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] backdrop-blur-sm"
    >
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-black/40 aspect-video"
      >
        {/* Poster sits underneath everything as a static fallback. */}
        <Image
          src={slot.poster}
          alt={slot.posterAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />

        {/* Muted loop overlay (only mounted when loopSrc is supplied). */}
        {hasLoop && !showFull && (
          <video
            ref={loopVideoRef}
            src={slot.loopSrc}
            poster={slot.poster}
            muted
            loop
            playsInline
            preload="metadata"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Full-audio video, mounted on click. */}
        {showFull && hasFullVideo && (
          <video
            src={slot.videoSrc}
            poster={slot.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full bg-black object-contain"
          />
        )}

        {/* Click overlay: present when there's a full video to play. */}
        {!showFull && hasFullVideo && (
          <button
            type="button"
            onClick={() => setShowFull(true)}
            aria-label={`Play full testimonial: ${slot.name}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-110">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#193763"
                aria-hidden
                className="ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}

        {/* When neither loop nor full video is supplied, surface a clear
            poster + play icon so the section still reads as testimonial
            cards waiting on assets, rather than as broken cards. */}
        {!hasLoop && !hasFullVideo && (
          <div aria-hidden className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/95 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#193763" className="ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        )}
      </div>

      <div className="px-4 py-4">
        <p className="font-display text-base text-white leading-tight">{slot.name}</p>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
          {slot.role}
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

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {videoTestimonials.slots.map((slot) => (
            <TestimonialCard key={slot.id} slot={slot} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
