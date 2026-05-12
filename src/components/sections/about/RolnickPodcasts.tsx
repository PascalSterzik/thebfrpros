"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/shared/Marquee";
import SectionLabel from "@/components/shared/SectionLabel";
import { ROLNICK_PODCASTS } from "@/lib/constants";
import { ROLNICK_HOSTED } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Dr. Rolnick hosts the BFR Better-For-Results Podcast (3 platform links)
// AND appears as a guest on 15+ others (marquee of show logos). Two pieces
// of evidence in one section: he's the host AND the most-requested guest.

export default function RolnickPodcasts() {
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
            <SectionLabel label={ROLNICK_HOSTED.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {ROLNICK_HOSTED.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {ROLNICK_HOSTED.body}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap justify-center gap-3"
          >
            {ROLNICK_HOSTED.ownPodcast.map((p) => (
              <a
                key={p.platform}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-navy hover:border-accent hover:text-accent transition"
              >
                {p.platform}
                <span aria-hidden>↗</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={inViewOnce}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <p className="text-center small-caps-line text-muted mb-6">
            Guest appearances
          </p>
          <Marquee
            logos={ROLNICK_PODCASTS}
            ariaLabel="Podcasts that have featured Dr. Rolnick as a guest"
            variant="light"
            itemHeight="h-12 sm:h-14"
          />
        </motion.div>
      </div>
    </section>
  );
}
