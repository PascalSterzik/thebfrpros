// /for/physical-therapists, /for/athletic-trainers, /for/strength-coaches.
//
// Three audience-specific landing pages. Stage-3 traffic that arrives via
// "BFR for [profession]" search. The page assumes BFR is real (Belief 1
// already installed) and answers "is this the right cert for MY practice?"
//
// Source grounding: Research/02-avatar-sheet.md (Dr. Mia PT primary tier),
// Research/03-necessary-beliefs.md (6-belief chain with audience-specific
// framings), Research/04-offer-brief.md (full objection list). All copy
// here adheres to brand-guide.md:
//   - No comparative superlatives (Forbidden Claims).
//   - Specific 72+ publication count, not "most-published".
//   - No terminal periods on headlines (Principle 5).
//   - Lead with the practitioner's outcome, not the cert (Principle 1).
//   - No false scarcity.
//
// The same data shape powers all 3 pages so one set of audience-page
// components renders the lot. Page-specific variation lives only in the
// content values below.

import { STATS, TESTIMONIALS } from "@/lib/constants";

export type AudienceProblem = {
  title: string;
  body: string;
};

export type AudiencePillar = {
  eyebrow: string;
  title: string;
  body: string;
};

export type AudienceCEUItem = {
  body: string;
  detail: string;
};

export type Audience = {
  slug: "physical-therapists" | "athletic-trainers" | "strength-coaches";
  meta: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImagePath: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    highlight?: string;
    subhead: string;
  };
  problem: {
    eyebrow: string;
    headline: string;
    items: ReadonlyArray<AudienceProblem>;
  };
  solution: {
    eyebrow: string;
    headline: string;
    intro: string;
    pillars: ReadonlyArray<AudiencePillar>;
  };
  scope: {
    eyebrow: string;
    headline: string;
    body: string;
    citationLabel: string;
  };
  applications: {
    eyebrow: string;
    headline: string;
    items: ReadonlyArray<string>;
  };
  ceus: {
    eyebrow: string;
    headline: string;
    intro: string;
    items: ReadonlyArray<AudienceCEUItem>;
  };
  testimonialCredentialPattern: RegExp;
  testimonialFallbackNames: ReadonlyArray<string>;
  finalCta: {
    eyebrow: string;
    headline: string;
    body: string;
    primaryCta: string;
    primaryCtaHref: string;
  };
};

// ---------------------------------------------------------------------------
// PHYSICAL THERAPISTS — primary tier. Dr. Mia, mid-career outpatient ortho.
// ---------------------------------------------------------------------------

