"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Highlighted from "@/components/shared/Highlighted";
import Stars from "@/components/shared/Stars";
import VideoPoster from "@/components/shared/VideoPoster";
import { CERTIFICATION } from "@/content/certification";
import { CERTIFICATION_ENROLL_URL, VIDEOS } from "@/lib/constants";
import { heroItem, heroStagger } from "@/lib/motion";

// Campaign hero for /certification. Vendor-neutral / drawer-cuff Big Idea
// (PLAN.md §3, certification.ts bigIdeaGate).
//
// Rev 1 (2026-05-20, REVISION-01.md §1, §3, §4):
//  - Subhead trimmed to the One-Liner only; the trailing feature stack
//    (37 modules / 11.75 CEUs / etc.) was redundant with supportingStat and
//    diluted the emotional weight. (Lives in certification.ts hero.subhead.)
//  - Hero now carries a video (VIDEOS.homepageHero, the Nick-on-BFR-questions
//    clip already shipping on the homepage) so the cert LP inherits the
//    validated /get-certified hero pattern. The standalone VSLBlock slot is
//    no longer rendered from page.tsx; the file stays for re-enablement if
//    Pascal supplies a cert-specific founder VSL later.
//  - Stars row under the CTA shows the visual 4.8★ + count and is NOT
//    clickable (no /reviews link, no exits from the campaign LP).
//  - Primary CTA label unified to "Get BFR Certified From Home" and href
//    points to CERTIFICATION_ENROLL_URL (campaign-scoped, additive to
//    ENROLL_URL which stays bound to /get-certified per Pascal's swap-later
//    plan).
//  - Highlighted underline-accent applied to the Big Idea phrase
//    "CUFF COMPANY'S DISTRIBUTION CHANNEL" via the shared component.
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
            <Highlighted text={hero.headline} phrase={hero.highlight} />
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-7 mx-auto max-w-3xl subhead text-white/85"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-10 mx-auto w-full max-w-3xl"
          >
            <div className="relative w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/15 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.6)]">
              <VideoPoster
                posterSrc="/images/posters/home-hero.webp"
                videoSrc={VIDEOS.homepageHero}
                title="Dr. Nicholas Rolnick on common BFR questions"
                priority
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <a
              href={CERTIFICATION_ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-5 sm:px-10 font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white transition hover:bg-accent-deeper text-balance"
              style={{ letterSpacing: "-0.015em" }}
            >
              {hero.primaryCta}
            </a>
            {/* Rev 1 (REVISION-01.md §1): visual stars + "4.8 from 767+
                reviews" under the CTA. NOT a link, the campaign LP has no
                exits. The shared Stars component renders a non-anchor div
                when linkTo is omitted. */}
            <Stars variant="dark" size="md" />
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
