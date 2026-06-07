"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { PUBLICATIONS_LINKS } from "@/content/research";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Where the full publication record lives — outbound links to Google
// Scholar + ResearchGate for the complete 74 paper trail. Anchored at
// the bottom of /research/publications so the reader has somewhere to
// go after the featured-papers list.

export default function PublicationsExternalLinks() {
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
            <SectionLabel label={PUBLICATIONS_LINKS.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-md text-navy text-balance"
          >
            {PUBLICATIONS_LINKS.headline}
          </motion.h2>
        </motion.div>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-10 mx-auto max-w-xl space-y-3"
        >
          {PUBLICATIONS_LINKS.links.map((l) => (
            <motion.li key={l.href} variants={fadeUp}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-lg border border-line bg-white px-5 py-4 hover:border-accent/40 transition"
              >
                <span className="font-semibold text-navy">{l.label}</span>
                <span aria-hidden className="text-accent">↗</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
