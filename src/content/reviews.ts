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

export const REVIEWS_FINAL_CTA = {
  eyebrow: "Join 1,467+ certified practitioners",
  headline: "See the certification",
  body:
    "37 modules. 11.75 CEUs. 30-day money-back guarantee. Built on Dr. Rolnick's 72+ peer-reviewed BFR publications.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;
