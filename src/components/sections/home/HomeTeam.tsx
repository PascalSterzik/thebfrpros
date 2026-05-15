"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { HOME_TEAM } from "@/content/home";
import { ABOUT_TEAM } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 7 (Phase 4) — Brand-hub team strip. Photo-forward team
// showcase: a single 4-up row on desktop (1-col mobile, 2x2 tablet)
// of 3 humans + Buff. The image is the dominant element (aspect-[4/5],
// fills the card width), name + role + link below. Reads as "here is
// the team," not a testimonial box. No bio paragraph (that lives on
// /about's AboutTeam and the deep bios). 2026-05-15: rebuilt from the
// old tiny-avatar info-card (looked like testimonials); then widened
// to one desktop row since the cards are narrow enough to fit.

export default function HomeTeam() {
  return (
    <section id="team" className="section-wrap cream-field">
      <div className="container-rail">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel label={HOME_TEAM.eyebrow} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-display-xl text-navy text-balance"
          >
            {HOME_TEAM.headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {HOME_TEAM.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {ABOUT_TEAM.members.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                {m.photoSrc ? (
                  <Image
                    src={m.photoSrc}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(min-width: 640px) 22rem, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-navy text-white">
                    <span className="font-display text-6xl tracking-wide">{m.initials ?? ""}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="small-caps-line text-accent text-xs">{m.role}</p>
                <h3 className="mt-2 font-display text-2xl text-navy leading-tight">
                  {m.name}
                </h3>
                {m.credentials ? (
                  <p className="mt-1 text-sm text-muted">{m.credentials}</p>
                ) : null}
                {m.profileHref ? (
                  <Link
                    href={m.profileHref}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
                  >
                    Read the profile
                    <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </div>
            </motion.article>
          ))}

          <motion.article
            variants={fadeUp}
            className="flex flex-col overflow-hidden rounded-lg border border-dashed border-accent/40 bg-cream shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={ABOUT_TEAM.mascot.photoSrc}
                alt={`${ABOUT_TEAM.mascot.name}, ${ABOUT_TEAM.mascot.role}`}
                fill
                sizes="(min-width: 640px) 22rem, 90vw"
                className="object-contain p-10"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="small-caps-line text-accent text-xs">
                {ABOUT_TEAM.mascot.role}
              </p>
              <h3 className="mt-2 font-display text-2xl text-navy leading-tight">
                {ABOUT_TEAM.mascot.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-accent tracking-wide">
                {ABOUT_TEAM.mascot.tagline}
              </p>
              <Link
                href="/about"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
              >
                Meet the full team
                <span aria-hidden>→</span>
              </Link>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
