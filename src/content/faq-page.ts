// /faq page content. Broader than the 9-item FAQ embedded on /get-certified
// (which is cert-mechanics focused). This is the comprehensive set: course,
// eligibility, CEUs, equipment, pricing, safety, implementation.
//
// Source: Research/04-offer-brief.md objection list + brand-guide.md
// Forbidden Claims discipline. Every answer leads with a direct sentence-1
// response (AEO-optimized) before expanding. No comparative superlatives,
// no false scarcity, specific 72+ publication count where it applies.

export type FAQPageItem = { q: string; a: string };

export type FAQPageCategory = {
  slug: string;
  label: string;
  description: string;
  items: ReadonlyArray<FAQPageItem>;
};

export const FAQ_PAGE_META = {
  title: "FAQ | The BFR Pros",
  description:
    "Common questions about The Complete BFR Certification: course format, CEUs, equipment, pricing, refund policy, safety, and implementation. Direct answers grouped by topic.",
  canonicalPath: "/faq",
  ogImagePath: "/og/home",
} as const;

export const FAQ_PAGE_HERO = {
  eyebrow: "Common questions",
  headline: "Direct answers to what clinicians actually ask",
  subhead:
    "Pulled from the actual support inbox and from objection patterns the avatar dossier surfaced. Grouped by topic so you can scan to the question that matters for your enrollment decision.",
} as const;

