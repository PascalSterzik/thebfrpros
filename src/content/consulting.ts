// /consulting page copy + qualification-form schema. Single source of truth
// for the 1:1 BFR clinical-mentorship route.
//
// Positioning (brand/Nick-level, Stage 4-5 high intent): bring your toughest
// BFR case to the clinician who wrote the research. Authority = 74 peer-
// reviewed BFR publications, Topic Editor at Frontiers, peer reviewer for 26
// journals, active Manhattan practice. The named mechanism is the "BFR Case
// Review" (one hour, one case, one-on-one). Price ($275/hour) is shown on
// purpose: this is the offer's own page and the budget qualifier needs the
// number (a deliberate exception to the brand guide's no-price-top-of-funnel
// rule).
//
// Brand gates applied: no forbidden claims (specific counts, never "leading"/
// "most-published"/"gold standard"), no em-dashes in composed copy, no
// terminal periods on Compacta display headlines, no false scarcity. Modality-
// vs-brand discipline: every authority claim here is Nick-personal (brand
// level), so no FEATURED_IN modality logos are repackaged onto this page.

export const CONSULTING_META = {
  title: "BFR Consulting with Dr. Nicholas Rolnick | The BFR Pros",
  description:
    "Book a 1:1 BFR Case Review with Dr. Nicholas Rolnick, author of 74 peer-reviewed BFR publications and an active Manhattan clinician. One hour, one case, $275. Bring the patient who is stuck and leave with a plan you can run on your next visit.",
  canonicalPath: "/consultation",
  ogImagePath: "/og/home",
} as const;

export const CONSULTING_HERO = {
  eyebrow: "1:1 clinical mentorship",
  headline: "Bring your toughest BFR case to the clinician who wrote the research",
  highlight: "toughest BFR case",
  credentialsLine:
    "Dr. Nicholas Rolnick, PT, DPT · 74 peer-reviewed BFR publications · Active Manhattan practice",
  subhead:
    "Book a BFR Case Review: one hour, one-on-one, $275. Bring a patient who is not progressing and we work the screening, the pressure, and the programming together. You leave with a plan you can run on your next visit.",
  primaryCta: "Start with a few questions",
  photoSrc: "/images/instructors/rolnick-large.jpg",
  photoAlt: "Dr. Nicholas Rolnick, founder of The BFR Pros",
  bgSrc: "/images/hero/hero-banner.webp",
} as const;

export const CONSULTING_WHO = {
  eyebrow: "Who it's for",
  headline: "For the clinician with a case that's stuck",
  highlight: "a case that's stuck",
  intro:
    "You have a patient in front of you and BFR should help, but something is in the way. The pressure, the screening, the progression, the surgeon who wants a rationale. This is the hour you bring that to.",
  items: [
    {
      title: "Case review",
      body: "Walk a real patient through with the person who has treated and researched hundreds like them.",
    },
    {
      title: "Pressure and screening",
      body: "Set limb occlusion pressure and clear the contraindications with confidence, not guesswork.",
    },
    {
      title: "Programming and progression",
      body: "Build the sets, loads, and timeline that move the case forward week to week.",
    },
    {
      title: "A rationale you can defend",
      body: "Leave able to point a surgeon or physician to the literature behind every call you made.",
    },
  ],
} as const;

export const CONSULTING_ABOUT = {
  eyebrow: "Who you're working with",
  headline: "An author of the BFR literature who still treats patients",
  highlight: "still treats patients",
  paragraphs: [
    "Dr. Nicholas Rolnick has authored 74 peer-reviewed BFR publications and is a Topic Editor for the Frontiers blood flow restriction special issue. He peer-reviews for 26 journals and wrote Chapter 12 of the NASM textbook on warm-up, recovery, and injury prevention.",
    "He also sees patients in Manhattan every week. The case you bring is the kind he treated on Monday, so the answer you get is what he would actually do, not what reads well in an abstract.",
  ],
  imageSrc: "/images/action/rolnick-applying-cuff.jpg",
  imageAlt: "Dr. Nicholas Rolnick applying a blood flow restriction cuff to a patient",
} as const;

