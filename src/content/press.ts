// /press page copy. Stage-2/3 brand-richness page that combines three
// buckets of Rolnick-personal media into one stop: ROLNICK_PERSONAL_MEDIA
// (18 personal article features), ROLNICK_INTERVIEWS (4 long-form video
// interviews), and ROLNICK_PODCASTS (15 podcast guest appearances).
// All three are BRAND-level claims and belong here, not on the homepage
// FEATURED_IN bar (modality-level). Per brand-guide.md Source-of-Truth.

import {
  ROLNICK_INTERVIEWS,
  ROLNICK_PERSONAL_MEDIA,
  ROLNICK_PODCASTS,
} from "@/lib/constants";

export const PRESS_META = {
  title: "Press | The BFR Pros",
  description: `Where Dr. Nicholas Rolnick has been personally featured: ${ROLNICK_PERSONAL_MEDIA.length} mainstream and clinical press articles, ${ROLNICK_INTERVIEWS.length} long-form video interviews, and ${ROLNICK_PODCASTS.length} podcast guest appearances. The catalog of Nick-personal media coverage on BFR.`,
  canonicalPath: "/press",
  ogImagePath: "/og/home",
} as const;

export const PRESS_HERO = {
  eyebrow: "Press",
  headline: "Where Dr. Rolnick and the BFR Pros have shown up",
  highlight: "shown up",
  subhead: `${ROLNICK_PERSONAL_MEDIA.length} mainstream and clinical press features, ${ROLNICK_INTERVIEWS.length} long-form video interviews, and ${ROLNICK_PODCASTS.length} podcast guest appearances. Distinct from where BFR-the-modality has been covered, this is where Nick himself has been the source.`,
} as const;

export const PRESS_FEATURES_INTRO = {
  eyebrow: "In the press",
  headline: "Personal media features",
  intro:
    "Each line below is a specific article: outlet, headline, and publish date. Verified against the live CV (Research/rolnick-cv-facts.md). Distinct from the homepage Featured-In bar, which is a modality-level claim about where BFR-the-modality has been covered.",
} as const;

export const PRESS_INTERVIEWS_INTRO = {
  eyebrow: "Long-form interviews",
  headline: "Sit-down interviews on camera",
  intro:
    "Hour-and-shorter video interviews where Nick walks through the science, the clinical applications, and the case for BFR.",
} as const;

export const PRESS_PODCASTS_INTRO = {
  eyebrow: "Podcast appearances",
  headline: "Guest on 15+ podcasts",
  intro:
    "When clinicians, S&C coaches, and educators want a BFR conversation, they call Nick. Independent shows that hosted Dr. Rolnick to break down a specific BFR topic.",
} as const;

export const PRESS_FINAL_CTA = {
  eyebrow: "The next step",
  headline: "Ready to apply BFR yourself?",
  body: "The Complete BFR Certification teaches the protocols, screening, and pressure science Nick walks through in every interview. Equipment-agnostic, online and self-paced.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/certification",
} as const;
