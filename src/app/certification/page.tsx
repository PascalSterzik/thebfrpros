import type { Metadata } from "next";

import StrippedHeader from "@/components/sections/certification/StrippedHeader";
import StickyCTABar from "@/components/sections/certification/StickyCTABar";
import CertHero from "@/components/sections/certification/CertHero";
import VSLBlock from "@/components/sections/certification/VSLBlock";
import CertFeaturedInBar from "@/components/sections/certification/CertFeaturedInBar";
import CertUmpSection from "@/components/sections/certification/CertUmpSection";
import CertShiftSection from "@/components/sections/certification/CertShiftSection";
import CertEnemySection from "@/components/sections/certification/CertEnemySection";
import CertDifferenceSection from "@/components/sections/certification/CertDifferenceSection";
import CertCurriculumSection from "@/components/sections/certification/CertCurriculumSection";
import CertInstructorSection from "@/components/sections/certification/CertInstructorSection";
import CertProofSection from "@/components/sections/certification/CertProofSection";
import CertApprovalsSection from "@/components/sections/certification/CertApprovalsSection";
import CertPricingSection from "@/components/sections/certification/CertPricingSection";
import CertBonusesSection from "@/components/sections/certification/CertBonusesSection";
import CertCostOfWaitingSection from "@/components/sections/certification/CertCostOfWaitingSection";
import LeadMagnetCapture from "@/components/sections/certification/LeadMagnetCapture";
import CertFooter from "@/components/sections/certification/CertFooter";

import ProblemBlock from "@/components/sections/ProblemBlock";
import FinalCTABlock from "@/components/sections/FinalCTABlock";
import PSBlock from "@/components/sections/PSBlock";
import FAQSection from "@/components/sections/FAQSection";

import { CERTIFICATION } from "@/content/certification";
import type { Variant } from "@/content/variants";

// /certification, the standalone vendor-neutral campaign LP. Built for cold
// paid traffic, ships robots `noindex, follow` + a canonical link to
// /get-certified per PLAN.md §8 + §11 (the v1/v2 duplicate-content lesson).
// Also excluded from src/app/sitemap.ts and never added to SITE_MENU_LINKS.
// Section order is LOCKED by src/content/certification.ts; pricing (Section
// 12) renders BEFORE bonuses (Section 13). Hard rule, do not re-invert:
// copywriting-principles.md §18 / gotcha #97 / memory feedback_bonus_sequencing.

export const metadata: Metadata = {
  title: CERTIFICATION.meta.title,
  description: CERTIFICATION.meta.description,
  // Duplicate-content guardrail: noindex, follow + canonical to /get-certified.
  // Canonical host is the www form (sitemap.ts ORIGIN convention).
  robots: { index: false, follow: true },
  alternates: { canonical: CERTIFICATION.meta.canonical },
  openGraph: {
    title: CERTIFICATION.meta.title,
    description: CERTIFICATION.meta.description,
    url: "https://www.thebfrpros.com/certification",
    type: "website",
    images: [{ url: CERTIFICATION.meta.ogImage, width: 1200, height: 630, alt: CERTIFICATION.meta.title }],
  },
  twitter: {
    title: CERTIFICATION.meta.title,
    description: CERTIFICATION.meta.description,
    images: [CERTIFICATION.meta.ogImage],
  },
};

// Variant shim for the three pure data-driven blocks we reuse unchanged
// (ProblemBlock, FinalCTABlock, PSBlock). The certification copy mirrors the
// matching subset of the Variant shape; the dreamVision / dreamDeep / bridge
// / announcement fields are required by the type but unused by the reused
// components, so they get safe empty defaults. The hardcoded highlight
// phrases inside those blocks ("you're stalling", "which clinic answers")
// silently fall through when the certification headline does not contain
// them; that is acceptable for the campaign and avoids forking three
// shared components.
const variantShim: Variant = {
  slug: "v3",
  routePath: CERTIFICATION.routePath,
  belief: "Stages 2 to 5, vendor-neutral identity",
  beliefNumber: 0,
  metaTitle: CERTIFICATION.meta.title,
  metaDescription: CERTIFICATION.meta.description,
  ogImage: CERTIFICATION.meta.ogImage,
  announcement: { eyebrow: "", line: "", cta: "" },
  hero: {
    eyebrow: CERTIFICATION.hero.eyebrow,
    headline: CERTIFICATION.hero.headline,
    subhead: CERTIFICATION.hero.subhead,
    primaryCta: CERTIFICATION.hero.primaryCta,
    secondaryCta: CERTIFICATION.hero.secondaryCta,
    supportingStat: CERTIFICATION.hero.supportingStat.map((s) => ({ value: s.value, label: s.label })),
    photoSrc: CERTIFICATION.hero.photoSrc,
    photoAlt: CERTIFICATION.hero.photoAlt,
  },
  problem: {
    label: CERTIFICATION.problem.label,
    headline: CERTIFICATION.problem.headline,
    intro: CERTIFICATION.problem.intro,
    surface: CERTIFICATION.problem.surface,
    emotional: CERTIFICATION.problem.emotional,
    future: CERTIFICATION.problem.future,
    visceral: CERTIFICATION.problem.visceral,
  },
  dreamVision: { label: "", headline: "", paragraphs: [] },
  dreamDeep: { label: "", headline: "", paragraphs: [] },
  bridge: { line: "" },
  finalCta: {
    headline: CERTIFICATION.finalCta.headline,
    subhead: CERTIFICATION.finalCta.subhead,
    warning: CERTIFICATION.finalCta.warning,
    primary: CERTIFICATION.finalCta.primary,
  },
  ps: [...CERTIFICATION.ps],
};

