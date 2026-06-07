// Canonical /certification campaign landing-page copy.
//
// SESSION B DELIVERABLE (copy only). This file is the LOCKED source of truth
// for the standalone cold-paid campaign page at /certification. Session C
// builds the UI from this object and does NOT rewrite the words.
//
// REVISION-01 (Pascal, 2026-05-20): hero subhead trimmed to the One-Liner only
// (feature-stack trailing clause removed); every primary CTA label unified to
// "Get BFR Certified From Home"; per-section highlight phrases added for the
// brand Highlighted underline-accent treatment; new Section 13b Value Stack
// block added (recap, not a price anchor, gotcha #97 still holds); the
// lead-magnet block stays in the content object but is TEMPORARILY UNUSED on
// the page until the nurture pipeline is wired (see REVISION-01.md §8 and
// PLAN.md §6 deferral note). The full change spec is
// Agency/Clients/The BFR Pros/Deliverables/Certification-Landing-Page/REVISION-01.md.
//
// Scope guardrails (PLAN.md §1, §8, §11):
//  - Additive. Does NOT touch src/content/variants.ts (the A/B-locked v3
//    contract for /get-certified). Different concept (vendor-neutral identity)
//    from v3 (patient-demand), so the pages do not duplicate copy.
//  - The page ships robots `noindex, follow` + canonical to /get-certified and
//    is excluded from sitemap.ts. SEO metadata below is for the social/share
//    card only, not for ranking.
//
// Concept anchor (Pascal-locked 2026-05-19): the Vendor-Neutral Specialist
// Big Idea. "The BFR certification that isn't a cuff company's distribution
// channel." The drawer-cuff objection is handled IN the hero. Built for cold
// paid traffic (installs all six Necessary Beliefs in one scroll) and also
// serves warm/organic.
//
// Reuse contract for Session C: wire the existing brand-locked constants from
// src/lib/constants.ts wherever a `reuseConstant` note appears, do NOT
// re-key their values here. Constants referenced: CERTIFICATION_ENROLL_URL
// (campaign-scoped, NOT the global ENROLL_URL), STATS, PRICING, ROLNICK,
// LICAMELI, FEATURED_IN, CEU_COURSE_APPROVALS, CEU_PROFESSION_SCOPE,
// TESTIMONIALS, CURRICULUM, BONUSES, COMPETITOR_TABLE. The copy strings here
// (headlines, intros, framing) are what this file owns; the structured data
// (module lists, exact stat values, testimonial text) stays in constants.
//
// The hero shape, problem 4-layer shape, finalCta shape, and ps[] mirror the
// `Variant` type so Session C can reuse the matching block patterns. The
// campaign-only sections define what the 19-section architecture needs.
//
// Editorial gates already run on this copy (Session B + Rev 1):
//  - brand-guide Forbidden Claims grep: clean (no "leading", "gold standard",
//    "most-published", "world-class", "best-in-class", "cutting-edge",
//    "act now", "spots filling", "limited time", "new cohort").
//  - No-terminal-period rule on every display headline / eyebrow / label.
//  - Em-dash grep: clean. Verbatim research/testimonial quotes preserve their
//    original punctuation and casing per the user-content-fidelity rule.
//  - Modality-vs-brand: FEATURED_IN is framed as a MODALITY-level claim only.
//  - Compliance claim-level pass: clinical claims attributed to the
//    literature; no income guarantees; testimonials verbatim from the live
//    course page; refund terms stated proximate to price. Full Part-3 gate is
//    Session D.

export type SupportingStat = { value: string; label: string };

