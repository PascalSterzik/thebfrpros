// /blog index page copy. Transition state: posts are listed here and link
// out to the live URLs on the legacy site. Full content migration to
// /blog/[slug] on this site is Phase 4 work, per
// Research/WEBSITE-PROJECT-ORCHESTRATOR.md.

import { BLOG_POSTS } from "@/lib/constants";

export const BLOG_META = {
  title: "Blog | The BFR Pros",
  description: `Field-notes and clinical commentary on blood flow restriction training, programming, methodology, and case studies. ${BLOG_POSTS.length} published posts.`,
  canonicalPath: "/blog",
  ogImagePath: "/og/home",
} as const;

export const BLOG_HERO = {
  eyebrow: "Blog",
  headline: "Field-notes from the BFR practice",
  subhead: `Clinical commentary, programming questions, methodological deep-dives, and patient success stories from Dr. Rolnick and the team. ${BLOG_POSTS.length} published posts.`,
} as const;

export const BLOG_NOTICE = {
  eyebrow: "Transition note",
  body: "Posts currently open on the legacy blog at thebfrpros.com/bfr-blog while the migration to this site completes. The cards below link out; the URLs will resolve to /blog/{slug} on this site after the cutover.",
} as const;

export const BLOG_INDEX_INTRO = {
  eyebrow: "Recent posts",
  headline: "Every post on the blog, most recent first",
  intro:
    "Tap a card to open the post on the legacy site. Each card opens in a new tab.",
} as const;

export const BLOG_FINAL_CTA = {
  eyebrow: "From the page to the practice",
  headline: "See the certification",
  body:
    "Every post on the blog points at one thing: applying BFR with the patient in front of you. The Complete BFR Certification is where the protocols, screening, and pressure science are taught.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;