export default function CertificationPage() {
  return (
    <>
      {/* Section 0, stripped campaign header */}
      <StrippedHeader
        navCta={CERTIFICATION.header.navCta}
        logoAlt={CERTIFICATION.header.logoAlt}
      />

      <main id="main">
        {/* Section 1, hero (Big Idea gate, vendor-neutral / drawer-cuff) */}
        <CertHero />

        {/* Section 1b, optional founder VSL (renders nothing until videoSrc
            and posterSrc props are wired) */}
        <VSLBlock
          caption={CERTIFICATION.hero.vsl.caption}
          posterAlt={CERTIFICATION.hero.vsl.posterAlt}
        />

        {/* Section 2, featured-in modality bar */}
        <CertFeaturedInBar label={CERTIFICATION.featuredIn.label} />

        {/* Section 3, the Loading Wall (Problem) */}
        <ProblemBlock variant={variantShim} />

        {/* Section 4, why this keeps happening (UMP) */}
        <CertUmpSection />

        {/* Section 5, the shift (BFR + discovery story) */}
        <CertShiftSection />

        {/* Section 6, the enemy (vendor-neutral reveal) */}
        <CertEnemySection />

        {/* Section 7, the BFR Pros difference (3 pillars + competitor table) */}
        <CertDifferenceSection />

        {/* Section 8, curriculum as capabilities */}
        <CertCurriculumSection />

        {/* Section 9, your instructor */}
        <CertInstructorSection />

        {/* Section 10, proof (testimonials + 1-of-1,467) */}
        <CertProofSection />

        {/* Section 11, approvals / CEUs */}
        <CertApprovalsSection />

        {/* Section 12, pricing (CORE offer only, no bonuses inside) */}
        <CertPricingSection />

        {/* Section 13, bonuses revealed AFTER price + guarantee at the end of
            the stack. HARD RULE, do NOT re-invert sections 12 and 13. */}
        <CertBonusesSection />

        {/* Section 14, objection FAQ (reuse FAQSection with cert items) */}
        <FAQSection
          items={CERTIFICATION.faq.items}
          eyebrow={CERTIFICATION.faq.label}
          title={CERTIFICATION.faq.headline}
          intro="The questions clinicians ask before clicking enroll, answered straight."
        />

        {/* Section 15, the cost of waiting (Belief 6, real urgency only) */}
        <CertCostOfWaitingSection />

        {/* Section 16, final CTA + warning */}
        <FinalCTABlock variant={variantShim} />

        {/* Section 17, P.S. + P.P.S. */}
        <PSBlock variant={variantShim} />

        {/* Section 17b, non-buyer capture (secondary conversion) */}
        <LeadMagnetCapture
          label={CERTIFICATION.leadMagnet.label}
          headline={CERTIFICATION.leadMagnet.headline}
          body={CERTIFICATION.leadMagnet.body}
          fields={[...CERTIFICATION.leadMagnet.fields]}
          cta={CERTIFICATION.leadMagnet.cta}
          privacyLine={CERTIFICATION.leadMagnet.privacyLine}
        />
      </main>

      {/* Section 18, minimal footer */}
      <CertFooter />

      {/* Sticky CTA bar, visible after the hero fold */}
      <StickyCTABar
        label={CERTIFICATION.header.stickyLabel}
        cta={CERTIFICATION.header.stickyCta}
      />
    </>
  );
}
