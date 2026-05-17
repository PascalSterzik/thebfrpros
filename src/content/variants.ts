// Canonical /get-certified copy and metadata.
//
// History: Phase 1A built three concept variants (v1 research-authority,
// v2 equipment-agnostic, v3 patient-demand) for Pascal + Nick to review at
// /preview. v3 was picked as the canonical /get-certified. Retired
// 2026-05-17 (duplicate-content SEO problem): the v1/v2 routes 301 to
// /get-certified via src/middleware.ts, the noindex /preview index was
// deleted and now 404s. Only the canonical v3 content survives. The
// `Variant` type is unchanged so the data-driven section components
// (HeroBlock, ProblemBlock, DreamVisionBlock, DreamDeepBlock, BridgeBlock,
// FinalCTABlock, PSBlock) keep consuming it.

export type Variant = {
  slug: "v3";
  routePath: string;
  belief: string;
  beliefNumber: number;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;

  announcement: { eyebrow: string; line: string; cta: string };

  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    supportingStat: { label: string; value: string }[];
    photoSrc: string;
    photoAlt: string;
  };

  problem: {
    label: string;
    headline: string;
    intro: string;
    surface: string;
    emotional: string;
    future: string;
    visceral: string;
  };

  dreamVision: {
    label: string;
    headline: string;
    paragraphs: string[];
  };

  dreamDeep: {
    label: string;
    headline: string;
    paragraphs: string[];
  };

  bridge: {
    line: string;
  };

  finalCta: {
    headline: string;
    subhead: string;
    warning: string;
    primary: string;
  };

  ps: string[];
};

export const VARIANTS: Record<"v3", Variant> = {
  v3: {
    slug: "v3",
    routePath: "/get-certified",
    belief: "Belief 6: patient-demand and competitor adoption",
    beliefNumber: 6,
    metaTitle: "Your Patients Are Already Asking for BFR. Be the Clinic That Delivers.",
    metaDescription:
      "Patients are searching for BFR providers in your zip code. Get certified in 37 modules and 11.75 CEUs before the clinic across the street does. 30-day money-back guarantee.",
    ogImage: "/og/get-certified",
    announcement: {
      eyebrow: "Patient demand is rising",
      line: "Your competitors are getting certified. Be the BFR clinic patients in your zip code find first.",
      // CTA framed without time-pressure tail. "Get certified" is fine on
      // /get-certified (Stage-4 sales page), but "before the next one does"
      // is a fake-urgency tactic and brand-guide.md Forbidden Claims grep
      // blocks the "act now / hurry / before X" family of phrasings.
      cta: "Get certified",
    },
    hero: {
      eyebrow: "The Complete BFR Certification",
      headline: "Your patients are already asking for BFR. Be the clinic that delivers it",
      subhead:
        "37 modules, 11.75 CEUs, taught by Dr. Nicholas Rolnick, author of 72+ peer-reviewed BFR publications. Equipment-agnostic, 30-day money-back guarantee.",
      primaryCta: "Get BFR Certified",
      secondaryCta: "See the curriculum",
      supportingStat: [
        { value: "100+", label: "clinics already certified through us" },
        { value: "11.75", label: "CEUs in one purchase" },
        { value: "37", label: "modules" },
        { value: "30", label: "days to a full refund" },
      ],
      photoSrc: "/images/action/rolnick-coaching.jpg",
      photoAlt: "Dr. Nicholas Rolnick coaching a patient through a BFR session",
    },
    problem: {
      label: "The problem",
      headline: "Patients can tell when you're stalling",
      intro:
        "BFR has crossed into patient-facing media. The post-op ACL bookmarked a Cleveland Clinic article. The marathoner heard about it on a podcast. The lifter saw it in Men's Health. They are not asking if you've heard of it. They are asking which cuff you use.",
      surface:
        "Last month a patient asked you directly. You said something about looking into it for next visit. They nodded and went home and Googled. By next visit, they had answers. You still didn't.",
      emotional:
        "You went to PT school because you wanted to actually help people get better. The gap between that ambition and your weekly outcomes review is widening, and the gap is shaped exactly like the techniques your DPT program left out.",
      future:
        "Within twelve months, the clinic in your zip code that offers BFR by name will be the one on the search results page when your patient types \"BFR near me.\" The surgeon you work with starts asking why a different clinic gets the post-op ACLs. The 18-year-old who came in last spring with a patellar dislocation never came back.",
      visceral:
        "The defensive cost of doing nothing is no longer zero. It is the patient who already left and the patient who is about to.",
    },
    dreamVision: {
      label: "The destination",
      headline: "Six months from now, the patients who Googled BFR in your zip code book with you, by name",
      paragraphs: [
        "Three weeks post-op, the patient walks in for the first time. They had been to two clinics and searched between visits. They found you because your website says BFR provided here and your reviews mention specific outcomes. They came in for a consult and didn't leave for a second opinion.",
        "You apply the cuff. You set the pressure. You walk them through what the next eight weeks look like and you write it down. They are back at full duty by week sixteen. Six months later they send you a referral.",
        "There are several of them on your schedule for the spring. Every one of them found you by name.",
      ],
    },
    dreamDeep: {
      label: "Who you become",
      headline: "You are the clinic the next BFR patient finds first",
      paragraphs: [
        "Your Google reviews mention BFR by name. Your clinic's intake form has a box for blood flow restriction goals. Two surgeons in your zip code have you on their referral shortlist for late-stage post-op rehab. The cash-pay BFR program you launched last year covers your CE budget for the next three.",
        "You are not the only certified BFR clinician in your region. You are the first one a patient finds when they search. The certification is what got you in the door. The implementation is what kept you there.",
        "Six months from now, the new graduate down the hall asks how to start a BFR program at her own clinic. You tell her what your patients already know: this is real, the demand is here, and the time to be early is over.",
      ],
    },
    bridge: {
      line: "Patient demand is the only scarcity that's real in this market. The clinics getting certified now are the ones who will be on the search results page when your patient types \"BFR near me.\" The Complete BFR Certification is the fastest evidence-based path to being one of them.",
    },
    finalCta: {
      headline: "The patient walks in tomorrow either way. The question is which clinic answers",
      subhead:
        "$449. 37 modules. 11.75 hours of video content. 11.75 CEUs. 30-day money-back guarantee. Do it in a weekend or take 4 weeks. The window to be the first BFR-certified clinic in your zip code is still open. It is not open forever.",
      warning:
        "Worldwide searches for blood flow restriction went from ~19,000 a month in July 2025 to ~84,000 a month in February 2026. That is +342% in seven months. The previous all-time high, ~33,000 searches a month set in September 2021, has been redrawn 2.6× higher. Fourteen years of slow climb, replaced in seven. The clinics certifying this quarter are the ones that show up first when those patients search next quarter. The wave is not coming. It is here.",
      primary: "Get BFR Certified",
    },
    ps: [
      "P.S. The certification is the technique, not the cuff. Your patients don't care which brand you bought. They care whether you can apply BFR safely, prescribe the pressure correctly, and hit their outcome goals. The 30-day money-back guarantee is the rest of the trade.",
      "P.P.S. The 30-day refund means you can finish the curriculum, run BFR with your first patient, and refund out if it's not for your practice. The guarantee asks you to try, not commit forever. 1 out of 1,467 graduates has ever taken it.",
    ],
  },
};