export type CertificationContent = {
  slug: "certification";
  routePath: string;

  // Build-time metadata. noindex+canonical wiring is Session C's job; these
  // strings feed <title>, og: tags, and the share card only.
  meta: {
    title: string;
    description: string;
    ogImage: string;
    robots: string; // explicit reminder for Session C
    canonical: string; // explicit reminder for Session C
  };

  // Big Idea hero gate audit (landing-page-principles.md §6). Documented here
  // so Session C and the Session D reviewer can verify the gate without
  // re-deriving it. This object is reference, not rendered copy.
  bigIdeaGate: {
    primaryPromise: string;
    uniqueMechanism: string;
    emotionalTrigger: string;
    intellectuallyInteresting: string;
    visualCredibilityMatch: string;
  };

  // Section 0: stripped campaign header (logo + single text CTA, no site nav).
  // The bottom StickyCTABar was retired in Rev 1 (REVISION-01.md §2); the top
  // sticky header is the single persistent CTA on the page.
  header: {
    logoAlt: string;
    navCta: string;
    stickyLabel: string;
    stickyCta: string;
  };

  // Section 1: hero. Mirrors Variant.hero shape for HeroBlock reuse.
  hero: {
    eyebrow: string;
    headline: string;
    highlight: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    supportingStat: SupportingStat[];
    photoSrc: string;
    photoAlt: string;
    // Optional 60-90s founder VSL. Session C: render if a clip is supplied,
    // else omit the slot cleanly (do not ship an empty player).
    vsl: { caption: string; posterAlt: string };
  };

  // Section 2: featured-in modality bar. MODALITY-level claim only.
  featuredIn: {
    label: string;
    note: string; // Session C: render logos from FEATURED_IN constant
    reuseConstant: "FEATURED_IN";
  };

  // Section 3: The Loading Wall (Problem). Mirrors Variant.problem 4-layer
  // shape. Verbatim avatar quotes preserved as-is. Rendered by the
  // campaign-only CertProblemBlock (Rev 1) so the highlight phrase here
  // applies without touching the shared ProblemBlock.
  problem: {
    label: string;
    headline: string;
    highlight: string;
    intro: string;
    surface: string;
    emotional: string;
    future: string;
    visceral: string;
    voiceQuote: string; // verbatim forum quote, render as pull-quote
  };

  // Section 4: Why this keeps happening (Unique Mechanism of the Problem).
  ump: {
    label: string;
    headline: string;
    highlight: string;
    body: string[];
    pullStat: { value: string; label: string };
  };

  // Section 5: The shift (BFR + Sato discovery story). Belief 2.
  shift: {
    label: string;
    headline: string;
    highlight: string;
    discovery: string[];
    evidenceLine: string;
    reuseConstant: "STATS";
  };

  // Section 6: The enemy (vendor-neutral reveal). Beliefs 3 + 4. Core of the
  // Big Idea. The drawer-cuff is named out loud here a second time.
  enemy: {
    label: string;
    headline: string;
    highlight: string;
    body: string[];
    namedReveal: string;
    drawerLine: string;
    voiceQuote: string; // verbatim forum quote
  };

  // Section 7: The BFR Pros difference. 3 pillars + competitor table. Beliefs
  // 4 + 5.
  difference: {
    label: string;
    headline: string;
    highlight: string;
    pillars: { title: string; body: string }[];
    tableIntro: string;
    tableNote: string;
    reuseConstant: "COMPETITOR_TABLE";
  };

  // Section 8: What you actually learn. Curriculum as capabilities. Belief 5.
  curriculum: {
    label: string;
    headline: string;
    highlight: string;
    intro: string;
    // One capability framing per course. Module data (titles, durations)
    // comes from the CURRICULUM constant; this is the "so what" copy that
    // wraps each course card.
    capabilities: { courseSlug: string; capability: string }[];
    reuseConstant: "CURRICULUM";
  };

  // Section 9: Your instructor. Rolnick authority stack + Licameli. Belief 5.
  instructor: {
    label: string;
    headline: string;
    highlight: string;
    rolnick: string[];
    licameli: string;
    reuseConstant: "ROLNICK | LICAMELI";
  };

  // Section 10: Proof. Verbatim testimonials + stats strip + 1-of-1,467.
  // Rev 1 added a video-testimonials block above the text wall via the new
  // CertVideoTestimonials component (5 muted-loop slots; placeholders until
  // assets are supplied).
  proof: {
    label: string;
    headline: string;
    highlight: string;
    statsIntro: string;
    refundProofLine: string;
    testimonialsNote: string;
    reuseConstant: "TESTIMONIALS | STATS";
    // Compliance: typicality framing that sits proximate to the testimonial
    // wall (FTC Four Pillars). Session C renders this next to the quotes, not
    // in the footer.
    typicalityNote: string;
    // Rev 2 (2026-05-21, REVISION-02.md §3): slots dropped. The component
    // now reads VIDEO_TESTIMONIALS + VIDEOS directly from @/lib/constants
    // (the canonical source-of-truth) and composes the 5-card list inline.
    // Keep label/headline/highlight/intro only.
    videoTestimonials: {
      label: string;
      headline: string;
      highlight: string;
      intro: string;
    };
  };

  // Section 11: Approvals / CEUs. Concrete dates.
  approvals: {
    label: string;
    headline: string;
    intro: string;
    courseApprovalsNote: string;
    scopeNote: string;
    reuseConstant: "CEU_COURSE_APPROVALS | CEU_PROFESSION_SCOPE";
  };

  // Section 12: Pricing. The price for the CORE certification ONLY. No
  // bonuses named here. Bonuses are revealed AFTER the price (Section 13) so
  // they land as a free surprise on top, never as value folded into the
  // anchor. Hard rule, do not re-invert: copywriting-principles.md Bonus
  // Sequencing (Pascal masterclass, 2026-05-19).
  pricing: {
    label: string;
    headline: string;
    highlight: string;
    priceFrame: string;
    whatYouGet: string[]; // core certification deliverables ONLY, no bonuses
    refundTermsAboveCta: string; // proximate refund disclosure (compliance)
    primaryCta: string;
    reuseConstant: "PRICING | STATS | CERTIFICATION_ENROLL_URL";
  };

  // Section 13: Bonuses, revealed AFTER the price as an unexpected free
  // stack. The $449 was for the certification; every item here is included
  // at no extra cost on top of it. The guarantee lands after the full stack.
  bonuses: {
    label: string;
    headline: string;
    highlight: string;
    preface: string; // the surprise: none of this adds a dollar to the price
    intro: string;
    valueLine: string;
    stackRecap: string; // $449 for the cert, all of this free on top
    guaranteeHeadline: string;
    guaranteeBody: string;
    primaryCta: string;
    reuseConstant: "BONUSES | PRICING";
  };

  // Section 13b: Value Stack (Rev 1, REVISION-01.md §7). The classic Hormozi
  // recap. Lives AFTER both pricing (12) and bonuses (13). Gotcha #97 still
  // holds: this is a recap, not a new price anchor; the $449 has already been
  // shown standalone and the bonuses have already been revealed as $0 added.
  // Totals are computed at render time from the PRICING / CURRICULUM /
  // BONUSES constants, not duplicated as string values here.
  // Rev 2 (2026-05-21, REVISION-02.md §4c): totalLabel/priceLabel/savingsLabel
  // dropped. The totals block is now a tighter two-line treatment (crossed-out
  // advertised value + the $449 in accent), no labels, no "you save" line.
  // The crossed-out total beside the unstruck price IS the visual savings
  // communication.
  valueStack: {
    label: string;
    headline: string;
    highlight: string;
    intro: string;
    coreLabel: string; // "The Complete BFR Certification (core)" line item
    coreNote: string; // one-line description of the core deliverable
    bonusesNote: string; // intro line above the bonus rows
    cuffDiscountLabel: string; // "Cuff-discount savings" line item
    cuffDiscountNote: string; // why it's called out separately
    // Compliance-copywriting.md Part 3 Checkpoint 11: refund summarized
    // above every primary CTA. Session D added this line for the
    // value-stack CTA so the recap section carries the same refund
    // proximate disclosure as the hero, pricing, bonuses, and final CTAs.
    guaranteeNote: string;
    primaryCta: string;
    reuseConstant: "PRICING | CURRICULUM | BONUSES | CERTIFICATION_ENROLL_URL";
  };

  // Section 14: Objection FAQ. The avatar's real objections.
  faq: {
    label: string;
    headline: string;
    items: { q: string; a: string }[];
  };

  // Section 15: The cost of waiting. Belief 6. Real urgency only.
  costOfWaiting: {
    label: string;
    headline: string;
    highlight: string;
    body: string[];
    demandStat: string; // factual, Pascal-validated search-volume data
    firefighterQuote: string; // verbatim patient-demand-pressure quote
    firefighterFrame: string;
  };

  // Section 16: Final CTA. Mirrors Variant.finalCta shape + ps[]. Rendered
  // by the campaign-only CertFinalCTABlock (Rev 1) so the CTA can route to
  // CERTIFICATION_ENROLL_URL and the highlight phrase here applies without
  // touching the shared FinalCTABlock.
  finalCta: {
    headline: string;
    highlight: string;
    subhead: string;
    warning: string;
    primary: string;
  };
  ps: string[];

  // Section 17: non-buyer capture (secondary conversion). Lead magnet.
  // TEMPORARILY UNUSED, see REVISION-01.md §8. The page no longer renders
  // this block; the LeadMagnetCapture.tsx component file stays in place for
  // re-enablement when the nurture pipeline is wired. PLAN.md §6 documents
  // the dual-conversion deferral.
  leadMagnet: {
    label: string;
    headline: string;
    body: string;
    fields: { placeholder: string }[];
    cta: string;
    privacyLine: string;
    note: string; // Session C: POST to provider-agnostic endpoint
  };

  // Section 18: minimal footer. Legal + clinical disclaimer + contact.
  footer: {
    signature: string; // signature triad (compliance Part 8)
    clinicalDisclaimer: string;
    testimonialDisclaimer: string;
    contactLine: string;
    legalLinks: string[];
    copyright: string;
  };

  // Reference only, not rendered. For Session D compliance + QA.
  complianceNotes: string[];
};

