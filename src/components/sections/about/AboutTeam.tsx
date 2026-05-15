"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionLabel from "@/components/shared/SectionLabel";
import { ABOUT_TEAM } from "@/content/about";
import { fadeUp, inViewOnce, stagger } from "@/lib/motion";

// The Our-Team section. Renders ABOUT_TEAM.members + Buff the mascot from
// src/content/about.ts. 2026-05-15: roster trimmed to 3 humans (Rolnick,
// Marty Rolnick, Erica Marcano) + Buff after Nick removed Licameli + Thoelen
// from the team. Licameli stays as co-instructor on /get-certified
// (InstructorsSection), not on the team grid. InitialsCircle is the
// no-photo fallback (currently unused: all 3 members carry a photo).

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
          <motion.p
            variants={fadeUp}
            className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-ink/80"
          >
            {ABOUT_TEAM.intro}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          variants={stagger}
          className="mt-14 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
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
                    sizes="(min-width: 640px) 26rem, 90vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-navy">
                    <span className="font-display text-6xl tracking-wide text-white">
                      {m.initials ?? ""}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="small-caps-line text-accent">{m.role}</p>
                <h3 className="mt-2 font-display text-2xl text-navy">{m.name}</h3>
                {m.credentials ? (
                  <p className="mt-1 text-sm text-muted">{m.credentials}</p>
                ) : null}
                <p className="mt-5 flex-1 text-base leading-relaxed text-ink/85">{m.bio}</p>
                {m.profileHref ? (
                  <div className="mt-6 border-t border-line pt-5">
                    <Link
                      href={m.profileHref}
                      className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent-deeper transition"
                    >
                      {m.profileLabel ?? "Read the full profile"}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
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
                sizes="(min-width: 640px) 26rem, 90vw"
                className="object-contain p-12"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <p className="small-caps-line text-accent">{ABOUT_TEAM.mascot.role}</p>
              <h3 className="mt-2 font-display text-2xl text-navy">{ABOUT_TEAM.mascot.name}</h3>
              <p className="mt-3 text-sm font-semibold text-accent tracking-wide">
                {ABOUT_TEAM.mascot.tagline}
              </p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
