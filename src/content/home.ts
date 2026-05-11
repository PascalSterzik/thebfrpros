// Homepage copy. Single source of truth for the public landing page at "/".
// Per the funnel-position audit in the plan: every section maps to a specific
// belief and awareness stage. Copy is written for the homepage's job (top of
// funnel, mixed awareness), not borrowed from /get-certified.
//
// Brand-guide compliance:
//   - Headings render in Compacta Bold ALL CAPS via .font-display + uppercase utilities.
//     Strings here are written sentence-cased for editing readability; CSS uppercases.
//   - No em-dashes, no AI words, no false scarcity (no "cohort", no "spots left").

import type { FAQItem } from "@/content/faq";

export const HOME_META = {
  // Absolute title (bypasses layout.tsx title.template suffix) — homepage owns its own
  // root title rather than appending "| The BFR Pros" suffix on top of an existing
  // "| The BFR Pros" string. Set as { absolute } in app/page.tsx metadata.
  title: "The BFR Pros | Online BFR Certification by Dr. Nicholas Rolnick",
  description:
    "Online BFR certification taught by Dr. Nicholas Rolnick, author of 72+ peer-reviewed BFR publications. 37 modules, 11.75 CEUs, equipment-agnostic, 30-day money-back guarantee.",
  canonicalPath: "/",
  ogImagePath: "/og/home",
} as const;

// Hero — Section 2. Belief 1 (modality value at 30% load) leads, and EVERY
// element in the section is sourced from the same belief layer: eyebrow
// orients on BFR + audience, headline is the science claim, subhead extends
// the science claim, CTA frames the cert as exploration (visitor doesn't
// know what BFR is yet — pushing "Get Certified" here jumps too far down
// the funnel). The trust line below names Dr. Rolnick by his peer-reviewed
// publication COUNT, never a comparative superlative (see brand-guide.md
// Forbidden Claims table for the literal blocked phrases and approved
// replacements).
// The secondary "What is BFR?" anchor button was removed because the
// destination is literally the next section on scroll — the button adds
// no value (the visitor will scroll anyway).
export const HOME_HERO = {
  eyebrow: "BFR training for licensed clinicians",
  headline: "BFR builds the same strength as heavy lifting. At 30% of the load.",
  highlightPhrase: "30% of the load",
  subhead:
    "The rehab tool with sixty years of research and a growing peer-reviewed evidence base. Built for licensed PTs, ATs, and S&C coaches who want to apply BFR in their practice.",
  primaryCta: "Explore the certification",
  trustLine:
    "Built on 72+ peer-reviewed BFR publications by Dr. Nicholas Rolnick. 11.75 CEUs. Equipment-agnostic.",
  photoSrc: "/images/hero/hero-banner.jpg",
  photoAlt: "Dr. Nicholas Rolnick applying a blood flow restriction cuff to a patient's leg",
} as const;

// Section 4 — What BFR Does. Modality explainer. Belief 1 deepening.
// Awareness stages 2 and 3 served. Three pillars: mechanism + safety + breadth.
export const WHAT_BFR_DOES = {
  eyebrow: "What BFR is",
  headline: "Low-load resistance training that drives heavy-load adaptations.",
  intro:
    "Blood flow restriction (BFR) places a calibrated pneumatic or pneumatic-equivalent cuff on the proximal limb during exercise. Venous return is restricted while arterial flow continues. The result: muscle works harder at lighter loads, and the body responds with strength and hypertrophy gains comparable to heavy resistance training, at 20-40% of one-rep max.",
  pillars: [
    {
      eyebrow: "Mechanism",
      title: "Heavy-load gains at light-load tolerances.",
      body: "Cell swelling, metabolite accumulation, and elevated motor-unit recruitment under restriction produce hypertrophy and strength adaptations across multiple muscle groups in published trials.",
    },
    {
      eyebrow: "Safety",
      title: "Lower event rates than standard resistance training.",
      body: "The largest published BFR safety survey across 12,642 sessions reported deep vein thrombosis at 0.06%, pulmonary embolism at 0.01%, and rhabdomyolysis at 0.01%. Screening protocols and pressure prescription drive that record.",
    },
    {
      eyebrow: "Breadth",
      title: "ACL rehab. Rotator cuff. Geriatrics. In-season athletes.",
      body: "BFR has published evidence in post-surgical loading, sarcopenia, tendon adaptation, in-season maintenance, and aerobic conditioning. The certification covers protocols across each clinical and performance setting.",
    },
  ],
} as const;

