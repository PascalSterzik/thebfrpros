import type { Metadata } from "next";

import StrippedHeader from "@/components/sections/certification/StrippedHeader";
import CertHero from "@/components/sections/certification/CertHero";
import CertFeaturedInBar from "@/components/sections/certification/CertFeaturedInBar";
import CertProblemBlock from "@/components/sections/certification/CertProblemBlock";
import CertUmpSection from "@/components/sections/certification/CertUmpSection";
import CertShiftSection from "@/components/sections/certification/CertShiftSection";
import CertEnemySection from "@/components/sections/certification/CertEnemySection";
import CertDifferenceSection from "@/components/sections/certification/CertDifferenceSection";
import CertCurriculumSection from "@/components/sections/certification/CertCurriculumSection";
import CertInstructorSection from "@/components/sections/certification/CertInstructorSection";
import CertVideoTestimonials from "@/components/sections/certification/CertVideoTestimonials";
import CertProofSection from "@/components/sections/certification/CertProofSection";
import CertApprovalsSection from "@/components/sections/certification/CertApprovalsSection";
import CertPricingSection from "@/components/sections/certification/CertPricingSection";
import CertBonusesSection from "@/components/sections/certification/CertBonusesSection";
import CertValueStackSection from "@/components/sections/certification/CertValueStackSection";
import CertCostOfWaitingSection from "@/components/sections/certification/CertCostOfWaitingSection";
import CertFinalCTABlock from "@/components/sections/certification/CertFinalCTABlock";
import CertPSBlock from "@/components/sections/certification/CertPSBlock";
import CertFooter from "@/components/sections/certification/CertFooter";

import FAQSection from "@/components/sections/FAQSection";

import { CERTIFICATION } from "@/content/certification";

// /certification, the standalone vendor-neutral campaign LP. Built for cold
// paid traffic, ships robots `noindex, follow` + a canonical link to
// /get-certified per PLAN.md §8 + §11 (the v1/v2 duplicate-content lesson).
// Also excluded from src/app/sitemap.ts and never added to SITE_MENU_LINKS.
//
// Section order is LOCKED by src/content/certification.ts; pricing (Section
// 12) renders BEFORE bonuses (Section 13), and the Value Stack recap
// (Section 13b) lives AFTER both. Hard rule, do not re-invert: gotcha #97 /
// copywriting-principles.md §18 / memory feedback_bonus_sequencing.
//
// Rev 1 (2026-05-20, REVISION-01.md): the page composition was updated to
//   - swap the shared FinalCTABlock + ProblemBlock + PSBlock for
//     campaign-only forks (CertFinalCTABlock, CertProblemBlock, CertPSBlock)
//     so every primary CTA routes to CERTIFICATION_ENROLL_URL and every
//     section headline can carry its own Highlighted phrase without
//     touching the shared components /get-certified depends on.
//   - drop the bottom StickyCTABar render (top StrippedHeader is the single
//     persistent CTA; file kept for re-enablement, REVISION-01.md §2).
//   - drop the VSLBlock render (the hero now carries the video; file kept).
//   - drop the LeadMagnetCapture render (dual-conversion deferral, PLAN.md
//     §6 Rev 1 note; file kept).
//   - insert CertVideoTestimonials above the text testimonial wall (5
//     muted-loop slots; placeholders until Pascal supplies the assets).
//   - insert CertValueStackSection between Bonuses (13) and FAQ (14) as the
//     gotcha-#97-respecting recap (NOT a new price anchor).

export const metadata: Metadata = {
  title: CERTIFICATION.meta.title,
  description: CERTIFICATION.meta.description,
  // Duplicate-content guardrail: noindex, follow + canonical to the main sales
  // page (/certification). Canonical host is the www form (sitemap.ts ORIGIN).
  robots: { index: false, follow: true },
  alternates: { canonical: CERTIFICATION.meta.canonical },
  openGraph: {
    title: CERTIFICATION.meta.title,
    description: CERTIFICATION.meta.description,
    url: "https://www.thebfrpros.com/bfr-certification",
    type: "website",
    images: [{ url: CERTIFICATION.meta.ogImage, width: 1200, height: 630, alt: CERTIFICATION.meta.title }],
  },
  twitter: {
    title: CERTIFICATION.meta.title,
    description: CERTIFICATION.meta.description,
    images: [CERTIFICATION.meta.ogImage],
  },
};

