"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { BFR_PODCAST_EPISODES } from "@/lib/constants";
import { PODCAST_EPISODES_INTRO } from "@/content/podcast";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// 18 episode cards in a responsive grid. Each card shows the episode
// number as a display-font numeral, the title, and a topic tag. Per-
// episode deep-links aren't in our source data; the YouTube playlist
// (linked above this section via PodcastPlatforms) is the canonical
// way to browse to a specific episode.

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
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {BFR_PODCAST_EPISODES.map((ep) => (
            <motion.li
              key={ep.number}
              variants={fadeUp}
              className="flex gap-5 rounded-lg border border-line bg-cream p-6 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <span
                aria-hidden
                className="font-display text-5xl text-accent leading-none shrink-0"
              >
                {String(ep.number).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="small-caps-line text-muted text-xs">
                  Episode {ep.number}
                </p>
                <h3 className="mt-2 font-display text-lg text-navy leading-tight">
                  {ep.title}
                </h3>
                <p className="mt-3 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-navy/70">
                  {ep.topic}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
