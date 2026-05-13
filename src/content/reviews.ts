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

export const REVIEWS_EXPERT_INTRO = {
  eyebrow: "From practitioners with their own clinics",
  headline: "Long-form reviews from clinic owners and consultants",
  intro:
    "Verbatim feedback from PTs, S&C coaches, and clinic groups who took The Complete BFR Certification. Pulled exactly as written on the course-feedback survey.",
} as const;

export const REVIEWS_STUDENT_INTRO = {
  eyebrow: "From practitioners in the field",
  headline: "Course-feedback survey, verbatim",
  intro:
    "Short feedback from students across multiple cohorts. The course-content survey averages 4.8 stars across 767+ responses.",
} as const;

// Phase 2c (2026-05-13): three punchy fragments rendered in the hero
// strip below the headline. 8-15 word slivers from the top long-form
// testimonials. Order: research-authority -> implementation -> instructor
// quality, matching the cert's three highest-load messaging pillars.
export const REVIEWS_HERO_EXCERPTS = [
  {
    name: "Dr. Clinton H. Lee, PT, DPT, CSCS",
    fragment:
      "Continually staying up-to-date with emerging BFR research and implementing it into the course content.",
  },
  {
    name: "Dr. Brian D. Whyte, DPT, CLT, CSCS",
    fragment:
      "A sound knowledge base for implementing Blood Flow Restriction in the clinic.",
  },
  {
    name: "Benjamin Toderico, MS, CSCS",
    fragment:
      "A passionate instructor who optimizes the blend of science and practice.",
  },
] as const;

export const REVIEWS_WALL_INTRO = {
  eyebrow: "Wall of love",
  headline: "Every verbatim review, one place",
  intro:
    "Four long-form reviews from clinic owners and consultants, and thirteen short-form course-feedback quotes pulled verbatim from the survey. Filter by source to drill in.",
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
