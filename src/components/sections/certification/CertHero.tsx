"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATION } from "@/content/certification";
import { ENROLL_URL } from "@/lib/constants";
import { heroItem, heroStagger } from "@/lib/motion";

// Campaign hero for /certification. Vendor-neutral / drawer-cuff Big Idea
// (PLAN.md §3, certification.ts bigIdeaGate). Distinct from /get-certified
// because:
//   - Background visual is Rolnick coaching in clinic (visualCredibilityMatch),
//     not the generic hero banner.
//   - No embedded VEED auto-feature; the optional founder VSL ships in a
//     dedicated slot via VSLBlock below if/when the clip exists.
//   - Headline carries no highlight phrase; the drawer-cuff eyebrow does the
//     hook, the Compacta caps headline is the Big Idea sentence.
// Renders the four supportingStat tiles below the CTA so the trust row sits
// in the same fold on desktop and falls under the CTA on mobile.
export default function CertHero() {
  const { hero } = CERTIFICATION;

  return (
    <section className="relative overflow-hidden">
      <Image
        src={hero.photoSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deeper/90 via-navy-deeper/80 to-navy/90"
      />

      <div className="container-rail relative pt-14 pb-20 lg:pt-24 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroStagger}
          className="mx-auto w-full max-w-4xl text-center"
        >
          <motion.span
            variants={heroItem}
            className="eyebrow-pill eyebrow-pill-on-navy"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="mt-6 font-display text-display-2xl lg:text-display-3xl text-white text-balance"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-7 mx-auto max-w-3xl subhead text-white/85"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col items-center gap-3"
          >
            <a
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-10 py-5 font-display text-3xl sm:text-4xl uppercase tracking-tight text-white transition hover:bg-accent-deeper"
              style={{ letterSpacing: "-0.015em" }}
            >
              {hero.primaryCta}
            </a>
            <p className="text-xs text-white/70">
              30-day money-back guarantee. 1 of 1,467+ graduates has ever taken it.
            </p>
          </motion.div>

          <motion.dl
            variants={heroItem}
            className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {hero.supportingStat.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-white/15 bg-white/[0.05] p-4 sm:p-5 backdrop-blur-sm"
              >
                <dt className="font-display text-3xl sm:text-4xl text-white leading-none">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs sm:text-sm leading-snug text-white/75">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