export const FAQ_PAGE: ReadonlyArray<FAQPageCategory> = [
  {
    slug: "about-the-course",
    label: "About the course",
    description: "What it is, what it includes, how it's delivered.",
    items: [
      {
        q: "What is The Complete BFR Certification?",
        a: "A 37-module, 11.75-CEU professional certification in evidence-based blood flow restriction training. Built for licensed Physical Therapists, Athletic Trainers, and Strength & Conditioning Coaches. Taught primarily by Dr. Nicholas Rolnick (PT, MS, CSCS — author of 72+ peer-reviewed BFR publications) with co-instructor Dr. Nicholas Licameli (PT, DPT) covering the athletic-side chapters.",
      },
      {
        q: "How long does the certification take to complete?",
        a: "11.75 hours of video content across 37 modules. You can complete it in a single weekend, take 4 weeks at a steady pace, or work through it slower. Modules are searchable and you have lifetime access, so most graduates return to the curriculum as a reference even after completing it.",
      },
      {
        q: "Is it self-paced or live?",
        a: "Self-paced on-demand video through Teachable. No cohort, no scheduled live sessions, no waiting for the next intake. Enroll today, start today. Downloadable workbooks, screening forms, and a module-by-module bibliography come with the course.",
      },
    ],
  },
  {
    slug: "eligibility-and-audience",
    label: "Eligibility and audience",
    description: "Who the course is built for, and what you need to bring to it.",
    items: [
      {
        q: "Who is this certification for?",
        a: "Licensed Physical Therapists, Athletic Trainers, and Strength & Conditioning Coaches. The curriculum assumes baseline clinical or coaching literacy: anatomy, physiology, basic programming. It is not built for fitness enthusiasts or new graduates without a credential, and it is not aimed at general consumers.",
      },
      {
        q: "Do I need prior BFR experience?",
        a: "No. The curriculum starts from the science of why BFR works and walks through screening, pressure calculation, programming, and condition-specific protocols. Most enrollees have zero prior BFR practice; many are applying BFR with their first patient by the end of week two.",
      },
      {
        q: "I'm an athletic trainer or strength coach, not a PT. Is this for me?",
        a: "Yes. NATA recognizes BFR within the AT scope of practice and the certification is BOC-approved (Provider AP# P10226) for Category A CEUs. The athletic-side chapters — in-season hypertrophy, ischemic preconditioning, return-to-sport bridging — are written by Dr. Licameli, a competitive natural bodybuilder and DPT. Two dedicated audience pages cover this in detail: /for/athletic-trainers and /for/strength-coaches.",
      },
    ],
  },
  {
    slug: "ceus-and-licensing",
    label: "CEUs and licensing",
    description: "What credit you can claim toward your renewal cycle.",
    items: [
      {
        q: "Is The Complete BFR Certification accepted for CEU credits in my state?",
        a: "Yes, in most US states. The certification is approved by the Board of Certification (BOC, AP# P10226), the New York State PT Board (through December 11, 2027), and the New Jersey PT Board (through January 31, 2026). Reciprocal in 35 additional states. Individual filing required in 13 states (AZ, DC, MD, MS, NM, CA, LA, IL, MN, NV, OH, TX, WV). If your state isn't listed, contact us at nick@thebfrpros.com and we'll confirm the specific path for your license.",
      },
      {
        q: "Is BFR within the PT scope of practice?",
        a: "Yes. The American Physical Therapy Association (APTA) recognizes blood flow restriction training as within the PT scope of practice. The APTA scope statement is what makes the course practice-relevant; the state-board approvals are what make the course CEU-eligible toward renewal.",
      },
      {
        q: "Is BFR within the AT scope of practice?",
        a: "Yes. The National Athletic Trainers Association (NATA) has affirmed that BFR is within the AT scope of practice. The certification is approved by the Board of Certification (BOC) as Category A continuing-education provider AP# P10226 across all four courses for one renewal cycle.",
      },
      {
        q: "What does this count for if I hold a CSCS or other S&C certification?",
        a: "11.75 hours of contact education recognized by most continuing-education filing systems that accept self-reported contact hours. NSCA recognition varies by certification holder and renewal cycle; check your specific certification body's continuing-education requirements. The course content has been published-in part in the NSCA's Strength and Conditioning Journal by Dr. Rolnick.",
      },
    ],
  },
  {
    slug: "equipment",
    label: "Equipment",
    description: "What cuff you need (and don't need) to take the course.",
    items: [
      {
        q: "Do I need to buy a specific cuff to take the certification?",
        a: "No. The certification is equipment-agnostic by design. You can use Delfi PTS, SmartCuffs, B Strong, LiveBand, KAATSU, or any other quality cuff. We teach the technique; the cuff is your choice based on practice setting and budget.",
      },
      {
        q: "Which cuff do you recommend?",
        a: "We do not have a single recommendation because the right cuff depends on your context. The curriculum walks through pneumatic Delfi systems for premium clinical use, SmartCuffs and similar for clinic and S&C use, B Strong elastic bands for portable settings, and wrapping straps when pneumatic systems aren't on hand. Course 4 closes with a knowledge assessment on practical BFR with wrapping straps versus elastic bands.",
      },
      {
        q: "Are cuff discounts included with the certification?",
        a: "Yes. Bonus #4 in the offer is up to $640 in negotiated discounts on Delfi, SmartCuffs, B Strong, and other manufacturers. The discounts are called out separately from the bundled bonus value because not every enrollee uses them.",
      },
    ],
  },
  {
    slug: "pricing-refund-reimbursement",
    label: "Pricing, refund, and reimbursement",
    description: "What it costs, how the refund works, and getting your clinic to pay.",
    items: [
      {
        q: "What does The Complete BFR Certification cost?",
        a: "$449 for the full bundle: 4 courses, 37 modules, 11.75 CEUs, 11 bonuses. Advertised value is $1,454, savings $1,005, plus up to $640 in cuff-discount savings called out separately. There is one offer — no tiers, no upsells.",
      },
      {
        q: "What's the refund policy?",
        a: "30-day money-back guarantee, no questions asked. If you complete modules, apply BFR with a patient, and decide it's not for your practice, email nick@thebfrpros.com within 30 days of enrollment and we refund the full purchase. Of 1,467+ graduates to date, one has used the refund. The full refund policy is at /refund-policy.",
      },
      {
        q: "Can my clinic owner reimburse the certification?",
        a: "Most clinic owners reimburse evidence-based continuing education. The certification produces a Certificate of Completion you can submit for reimbursement. If you would like a brief ROI letter to send your owner showing the cash-pay BFR program revenue potential, email us at nick@thebfrpros.com and we'll send the template.",
      },
    ],
  },
  {
    slug: "safety-and-clinical",
    label: "Safety and clinical practice",
    description: "How the curriculum handles the questions every clinician asks before applying a cuff.",
    items: [
      {
        q: "Is BFR safe?",
        a: "Yes, when applied by a screened practitioner with appropriate pressures. The largest published BFR safety survey across 12,642 sessions reported deep vein thrombosis at 0.06%, pulmonary embolism at 0.01%, and rhabdomyolysis at 0.01% — rates comparable to or lower than standard resistance training. Safety depends on screening, equipment quality, and pressure prescription, all of which the certification covers in detail.",
      },
      {
        q: "What if a patient has an adverse event?",
        a: "Bonus #2 is a patient screening form that risk-stratifies every candidate against precautions and contraindications before the first cuff goes on. Bonus #1 is a drop-in liability waiver clinics use to formally adopt BFR into their consent flow. Bonus #7 is the full precautions and contraindications list, sourced from the Frontiers literature review. The safety module covers the risk-stratification framework with the same data the major literature reviews use.",
      },
    ],
  },
  {
    slug: "implementation-and-support",
    label: "Implementation and support",
    description: "What happens after you complete the modules.",
    items: [
      {
        q: "How quickly can I apply BFR with a real patient?",
        a: "Most graduates apply BFR with their first patient by week two of the course. The curriculum covers screening, pressure calculation, programming, documentation language, the surgeon-conversation script, and billing notes. You finish the course with a working clinical workflow, not just theory.",
      },
      {
        q: "Is there ongoing support after I complete the certification?",
        a: "Yes. Bonus #11 is the private graduate community on Facebook. 1,467+ certified clinicians are in there. Dr. Rolnick answers implementation questions in real time. The community is where graduates share case studies, ask about specific patient scenarios, and refine their BFR practice over time.",
      },
    ],
  },
] as const;

// Flat array used to emit FAQPage JSON-LD schema in one pass. All Q+As
// appear here regardless of category for Google rich-result eligibility.
export const FAQ_PAGE_FLAT: ReadonlyArray<FAQPageItem> = FAQ_PAGE.flatMap(
  (c) => c.items,
);
