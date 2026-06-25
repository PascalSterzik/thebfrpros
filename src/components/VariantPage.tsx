import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import HeroBlock from "@/components/sections/HeroBlock";
import CredibilityBar from "@/components/sections/CredibilityBar";
import StatsBlock from "@/components/sections/StatsBlock";
import ProblemBlock from "@/components/sections/ProblemBlock";
import DemandGraph from "@/components/sections/DemandGraph";
import DreamVisionBlock from "@/components/sections/DreamVisionBlock";
import DreamDeepBlock from "@/components/sections/DreamDeepBlock";
import BridgeBlock from "@/components/sections/BridgeBlock";
import SolutionSection from "@/components/sections/SolutionSection";
import CurriculumSection from "@/components/sections/CurriculumSection";
import TopTestimonials from "@/components/sections/TopTestimonials";
import InstructorsSection from "@/components/sections/InstructorsSection";
import BonusesSection from "@/components/sections/BonusesSection";
import CEUBadgesSection from "@/components/sections/CEUBadgesSection";
import VisualProofSection from "@/components/sections/VisualProofSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import PricingSection from "@/components/sections/PricingSection";
import ValueStackSection from "@/components/sections/ValueStackSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTABlock from "@/components/sections/FinalCTABlock";
import PSBlock from "@/components/sections/PSBlock";
import TeamTrainingPointer from "@/components/sections/team-training/TeamTrainingPointer";
import { FAQ } from "@/content/faq";
import type { Variant } from "@/content/variants";
import { buildSchemaGraph } from "@/lib/schema";
import { SITE_MENU_LINKS } from "@/lib/menus";

export default function VariantPage({ variant }: { variant: Variant }) {
  const schema = buildSchemaGraph({
    variantPath: variant.routePath,
    pageTitle: variant.metaTitle,
    pageDescription: variant.metaDescription,
    faq: FAQ,
  });

  return (
    <>
      {/* 1. Sticky header (Pascal-2026-05-13 retrofit: only the global header
          remains on the cert page. The earlier CertAnchorNav secondary bar
          was removed at Pascal's direction — single menu sitewide.) */}
      <Header menuLinks={SITE_MENU_LINKS} />

      <main id="main">
        {/* 3. Hero */}
        <HeroBlock variant={variant} />

        {/* 4. Featured-in marquee */}
        <CredibilityBar />

        {/* 4b. Top testimonials — three named expert quotes with photos
            (Lee / Whyte / Toderico) surfaced right under the brand-logo
            social proof per Pascal 2026-05-23. The full review wall + 5
            video testimonials live further down in TestimonialsSection. */}
        <TopTestimonials />

        {/* 5. Demand graph: leads as urgency context BEFORE problem so it doesn't
            interrupt the Problem→Dream→Solution flow Pascal flagged on review. */}
        <DemandGraph />

        {/* 6. Problem (4-Layer Pain Stack) */}
        <ProblemBlock variant={variant} />

        {/* 7. Dream Vision */}
        <DreamVisionBlock variant={variant} />

        {/* 8. Dream Deep Dive */}
        <DreamDeepBlock variant={variant} />

        {/* 9. Solution Bridge */}
        <BridgeBlock variant={variant} />

        {/* 10. Solution / The BFR Pros Difference + Three Stranger Questions + comparison table */}
        <SolutionSection />

        {/* 10. Curriculum (4 courses, 37 modules, 11.75 CEUs accordion) */}
        <CurriculumSection />

        {/* 11. Instructor authority (Rolnick + Licameli) */}
        <InstructorsSection />

        {/* 12. Authority by the numbers — the proof stack closes out right
            before the offer block (pricing → bonuses → value stack). */}
        <StatsBlock />

        {/* 13. CEU approvals */}
        <CEUBadgesSection />

        {/* 14. Visual proof */}
        <VisualProofSection />

        {/* 15. Testimonials (exactly 3, named credentials, outcome-specific) */}
        <TestimonialsSection />

        {/* 16. Partners */}
        <PartnersSection />

        {/* 17. Pricing — CORE offer only ($449, no bonuses inside). HARD RULE,
            do NOT re-invert 17/18/18b: the price anchors standalone first, the
            bonuses land free on top, the value stack recaps last (gotcha #97 /
            copywriting-principles.md §18 / feedback_bonus_sequencing). */}
        <PricingSection />

        {/* 18. Bonuses — revealed AFTER the price as a free surprise on top. */}
        <BonusesSection />

        {/* 18b. Value Stack RECAP — the full math, AFTER both pricing and
            bonuses. A recap, not a new price anchor. */}
        <ValueStackSection />

        {/* 19. Guarantee */}
        <GuaranteeSection />

        {/* 20. FAQ, 9 questions */}
        <FAQSection />

        {/* Light cross-pointer: an owner on the cert page should discover the team lane (spec §7.3) */}
        <TeamTrainingPointer variant="certification" />

        {/* 21. Final CTA + Warning */}
        <FinalCTABlock variant={variant} />

        {/* 22. P.S. */}
        <PSBlock variant={variant} />
      </main>

      {/* 23. Footer */}
      <Footer />

      {/* JSON-LD @graph: Organization, WebSite, Person, Course, AggregateRating, FAQPage, BreadcrumbList, WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