export const PT: Audience = {
  slug: "physical-therapists",
  meta: {
    title: "BFR for Physical Therapists | The BFR Pros",
    description:
      "BFR certification built for outpatient PTs: post-op ACL, rotator cuff, total knee at month four, geriatric loading. 11.75 CEUs, NY/NJ PT board approved, equipment-agnostic, taught by Dr. Nicholas Rolnick (72+ peer-reviewed BFR publications).",
    canonicalPath: "/for/physical-therapists",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "For physical therapists",
    headline: "BFR for the post-op cases heavy load won't reach",
    highlight: "heavy load won't reach",
    subhead:
      "Built for outpatient ortho PTs treating post-op ACL at week six, rotator cuff repair at month three, total knee at month four, and the geriatric population whose joints can't tolerate heavy resistance. Apply the protocols with your first patient by week two.",
  },
  problem: {
    eyebrow: "The clinical floor",
    headline: "The cases your CE didn't cover",
    items: [
      {
        title: "Post-op patients plateau at week 14",
        body: "The LSI gap doesn't close. Heavy resistance isn't safe yet, and the e-stim / manual / NMES rotation isn't moving the needle. You reach for the next tool and it isn't there.",
      },
      {
        title: "Every BFR course feels like a sales funnel",
        body: "PESI is cheap and quality is variable. Owens is tied to a $5,000-plus Delfi system your clinic owner won't buy. Mike Reinold is trusted, but it's one PT's approach. You want research, not vendor relationships.",
      },
      {
        title: "Without a specialty, you compete on price with new grads",
        body: "The new grad three years younger is slightly cheaper for your clinic to employ. The path to making more, charging more, and being booked specifically by surgeons goes through a specialty. BFR is one of the few where the evidence base is now mature and the seats aren't full.",
      },
      {
        title: "The implementation side gets skipped",
        body: "You can find the science. You cannot easily find the screening checklist, the LOP calculation worksheet, the documentation language your billing team will accept, and the surgeon-conversation script when the orthopod asks why the cuff is on his patient's leg.",
      },
    ],
  },
  solution: {
    eyebrow: "What this cert gives you",
    headline: "Three things most BFR courses don't carry together",
    intro:
      "The Complete BFR Certification is built around the gap PTs keep describing: research depth, equipment independence, and the implementation layer that lets you apply BFR on Monday morning.",
    pillars: [
      {
        eyebrow: "Pillar 1",
        title: "Evidence, traceable to the paper",
        body: `Every protocol cites the published research it came from. Dr. Rolnick has authored ${STATS.publications} peer-reviewed BFR publications across Frontiers in Physiology, the British Journal of Sports Medicine, Strength and Conditioning Journal, and ScienceDirect. The downloadable module-by-module bibliography is in the bonus stack so you can show the surgeon the exact paper behind any decision.`,
      },
      {
        eyebrow: "Pillar 2",
        title: "Within your PT scope of practice",
        body: "APTA recognizes BFR within the PT scope of practice — no additional license, no extra certification body. The course itself is approved by the New York State PT Board through December 2027 and the New Jersey State PT Board through January 2026, reciprocal across 35 additional states. The CEU stack alone is what most PTs need for renewal cycles.",
      },
      {
        eyebrow: "Pillar 3",
        title: "Implementation, not just theory",
        body: "Screening forms, LOP calculation tools, programming guides per condition, documentation language, the surgeon-conversation script, the cuff-discount codes for whatever device fits your clinic budget. By week two of the course, you have everything you need to apply BFR with your first post-op patient.",
      },
    ],
  },
  scope: {
    eyebrow: "Inside your scope",
    headline: "BFR is in PT scope per APTA",
    body: "The American Physical Therapy Association's position is that blood flow restriction training falls within the PT scope of practice. The Complete BFR Certification is approved for continuing education through the New York State PT Board (December 2024 through December 2027) and the New Jersey State PT Board (through January 2026), reciprocal in 35 additional states.",
    citationLabel: "APTA + NY + NJ State PT Board approvals",
  },
  applications: {
    eyebrow: "Cases the curriculum walks you through",
    headline: "What you can do Monday morning",
    items: [
      "Post-op ACL reconstruction at week six and beyond: low-load resistance under occlusion bridges the loading window before heavy resistance is safe",
      "Post-op rotator cuff repair: hypertrophy stimulus while glenohumeral loading is contraindicated, with cell-swelling protocols at distal limbs",
      "Total knee arthroplasty at month four with persistent quad inhibition: low-load BFR + ischemic preconditioning for muscle preservation and re-recruitment",
      "Geriatric sarcopenia: 20-40% one-rep max strength gains comparable to heavy resistance, on joints that cannot tolerate heavy loading",
      "Chronic atrophic post-surgical knee: Noyes 2021 protocol walked through module-by-module with the published data",
      "In-season high-school and college athletes: hypertrophy maintenance when heavy training competes with practice and game volume",
    ],
  },
  ceus: {
    eyebrow: "CEU coverage",
    headline: "11.75 CEUs, license-renewal eligible",
    intro:
      "Approved continuing-education credit for licensed Physical Therapists in two state-direct-approved jurisdictions plus reciprocal coverage in 35 more.",
    items: [
      {
        body: "New York State PT Board",
        detail: "Approved December 12, 2024 through December 11, 2027. Covers all four courses (Optimize Rehab Outcomes, Accelerate Performance and Recovery, Clinical Rounds, What's New in BFR).",
      },
      {
        body: "New Jersey State PT Board",
        detail: "Approved through January 31, 2026. Approval IDs 2207-114 (5.5 PT CEUs), 2206-14 (2.25), 2210-53 (2).",
      },
      {
        body: "Reciprocal states",
        detail: "Most state boards accept NY or NJ approval directly. The 35 reciprocal states are listed in the CEU details on the certification page.",
      },
      {
        body: "APTA scope statement",
        detail: "BFR is within the PT scope of practice per APTA. The scope statement is what makes the course practice-relevant; the state-board approvals are what make it CEU-eligible.",
      },
    ],
  },
  // Match testimonial credentials starting with "PT," — Lee (PT, DPT, CSCS) and
  // Whyte (DPT, CLT, CSCS). The component renders all matches; matches are
  // selected from the canonical TESTIMONIALS array in lib/constants.ts.
  testimonialCredentialPattern: /\b(PT,|DPT)\b/,
  testimonialFallbackNames: ["Dr. Clinton H. Lee, PT, DPT, CSCS", "Dr. Brian D. Whyte, DPT, CLT, CSCS"],
  finalCta: {
    eyebrow: "Bring BFR to your post-op caseload",
    headline: "See the certification",
    body: "37 modules, 11.75 CEUs, equipment-agnostic, built on Dr. Rolnick's 72+ peer-reviewed publications. Apply BFR with your first patient by week two.",
    primaryCta: "See the certification",
    primaryCtaHref: "/get-certified",
  },
};

