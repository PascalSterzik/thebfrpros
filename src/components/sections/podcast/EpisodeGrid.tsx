"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/shared/SectionLabel";
import { BFR_PODCAST_EPISODES, type BFRPodcastEpisode } from "@/lib/constants";
import { PODCAST_EPISODES_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 2a (2026-05-13): each card shows the YouTube thumbnail with a play
// overlay; tap inserts the iframe in place (autoplay=1) for inline playback.
// Facade pattern keeps page weight low — only the cards Pascal actually
// clicks load the iframe. Thumbnail URLs follow YouTube's stable
// i.ytimg.com/vi/{ID}/hqdefault.jpg pattern.

function EpisodeCard({ ep }: { ep: BFRPodcastEpisode }) {
  const [active, setActive] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${ep.youtubeId}/hqdefault.jpg`;

  return (
    <motion.li
      variants={fadeUp}
      className="flex flex-col rounded-lg border border-line bg-cream overflow-hidden shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
    >
      <div className="relative aspect-video bg-navy-deeper">
        {active ? (
          <iframe
            src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1&rel=0`}
            title={`Episode ${ep.number}: ${ep.title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play Episode ${ep.number}: ${ep.title}`}
            className="group absolute inset-0 h-full w-full"
          >
            <Image
              src={thumb}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          Episode {ep.number}
        </p>
        <h3 className="font-display text-lg text-navy leading-tight">
          {ep.title}
        </h3>
        <p className="mt-1 inline-block self-start rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-navy/70">
          {ep.topic}
        </p>
      </div>
    </motion.li>
  );
}

export default function EpisodeGrid() {
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
            <SectionLabel label={PODCAST_EPISODES_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {PODCAST_EPISODES_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PODCAST_EPISODES_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BFR_PODCAST_EPISODES.map((ep) => (
            <EpisodeCard key={ep.number} ep={ep} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