// Section 5 — Why BFR Matters Now. Belief 1 evidence stack: 60-year history,
// mainstream adoption, and the strength stat as the closing punch. Awareness 2-3.
export const WHY_BFR_MATTERS_NOW = {
  eyebrow: "Why now",
  headline: "Sixty years of research. Decades of clinical adoption.",
  intro:
    "The technique is not new. The application in modern outpatient rehab and S&C is. The literature has matured, the equipment has standardized, and major institutions are bringing BFR into clinical and performance practice.",
  proofPoints: [
    {
      stat: "1966",
      title: "Sato develops the original protocol in Japan.",
      body: "The KAATSU patent followed in 1994. Adoption in US clinical settings accelerated through the 2010s as research output expanded.",
    },
    {
      stat: "12,642",
      title: "Sessions in the largest published safety survey.",
      body: "Adverse event rates comparable to or lower than standard resistance training, when applied with screening and pressure protocols.",
    },
    {
      stat: "30%",
      title: "Of one-rep max produces heavy-lifting strength gains.",
      body: "Published trials demonstrate hypertrophy and strength adaptations at 20-40% 1RM under restriction that match traditional 70-80% 1RM training.",
    },
  ],
  closing:
    "Mayo Clinic, Cleveland Clinic, Northwestern Medicine, and US Special Operations Command all use BFR. The American Physical Therapy Association recognizes BFR within PT scope. The National Athletic Trainers Association approves BFR for athletic trainers.",
} as const;

// Section 7 — The BFR Pros Difference. Beliefs 3 (cuff bias) + 4 (right shape).
// Awareness 3-4. Three pillars condensed; full comparison table lives on /get-certified.
export const HOME_SOLUTION = {
  eyebrow: "The BFR Pros difference",
  headline: "Three things no other BFR certification combines.",
  intro:
    "Every BFR course on the market is research-led, or equipment-led, or implementation-focused. The Complete BFR Certification combines all three by design.",
  pillars: [
    {
      title: "Research-led, not product-led",
      body: "Built on 72+ peer-reviewed BFR publications by Dr. Rolnick. Updated as the literature evolves.",
    },
    {
      title: "Equipment-agnostic by design",
      body: "Works with Delfi, SmartCuffs, B Strong, LiveBand, KAATSU, or any quality cuff. The certification is the technique, not the cuff.",
    },
    {
      title: "Implementation-focused",
      body: "11 bonuses cover screening forms, liability waiver, RPE tools, cuff discount codes, and a private community. Apply BFR with your first patient by week two, not month two.",
    },
  ],
  closing:
    "The full side-by-side against Owens Recovery Science, NE Seminars, PESI, and Mike Reinold lives on the certification page.",
  ctaLabel: "See the full comparison",
  ctaHref: "/get-certified#solution",
} as const;

// Section 8 — Course Overview. Bridges to /get-certified. Awareness 4-5.
export const HOME_COURSE_OVERVIEW = {
  eyebrow: "The certification",
  headline: "The Complete BFR Certification.",
  summary:
    "37 modules across 4 courses. 11.75 CEUs. On-demand video plus downloadable resources. Self-paced: do it in a weekend or take 4 weeks.",
  highlights: [
    { value: "4", label: "Courses" },
    { value: "37", label: "Modules" },
    { value: "11.75", label: "CEUs" },
    { value: "$449", label: "Single bundle" },
  ],
  courses: [
    {
      n: "1",
      title: "Introduction to BFR Training",
      detail: "14 modules · 5h 16m · 5.5 CEUs",
      summary: "Foundation. Mechanism, screening, pressure prescription, and the three pillars of BFR application.",
    },
    {
      n: "2",
      title: "BFR Masters Series Clinical Rounds",
      detail: "12 modules · 1h 32m · 2.25 CEUs",
      summary: "Six case-based clinical rounds with Dr. Rolnick walking through real patient decisions.",
    },
    {
      n: "3",
      title: "Masters Webinar: What's New in BFR 2021",
      detail: "6 modules · 1h 35m · 2 CEUs",
      summary: "Five 2021 papers with the lead author's commentary on what each finding means clinically.",
    },
    {
      n: "4",
      title: "Masters Webinar: Device Features 2024",
      detail: "2 modules · 1h 38m · 2 CEUs",
      summary: "Comparative review of 2024 cuff design data plus a practical assessment on wrap straps vs elastic bands.",
    },
  ],
  ctaLabel: "Get Certified",
  ctaSecondaryLabel: "See the full curriculum",
  ctaSecondaryHref: "/get-certified#curriculum",
} as const;