// ---------------------------------------------------------------------------
// ATHLETIC TRAINERS — secondary tier. Sideline/field-focused, NCAA-aware.
// ---------------------------------------------------------------------------

export const AT: Audience = {
  slug: "athletic-trainers",
  meta: {
    title: "BFR for Athletic Trainers | The BFR Pros",
    description:
      "BFR certification for ATs working sideline, college, and pro settings. In-season hypertrophy maintenance, post-injury return-to-sport, BOC Category A CEUs (Provider AP# P10226), taught by Dr. Nicholas Rolnick.",
    canonicalPath: "/for/athletic-trainers",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "For athletic trainers",
    headline: "BFR for in-season strength when heavy loading is off the table",
    highlight: "heavy loading is off the table",
    subhead:
      "Built for sideline, high school, college, and pro ATs. Apply BFR to in-season hypertrophy maintenance, sideline-friendly recovery, post-injury return-to-sport, and the athlete who can't load heavy in-season but still needs to maintain strength.",
  },
  problem: {
    eyebrow: "The sideline",
    headline: "The training-room cases that don't fit the heavy-load template",
    items: [
      {
        title: "In-season athletes can't load heavy without compromising practice",
        body: "Practice volume already taxes recovery. Adding heavy resistance to maintain hypertrophy means tired legs in Friday's game. You need a stimulus that builds strength at 20-40% 1RM without adding fatigue load.",
      },
      {
        title: "Post-injury return-to-sport hits a strength gap",
        body: "The athlete cleared by the surgeon at week six still can't tolerate heavy load. The bridging window between surgical clearance and full return is where BFR slots in, and most BFR courses treat that window as an afterthought.",
      },
      {
        title: "Most BFR education is rehab-first, sideline-second",
        body: "Athletic-training applications, in-season programming, and performance-side BFR protocols often get one chapter. You want a course that takes the AT context seriously: sideline workflow, training-room volume, return-to-sport timelines.",
      },
      {
        title: "BOC CEUs you actually need for renewal",
        body: "BOC Category A credits in one course, not five. The cuff-and-protocol details that map to a high-school football schedule or a college rugby season, not a clinic floor.",
      },
    ],
  },
  solution: {
    eyebrow: "What this cert gives you",
    headline: "BFR built for the athletic-training workflow",
    intro:
      "Dr. Nicholas Licameli co-instructs the certification and writes the athletic-side chapters: in-season maintenance, hypertrophy at low loads, ischemic preconditioning for performance, and the bridge from rehab into return-to-sport.",
    pillars: [
      {
        eyebrow: "Pillar 1",
        title: "Athletic side, not a footnote",
        body: "Dr. Licameli's chapters cover the same material the rehab side does, at the same depth: in-season programming, hypertrophy maintenance, ischemic preconditioning, return-to-sport timelines. The athletic context is built into the curriculum, not bolted on.",
      },
      {
        eyebrow: "Pillar 2",
        title: "NATA scope + BOC Category A CEUs",
        body: "BFR is within the NATA scope of practice for Athletic Trainers. The Complete BFR Certification is approved by the Board of Certification (BOC) as Provider AP# P10226 for Category A CEUs across all four courses — one course, full credit cycle.",
      },
      {
        eyebrow: "Pillar 3",
        title: "Equipment-agnostic, sideline-realistic",
        body: "Practical BFR with wrapping straps and elastic bands is covered alongside pneumatic systems, so you can match the cuff to the setting — clinic, training room, sideline, team bus. The cuff is the AT's choice, not the course's.",
      },
    ],
  },
  scope: {
    eyebrow: "Inside your scope",
    headline: "BFR is in AT scope per NATA",
    body: "The National Athletic Trainers Association has affirmed that blood flow restriction training falls within the AT scope of practice. The Complete BFR Certification is approved by the Board of Certification (BOC) as a Category A continuing-education provider (AP# P10226), covering all four courses for one renewal cycle.",
    citationLabel: "NATA + BOC AP# P10226",
  },
  applications: {
    eyebrow: "Cases the curriculum walks you through",
    headline: "What you can do in the training room",
    items: [
      "In-season hypertrophy maintenance for HS, college, and pro athletes when practice volume rules out heavy loading",
      "Post-injury return-to-sport at the bridging window between surgical clearance and full load tolerance",
      "Sideline-friendly recovery protocols using ischemic preconditioning",
      "Hamstring and groin reconditioning in the in-season window with low-load BFR resistance",
      "Decathlete-style patellar tendinopathy management with in-season BFR rehab (Module 14 walks through two case studies)",
      "Practical BFR with wrapping straps and elastic bands when pneumatic systems aren't on hand",
    ],
  },
  ceus: {
    eyebrow: "CEU coverage",
    headline: "11.75 BOC Category A CEUs",
    intro:
      "BOC-approved continuing-education credit covering all four courses. Provider AP# P10226.",
    items: [
      {
        body: "Board of Certification (BOC)",
        detail: "Provider AP# P10226. Category A CEUs across all four courses. Apply directly to your BOC renewal cycle.",
      },
      {
        body: "NATA scope statement",
        detail: "BFR is approved for use by Athletic Trainers within the NATA scope of practice.",
      },
      {
        body: "State licensure",
        detail: "AT licensure rules vary by state. BOC Category A is the most widely accepted continuing-education category; check your state's specific requirements before filing.",
      },
    ],
  },
  // Match ATC / CSCS credentialed testimonials. Toderico (MS, CSCS) is the
  // primary S&C-adjacent quote.
  testimonialCredentialPattern: /\b(ATC|CSCS)\b/,
  testimonialFallbackNames: ["Benjamin Toderico, MS, CSCS"],
  finalCta: {
    eyebrow: "Add BFR to the AT toolkit",
    headline: "See the certification",
    body: "11.75 BOC Category A CEUs across 37 modules. Built for the in-season athlete, the return-to-sport window, and the cuff that fits the setting.",
    primaryCta: "See the certification",
    primaryCtaHref: "/get-certified",
  },
};

