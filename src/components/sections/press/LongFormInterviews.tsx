"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_INTERVIEWS } from "@/lib/constants";
import { PRESS_INTERVIEWS_INTRO } from "@/content/press";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): /press page section #3. YouTube facade cards
// for the 4 long-form Rolnick interviews. Same lazy-iframe pattern as
// EpisodeGrid on /podcast: tap inserts the iframe in place (autoplay=1)
// so the page loads with only the static thumbnail. 2-column grid on
// desktop, 1-column on mobile.

type Interview = (typeof ROLNICK_INTERVIEWS)[number];

function InterviewCard({ v }: { v: Interview }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;

  return (
    <motion.li
      variants={fadeUp}
      className="flex flex-col rounded-lg border border-line bg-cream overflow-hidden shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
    >
      <div className="relative aspect-video bg-navy-deeper">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
            title={v.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play interview: ${v.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={thumb}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition group-hover:brightness-75"
              unoptimized
            />
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
      <div className="flex flex-col gap-2 p-6">
        <p className="small-caps-line text-muted text-xs">
          {v.host}
          {"hostDate" in v && v.hostDate ? ` · ${v.hostDate}` : ""}
        </p>
        <h3 className="font-display text-lg text-navy leading-tight">{v.title}</h3>
      </div>
    </motion.li>
  );
}

export default function LongFormInterviews() {
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
            <SectionLabel label={PRESS_INTERVIEWS_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PRESS_INTERVIEWS_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PRESS_INTERVIEWS_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {ROLNICK_INTERVIEWS.map((v) => (
            <InterviewCard key={v.youtubeId} v={v} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