// Section 9 — Who It's For. 3 profession cards. Awareness 2-4.
// Cards link to /for/* (Phase 2, comingSoon: true).
export const HOME_AUDIENCES = [
  {
    audience: "Physical Therapists",
    eyebrow: "For PTs",
    body: "BFR is within PT scope of practice per APTA. The curriculum covers post-op loading, ACL rehab, rotator cuff, and the geriatric population PT school underserved.",
    ceus: "11.75 CEUs · BOC + NY State PT + NJ State PT approved",
    href: "/for/physical-therapists",
    comingSoon: true,
  },
  {
    audience: "Athletic Trainers",
    eyebrow: "For ATs",
    body: "BFR is approved for ATs by NATA. AT-specific use cases run through the curriculum: in-season maintenance, sideline-friendly equipment recommendations, and return-to-sport timelines.",
    ceus: "11.75 CEUs · BOC AP# P10226",
    href: "/for/athletic-trainers",
    comingSoon: true,
  },
  {
    audience: "Strength & Conditioning Coaches",
    eyebrow: "For S&C",
    body: "Bonus #9 (Athletic BFR Programming) covers in-season maintenance, low-load hypertrophy, and ischemic preconditioning protocols for the performance setting.",
    ceus: "Performance + rehab applications across the curriculum",
    href: "/for/strength-coaches",
    comingSoon: true,
  },
] as const;

// Section 10 — Instructor Authority condensed. Belief 5 formal install.
// Stays lighter than /get-certified InstructorsSection (no facts grid, no marquee).
export const HOME_INSTRUCTOR = {
  eyebrow: "Your instructors",
  headline: "Learn from the source.",
  // Belief 5 (research source) framed with the specific count, never a
  // comparative superlative — see Forbidden Claims in brand-guide.md.
  intro:
    "The Complete BFR Certification is taught by Dr. Nicholas Rolnick, whose 72+ peer-reviewed BFR publications form the curriculum's evidence base, alongside a co-instructor who bridges rehab and athletic performance.",
  ctaLabel: "Read the instructor profile",
  ctaHref: "/about/nicholas-rolnick",
  ctaComingSoon: true,
} as const;

// Section 14 — Final CTA. Belief 6 patient-demand framing as the closing urgency
// hook. This is the ONLY place patient-demand leads on the homepage; Beliefs 1-5
// have been installed by now, so Belief 6 lands.
export const HOME_FINAL_CTA = {
  eyebrow: "The next logical step",
  headline: "Your patients are already asking for BFR. The clinic across the street is starting to deliver it.",
  body:
    "First-mover clinics in major metros are already building cash-pay BFR programs. The certification is the path from \"we don't do that\" to \"we're the BFR clinic in this zip code.\"",
  primaryCta: "Get Certified",
  reassurance:
    "11.75 CEUs · 30-day money-back guarantee · 1,467+ practitioners certified · works with any quality cuff",
} as const;

// Section 13 — HOME_FAQ. Five questions per SITE-ARCHITECTURE §8. Pulled from
// 04-offer-brief.md and ordered modality-belief first, then cert mechanics.
export const HOME_FAQ: readonly FAQItem[] = [
  {
    q: "Is BFR a fad?",
    a: "No. BFR has 60 years of research history starting with Sato in 1966 and a peer-reviewed evidence base that has expanded sharply over the past two decades. Mayo Clinic, Cleveland Clinic, Northwestern Medicine, and US Special Operations Command have all integrated BFR. The American Physical Therapy Association recognizes BFR within PT scope, and the National Athletic Trainers Association approves it for ATs.",
  },
  {
    q: "Is BFR safe?",
    a: "Yes, when applied by a screened practitioner with appropriate pressures. The largest published BFR safety survey (n=12,642 sessions) reported deep vein thrombosis at 0.06%, pulmonary embolism at 0.01%, and rhabdomyolysis at 0.01%, rates comparable to or lower than standard resistance training. Safety depends on screening, equipment quality, and pressure prescription, all of which the certification covers in detail.",
  },
  {
    q: "Do I need to buy a specific cuff?",
    a: "No. The certification is equipment-agnostic by design. You can use Delfi PTS, SmartCuffs, B Strong, LiveBand, KAATSU, or any other quality cuff. Bonus #4 includes negotiated discount codes across the major manufacturers, so you pick the cuff that fits your practice and budget after the curriculum has taught you what to look for.",
  },
  {
    q: "How long does the certification take?",
    a: "11.75 hours of video content. You can complete it in a weekend, take 4 weeks at 2-3 modules per week, or work through it slower. The format is on-demand video plus downloadable resources, so you can complete it on your commute or between patients. Modules are searchable, and you have lifetime access for future reference.",
  },
  {
    q: "What if I get certified and still don't feel confident?",
    a: "100% money-back guarantee within 30 days, no questions asked. Bonus #11 is a private Facebook group with Dr. Rolnick and 1,467+ certified clinicians answering implementation questions in real time. Of 1,467 graduates to date, one has taken the refund.",
  },
] as const;
