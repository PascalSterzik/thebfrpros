"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { HOME_TEAM } from "@/content/home";
import { ABOUT_TEAM } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// Section 7 (Phase 4) — Brand-hub team strip. Replaces HomeInstructor
// (Rolnick + Licameli 2-card with full bio paragraphs) with the full
// 5-human + mascot grid from /about's AboutTeam, at homepage density:
// no bio paragraph, smaller photo (80px instead of 96-128px), tighter
// padding. Each card links to the deep bio sub-page; the mascot links
// to /about. The same brand-richness pattern King Kong + Precision
// Nutrition use on their homepages — show the people, hand off to the
// page that tells the full story.

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
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ABOUT_TEAM.members.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-center gap-4">
                {m.photoSrc ? (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                    <Image
                      src={m.photoSrc}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy text-white ring-2 ring-cream">
                    <span className="font-display text-xl tracking-wide">{m.initials ?? ""}</span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="small-caps-line text-accent text-[0.7rem]">{m.role}</p>
                  <h3 className="mt-1.5 font-display text-xl text-navy leading-tight">
                    {m.name}
                  </h3>
                  {m.credentials ? (
                    <p className="mt-0.5 text-xs text-muted">{m.credentials}</p>
                  ) : null}
                </div>
              </div>
              {m.profileHref ? (
                <Link
                  href={m.profileHref}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
                >
                  Read the profile
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
            </motion.article>
          ))}

          <motion.article
            variants={fadeUp}
            className="flex flex-col rounded-lg border border-dashed border-accent/40 bg-white p-5 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0">
                <Image
                  src={ABOUT_TEAM.mascot.photoSrc}
                  alt={`${ABOUT_TEAM.mascot.name}, ${ABOUT_TEAM.mascot.role}`}
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="small-caps-line text-accent text-[0.7rem]">
                  {ABOUT_TEAM.mascot.role}
                </p>
                <h3 className="mt-1.5 font-display text-xl text-navy leading-tight">
                  {ABOUT_TEAM.mascot.name}
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-accent tracking-wide">
                  {ABOUT_TEAM.mascot.tagline}
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-deeper transition"
            >
              Meet the full team
              <span aria-hidden>→</span>
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