export const CONSULTING_HOW = {
  eyebrow: "How it works",
  headline: "Three steps to the call",
  steps: [
    {
      n: "1",
      title: "Answer a few questions",
      body: "Tell Nick who you are and the case you want to work through. About two minutes.",
    },
    {
      n: "2",
      title: "Book a time",
      body: "Pick an hour that fits your schedule on Nick's calendar.",
    },
    {
      n: "3",
      title: "Meet Nick",
      body: "Bring your case and your questions. Leave with a plan.",
    },
  ],
} as const;

export const CONSULTING_PRICING = {
  eyebrow: "What it costs",
  headline: "One rate, billed by the hour",
  highlight: "One rate",
  rate: "$275",
  rateUnit: "per hour, one-on-one",
  note: "One hour, online, just you and Nick. You pay per session. No packages and no retainer for now, the hour you need when you need it.",
  includes: [
    "A full hour with Dr. Rolnick",
    "Your specific case, screened and programmed",
    "A written plan you can run on your next visit",
  ],
} as const;

// ---- Qualification form ----------------------------------------------------
// Typeform-style, one question per screen, shown in a full-screen overlay.
// Need-and-engagement-first order (this is a $275 self-pay call, not a
// four-figure disqualification gate). Each question from Q2 on carries a small
// `affirmation` (the "pat on the back"); prompts + affirmations support {name}
// and {answerId} tokens, interpolated at render time (see ConsultingFormFlow).
// The final `budget` question terminally branches: a ready answer goes to the
// Cal.com booking step; a "know more first" answer goes to the certification
// page instead of the calendar.

export type ConsultingQuestionType = "text" | "email" | "select" | "scale" | "longtext";

export type ConsultingQuestion = {
  id: string;
  type: ConsultingQuestionType;
  prompt: string;
  // Shown above the prompt from Q2 on (the "pat"). Supports {name}/{answerId}.
  affirmation?: string;
  helper?: string;
  placeholder?: string;
  options?: ReadonlyArray<string>;
  required?: boolean;
  // Scale-only (type === "scale"): the 1-10 range + end labels.
  scaleMin?: number;
  scaleMax?: number;
  scaleMinLabel?: string;
  scaleMaxLabel?: string;
};

