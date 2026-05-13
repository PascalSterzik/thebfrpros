"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PERSONAL_MEDIA } from "@/lib/constants";
import { PRESS_FEATURES_INTRO } from "@/content/press";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Phase 4 (2026-05-13): /press page section #2. Renders the 18-entry
// ROLNICK_PERSONAL_MEDIA list as a card grid. Same shape as RolnickMedia
// on /about/nicholas-rolnick (the canonical Nick-personal media surface);
// re-presented here under the broader /press hub.

export default function PressFeatures() {
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
            <SectionLabel label={PRESS_FEATURES_INTRO.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PRESS_FEATURES_INTRO.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {PRESS_FEATURES_INTRO.intro}
          </motion.p>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {ROLNICK_PERSONAL_MEDIA.map((m) => (
            <motion.li
              key={`${m.outlet}-${m.date}`}
              variants={fadeUp}
              className="rounded-lg border border-line bg-cream p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-base text-navy">{m.outlet}</span>
                <span className="small-caps-line text-muted text-[0.65rem]">{m.date}</span>
              </div>
              <p className="mt-3 text-sm leading-snug text-ink/85">
                &ldquo;{m.headline}&rdquo;
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
