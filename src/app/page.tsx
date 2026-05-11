import type { Metadata } from "next";
import Header, { type HeaderMenuLink } from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/sections/home/HomeHero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import WhatBFRDoes from "@/components/sections/home/WhatBFRDoes";
import WhyBFRMattersNow from "@/components/sections/home/WhyBFRMattersNow";
import WhoItsForCards from "@/components/sections/home/WhoItsForCards";
import HomeInstructor from "@/components/sections/home/HomeInstructor";
import HomeProofRow from "@/components/sections/home/HomeProofRow";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import { HOME_META } from "@/content/home";
import { ENROLL_URL } from "@/lib/constants";
import { buildHomeSchemaGraph } from "@/lib/schema";

// Public homepage at "/". Sells the MODALITY and the practitioner outcome.
// Does NOT sell the certification — that's /get-certified's job (brand-guide.md
// Copy & Customer Journey Principles, Principle 6). Cert-page sections that
// previously lived here (HomeSolution comparison, HomeCourseOverview module
// preview, FAQSection cert-mechanics FAQ, StatsBlock cert-authority stats)
// were removed because they duplicated /get-certified. The homepage has ONE
// soft gateway to /get-certified in HomeFinalCTA at the end.

export const metadata: Metadata = {
  title: { absolute: HOME_META.title },
  description: HOME_META.description,
  alternates: {
    canonical: HOME_META.canonicalPath,
  },
  openGraph: {
    title: HOME_META.title,
    description: HOME_META.description,
    url: HOME_META.canonicalPath,
    type: "website",
    images: [
      {
        url: HOME_META.ogImagePath,
        width: 1200,
        height: 630,
        alt: "The BFR Pros, online BFR certification by Dr. Nicholas Rolnick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_META.title,
    description: HOME_META.description,
    images: [HOME_META.ogImagePath],
  },
};

// Phase 2/3 routes render as visibly disabled "Coming soon" links so the
// full SITE-ARCHITECTURE §3 nav reads as planned without shipping broken
// navigation. Get Certified + Find a Provider + Enroll Now are live.
const HOME_MENU_LINKS: HeaderMenuLink[] = [
  // Nav label is "Certification" (descriptive, not "Get Certified" action-led)
  // because the homepage visitor is Stage 2 and the action-verb framing reads
  // as a sales push. The button-style "Enroll Now" stays as the explicit
  // Stage-5 shortcut for visitors who already know they want to buy.
  { href: "/get-certified", label: "Certification" },
  { href: "/for/physical-therapists", label: "For Physical Therapists", comingSoon: true },
  { href: "/for/athletic-trainers", label: "For Athletic Trainers", comingSoon: true },
  { href: "/for/strength-coaches", label: "For Strength Coaches", comingSoon: true },
  { href: "/about", label: "About", comingSoon: true },
  { href: "/research", label: "Research", comingSoon: true },
  { href: "/reviews", label: "Reviews", comingSoon: true },
  { href: "https://bfrproviders.com", label: "Find a Provider", external: true },
  { href: ENROLL_URL, label: "Enroll Now", external: true },
];

export default function HomePage() {
  const schema = buildHomeSchemaGraph({
    pageTitle: HOME_META.title,
    pageDescription: HOME_META.description,
  });

  return (
    <>
      {/* Header — full multi-page nav with Coming-Soon pills for Phase 2/3 */}
      <Header menuLinks={HOME_MENU_LINKS} />

      <main id="main">
        {/* Hero — Stage-2 hook, no CTA */}
        <HomeHero />

        {/* Credibility Bar — BFR featured in mainstream media (BFR is real) */}
        <CredibilityBar />

        {/* What BFR Does — modality explainer (outcome first, mechanism second) */}
        <WhatBFRDoes />

        {/* Why BFR Matters Now — 60-year research lineage + institutional adoption */}
        <WhyBFRMattersNow />

        {/* Who It's For — audience identification (PT / AT / S&C) */}
        <WhoItsForCards />

        {/* Instructor Authority — brief Rolnick + Licameli intro */}
        <HomeInstructor />

        {/* Proof — BFR-modality scope (APTA + NATA) + clinic network adoption.
            TestimonialsSection lives at /get-certified only: it's cert
            testimonials with cert-stats framing and duplicating it onto the
            homepage violates page-to-page hand-off (website-builder Site-Level
            Congruence Principle, brand-guide Principle 6). */}
        <HomeProofRow />

        {/* Final CTA — single soft gateway → /get-certified */}
        <HomeFinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* JSON-LD @graph: Organization, WebSite (with SearchAction), Course, Person, AggregateRating, WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
