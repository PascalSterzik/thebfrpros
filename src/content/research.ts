// /research and /research/publications copy. Single content file because
// the two pages share the brand voice and several constants — keeping them
// in one place makes the once-per-quarter editorial pass easier.
//
// Source grounding: brand-guide.md publication count (72+) + lib/constants.ts
// ROLNICK_PUBLICATIONS journals + ROLNICK_FEATURED_PAPERS. No fabrication
// of papers; we surface the 6 featured ones and represent the rest via
// the journal marquee.

import { STATS } from "@/lib/constants";

// ----- /research -------------------------------------------------------------

export const RESEARCH_META = {
  title: "Research | The BFR Pros",
  description: `Built on ${STATS.publications} peer-reviewed BFR publications by Dr. Nicholas Rolnick across Frontiers, the British Journal of Sports Medicine, the Strength and Conditioning Journal, ScienceDirect, and Sage. The research base that anchors The Complete BFR Certification.`,
  canonicalPath: "/research",
  ogImagePath: "/og/home",
} as const;

export const RESEARCH_HERO = {
  eyebrow: "Research",
  headline: "Built on the literature, traceable to the paper",
  highlight: "traceable to the paper",
  subhead: `${STATS.publications} peer-reviewed BFR publications by Dr. Nicholas Rolnick across Frontiers in Physiology, the British Journal of Sports Medicine, the Strength and Conditioning Journal, ScienceDirect, and Sage. Every protocol in The Complete BFR Certification cites the published research it came from.`,
} as const;

export const RESEARCH_PHILOSOPHY = {
  eyebrow: "How we use the research",
  headline: "From published study to clinic-floor protocol",
  paragraphs: [
    "Most BFR education is built on a course author's clinical opinion plus a handful of citations. The Complete BFR Certification is built the opposite way: the published literature is the primary source, and every protocol, screening criterion, and pressure recommendation in the curriculum traces back to a specific paper. When the research moves, the curriculum moves with it.",
    "Dr. Nicholas Rolnick is one of the active researchers contributing to that literature, with peer-reviewed work spanning hypertrophy mechanisms, arterial-stiffness safety, post-surgical rehabilitation, in-season aerobic conditioning, device comparison, and clinical-implementation barriers. The same body of work that anchors the broader BFR field anchors what gets taught.",
    "Practical translation: graduates of the certification get a module-by-module bibliography (Bonus 5) so every claim in the curriculum can be checked against the original paper. The bibliography is the receipt trail. When a referring surgeon asks why a cuff is on his patient's leg, the answer is one click away.",
  ],
} as const;

export const RESEARCH_JOURNALS = {
  eyebrow: "Where the work appears",
  headline: "Peer-reviewed journals clinicians read",
  intro:
    "Each logo links to a specific Rolnick article in that journal. The 72+ publication count spans these journals plus additional sister publications.",
} as const;

export const RESEARCH_FEATURED_PREVIEW = {
  eyebrow: "Featured publications",
  headline: "Six papers that anchor the curriculum",
  intro:
    "A representative sample of Dr. Rolnick's peer-reviewed BFR work. The full list and abstracts live on the publications page.",
  ctaLabel: "See the full publication list",
  ctaHref: "/research/publications",
} as const;

export const RESEARCH_FINAL_CTA = {
  eyebrow: "Apply the research",
  headline: "Ready to apply the research?",
  body: `Built on the ${STATS.publications} peer-reviewed publications above. 37 modules, 11.75 CEUs, equipment-agnostic, with a module-by-module bibliography included.`,
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /research/publications ------------------------------------------------

export const PUBLICATIONS_META = {
  title: "Publications | Dr. Nicholas Rolnick BFR Research | The BFR Pros",
  description: `Featured peer-reviewed BFR publications by Dr. Nicholas Rolnick across Frontiers, BJSM, the Strength and Conditioning Journal, ScienceDirect, and Sage. Abstracts and direct article links.`,
  canonicalPath: "/research/publications",
  ogImagePath: "/og/home",
} as const;

export const PUBLICATIONS_HERO = {
  eyebrow: "Publications",
  headline: "Featured peer-reviewed BFR research",
  highlight: "peer-reviewed",
  subhead: `A curated set of peer-reviewed publications by Dr. Nicholas Rolnick across the ${STATS.publications} total. Abstracts pulled verbatim from the journal-of-record listings. Each title links to the published article.`,
} as const;

export const PUBLICATIONS_INTRO = {
  eyebrow: "About this list",
  headline: "What's included and what isn't",
  paragraphs: [
    `This page surfaces a representative sample of Dr. Rolnick's peer-reviewed BFR publications. The full ${STATS.publications}+ publication count spans the journals listed in the marquee below; not every paper has been formatted for surface display on this page yet.`,
    "For the complete, current publication list, see Dr. Rolnick's Google Scholar and ResearchGate profiles (links at the bottom of the page). Each article title here links directly to the journal record where the manuscript and abstract live.",
  ],
} as const;

export const PUBLICATIONS_LINKS = {
  eyebrow: "Where the rest lives",
  headline: "The full publication record",
  links: [
    {
      label: "Google Scholar — Dr. Nicholas Rolnick",
      href: "https://scholar.google.com/citations?user=GfVw8cIAAAAJ",
    },
    {
      label: "ResearchGate — Dr. Nicholas Rolnick",
      href: "https://www.researchgate.net/profile/Nicholas-Rolnick",
    },
  ],
} as const;

export const PUBLICATIONS_FINAL_CTA = {
  eyebrow: "Apply the research",
  headline: "Ready to put the research to work?",
  body: "Every protocol in The Complete BFR Certification cites the literature it came from. The module-by-module bibliography (Bonus 5) covers every paper.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;