// ---------------------------------------------------------------------------
// STRENGTH & CONDITIONING COACHES — tertiary tier. Performance-focused.
// ---------------------------------------------------------------------------

export const SC: Audience = {
  slug: "strength-coaches",
  meta: {
    title: "BFR for Strength and Conditioning Coaches | The BFR Pros",
    description:
      "BFR certification for S&C coaches working in private, college, and pro settings. In-season hypertrophy at 20-40% 1RM, ischemic preconditioning for performance, programming integration. Equipment-agnostic, research-led.",
    canonicalPath: "/for/strength-coaches",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "For strength and conditioning coaches",
    headline: "BFR for in-season hypertrophy and ischemic preconditioning",
    highlight: "ischemic preconditioning",
    subhead:
      "Built for S&C coaches working with private, college, and pro athletes who can't add heavy training volume in-season but still need to maintain strength. Apply BFR for hypertrophy at light loads and ischemic preconditioning that lifts performance markers.",
  },
  problem: {
    eyebrow: "The training floor",
    headline: "The athlete cases where heavy isn't an option",
    items: [
      {
        title: "In-season volume management is a real ceiling",
        body: "You can program hard in pre-season. In-season, every kilo of barbell load competes with practice, games, and travel. The athlete needs a hypertrophy stimulus that doesn't add fatigue load.",
      },
      {
        title: "Return-to-play has a gap between rehab and full load",
        body: "Once the medical team clears the athlete and hands them back, the strength gap to full performance is yours to close. BFR slots into that window with mechanisms the surgeon won't override.",
      },
      {
        title: "Most BFR courses are written by rehab clinicians, not coaches",
        body: "Programming integration, periodization context, performance markers, and adherence considerations for athletes get lighter treatment. You want a course where the athletic side carries equal weight.",
      },
      {
        title: "Athlete buy-in is harder when the science feels thin",
        body: "Athletes ask why. A cuff that looks like a tourniquet is going to come with questions. Having the published research, the mechanism, and the specific protocols you're applying makes the conversation simple.",
      },
    ],
  },
  solution: {
    eyebrow: "What this cert gives you",
    headline: "Research-led BFR for performance settings",
    intro:
      "The athletic-side chapters are written by Dr. Nicholas Licameli, a Doctor of Physical Therapy who is also an active natural bodybuilder. The clinical-floor practitioner and the under-the-bar lifter live in the same person, so the protocols are written for both contexts.",
    pillars: [
      {
        eyebrow: "Pillar 1",
        title: "Performance applications at full depth",
        body: "In-season hypertrophy at 20-40% one-rep max, ischemic preconditioning for performance, programming integration with periodization, and bodybuilding-adjacent hypertrophy applications most rehab-led courses skip entirely.",
      },
      {
        eyebrow: "Pillar 2",
        title: "Mechanisms you can defend to athletes",
        body: `${STATS.publications} peer-reviewed publications by Dr. Rolnick anchor the cell-swelling, metabolite-accumulation, and motor-unit recruitment science. When an athlete asks why a cuff at 30% 1RM gets heavy-load adaptations, you have the answer with citations.`,
      },
      {
        eyebrow: "Pillar 3",
        title: "Cuff-agnostic, setting-flexible",
        body: "Pneumatic Delfi systems, SmartCuffs, B Strong elastic bands, wrapping straps — the curriculum walks through the right tool for the setting. Locker room, pre-game, off-day, in private practice. The cuff is the coach's choice.",
      },
    ],
  },
  scope: {
    eyebrow: "Inside your craft",
    headline: "BFR for the in-season strength-maintenance gap",
    body: "Performance applications of BFR are covered across the curriculum at the same depth as rehab. NSCA continuing-education recognition varies by certification body and renewal cycle; the course content covers 11.75 hours of contact education that most CSCS holders can apply against their continuing-education requirements where self-reporting is supported.",
    citationLabel: "Performance applications, NSCA-recognized program design",
  },
  applications: {
    eyebrow: "Cases the curriculum walks you through",
    headline: "What you can do with your athletes",
    items: [
      "In-season hypertrophy maintenance at 20-40% one-rep max for athletes who cannot afford added fatigue load",
      "Ischemic preconditioning protocols for performance markers in the warm-up window",
      "Return-to-play hypertrophy work in the gap between medical clearance and full barbell loading",
      "Lengthened-partial and tempo BFR work for muscle-belly targeting in mature trainees",
      "Aerobic BFR walking protocols for conditioning maintenance when running volume must be capped",
      "Programming integration: periodization, deload weeks, in-season vs off-season templates",
    ],
  },
  ceus: {
    eyebrow: "CEU coverage",
    headline: "Contact-hour education recognized across S&C",
    intro:
      "The Complete BFR Certification provides 11.75 hours of contact education. NSCA continuing-education recognition varies by certification holder and renewal cycle.",
    items: [
      {
        body: "NSCA recognition",
        detail: "The NSCA is among the publications that have featured Dr. Rolnick's BFR work (Strength and Conditioning Journal). Self-reported continuing-education from the course content is generally accepted where the certifying body supports self-reporting.",
      },
      {
        body: "11.75 contact hours",
        detail: "Total course length across 4 courses and 37 modules. Documentable for any CE filing that accepts contact-hour education.",
      },
      {
        body: "Practical assessment included",
        detail: "Course 4 closes with a knowledge assessment on practical BFR with wrapping straps versus elastic bands — useful for coaches working without access to pneumatic systems.",
      },
    ],
  },
  testimonialCredentialPattern: /\b(CSCS|MS, ATC)\b/,
  testimonialFallbackNames: ["Benjamin Toderico, MS, CSCS"],
  finalCta: {
    eyebrow: "Bring BFR to your programming",
    headline: "See the certification",
    body: "37 modules, 11.75 hours of contact education, equipment-agnostic. Performance applications written by a competitive natural bodybuilder and Doctor of Physical Therapy.",
    primaryCta: "See the certification",
    primaryCtaHref: "/get-certified",
  },
};

export const AUDIENCES = { PT, AT, SC } as const;

// Server-side helper. Returns a plain-object testimonial list filtered by
// the audience's credential pattern, with fallback names deduped in. Each
// audience page route calls this from its server component and passes the
// result to <AudienceTestimonials />, so the non-serializable RegExp never
// crosses the server/client component boundary.
export function filterTestimonialsForAudience(audience: Audience) {
  const matched = TESTIMONIALS.filter(
    (t) =>
      audience.testimonialCredentialPattern.test(t.name) ||
      audience.testimonialCredentialPattern.test(t.role),
  );
  const fallbacks = TESTIMONIALS.filter((t) =>
    audience.testimonialFallbackNames.includes(t.name),
  );
  const seen = new Set<string>();
  return [...matched, ...fallbacks]
    .filter((t) => {
      if (seen.has(t.name)) return false;
      seen.add(t.name);
      return true;
    })
    .map((t) => ({ name: t.name, role: t.role, quote: t.quote }));
}
