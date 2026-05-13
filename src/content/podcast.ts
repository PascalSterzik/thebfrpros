// /podcast page copy. Sections sit on top of BFR_PODCAST_PLATFORMS,
// BFR_PODCAST_EPISODES, and ROLNICK_PODCASTS in lib/constants.ts. The
// page-job is: visitor sees the show exists, picks a platform, picks
// an episode.
//
// Phase 2a (2026-05-13): episode count is driven from
// BFR_PODCAST_EPISODES.length (currently 20) — single source of truth.
// Pulled from the canonical YouTube playlist; the prior "gaps at 11 +
// 17" comment was stale.

import { BFR_PODCAST_EPISODES } from "@/lib/constants";

const EPISODE_COUNT = BFR_PODCAST_EPISODES.length;

export const PODCAST_META = {
  title: "BFR Better-For-Results Podcast | The BFR Pros",
  description: `Hosted by Dr. Nicholas Rolnick. Conversations with researchers, clinicians, and coaches across blood flow restriction training, hypertrophy science, rehab programming, and performance. ${EPISODE_COUNT} published episodes.`,
  canonicalPath: "/podcast",
  ogImagePath: "/og/home",
} as const;

export const PODCAST_HERO = {
  eyebrow: "BFR Better-For-Results Podcast",
  headline: "Conversations across BFR, hypertrophy, and rehab",
  highlight: "BFR, hypertrophy, and rehab",
  subhead: `Hosted by Dr. Nicholas Rolnick. Guests include Jeremy Loenneke, Paul Carter, Kyle Ruth, Tim Werner, and others working at the front edge of strength science, BFR research, and clinical practice. ${EPISODE_COUNT} published episodes.`,
} as const;

export const PODCAST_PLATFORMS_INTRO = {
  eyebrow: "Where to listen",
  headline: "Pick a platform, every episode is on it",
  intro:
    "Subscribe on Apple Podcasts or Spotify, or watch on YouTube where every episode is individually browsable in the show playlist.",
} as const;

export const PODCAST_EPISODES_INTRO = {
  eyebrow: "Episodes",
  headline: `All ${EPISODE_COUNT} published episodes`,
  intro:
    "Each card is one episode. Tap the thumbnail to play inline, or use the platform links above to subscribe.",
} as const;

export const PODCAST_GUEST_INTRO = {
  eyebrow: "Other shows",
  headline: "Where Dr. Rolnick has appeared as a guest",
  intro:
    "Beyond hosting the BFR Better-For-Results Podcast, Dr. Rolnick has appeared as a guest on 15+ podcasts across rehab, strength and conditioning, and pain-science fields.",
} as const;

export const PODCAST_FINAL_CTA = {
  eyebrow: "After the episodes",
  headline: "Ready to apply BFR yourself?",
  body:
    "Every conversation on the show points at one thing: practitioners who can apply BFR safely and well. The Complete BFR Certification is where that work is taught.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;
