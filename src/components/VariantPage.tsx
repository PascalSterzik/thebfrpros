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
import ModulePreview from "@/components/sections/ModulePreview";
import InstructorsSection from "@/components/sections/InstructorsSection";
import BonusesSection from "@/components/sections/BonusesSection";
import CEUBadgesSection from "@/components/sections/CEUBadgesSection";
import VisualProofSection from "@/components/sections/VisualProofSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import PricingSection from "@/components/sections/PricingSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTABlock from "@/components/sections/FinalCTABlock";
import PSBlock from "@/components/sections/PSBlock";
import { FAQ } from "@/content/faq";
import type { Variant } from "@/content/variants";
import { buildSchemaGraph } from "@/lib/schema";

export default function VariantPage({ variant }: { variant: Variant }) {
  const schema = buildSchemaGraph({
    variantPath: variant.routePath,
    pageTitle: variant.metaTitle,
    pageDescription: variant.metaDescription,
    faq: FAQ,
  });

  return (
    <>
      {/* 1. Sticky header with mobile hamburger (announcement bar killed per §J.5: hero carries the urgency) */}
      <Header />

      <main id="main">
        {/* 3. Hero */}
        <HeroBlock variant={variant} />

        {/* 4. Featured-in marquee */}
        <CredibilityBar />

        {/* 5. Dedicated stats section (§D.5) */}
        <StatsBlock />

        {/* 6. Problem (4-Layer Pain Stack) */}
        <ProblemBlock variant={variant} />

        {/* 7. Demand graph (§D.25) */}
        <DemandGraph />

        {/* 8. Dream Vision */}
        <DreamVisionBlock variant={variant} />

        {/* 7. Dream Deep Dive */}
        <DreamDeepBlock variant={variant} />

        {/* 8. Solution Bridge */}
        <BridgeBlock variant={variant} />

        {/* 9. Solution / The BFR Pros Difference + Three Stranger Questions + comparison table */}
        <SolutionSection />

        {/* 10. Curriculum (4 courses, 37 modules, 11.75 CEUs accordion) */}
        <CurriculumSection />

        {/* 10b. Free Module Preview (Module 0 video + bibliography PDF) */}
        <ModulePreview />

        {/* 11. Instructor authority (Rolnick + Licameli) */}
        <InstructorsSection />

        {/* 12. What's Included / 11 implementation bonuses */}
        <BonusesSection />

        {/* 13. CEU approvals */}
        <CEUBadgesSection />

        {/* 14. Visual proof */}
        <VisualProofSection />

        {/* 15. Testimonials (exactly 3, named credentials, outcome-specific) */}
        <TestimonialsSection />

        {/* 16. Partners */}
        <PartnersSection />

        {/* 17. Pricing, primary CTA */}
        <PricingSection />

        {/* 18. Guarantee */}
        <GuaranteeSection />

        {/* 19. FAQ, 9 questions */}
        <FAQSection />

        {/* 20. Final CTA + Warning */}
        <FinalCTABlock variant={variant} />

        {/* 21. P.S. */}
        <PSBlock variant={variant} />
      </main>

      {/* 22. Footer */}
      <Footer />

      {/* JSON-LD @graph: Organization, WebSite, Person, Course, AggregateRating, FAQPage, BreadcrumbList, WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
