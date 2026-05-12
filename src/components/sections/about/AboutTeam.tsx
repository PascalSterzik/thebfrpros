"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_TEAM } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Two-card team layout. Each card is a fast read with a "Read the full profile"
// link to the deep bio sub-page. Avoids duplicating the bio content here.

export default function AboutTeam() {
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
            <SectionLabel label={ABOUT_TEAM.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {ABOUT_TEAM.headline}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {[ABOUT_TEAM.rolnick, ABOUT_TEAM.licameli].map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              className="rounded-lg border border-line bg-white p-7 lg:p-9 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-start gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                  <Image
                    src={m.photoSrc}
                    alt={`${m.name}, co-founder of The BFR Pros`}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="small-caps-line text-accent">{m.eyebrow}</p>
                  <h3 className="mt-2 font-display text-2xl text-navy">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {m.credentials} · {m.tagline}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-ink/85">{m.line}</p>
              <div className="mt-7 border-t border-line pt-5">
                <Link
                  href={m.profileHref}
                  className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
                >
                  {m.profileLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
