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

function InitialsCircle({ initials }: { initials: string }) {
  return (
    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-navy text-white ring-2 ring-cream">
      <span className="font-display text-2xl tracking-wide">{initials}</span>
    </div>
  );
}

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
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {ABOUT_TEAM.members.map((m) => (
            <motion.article
              key={m.name}
              variants={fadeUp}
              className="flex flex-col rounded-lg border border-line bg-white p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
            >
              <div className="flex items-start gap-5">
                {m.photoSrc ? (
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full ring-2 ring-cream">
                    <Image
                      src={m.photoSrc}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <InitialsCircle initials={m.initials ?? ""} />
                )}
                <div className="min-w-0">
                  <p className="small-caps-line text-accent">{m.role}</p>
                  <h3 className="mt-2 font-display text-2xl text-navy">{m.name}</h3>
                  {m.credentials ? (
                    <p className="mt-1 text-sm text-muted">{m.credentials}</p>
                  ) : null}
                </div>
              </div>
              <p className="mt-6 flex-1 text-base leading-relaxed text-ink/85">{m.bio}</p>
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
            </motion.article>
          ))}

          <motion.article
            variants={fadeUp}
            className="flex flex-col items-center text-center rounded-lg border border-dashed border-accent/40 bg-cream p-7 shadow-[0_4px_14px_-8px_rgba(25,55,99,0.18)]"
          >
            <div className="relative h-32 w-32 shrink-0">
              <Image
                src={ABOUT_TEAM.mascot.photoSrc}
                alt={`${ABOUT_TEAM.mascot.name}, ${ABOUT_TEAM.mascot.role}`}
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
            <p className="mt-5 small-caps-line text-accent">{ABOUT_TEAM.mascot.role}</p>
            <h3 className="mt-2 font-display text-2xl text-navy">{ABOUT_TEAM.mascot.name}</h3>
            <p className="mt-3 text-sm font-semibold text-accent tracking-wide">
              {ABOUT_TEAM.mascot.tagline}
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