export const CONSULTING_FORM = {
  eyebrow: "Start here",
  headline: "See if it's a fit",
  highlight: "a fit",
  intro:
    "A few quick questions so Nick knows your case before you book. One at a time, about two minutes.",
  progressLabel: "Question {current} of {total}",
  backLabel: "Back",
  nextLabel: "Next",
  finishLabel: "Continue",
  submittingLabel: "Sending...",
  requiredError: "Add an answer to continue.",
  emailError: "Enter a valid email so Nick can reach you.",
  questions: [
    {
      id: "name",
      type: "text",
      prompt: "First, what's your name?",
      placeholder: "Dr. Mia Sanchez",
      required: true,
    },
    {
      id: "email",
      type: "email",
      affirmation: "Great!",
      prompt: "Where should Nick send you the details, {name}?",
      helper: "Used only to confirm your session. No newsletter, no sharing.",
      placeholder: "you@yourclinic.com",
      required: true,
    },
    {
      id: "role",
      type: "select",
      affirmation: "Perfect.",
      prompt: "What's your role?",
      options: [
        "Physical Therapist",
        "Athletic Trainer",
        "Strength & Conditioning Coach",
        "Other",
      ],
      required: true,
    },
    {
      id: "need",
      type: "longtext",
      affirmation: "Got it.",
      prompt: "What case or challenge do you want to work through with Nick?",
      helper: "The more specific you are, the more useful the hour will be.",
      placeholder: "e.g. a post-op ACL at week 6 who is not tolerating the pressure I'd expect...",
      required: true,
    },
    {
      id: "needIntensity",
      type: "scale",
      affirmation: "Thanks for laying that out.",
      prompt: "How important is it to solve this right now?",
      scaleMin: 1,
      scaleMax: 10,
      scaleMinLabel: "Can wait",
      scaleMaxLabel: "Urgent",
      required: true,
    },
    {
      id: "needIntensityWhy",
      type: "longtext",
      affirmation: "Makes sense.",
      prompt: "What makes it a {needIntensity}?",
      placeholder: "A sentence is plenty.",
      required: true,
    },
    {
      id: "timing",
      type: "select",
      affirmation: "Good to know.",
      prompt: "If we could wave a magic wand to solve this, when should that be?",
      options: ["Now", "This month", "This quarter", "Just exploring"],
      required: true,
    },
    {
      id: "bfrStage",
      type: "select",
      affirmation: "Last one, {name}.",
      prompt: "Where are you with BFR right now?",
      // Router, not a price gate: the first two options book the call; the last
      // option (not certified) routes to the certification instead (see the flow:
      // the terminal branch keys off the LAST option being the "not ready" one).
      options: [
        "I use it regularly with patients or athletes",
        "I've started, but I'm still finding my footing",
        "I'm not BFR-certified yet",
      ],
      required: true,
    },
  ] as ReadonlyArray<ConsultingQuestion>,
  booking: {
    eyebrow: "Last step",
    headline: "Pick a time with Nick",
    intro:
      "Choose an hour that works for you. You'll get a confirmation and a calendar invite, and your answers are already on their way to Nick so he can prep for your case.",
    // Subtle fallback only: the link lives on `fallbackLinkLabel` (no big button).
    fallbackBefore: "If the calendar does not load above, ",
    fallbackLinkLabel: "click here",
    fallbackAfter: " to open it in a new tab.",
  },
  // Shown instead of the calendar when the budget answer is not a ready "yes":
  // route them to the self-paced certification rather than a 1:1 hour.
  notReady: {
    eyebrow: "Before you book",
    headline: "Let's start you in the right place",
    body:
      "No problem. The certification is the best place to begin: the full system at your own pace, built on Nick's BFR research. You can book a 1:1 hour whenever a specific case comes up.",
    ctaLabel: "Explore the certification",
  },
} as const;

export const CONSULTING_FAQ = {
  eyebrow: "Questions",
  headline: "Before you book",
  items: [
    {
      q: "Who is this for?",
      a: "Licensed physical therapists, athletic trainers, and strength and conditioning coaches who are applying BFR with their own patients or athletes and want a second set of expert eyes on a specific case.",
    },
    {
      q: "What happens on the call?",
      a: "You bring a real case. Nick works the screening, the limb occlusion pressure, and the programming with you, and answers the questions you cannot find a clean answer to in the literature. You leave with a plan.",
    },
    {
      q: "How is this different from The Complete BFR Certification?",
      a: "The certification teaches you the whole system on your own schedule. Consulting is one-on-one time on your specific case. If you are new to BFR, start with the certification. If you already have a case in front of you, book an hour.",
    },
    {
      q: "What does it cost?",
      a: "$275 for one hour, one-on-one. You pay per session. There are no packages or retainers right now, just the hour you need.",
    },
    {
      q: "What if I need more than an hour?",
      a: "Book another hour whenever you want one. Most clinicians come back when a new case comes in, not on a fixed schedule.",
    },
  ],
} as const;

export const CONSULTING_CLOSER = {
  eyebrow: "From Nick",
  headline: "Bring me the case that's keeping you up",
  highlight: "keeping you up",
  paragraphs: [
    "I have spent years publishing the BFR research and just as many treating patients in Manhattan every week. To me it is one job. When a clinician brings me a case that is stuck, we almost always find the thing the textbook glossed over.",
    "That is the hour I want to give you. Bring the patient who is not progressing, the screen you are not sure about, the pressure you keep second-guessing. We will work it together, and you will know exactly what to do on your next visit. Book the hour.",
  ],
  ctaLabel: "Start the case review",
  signatureName: "Dr. Nicholas Rolnick",
  signatureRole: "PT, DPT · The Human Performance Mechanic",
} as const;