export default function CertificationPage() {
  return (
    <>
      {/* Section 0, stripped campaign header (the single persistent CTA) */}
      <StrippedHeader
        navCta={CERTIFICATION.header.navCta}
        logoAlt={CERTIFICATION.header.logoAlt}
      />

      <main id="main">
        {/* Section 1, hero (Big Idea gate, vendor-neutral / drawer-cuff).
            The hero now carries VIDEOS.homepageHero inline; the separate
            VSLBlock slot is no longer rendered (file kept for future cert-
            specific founder VSL). */}
        <CertHero />

        {/* Section 2, featured-in modality bar */}
        <CertFeaturedInBar label={CERTIFICATION.featuredIn.label} />

        {/* Section 3, the Loading Wall (Problem) — campaign-only fork so
            the cert headline gets its own Highlighted phrase. */}
        <CertProblemBlock />

        {/* Section 4, why this keeps happening (UMP) */}
        <CertUmpSection />

        {/* Section 5, the shift (BFR + discovery story) */}
        <CertShiftSection />

        {/* Section 6, the enemy (vendor-neutral reveal) */}
        <CertEnemySection />

        {/* Section 7, the BFR Pros difference (3 pillars + competitor table) */}
        <CertDifferenceSection />

        {/* Section 8, curriculum as capabilities (with CEU banners + per-card
            video previews per Rev 1 §5) */}
        <CertCurriculumSection />

        {/* Section 9, your instructor */}
        <CertInstructorSection />

        {/* Section 10a, VIDEO testimonials (Rev 1 §6, 5 slots; placeholders
            until Pascal supplies the assets) */}
        <CertVideoTestimonials />

        {/* Section 10b, proof (text testimonials + 1-of-1,467) */}
        <CertProofSection />

        {/* Section 11, approvals / CEUs */}
        <CertApprovalsSection />

        {/* Section 12, pricing (CORE offer only, no bonuses inside) */}
        <CertPricingSection />

        {/* Section 13, bonuses revealed AFTER price + guarantee at the end of
            the stack. HARD RULE, do NOT re-invert sections 12 and 13. */}
        <CertBonusesSection />

        {/* Section 13b, Value Stack RECAP (Rev 1 §7). Lives AFTER both
            pricing AND bonuses. Gotcha #97 still holds: recap, not a new
            anchor. */}
        <CertValueStackSection />

        {/* Section 14, objection FAQ (reuse FAQSection with cert items) */}
        <FAQSection
          items={CERTIFICATION.faq.items}
          eyebrow={CERTIFICATION.faq.label}
          title={CERTIFICATION.faq.headline}
          intro="The questions clinicians ask before clicking enroll, answered straight."
        />

        {/* Section 15, the cost of waiting (Belief 6, real urgency only) */}
        <CertCostOfWaitingSection />

        {/* Section 16, final CTA + warning — campaign-only fork so the
            primary CTA routes to CERTIFICATION_ENROLL_URL and the headline
            gets its own Highlighted phrase. */}
        <CertFinalCTABlock />

        {/* Section 17, P.S. + P.P.S. */}
        <CertPSBlock />

        {/* Section 17b (lead-magnet capture) TEMPORARILY REMOVED in Rev 1.
            Dual-conversion suspended pending nurture-pipeline setup
            (PLAN.md §6 Rev 1 note + REVISION-01.md §8). LeadMagnetCapture.tsx
            file is kept in place; re-enabling the section is a one-line
            restore here when the pipeline is ready. */}
      </main>

      {/* Section 18, minimal footer */}
      <CertFooter />

      {/* Bottom StickyCTABar removed in Rev 1 (REVISION-01.md §2). The top
          StrippedHeader is the single persistent CTA on the page; the file
          stays for re-enablement if A/B testing argues otherwise. */}
    </>
  );
}
