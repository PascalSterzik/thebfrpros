// /blog index page copy. All 20 posts are now migrated and live at
// /blog/[slug] on this site. The cards in BlogPostsList link internally.

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

export const BLOG_INDEX_INTRO = {
  eyebrow: "Recent posts",
  headline: "Every post on the blog, most recent first",
  intro: "Tap a card to read the full post.",
} as const;

export const BLOG_FINAL_CTA = {
  eyebrow: "From the page to the practice",
  headline: "See the certification",
  body:
    "Every post on the blog points at one thing: applying BFR with the patient in front of you. The Complete BFR Certification is where the protocols, screening, and pressure science are taught.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;
