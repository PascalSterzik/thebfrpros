"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import VideoPoster from "@/components/shared/VideoPoster";
import { ACTION_VIDEOS } from "@/lib/constants";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// §Pascal-2026-05-08: Replaced static photos with 6 short Gumlet embeds showing
// real BFR cuffs across common compound lifts. Reads as proof — actual reps,
// not stylized hero shots.
export default function VisualProofSection() {
  return (
    <section className="section-wrap bg-white" aria-label="The certification in action">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label="The certification in action" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-lg text-navy"
          >
            Every protocol you'll learn, applied in a real session.
          </motion.h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ACTION_VIDEOS.map((v) => (
            <motion.li
              key={v.src}
              variants={fadeUp}
              className="overflow-hidden rounded-lg ring-1 ring-line bg-black/5"
            >
              <VideoPoster
                posterSrc={v.posterSrc}
                videoSrc={v.src}
                title={v.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                animated={v.animated}
              />
              <p className="px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-navy/85">
                {v.title}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
