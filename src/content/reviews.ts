// /reviews page copy. Stage-3/4 trust page anchored by the AggregateRating
// stats and the verbatim testimonials in lib/constants.ts (TESTIMONIALS +
// STUDENT_TESTIMONIALS).

import { STATS } from "@/lib/constants";

export const REVIEWS_META = {
  title: "Reviews | The BFR Pros",
  description: `4.8 stars from ${STATS.reviewCount}+ student reviews. ${STATS.certifiedPractitioners} licensed PTs, ATs, and S&C coaches certified. Read the verbatim feedback from clinicians who completed The Complete BFR Certification.`,
  canonicalPath: "/reviews",
  ogImagePath: "/og/home",
} as const;

export const REVIEWS_HERO = {
  eyebrow: "Reviews",
  headline: "What clinicians who finished the course actually say",
  highlight: "actually say",
  subhead: `${STATS.ratingValue} stars from ${STATS.reviewCount}+ verified student reviews. ${STATS.certifiedPractitioners} licensed practitioners certified. One of ${STATS.practitionersExact.toLocaleString()} has used the 30-day refund.`,
} as const;

export const REVIEWS_STATS = [
  { value: `${STATS.ratingValue}★`, label: "Average rating across the course-content survey" },
  { value: `${STATS.reviewCount}+`, label: "Verified student reviews" },
  { value: STATS.certifiedPractitioners, label: "Licensed clinicians certified" },
  { value: `${STATS.refundsToDate} of ${STATS.practitionersExact.toLocaleString()}`, label: "Graduates who used the 30-day refund" },
] as const;

// Phase 4 (2026-05-13): REVIEWS_EXPERT_INTRO and REVIEWS_STUDENT_INTRO
// removed. Both were leftovers from the pre-Phase-2c split (LongFormReviews
// + StudentReviewsGrid as separate surfaces) and have had no consumer
// since WallOfLove unified them in Phase 2c. The REVIEWS_STUDENT_INTRO
// copy also tripped the false-scarcity grep with "across multiple cohorts"
// — defensible as research vocab but caught the gate.

// Phase 2c (2026-05-13): three punchy fragments rendered in the hero
// strip below the headline. 8-15 word slivers from the top long-form
// testimonials. Order: research-authority -> implementation -> instructor
// quality, matching the cert's three highest-load messaging pillars.
// Phase 4 (2026-05-13): photo field added — circular avatars render
// above each fragment.
export const REVIEWS_HERO_EXCERPTS = [
  {
    name: "Dr. Clinton H. Lee, PT, DPT, CSCS",
    photo: "/images/reviewers/clinton-lee.webp",
    fragment:
      "Continually staying up-to-date with emerging BFR research and implementing it into the course content.",
  },
  {
    name: "Dr. Brian D. Whyte, DPT, CLT, CSCS",
    photo: "/images/reviewers/brian-whyte.webp",
    fragment:
      "A sound knowledge base for implementing Blood Flow Restriction in the clinic.",
  },
  {
    name: "Benjamin Toderico, MS, CSCS",
    photo: "/images/reviewers/benjamin-toderico.webp",
    fragment:
      "A passionate instructor who optimizes the blend of science and practice.",
  },
] as const;

// Phase 4 (2026-05-13): eyebrow renamed from "Wall of love" (King-Kong
// vocab, off-voice) to "Verbatim, from the survey" (on-voice clinical).
// Intro rewritten to be honest about the 17-vs-767+ count delta: 767+
// is the rating count, 17 is the count of verbatim WRITTEN feedback
// on file (4 long-form clinic-owner reviews + 13 short-form course-
// feedback quotes). The two are different things and the page now
// names them separately.
export const REVIEWS_WALL_INTRO = {
  eyebrow: "Verbatim, from the survey",
  headline: "Every verbatim review, one place",
  intro:
    "767+ student ratings across the course-feedback survey averaged 4.8 stars. The 17 quotes below are every verbatim written comment we have on file: 4 long-form reviews from clinic owners and consultants, and 13 short-form student notes pulled exactly as written. Filter by source to drill in.",
} as const;

// Phase 2c — single standalone pull-quote. THIS is where .editorial-quote
// (EB Garamond italic) earns its keep, per brand-guide.md:
// "Quote font is for STANDALONE quotes only." Picked Lee for the
// competitor-comparison edge: he names Owens and Smart Tools by name
// and chose the BFR Pros over both. 47 words, in the 30-50 range.
export const REVIEWS_PULL_QUOTE = {
  eyebrow: "What the choice came down to",
  quote:
    "I chose to take The BFR Pros' blood flow restriction course over other companies such as Owens Recovery Science & Smart Tools because of how the former is continually staying up-to-date with emerging BFR research and implementing it into the course content.",
  attribution: {
    name: "Dr. Clinton H. Lee",
    role: "PT, DPT, CSCS — Owner, PhysioStrength",
  },
} as const;

export const REVIEWS_VIDEO_INTRO = {
  eyebrow: "In their own words",
  headline: "Practitioners on camera",
  intro:
    "Four video testimonials from graduates of The Complete BFR Certification across PT and ATC settings.",
} as const;

export const REVIEWS_FINAL_CTA = {
  eyebrow: "Join 1,467+ certified practitioners",
  headline: "Ready to apply BFR yourself?",
  body:
    "37 modules. 11.75 CEUs. 30-day money-back guarantee. Built on Dr. Rolnick's 72+ peer-reviewed BFR publications.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;