export const CERTIFICATION: CertificationContent = {
  slug: "certification",
  routePath: "/bfr-certification",

  meta: {
    title: "The Vendor-Neutral BFR Certification | The BFR Pros",
    description:
      "The BFR certification that does not sell cuffs and is not paid by a cuff manufacturer. 37 modules, 11.75 CEUs, taught by Dr. Nicholas Rolnick, author of 74 peer-reviewed BFR publications. Equipment-agnostic. 30-day money-back guarantee.",
    ogImage: "/og/get-certified",
    robots: "noindex, follow",
    canonical: "https://www.thebfrpros.com/certification",
  },

  bigIdeaGate: {
    primaryPromise:
      "Become the BFR specialist your zip code does not have yet, using the cuffs you already own.",
    uniqueMechanism:
      "The vendor-neutral certification. Every other BFR course is a cuff company's distribution channel; this is the one that is not.",
    emotionalTrigger:
      "The drawer-cuff shame stack: gear bought and never used, running a corporate template you could teach a tech to run, watching the post-op quad shrink in front of you.",
    intellectuallyInteresting:
      "Insider reveal: BFR education is downstream of who pays the educator. Name the structural capture no competitor names.",
    visualCredibilityMatch:
      "Session C: hero visual is Dr. Rolnick coaching a real patient through a BFR set in clinic (he still treats weekly), not stock fitness imagery. Asset: /images/action/rolnick-coaching.jpg. The angle is 'the clinician who still treats patients', the image must prove it.",
  },

  header: {
    logoAlt: "The BFR Pros",
    navCta: "Get BFR Certified",
    stickyLabel: "The Complete BFR Certification",
    stickyCta: "Get BFR Certified From Home",
  },

  hero: {
    eyebrow: "FOR THE PT WHOSE BFR CUFFS HAVE BEEN IN A DRAWER FOR TWO YEARS",
    headline: "THE BFR CERTIFICATION THAT ISN'T A CUFF COMPANY'S DISTRIBUTION CHANNEL",
    highlight: "CUFF COMPANY'S DISTRIBUTION CHANNEL",
    subhead:
      "A lot of physical therapists watch their post-op patients lose strength because they can't load them heavy yet. The BFR Pros teach those PTs to use blood flow restriction with any cuff they already own. Patients keep getting stronger. The PT becomes the one surgeons send their tough cases to.",
    primaryCta: "Get BFR Certified From Home",
    secondaryCta: "See why it's different",
    supportingStat: [
      { value: "74", label: "peer-reviewed BFR publications by the instructor" },
      { value: "1,467+", label: "practitioners certified" },
      { value: "1", label: "has ever taken the 30-day refund" },
      { value: "$0", label: "paid to this course by any cuff manufacturer" },
    ],
    photoSrc: "/images/action/rolnick-coaching.jpg",
    photoAlt:
      "Dr. Nicholas Rolnick coaching a patient through a blood flow restriction set in his Manhattan clinic",
    vsl: {
      caption:
        "Dr. Nicholas Rolnick: the certification I built because I needed it for my own clinic, and the cuff catalog I refused to put in it.",
      posterAlt:
        "Dr. Nicholas Rolnick speaking to camera about why The BFR Pros sells no cuffs",
    },
  },

  featuredIn: {
    label: "THE MODALITY IS IN THE MAINSTREAM ALREADY",
    note: "Blood flow restriction, as a modality, has been covered across these outlets. This is a modality-level credibility signal, not a claim that any one person was quoted in each. Session C: render the FEATURED_IN constant logos, keep the framing modality-level.",
    reuseConstant: "FEATURED_IN",
  },

  problem: {
    label: "THE LOADING WALL",
    headline: "YOU CAN'T LOAD THEM, AND YOU'RE WATCHING THE QUAD GO",
    highlight: "WATCHING THE QUAD GO",
    intro:
      "The patient you cannot move forward is the one who is restricted from heavy load. The ACL kid eight weeks out. The total knee at six. The rotator cuff repair non-weight-bearing with six visits left on the auth. The Medicare knee that cannot tolerate twenty minutes of weight-bearing. You know the protocol the corporate template prints. You also know it is not going to be enough.",
    surface:
      "On paper it is a loading restriction. In the room it is watching cross-sectional area disappear week over week while the only tools you are cleared to use cannot produce the stimulus that would stop it.",
    emotional:
      "You did not go seven years past high school for this degree to run a TENS unit and a hot pack and call it a plan of care. The gap between what the literature says you should be doing and what you actually do on Tuesday is not an academic gap. It is the thing you think about at 11:47 on a Sunday night.",
    future:
      "Nothing changes on its own. The quad strength deficit at return-to-sport is still the strongest predictor of a second ACL injury, and you still cannot close it. The patient who asked what makes you different from the PT down the street still has no answer from you. The surgeon's office keeps sending the tough cases somewhere else.",
    visceral:
      "It is the specific feeling of standing next to a 16-year-old, four weeks into watching his quad shrink, telling his mother you are building a foundation, and knowing she can hear that it is a holding pattern.",
    voiceQuote:
      "ACL kid 8 weeks out. surgeon won't clear loading above 30% bw. I'm watching his quad shrink in front of me. on my caseload like 4 of these right now and im losing my mind.",
  },

  ump: {
    label: "WHY IT KEEPS HAPPENING",
    headline: "THE STANDARD TOOLKIT CANNOT PRODUCE THE STIMULUS, SO THE WINDOW CLOSES",
    highlight: "WINDOW CLOSES",
    body: [
      "This is not a discipline problem and it is not a you problem. E-stim, isometrics, and sub-30% loading cannot generate the metabolic and mechanical stimulus required to drive Type II fiber recruitment and hypertrophy. When the surgeon's protocol restricts heavy loading for eight to twelve weeks, the standard toolkit has nothing that closes the gap.",
      "The result is a six to twelve week atrophy window the patient never fully recovers from. In ACL and total joint, the strength they lose in that window becomes the single best predictor of the outcome you are trying to prevent. The window is the mechanism. Everything downstream of it, the plateau, the re-injury risk, the patient who leaves, traces back to the same unaddressed cause.",
      "Blood flow restriction is the one modality the literature shows produces strength and hypertrophy responses comparable to heavy-load training at 20 to 30 percent of 1RM, inside the exact window where heavy loading is contraindicated. The question was never whether it works. The question is why the way it gets taught keeps the cuffs in your drawer.",
    ],
    pullStat: {
      value: "6 to 12 weeks",
      label:
        "the atrophy window the standard toolkit cannot close, and the strongest predictor of re-injury in ACL and total joint",
    },
  },

  shift: {
    label: "THE MODALITY IS NOT NEW",
    headline: "BURIED FOR 60 YEARS, USED BY THE MILITARY, READY FOR YOUR CLINIC",
    highlight: "READY FOR YOUR CLINIC",
    discovery: [
      "Dr. Yoshiaki Sato observed the effect in Japan in 1966, kneeling at a Buddhist ceremony, when he noticed his calves were pumped despite no exercise. He spent roughly thirty years developing Kaatsu before the work crossed into Western sports medicine. This is not a 2020 trend. It is a six-decade body of physiology that arrived in your profession after most of the people who could have taught it well had already been hired by someone who sells cuffs.",
      "What changed recently is not the science. It is the visibility. The modality is in APTA scope of practice for PTs and approved by the BOC for athletic trainers. It is in active use across the US military, Mayo Clinic, and the Ivy Rehab Network. The mechanism is settled. The adoption curve is not.",
    ],
    evidenceLine:
      "The curriculum is anchored to peer-reviewed literature and authored by Dr. Nicholas Rolnick, who has published 74 peer-reviewed BFR papers and is Topic Editor of the Frontiers blood flow restriction special issue. You are not catching up to the research through this certification. You are being trained by an author of it.",
    reuseConstant: "STATS",
  },

  enemy: {
    label: "THE PART NOBODY SAYS OUT LOUD",
    headline: "EVERY OTHER BFR COURSE IS A WAY TO SELL YOU A CUFF",
    highlight: "SELL YOU A CUFF",
    body: [
      "Owens teaches around the Delfi system. Smart Tools teaches around SmartCuffs. NE Seminars bundles a university cuff into the credential. The independent option is one clinician's experience plus an affiliated cuff recommendation. PESI is neutral the way a vending machine is neutral, by not bothering to pick a side, which is not the same as being independent by principle.",
      "None of this means those educators are dishonest. It means the curriculum's economics are downstream of a device sale, not downstream of whether you actually deploy on a patient. An educator paid by the cuff maker has no reason to teach you to run BFR on the cuff you already own, because doing that defunds the course. So the course teaches the device. You finish it, you cannot deploy without the device, the device is five thousand dollars or sitting at one of the three clinics you float between, and the cuff goes in the drawer.",
      "The drawer is not a willpower failure. It is a product-design outcome. A course built to be purchased and a course built to be deployed are two different curricula, and you have only ever been sold the first one.",
    ],
    namedReveal:
      "The BFR Pros is the one certification in this market that sells no cuffs, takes no money from any cuff manufacturer, and teaches the technique so it runs on whatever quality cuff your clinic already owns. That is not a feature line. It is the entire identity, and it is the one position the named competitors cannot copy without rebuilding their business model.",
    drawerLine:
      "We know about the cuffs in your drawer. This is the certification built so you do not add ours to the pile, because there is no ours to add.",
    voiceQuote: "I bought BFR cuffs two years ago and they're in a drawer",
  },

  difference: {
    label: "WHAT ACTUALLY MAKES IT DIFFERENT",
    headline: "VENDOR-NEUTRAL, BUILT FOR IMPLEMENTATION, TAUGHT BY SOMEONE STILL IN CLINIC",
    highlight: "STILL IN CLINIC",
    pillars: [
      {
        title: "Vendor-neutral by structure, not by slogan",
        body: "No cuff revenue. No manufacturer contract. The lead instructor is independently certified through both Owens (Delfi) and Smart Tools and is paid by neither, so he can name what each gets right and wrong. You can verify the neutrality by reading his credential list, you do not have to trust a brand promise.",
      },
      {
        title: "Built so the cuff leaves the drawer by week two",
        body: "The curriculum sequences safety screening and AOP measurement first, then paces population-specific deployment one week at a time, with case studies paired to the patients actually on your schedule. The deployment week is published up front, not deferred to after the certificate is filed.",
      },
      {
        title: "Taught by a clinician who is in clinic next Tuesday",
        body: "Dr. Rolnick treats patients weekly in Manhattan while authoring the literature and teaching the curriculum. The clinical scenarios are current because he saw a version of them last week. No competitor in the named set pairs active practice with this depth of published research.",
      },
    ],
    tableIntro:
      "If every BFR course looks the same on the home page, you are comparing on the wrong axis. Here is the axis that predicts whether the cuff leaves the drawer.",
    tableNote:
      "Session C: render the COMPETITOR_TABLE constant. Keep the comparison factual and on consistent axes (format, hours, CEUs, equipment, money-back). Do not add a pejorative column; the structural facts do the differentiating.",
    reuseConstant: "COMPETITOR_TABLE",
  },

  curriculum: {
    label: "WHAT YOU CAN ACTUALLY DO AFTER",
    headline: "37 MODULES, FOUR COURSES, ORGANIZED AROUND WHAT YOU CAN DO ON MONDAY",
    highlight: "WHAT YOU CAN DO ON MONDAY",
    intro:
      "Not a module list. A capability list. By the end you can screen a patient for BFR in ninety seconds, set pressure correctly on whatever cuff is in your supply closet, and run a BFR-modified protocol on a post-op, geriatric, or return-to-sport case while the surgeon's protocol still restricts heavy load.",
    capabilities: [
      {
        courseSlug: "course-1",
        capability:
          "Course 1, the foundation: you can explain why BFR works at 20 to 30 percent of 1RM to a skeptical surgeon, screen for contraindications, determine pressure, and program the three pillars into an existing plan of care. 14 modules, 5.5 CEUs.",
      },
      {
        courseSlug: "course-2",
        capability:
          "Course 2, clinical rounds: you can watch Dr. Rolnick reason through real patient decisions (post-surgical ACL in a 19-year-old, a 99-year-old sarcopenic patient, a home-based walking program) and map each to a case on your own caseload. Six case rounds, each with a quiz on the underlying paper. 2.25 CEUs.",
      },
      {
        courseSlug: "course-3",
        capability:
          "Course 3, what the literature changed: you can carry the screening algorithm and the pressure findings from five 2021 papers into your clinic, walked through by an author of that literature. 2 CEUs.",
      },
      {
        courseSlug: "course-4",
        capability:
          "Course 4, device features without the sales pitch: you can evaluate any cuff on autoregulation, bladder design, and cuff width on published criteria, so the equipment decision is yours and not the vendor's. 2 CEUs.",
      },
    ],
    reuseConstant: "CURRICULUM",
  },

  instructor: {
    label: "WHO IS TEACHING YOU",
    headline: "AN AUTHOR OF THE LITERATURE WHO STILL TREATS PATIENTS WEEKLY",
    highlight: "STILL TREATS PATIENTS WEEKLY",
    rolnick: [
      "Dr. Nicholas Rolnick, PT, DPT, MS, CSCS. Author of 74 peer-reviewed BFR publications. Topic Editor at Frontiers in Physiology and Frontiers in Sports and Active Living for the blood flow restriction special issue. Peer reviewer for 26 journals. Adjunct Assistant Professor of Physical Therapy at New York Medical College.",
      "He treats patients in Manhattan every week. The reason that matters to you specifically: the certification you take is written by someone whose Tuesday looks like yours, not by an academic who left the clinic a decade ago and not by a personality with a thin published footprint. When a surgeon asks what the research says, you can point to the specific paper, because the person who taught you wrote a number of them.",
    ],
    licameli:
      "Co-instructor Dr. Nicholas Licameli, PT, DPT, natural bodybuilder and director of an outpatient therapy clinic, carries the same voice for the strength-and-conditioning and athletic-training side of the work.",
    reuseConstant: "ROLNICK | LICAMELI",
  },

  proof: {
    label: "DOES THIS ACTUALLY TRANSLATE",
    headline: "1,467+ PRACTITIONERS CERTIFIED, 1 HAS EVER TAKEN THE REFUND",
    highlight: "1 HAS EVER TAKEN THE REFUND",
    statsIntro:
      "Every BFR provider publishes how many practitioners they certified. None of them publish how many actually use BFR with patients afterward. The closest honest proxy in this category is the refund rate when the guarantee is real and the curriculum was built to be deployed.",
    refundProofLine:
      "Of 1,467+ graduates, exactly one has ever taken the 30-day money-back guarantee. That number is on the page because the curriculum was built so the cuff leaves the drawer, not so the certificate gets filed.",
    testimonialsNote:
      "Session C: render the TESTIMONIALS constant verbatim (Lee, Whyte, Toderico, Nightingale). These are real, named, credentialed practitioners quoted exactly as written on the live course page. Never paraphrase a testimonial.",
    reuseConstant: "TESTIMONIALS | STATS",
    // Compliance disclosure rendered proximate to the testimonial wall at the
    // same type size (FTC Four Pillars). The leading "Compliance (FTC Four
    // Pillars, render proximate to the testimonial wall in the same type
    // size):" prefix was a build-time meta-instruction; Session D strips it
    // so consumers see the disclosure, not the instruction.
    typicalityNote:
      "Individual results vary. These are the experiences of the named practitioners and are not a guarantee that any specific clinical or practice outcome is typical. The 1-of-1,467 figure is the graduate refund rate, an implementation proxy, not a performance promise.",
    videoTestimonials: {
      label: "FROM THE GRADUATES",
      headline: "FIVE PRACTITIONERS, IN THEIR OWN WORDS",
      highlight: "IN THEIR OWN WORDS",
      intro:
        "Short clips from graduates who deployed BFR with their own patients after the certification. Tap a card to play the full audio. Names and credentials match the verbatim testimonials below.",
      // Rev 2 (2026-05-21, REVISION-02.md §3): slots removed. The cert
      // video-testimonials component now reads VIDEO_TESTIMONIALS + the
      // legacy VIDEOS.testimonial directly from @/lib/constants (the
      // canonical source-of-truth), mirroring /reviews' click-to-play
      // poster facade + VEED iframe pattern. Rev 1's `slots` array
      // referenced the wrong consts (student-headshot photos instead of
      // the real video posters), which is why the cards never played.
    },
  },

  approvals: {
    label: "WILL MY LICENSE ACCEPT IT",
    headline: "APPROVED FOR CEUS WITH CONCRETE DATES, NOT VAGUE PROMISES",
    intro:
      "Two different things get conflated everywhere else, so they are kept separate here. One: the course itself is approved for continuing-education credit by specific boards through specific dates. Two: the modality of BFR is within the published scope of practice of these professional bodies. Both are stated plainly with the actual dates.",
    courseApprovalsNote:
      "Session C: render CEU_COURSE_APPROVALS (BOC Approved Provider AP# P10226; New York State PT Board approved through December 11, 2027; New Jersey State PT Board approved through January 31, 2026) with the exact approval IDs and dates from the constant.",
    scopeNote:
      "Session C: render CEU_PROFESSION_SCOPE (APTA: BFR within PT scope of practice; NATA: BFR approved for use by athletic trainers) as a separate block from the course approvals so the two claims are not collapsed.",
    reuseConstant: "CEU_COURSE_APPROVALS | CEU_PROFESSION_SCOPE",
  },

  pricing: {
    label: "WHAT THE CERTIFICATION COSTS",
    headline: "ONE PRICE FOR THE CERTIFICATION, NO FAKE TIERS",
    highlight: "NO FAKE TIERS",
    priceFrame:
      "$449 for the full certification. Not a stripped-down tier with the real version dangled above it. Not an upsell ladder. One price for all 37 modules, 11.75 hours of video, and 11.75 CEUs, taught by the author of 74 peer-reviewed BFR publications who still treats patients weekly. At 11.75 CEUs that is roughly $38 a CEU, for a credential a single-day device-bundled course cannot match without a cuff you may never afford. Two post-op patients you keep instead of lose covers it. The certification is worth the $449 on its own, before anything else is added to it.",
    whatYouGet: [
      "37 modules across 4 courses, 11.75 hours of video, 11.75 CEUs",
      "Self-paced and on-demand. Do it in a weekend or take 4 weeks",
      "Equipment-agnostic: runs on the cuffs your clinic already owns",
      "Approved for CEUs with concrete boards and dates, within APTA scope and NATA-approved",
    ],
    refundTermsAboveCta:
      "30-day money-back guarantee. Email to request, refund processed, no questions. Guarantor: The BFR Pros, LLC.",
    primaryCta: "Get BFR Certified From Home",
    reuseConstant: "PRICING | STATS | CERTIFICATION_ENROLL_URL",
  },

  bonuses: {
    label: "NOW THE PART NOBODY WARNED YOU ABOUT",
    headline: "EVERYTHING BELOW IS FREE, ON TOP OF THE $449 YOU JUST SAW",
    highlight: "FREE, ON TOP OF THE $449",
    preface:
      "The price you just read is for the certification itself: the modules, the CEUs, the instruction. It is worth that on its own. Here is what nobody told you on the way in. Every one of the eleven tools below comes with it, and not a single one of them adds a dollar to the price. You are not paying $449 for the certification and the bonuses. You are paying $449 for the certification. The bonuses come with it, free.",
    intro:
      "These are not filler and they are not theory. They are the difference between knowing BFR and running it on Monday: the liability waiver clinics use to adopt it into consent, the screening form you risk-stratify against before the first cuff goes on, the module-by-module bibliography you bring to the surgeon conversation, the 481-page searchable workbook for the floor, and the private group where Dr. Rolnick answers implementation questions in real time.",
    valueLine:
      "Session C: render the BONUSES constant with its per-item values, every item explicitly marked as included at no additional cost ON TOP OF the $449 already shown above. Value math from the PRICING constant, framed as: the certification is $449, the eleven tools stack on top for free, total advertised value $1,454, paid for the certification alone. The up-to-$640 in negotiated cuff discounts is called out separately and is NOT folded into the value math.",
    stackRecap:
      "$449 for the certification. Eleven implementation tools stacked on top of it. None of them moved the price by a dollar. You pay for the certification, you walk out with all of it.",
    guaranteeHeadline: "THE 30-DAY TURN-IT-ON-OR-TURN-IT-BACK GUARANTEE",
    guaranteeBody:
      "Take the curriculum and every tool that came with it, run BFR with a real patient, and if it does not earn a place in your practice inside 30 days, email us and we refund every dollar. No exit survey, no retention call, no hoops. The guarantee asks you to try it, not to commit forever. We can offer it plainly because of one number: 1 of 1,467 graduates has ever used it.",
    primaryCta: "Get BFR Certified From Home",
    reuseConstant: "BONUSES | PRICING",
  },

  valueStack: {
    label: "EVERYTHING YOU WALK OUT WITH",
    headline: "FOR ONE PRICE, THE WHOLE STACK ON THE TABLE",
    highlight: "THE WHOLE STACK ON THE TABLE",
    intro:
      "The certification you saw above was $449. The eleven tools you saw after were free on top of it. Here is the full picture in one place, with the dollar value beside each piece, so the math is on the page.",
    coreLabel: "The Complete BFR Certification",
    coreNote:
      "37 modules across 4 courses, 11.75 hours of video, 11.75 CEUs, taught by the author of 74 peer-reviewed BFR publications. The certification is worth this on its own, before anything else is added to it.",
    bonusesNote:
      "Eleven implementation tools, every one of them included on top of the certification at no additional cost.",
    cuffDiscountLabel: "Cuff-discount savings",
    cuffDiscountNote:
      "Up to $640 in negotiated discounts across Delfi, SmartCuffs, B Strong, and others. Called out separately, not folded into the total advertised value above (this is what you can save on a cuff if you decide you want one, not a number added to the stack).",
    guaranteeNote:
      "30-day money-back guarantee · 1 of 1,467+ graduates has ever taken it.",
    primaryCta: "Get BFR Certified From Home",
    reuseConstant: "PRICING | CURRICULUM | BONUSES | CERTIFICATION_ENROLL_URL",
  },

  faq: {
    label: "THE QUESTIONS YOU ACTUALLY HAVE",
    headline: "WHAT YOU'RE ABOUT TO ASK, ANSWERED STRAIGHT",
    items: [
      {
        q: "Is BFR contraindicated in anyone with DVT risk? This feels like a lawsuit waiting to happen.",
        a: "It is screenable, and applied correctly it is one of the safest interventions in the rehab toolbox. A 13,000-person BFR safety survey reports DVT incidence below 0.06 percent, PE below 0.01 percent, and rhabdomyolysis below 0.01 percent. Course 1 includes the screening funnel and the contraindication list pulled from the Frontiers literature review, so you are rehearsing a screening conversation, not memorizing a warning label.",
      },
      {
        q: "I will buy this and it will sit in a drawer like every other modality.",
        a: "That is the exact failure this curriculum is built against, and it is why there is no cuff to put in a drawer. The deployment week is published up front, the safety modules ship first, the case studies are paired to patients you already have. 1 of 1,467 graduates has refunded, which is the cleanest signal in this category that graduates actually deploy.",
      },
      {
        q: "What is the real difference between you and Owens, PESI, Smart Tools, or Mike Reinold?",
        a: "Structural, not marginal. They each have an equipment alignment or a CEU-mill model or a single-practitioner footprint. The BFR Pros sells no cuffs, takes no manufacturer money, is taught by an author of 74 peer-reviewed BFR papers who still treats patients, and publishes its refund rate. None of the named competitors can match all of that without rebuilding their business.",
      },
      {
        q: "I do not have $5,000 for Delfi cuffs.",
        a: "You do not need them. The curriculum teaches technique and pressure prescription independent of cuff brand. Quality cuffs in the $200 to $400 range work clinically with proper AOP measurement. The course teaches you to evaluate equipment on published criteria, and there are negotiated discounts across multiple brands so the choice stays yours.",
      },
      {
        q: "Is it billable?",
        a: "The curriculum covers the CPT framework for integrating BFR into existing therapeutic-exercise and neuromuscular-reeducation coding, so you can document it defensibly in the note.",
      },
      {
        q: "Will my state accept the CEUs?",
        a: "BOC Approved Provider AP# P10226 for athletic trainers. New York State PT Board through December 11, 2027. New Jersey State PT Board through January 31, 2026. BFR is within APTA scope of practice for PTs and NATA-approved for ATs. Concrete boards, concrete dates, not approved-everywhere hand-waving.",
      },
      {
        q: "Is it actually rigorous if it is on-demand?",
        a: "37 modules, a downloadable bibliography per module, case studies tied to specific clinical conditions, and quizzes on the underlying papers. The instructor still treats patients and authors the literature the modules cite. On-demand is the format, not the depth.",
      },
      {
        q: "I am an athletic trainer or an S&C coach, not a PT. Is this for me?",
        a: "Yes. The certification is BOC-approved for athletic trainers, and the co-instructor carries the strength-and-conditioning and performance-population side of the curriculum. The technique, screening, and pressure prescription transfer directly.",
      },
      {
        q: "I just took another BFR course. Was that wasted money?",
        a: "Honest answer: probably not wasted, but probably not deployed either, for the structural reasons above. This is the certification most practitioners take last and use most. Your prior spend was you trying to buy the version of this that did not exist yet.",
      },
      {
        q: "What if I want a refund?",
        a: "Email us inside 30 days and we process it, no questions and no retention call. 1 of 1,467 graduates has ever done it. The guarantee is real, not a gimmick.",
      },
    ],
  },

  costOfWaiting: {
    label: "WHY NOW AND NOT NEXT YEAR",
    headline: "YOUR ZIP CODE DOES NOT HAVE A BFR SPECIALIST YET",
    highlight: "DOES NOT HAVE A BFR SPECIALIST YET",
    body: [
      "This is not a countdown timer and there are no disappearing seats. The certification is on-demand and self-paced; manufactured urgency would insult a clinical doctorate and we are not going to do it. The urgency here is real and external, and it is moving whether or not you act on it.",
      "Patients are arriving already knowing the word. The modality has been covered in mainstream press, surgeons are starting to specify it in post-op orders, and the clinical networks are integrating it. The first practitioner in a metro to credibly own BFR becomes the local specialist. The ones who wait become the commodity the specialist's patients used to see.",
    ],
    demandStat:
      "Worldwide searches for blood flow restriction went from roughly 19,000 a month in July 2025 to roughly 84,000 a month in February 2026. That is a 342 percent rise in seven months, and it redrew the previous all-time high of roughly 33,000 a month, set in September 2021, to 2.6 times higher. Fourteen years of slow climb, replaced in seven months. The clinics certifying this quarter are the ones who show up first when those patients search next quarter.",
    firefighterQuote:
      "Can I ask if there's a certain cuff you recommend for personal use? I am recovering from a recent patellar dislocation and would like to do what I can to get back to my firefighting job. I haven't used one before so I'm not sure where to start.",
    firefighterFrame:
      "That is a patient asking for BFR by name. If you cannot deliver it, he finds someone who can, and he does not come back. That is the only scarcity in this market that is real.",
  },

  finalCta: {
    headline: "THE PATIENT IS ON TUESDAY'S SCHEDULE EITHER WAY",
    highlight: "TUESDAY'S SCHEDULE EITHER WAY",
    subhead:
      "$449. 37 modules. 11.75 hours of video. 11.75 CEUs. 30-day money-back guarantee. Do it in a weekend or take 4 weeks. The certification that sells no cuffs, takes no manufacturer money, and is built so the cuff leaves the drawer by week two. The window to be the first BFR-certified specialist in your zip code is open. It does not stay open.",
    warning:
      "Here is what happens if you bookmark this and close the tab. Tuesday comes. The quad is smaller than last week. The mother asks what you are doing and you say you are building a foundation. The runner who asked if you do BFR drives the extra eight miles to the clinic that said yes. Six months from now the same four certification tabs are open on a Sunday night and nothing has moved. The cost of doing nothing stopped being zero a while ago.",
    primary: "Get BFR Certified From Home",
  },

  ps: [
    "P.S. The certification is the technique, not the cuff. Your patients do not care which brand you bought. They care whether you can screen them, set the pressure correctly, and get them strong inside the window the surgeon left you. There is no cuff to sell you here, which is the whole point.",
    "P.P.S. The 30-day refund means you can finish the curriculum, run BFR with your first patient, and walk away at zero cost if it is not for your practice. The guarantee asks you to try, not to commit forever. 1 of 1,467 graduates has ever taken it.",
  ],

  // TEMPORARILY UNUSED, see REVISION-01.md §8. The page no longer renders this
  // block in Rev 1 (dual-conversion deferral while the nurture pipeline is
  // wired). Strings are retained verbatim so re-enabling the section is a
  // one-line page.tsx restore.
  leadMagnet: {
    label: "NOT READY TO ENROLL",
    headline: "TAKE THE BFR SAFETY SCREENING CHECKLIST INSTEAD",
    body: "If you are not certifying today, do not leave with nothing. Get the screening checklist The BFR Pros use to risk-stratify a patient before the first cuff goes on. It is the single most-asked-for piece of the curriculum, and it is yours free. We will follow up with the research-backed implementation material that turns it into a protocol.",
    fields: [{ placeholder: "First name" }, { placeholder: "Work email" }],
    cta: "Send me the checklist",
    privacyLine: "No spam. The screening checklist arrives immediately. Unsubscribe anytime.",
    note: "Session C: POST to the provider-agnostic endpoint (MailerLite now, GHL later) feeding the existing nurture sequence. Lead magnet asset already exists in Deliverables/Lead-Magnet/. This is the secondary conversion path; the page must never ship with only the checkout path (PLAN.md §6).",
  },

  footer: {
    signature: "Dr. Nicholas Rolnick, PT, DPT, Founder, The BFR Pros, LLC",
    clinicalDisclaimer:
      "Blood flow restriction training is a clinical modality that should be applied by qualified practitioners after appropriate screening. This certification is professional continuing education for licensed and credentialed practitioners. It is not medical advice and does not replace clinical judgment or institutional protocols.",
    testimonialDisclaimer:
      "Testimonials reflect the genuine experience of the named practitioners. Individual results vary and are not a guarantee of any specific clinical or practice outcome.",
    contactLine: "Questions: nick@thebfrpros.com, 1-914-400-3650.",
    legalLinks: ["Terms", "Privacy", "Refund Policy", "Disclaimer", "Contact"],
    copyright: "(c) The BFR Pros, LLC. All rights reserved.",
  },

  complianceNotes: [
    "STRUCTURAL, do not re-invert: the price (Section 12) is revealed BEFORE the bonuses (Section 13). The $449 anchors to the core certification alone; the eleven bonuses are then stacked on top as a free surprise that adds zero to the price. Section 13b Value Stack lives AFTER bonuses and is a recap, not a new anchor; do not move it before pricing. Session C must render pricing before bonuses before value stack, and must not list any bonus inside pricing.whatYouGet. Reversing this folds the bonus value into the price anchor and collapses the perceived-value multiplier. Hard rule: copywriting-principles.md Bonus Sequencing (Pascal masterclass, 2026-05-19). Note: the existing /get-certified page has the same inversion; Pascal is fixing that separately, do not propagate it here.",
    "Net Impression on every clinical claim: BFR is presented as an evidence-backed modality (74 peer-reviewed publications, settled mechanism), not as a guaranteed patient outcome. Safety incidence figures are attributed to the 13,000-person BFR safety survey, stated as survey-reported rates.",
    "No earnings or income claim is made. 'Become the local specialist', 'cash-pay', and 'surgeons send their tough cases to you' are framed as positioning and as the avatar's own stated aspiration, not as a promised financial result. No dollar figure or multiplier is presented as an outcome the buyer will achieve.",
    "Testimonials (Lee, Whyte, Toderico, Nightingale) are verbatim from the live bfrtraining.com course page via the TESTIMONIALS constant. Four Pillars: real and named (consent via published-on-own-site source), substantiated (real graduates), typicality stated proximate via proof.typicalityNote and footer.testimonialDisclaimer, proximate disclosure rendered next to the wall by Session C.",
    "Scarcity is real and external only (search-volume growth, patient-demand pressure, first-mover positioning). No countdown timer, no seat count, no time-limited price. Brand-guide false-scarcity rule and FTC Universal Violation on fake scarcity both satisfied.",
    "Refund terms stated proximate to price (pricing.refundTermsAboveCta) and restated in P.P.S. Guarantor entity named. Signature triad present in footer (name, title, entity).",
    "Forbidden Claims grep clean: no 'leading', 'gold standard', 'most-published', 'world-class', 'best-in-class', 'cutting-edge', 'act now', 'spots filling', 'limited time', 'new cohort'. Specific counts used throughout (74, 1,467+, 1, 11.75, 37, 0.06%).",
    "Modality-vs-brand discipline: featuredIn is framed strictly as a modality-level claim with an explicit note to Session C not to repackage it as personal media features.",
    "Rev 1 (2026-05-20): every primary CTA on /certification reads 'Get BFR Certified From Home' and routes to CERTIFICATION_ENROLL_URL (campaign-scoped Teachable checkout, additive to ENROLL_URL which stays bound to /get-certified). The lead-magnet section is temporarily removed pending nurture-pipeline setup; PLAN.md §6 dual-conversion is suspended for this revision (see REVISION-01.md §8).",
    "Session D owns the full compliance-copywriting.md Part 3 14-point gate, website-qa 9-phase, and the live-render checks. This file passed the Session B claim-level pass + the Rev 1 surface edits only.",
  ],
};
