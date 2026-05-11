import type { Metadata } from "next";
import Header, { type HeaderMenuLink } from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HomeHero from "@/components/sections/home/HomeHero";
import CredibilityBar from "@/components/sections/CredibilityBar";
import WhatBFRDoes from "@/components/sections/home/WhatBFRDoes";
import WhyBFRMattersNow from "@/components/sections/home/WhyBFRMattersNow";
import StatsBlock from "@/components/sections/StatsBlock";
import HomeSolution from "@/components/sections/home/HomeSolution";
import HomeCourseOverview from "@/components/sections/home/HomeCourseOverview";
import WhoItsForCards from "@/components/sections/home/WhoItsForCards";
import HomeInstructor from "@/components/sections/home/HomeInstructor";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import HomeProofRow from "@/components/sections/home/HomeProofRow";
import FAQSection from "@/components/sections/FAQSection";
import HomeFinalCTA from "@/components/sections/home/HomeFinalCTA";
import { HOME_FAQ, HOME_META } from "@/content/home";
import { ENROLL_URL } from "@/lib/constants";
import { buildHomeSchemaGraph } from "@/lib/schema";

// Public homepage at "/". Phase 1A pair to /get-certified (already shipped).
// Section flow follows the funnel-position audit in the plan: hero installs
// Belief 1 (modality value), sections 4-5 deepen Belief 1, section 7 installs
// Beliefs 3 + 4, section 10 formalizes Belief 5, section 14 closes with Belief 6
// urgency. The internal variant-review index moved to /preview.

export const metadata: Metadata = {
  // Absolute bypasses layout.tsx's title.template suffix so the homepage
  // doesn't double-suffix "| The BFR Pros" on a string that already contains it.
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

// Homepage menu. Phase 1A simplified: items pointing at Phase 2/3 pages render
// as visibly disabled "Coming soon" links so the brand nav reads as planned
// without shipping broken navigation.
const HOME_MENU_LINKS: HeaderMenuLink[] = [
  { href: "/get-certified", label: "Get Certified" },
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
    faq: HOME_FAQ,
  });

  return (
    <>
      {/* 1. Sticky header with full multi-page nav (Coming-Soon pills for Phase 2/3) */}
      <Header menuLinks={HOME_MENU_LINKS} />

      <main id="main">
        {/* 2. Hero — Belief 1 (modality value) leads, Belief 5 (research source) echoes */}
        <HomeHero />

        {/* 3. Credibility Bar — Featured-In marquee */}
        <CredibilityBar />

        {/* 4. What BFR Does — modality explainer (Belief 1 deepening) */}
        <WhatBFRDoes />

        {/* 5. Why BFR Matters Now — Belief 1 evidence stack */}
        <WhyBFRMattersNow />

        {/* 6. Stats Strip — bridges modality to certification authority */}
        <StatsBlock />

        {/* 7. The BFR Pros Difference — Beliefs 3 + 4 (cuff-bias + right shape) */}
        <HomeSolution />

        {/* 8. Course Overview teaser — bridges to /get-certified */}
        <HomeCourseOverview />

        {/* 9. Who It's For — three profession cards */}
        <WhoItsForCards />

        {/* 10. Instructor Authority — Belief 5 formal install */}
        <HomeInstructor />

        {/* 11. Testimonials — outcome-specific named credentials */}
        <TestimonialsSection />

        {/* 12. Partners + Approvals — brand legitimacy */}
        <HomeProofRow />

        {/* 13. FAQ — top 5 objections, leads with the modality-belief pair */}
        <FAQSection
          items={HOME_FAQ}
          eyebrow="Common questions"
          title="The 5 questions every clinician asks before deciding."
          intro="Answered in plain language, with citations where the science supports the answer."
        />

        {/* 14. Final CTA — Belief 6 (patient-demand) lands HERE only, by design */}
        <HomeFinalCTA />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* JSON-LD @graph: Organization, WebSite (with SearchAction), Course, Person, AggregateRating, FAQPage, WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
