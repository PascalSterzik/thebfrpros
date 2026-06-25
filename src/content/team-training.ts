// /train-your-team page copy + qualify-form schema. Single source of truth for
// the clinic team-training lane (Phase 4). Transcribed verbatim from the Phase 3
// COPY.md (Agency/Clients/The BFR Pros/Deliverables/Team-Training/COPY.md); the
// build does not rewrite copy.
//
// Positioning (spec §0 + §1): no competitor sells BFR as a team buy. This lane
// names and owns a new category, team capability not individual credential:
// "Train the clinic, not the clinician." The individual cert stays the site's
// core offer; this is a prominent secondary lane. Audience = Morgan, the
// Clinic-Builder (the owner/director who signs the five-figure check).
//
// Locked register (every line): calm, ROI-grounded, honest. Relief, control,
// trust, quiet pride. NEVER excitement, novelty, or "revolutionize." Morgan
// reads hype as the fad they fear.
//
// Gates applied (spec §9): specific counts never superlatives; no em-dashes
// (ranges as "X to Y"); no terminal period on Compacta display headlines; no
// false scarcity ("up to 30" is capacity); device-agnostic framed as CAPEX
// freedom, never a blanket objectivity claim; no "96920"; no "17.4"; Nightingale
// excluded; honest limits surfaced; in-person price anchor never headlines "half
// off"; no measured live-over-online retention claim. The structured offer
// numbers + the locked core->price->bonus order live in TEAM_TRAINING
// (src/lib/constants.ts), so the build cannot lead with the bonus.

export const TEAM_TRAINING_META = {
  title: "Train Your Team in BFR | On-Site & Live Virtual Workshops | The BFR Pros",
  description:
    "Train your whole clinic to one BFR protocol in a single engagement, on your floor or live online, with the cuffs you already own. Taught by Dr. Nicholas Rolnick, author of 74 peer-reviewed BFR publications.",
  canonicalPath: "/train-your-team",
  ogImagePath: "/og/home",
} as const;

// Section 2 — Hero. "Is there a team option, and is it for me?" Self-IDed
// traffic, so the hero is direct about the category. Locked hero pattern
// (full-bleed bg photo + navy gradient + centered white text). The workshop-photo
// background is an open item (rights/clearance, spec §11.1 / §G.2); until a
// cleared workshop photo is supplied the brand-default hero banner is used.
export const TEAM_TRAINING_HERO = {
  eyebrow: "For clinic owners and directors",
  headline: "Train the clinic, not the clinician",
  highlight: "not the clinician",
  subhead:
    "Bring the BFR workshop to your floor and train your whole team to one protocol in a single engagement, with the cuffs you already own. You walk away with a billable service your entire clinic delivers, not a certificate one therapist files away.",
  primaryCta: "Ask about training your team",
  bgSrc: "/images/hero/hero-banner.webp",
} as const;

// Section 3 — The category gap. "Why isn't BFR already something my whole team
// delivers?" Sets up the shift; no CTA.
export const TEAM_TRAINING_CATEGORY_GAP = {
  eyebrow: "The gap",
  headline: "Your cuffs are in the cabinet, and nobody's sure how to use them",
  highlight: "in the cabinet",
  paragraphs: [
    "You have the cuffs. Maybe a staff PT pushed for them. Maybe a few came with a device order. They sit in the cabinet, and most of the team isn't confident enough to reach for them.",
    "It isn't a knowledge problem you can fix by sending one person to a course. Every BFR certification on the market is priced per seat, a few hundred dollars a head, and most are attached to a cuff or a $5,000 machine. So the realistic options are all the same kind of bad: dismiss it, buy cuffs one therapist uses, or send one person out who comes back and can't spread it to anyone else.",
    "That's why BFR stays a thing one therapist dabbles in instead of something your clinic does. Not because the research is thin. Because nobody sells it to a team.",
  ],
} as const;

// Section 4 — The shift (the Big Idea in full). "What is the better way?"
export const TEAM_TRAINING_SHIFT = {
  eyebrow: "The shift",
  headline: "Stop sending your team out for BFR one at a time",
  highlight: "one at a time",
  subhead:
    "Bring the workshop to your floor. Your whole team, one protocol, one engagement, with the cuffs you already own.",
  paragraphs: [
    "The unit changes. Instead of buying a seat, you train a team. Dr. Rolnick comes to your clinic (or trains everyone live online), and your whole staff learns the same screen, the same pressure method, the same protocol, together, in one engagement.",
    "When every provider runs BFR the same way, it stops being one person's party trick. It becomes a service line the clinic owns and prices: a real, billable, differentiating capability that doesn't depend on which therapist is in the room. That's the difference between a certificate one person files away and a service your practice actually delivers.",
  ],
  ctaLabel: "Ask about training your team",
} as const;

// Section 5 — Is it legit? "Is BFR a fad, or worth building a service around?"
// Counts only, never "most-published" (spec §9.1). No CTA.
export const TEAM_TRAINING_LEGITIMACY = {
  eyebrow: "The evidence",
  headline: "Twenty years of research behind it, not a trend",
  highlight: "not a trend",
  paragraphs: [
    "If part of you worries this is the kind of thing that's gone in eighteen months, that's a fair question to ask before you put a five-figure check behind it. The research already answered it.",
    "BFR has a 20-year evidence base. Dr. Nicholas Rolnick has authored 74 peer-reviewed BFR publications. The modality is used by professional athletes across major sports, and patients who try it tend to ask to keep going.",
    "One honest note, because it matters to the people you'd train: BFR matches heavy lifting for muscle size, not for peak strength. It's the bridge for the patients you can't load heavy yet, the post-op knee, the painful shoulder, the older adult. It's not a replacement for everything you already do. That's exactly why it earns a place in a clinic, and exactly the kind of claim a fad never makes.",
  ],
  // Stat row (counts only, never "most-published").
  stats: [
    { value: "74", label: "peer-reviewed publications" },
    { value: "20", label: "year research base" },
    { value: "Pro", label: "athletes across major sports" },
  ],
} as const;

// Section 6 — Why it sticks (the two-part model). "Why will this stick when other
// CE didn't?" Keep "it sticks" qualitative; no retention percentage (spec §9.3.7).
export const TEAM_TRAINING_HOW_IT_WORKS = {
  eyebrow: "Why it sticks",
  headline: "Why this sticks when the last course didn't",
  highlight: "sticks",
  paragraphs: [
    "Most CE doesn't stick for one reason: someone talks at the staff for a day, and nothing changes on Monday. Dr. Rolnick ran into that ceiling himself.",
    "In 2019 and 2020 he taught live BFR workshops across the country. They went well, but a pattern kept showing up. BFR needs a real foundation before you apply it safely, and teaching that foundation meant spending a lot of the day lecturing. What teams actually wanted was more time with their hands on the cuffs. The format had a ceiling.",
    "So he moved the foundation into an on-demand course. Now the two halves are reunited at their best. Your team does the course first, so the knowledge is already in place. By the time Dr. Rolnick is in the room with them, every minute is application: cuffing each other, setting pressure, getting corrected in real time. The next week it shows up in actual treatment, not in a binder on a shelf.",
  ],
  // A graduate of the included course, verbatim, course-context proof.
  pullQuote: "100% confident implementing it Monday morning.",
  ctaLabel: "Ask about training your team",
} as const;

// Section 7 — The two offers + comparison (the heart of the page). Sequencing is
// LOCKED per card: core -> price -> bonus -> CEU total (encoded in TEAM_TRAINING
// .presentationOrder). The comparison is in-person-vs-virtual (NOT vs-competitors,
// allowed on a sales page per spec §5.3). The in-person per-seat table never
// headlines "half off"; the $20,970 is the top row, never the claim (spec §9.3.6).
export const TEAM_TRAINING_OFFERS = {
  eyebrow: "The offers",
  headline: "Two ways to train your whole team",
  highlight: "your whole team",
  intro:
    "Both train your entire team, up to 30 people, to one BFR protocol. Both include the full Introduction to BFR course. The only real question is whether you want Dr. Rolnick on your floor for a day, or live online for an afternoon.",
  cards: [
    {
      id: "in-person",
      name: "In-Person Workshop",
      core:
        "Eight hours on your clinic's floor, hands-on, with Dr. Rolnick. Your whole team, up to 30 people, trained together to one BFR protocol. He comes to you, anywhere in the US.",
      price: "$11,000 flat. All in, including travel.",
      bonus:
        "And it includes the full Introduction to BFR course for everyone you train: 13 modules, 5.5 CEUs, and a certificate of completion. That's the foundation that makes the day on your floor pure application instead of lecture.",
      ceuTotal: "13.5 CEUs per person: 8 from the on-site workshop, 5.5 from the included course.",
      ctaLabel: "Ask about the in-person workshop",
    },
    {
      id: "virtual",
      name: "Live Virtual Training",
      core:
        "Four hours, live online, with Dr. Rolnick. Your whole team, up to 30 people, trained together to one BFR protocol. No closure, no travel, nobody leaves the building.",
      price: "$5,000 flat.",
      bonus:
        "It includes the same full Introduction to BFR course for everyone you train: 13 modules, 5.5 CEUs, and a certificate of completion.",
      ceuTotal:
        "5.5 CEUs per person, from the included course. The four live hours are training time, not separately CEU-filed. We'd rather tell you that than imply otherwise.",
      ctaLabel: "Ask about live virtual training",
    },
  ],
  // Labels for the locked presentation order (rendered above each block).
  partLabels: {
    core: "What it is",
    price: "What it costs",
    bonus: "Included",
    ceuTotal: "CEUs",
  },
  positionByNeed:
    "Not sure which fits? Most owners start with the live virtual to watch the team click with it, then bring the in-person workshop to the floor when they're ready to make BFR the clinic's signature. The virtual is the low-disruption first step, not a downgrade.",
  // At-a-glance in-person-vs-virtual comparison (spec §5.3; NOT vs-competitors).
  comparison: {
    columns: ["In-Person Workshop", "Live Virtual Training"],
    rows: [
      { label: "Format", inPerson: "Hands-on, on your floor", virtual: "Live and online, together" },
      { label: "Time with Dr. Rolnick", inPerson: "8 hours", virtual: "4 hours" },
      { label: "Where", inPerson: "Your clinic, anywhere in the US", virtual: "Wherever your team logs in" },
      { label: "Team size", inPerson: "Up to 30", virtual: "Up to 30" },
      { label: "Travel", inPerson: "Included", virtual: "None needed" },
      {
        label: "Included course",
        inPerson: "Introduction to BFR (5.5 CEU + certificate)",
        virtual: "Introduction to BFR (5.5 CEU + certificate)",
      },
      { label: "CEUs per person", inPerson: "13.5 (8 + 5.5)", virtual: "5.5 (from the course)" },
      { label: "Price", inPerson: "$11,000 flat, all in", virtual: "$5,000 flat" },
      {
        label: "Best for",
        inPerson: "Making BFR your clinic's signature capability",
        virtual: "A low-disruption first step; multi-site or remote teams",
      },
    ],
  },
  // The honest price anchor (spec §9.3.6, HARD gate). Virtual: savings are real,
  // state them. In-Person: NO "half off"; show the math straight, $20,970 is the
  // top row of the table, never the claim.
  anchor: {
    eyebrow: "The honest price comparison",
    virtualHeading: "Live Virtual, the savings are real",
    virtualLine:
      "An individual in-person BFR workshop runs about $699 a seat. At $5,000 for up to 30 people, the live virtual costs less than sending eight of them out one at a time, and it trains all of them at once, to the same protocol, without anyone leaving the clinic.",
    inPersonHeading: "In-Person, the math, honestly",
    inPersonIntro: "Here's the in-person math, honestly. It depends on your team size.",
    inPersonTable: {
      columns: ["Your team size", "Sent out individually (about $699 a seat)", "In-Person Workshop (flat)"],
      rows: [
        ["10", "$6,990", "$11,000"],
        ["20", "$13,980", "$11,000"],
        ["30", "$20,970", "$11,000"],
      ],
    },
    inPersonAfter:
      "If you'd send around 10 people, the flat fee is a premium, and you're paying it for something piecemeal courses can't give you: your whole team trained together, on your floor, to one protocol, in one day, with travel and the course included. Around 16 people, the flat fee and the per-seat total cross over. Above that, the flat fee is the cheaper option by a wide margin. The qualify form asks your team size so we can run your actual number on the call, no guessing.",
  },
} as const;

// Section 7b — Launch band (mid-page), mirrors /consultation ConsultingLaunch.
export const TEAM_TRAINING_LAUNCH = {
  eyebrow: "Get started",
  headline: "Ready to see if it fits your clinic",
  highlight: "fits your clinic",
  line:
    "Tell us about your team and what you're trying to build. A few questions, then we'll talk through format, timing, and your actual numbers.",
  ctaLabel: "Ask about training your team",
} as const;

// Section 8 — Why this provider. Device-agnostic framed as CAPEX freedom +
// Rolnick's device-literature authorship, NEVER a blanket objectivity claim and
// never naming a competitor (spec §9.3.1).
export const TEAM_TRAINING_AUTHORITY = {
  eyebrow: "Why this provider",
  headline: "The person teaching your team is the one the field points to",
  highlight: "the field points to",
  paragraphs: [
    "Dr. Nicholas Rolnick has authored 74 peer-reviewed BFR publications. He's Topic Editor of the Frontiers special issues on BFR device features, a peer reviewer for 26 journals, and an adjunct professor of physical therapy who still treats patients in Manhattan. He has taught more than 60 continuing-education sessions, including on-site, whole-team workshops for clinic networks like Ivy Rehab and Professional Physical Therapy.",
    "So when the most skeptical senior therapist on your staff asks \"is this just a fad,\" you have an answer that ends the conversation.",
  ],
  capexHeading: "And he has no cuff to sell you",
  capexBody:
    "He's trained through both the premium and the budget device camps and tied to neither, and he authors the research on what actually separates one device from another. For you, that means one thing: we won't push your practice toward an $8,000 hardware line to make this work. Your team trains on the cuffs you already own, and you buy whatever fits your budget later, on your terms.",
  imageSrc: "/images/action/rolnick-applying-cuff.jpg",
  imageAlt: "Dr. Nicholas Rolnick applying a blood flow restriction cuff",
  ctaLabel: "Ask about training your team",
} as const;

// Section 9 — The economics. "Does the money pencil out?" Realistic team size,
// never a 30-person fill; "industry sources report" framing on retention, no hard
// turnover dollar figure. References the per-seat table above, does not reprint it.
export const TEAM_TRAINING_ECONOMICS = {
  eyebrow: "The economics",
  headline: "Three ways this pays for itself",
  highlight: "pays for itself",
  intro:
    "Owners don't buy CE for the certificate. They buy it because it has to do one of three things: open a lane they can bill, cover CEUs the team needed anyway, or keep good people. This does all three.",
  points: [
    {
      title: "A billable, differentiating service, under the codes you already use.",
      body:
        "A whole-team BFR capability is a real point of difference in a market where everyone else competes on volume. It's the post-op, load-compromised, and athlete work that earns referrals when your outcomes are better than the clinic down the road. (The referral upside is yours to build through results. We don't hand you a surgeon network, because we don't have one to hand out.)",
    },
    {
      title: "CEUs the team needed anyway.",
      body:
        "Many clinics set aside a continuing-education budget per clinician each year. This folds 13.5 CEUs per person (or 5.5 on the virtual) into a single engagement, so it isn't a spend on top of your CE budget. It is your CE budget, pointed at something the whole team will actually use.",
    },
    {
      title: "People who stay.",
      body:
        "Funded CE is one of the levers owners use to hold onto therapists, and industry sources report that education and advancement programs go with higher retention. Training the whole team together, on a skill they'll use the next morning, is a culture signal that a reimbursement bump can't buy.",
    },
  ],
  callback:
    "And you already saw the per-seat comparison above. At a real team size, training everyone at once costs less than sending them out one by one, and it gets them consistent in a single engagement instead of over months of piecemeal scheduling. The form captures your team size so we can run your actual number on the call.",
} as const;

// Section 10 — Proof. "Have real clinics actually done this?" Leads with the
// in-person history + named clinic networks. The Chantale Nightingale "live team
// training" testimonial is EXCLUDED until a verified source surfaces (spec
// §9.3.3). Workshop photo gallery is an open item (cleared photos, spec §11.1);
// until supplied, the named-clinic-network logos (already cleared site partners)
// carry the proof and the gallery is omitted rather than fabricated.
export const TEAM_TRAINING_PROOF = {
  eyebrow: "Proof",
  headline: "Clinics like yours have already done this",
  highlight: "already done this",
  body:
    "This isn't a new experiment. Dr. Rolnick has taught more than 60 continuing-education sessions, close to fifty of them in-person workshops. He has brought the on-site, whole-team workshop to clinic networks repeatedly: Ivy Rehab across eight states, Professional Physical Therapy across New York, New Jersey, and Massachusetts, and AccessPT.",
  // Named group-licensing clients (cleared site partner logos). NOT a fabricated
  // "adopted by" claim: these are real clinic networks Rolnick has run on-site
  // whole-team workshops for (08-E, high confidence).
  clientLogos: [
    { name: "Ivy Rehab Network", src: "/images/partners/ivy-rehab.jpg", w: 160, h: 56 },
    { name: "Professional Physical Therapy", src: "/images/partners/professional-pt.png", w: 180, h: 56 },
    { name: "AccessPT", src: "/images/partners/access-pt.png", w: 140, h: 56 },
  ],
  clientsCaption: "On-site, whole-team workshops brought to clinic networks including:",
  // Third-party, honestly framed, NOT a BFR Pros client (the IBJI 48-clinicians
  // market quote).
  marketEvidence:
    "Whole-team BFR is already how serious clinics operate. One large orthopedic group describes having \"48 clinicians across 18 locations certified to perform BFR.\" Owners are standardizing their teams on it. The open question is who trains yours, and whether your whole team learns it the same way.",
  // Course-context proof, kept honestly separate from the live engagement. The
  // course AggregateRating is NEVER attached to the team Service/Offers in schema
  // (spec §7.4); it stays visible on-page course-context proof only.
  courseProof:
    "The included Introduction to BFR course has trained more than 1,467 professionals, and exactly one has ever taken the 30-day refund. Those reviews are for the course your team gets, not the live workshop, but they're a fair read on the foundation it's built on.",
  // Past-workshop photo gallery is pending cleared photos (open item §11.1 / §G.2).
  galleryPending: true,
} as const;

// Section 11 — FAQ. The owner's objections + the honest limits surfaced, not
// buried. Emits FAQPage schema (buildTeamTrainingSchemaGraph). Zero "96920";
// billing answer states there is no BFR-specific code (spec §9.3.4).
export const TEAM_TRAINING_FAQ = {
  eyebrow: "Questions",
  headline: "The questions owners actually ask",
  items: [
    {
      q: "What does it cost me to close for a day or pull the whole team off the schedule?",
      a: "It's the first thing most owners run in their head, and it's a fair number to run. That's exactly why the Live Virtual option exists: four hours, no closure, no travel. The in-person workshop is one planned day on your floor that buys a permanent, billable capability, not a sunk cost. Training time isn't pure lost profit when the team comes out of it able to deliver a new service. We'll do the math with you on the call, at your real numbers.",
    },
    {
      q: "Will it actually stick, or is it another course everyone forgets by Monday?",
      a: "The format is the answer. The foundation is handled in advance by the included course, so the live time is spent with hands on the cuffs: screening, setting pressure, running the protocol, with direct feedback in the room. Your team practices it before they leave, which is what turns training into a Monday-morning habit instead of a binder on a shelf.",
    },
    {
      q: "Is BFR a fad, or worth building a service around?",
      a: "Twenty years of research, 74 peer-reviewed publications by your instructor, and use by professional athletes across major sports. It's the modality clinics reach for when they need to load a patient who can't tolerate heavy weight yet. That's a durable need, not a trend.",
    },
    {
      q: "Do we have to buy a $5,000 machine for the whole clinic?",
      a: "No. Your team trains on the cuffs you already own. BFR is taught as a method, pressure dosed as a percentage of each patient's occlusion pressure, so the skill lives in the technique, not in one vendor's device. Buy more hardware later if you want, on your budget. Nothing here commits your practice to an expensive equipment line.",
    },
    {
      q: "We don't legally need a certification, so why pay for training?",
      a: "True, BFR is within scope without a credential. You're not paying for a piece of paper. You're paying for safe, consistent, whole-team competence, the liability of untrained staff closed across every provider, a real service the clinic can bill, and CEUs the team needed anyway. A tourniquet-style device used by people who were never trained on it is the risk you're buying down.",
    },
    {
      q: "Can my whole team really get consistent from one engagement?",
      a: "Yes, because everyone learns the same screen, the same pressure method, and the same protocol at the same time, hands-on. That shared standard is the point. Clinic networks already certify whole teams in BFR for exactly this reason: consistency between providers and between visits.",
    },
    {
      q: "Can we bill it? Will insurance pay?",
      a: "Honest answer: there is no BFR-specific billing code. You bill the underlying work under the codes you already use, therapeutic exercise, neuromuscular re-education, or therapeutic activity, depending on what you're doing with the patient. The financial case for BFR isn't a new code. It's differentiation, better outcomes, a cash or premium lane, and patients who ask to keep going.",
    },
    {
      q: "What CEUs do we get, and will my state accept them?",
      a: "The in-person workshop is 13.5 CEUs per person (8 from the on-site workshop, recorded as NY PT board and BOC approved, plus 5.5 from the included course). The live virtual is 5.5 CEUs per person from the course. The course is BOC-approved nationally for athletic trainers and approved by the New York and New Jersey PT boards. Being straight with you: the course CEUs are not pre-approved in 13 states (AZ, DC, MD, MS, NM, CA, LA, IL, MN, NV, OH, TX, WV); a self-file application is included for those. Tell us your state on the call and we'll confirm exactly where you stand.",
    },
    {
      q: "Is the included course just a throwaway add-on?",
      a: "No. It's the foundation that makes the live day work: 13 modules, 5.5 CEUs, a certificate of completion, and more than 1,467 graduates behind it. Your team does it first so the time with Dr. Rolnick is all application. It's a genuine part of what you're buying, not a bonus bolted on to pad the offer.",
    },
    {
      q: "How current is a course built in 2020?",
      a: "The fundamentals of BFR don't change year to year, and the live workshop is taught fresh by a researcher who is actively publishing and teaching at the field's major conferences. We don't claim annual course updates, because there aren't any; what keeps it current is the instructor, not a version number.",
    },
    {
      q: "What don't you include? (the honest list)",
      a: "A few things worth knowing up front, because we'd rather you hear them from us. There's no surgeon-referral network; the referral upside is something you build through your own outcomes. The 4 live virtual hours are not separately CEU-filed (the 5.5 comes from the course). The practitioner community is quiet right now, and the mastermind tier is reserved for a separate program (BFR Insider). None of that changes what the team walks away able to do. We'd just rather you know now than be surprised later.",
    },
  ],
} as const;

// Section 12 — Final CTA / closer. First-person, calm, em-dash-free (Nick). The
// P.S. speaks to the staff champion so the page works when forwarded to a boss.
export const TEAM_TRAINING_CLOSER = {
  eyebrow: "From Nick",
  headline: "Let's see if it fits your team",
  highlight: "fits your team",
  paragraphs: [
    "I've taught this day close to fifty times, for solo clinics and for networks with locations in eight states. The teams that get the most out of it aren't the biggest ones. They're the ones where the owner decided BFR was going to be something the whole clinic does, not a thing one therapist happens to know.",
    "If that's the call you're trying to make, the next step is small. Tell me about your team, and we'll talk through format, timing, and your actual numbers. There's no pressure to book anything on that call. If it isn't a fit for your clinic, I'll tell you.",
  ],
  ctaLabel: "Ask about training your team",
  ps:
    "P.S. If you're the therapist who wants this and you're reading it for your boss, forward them this page. The case they need is the one that's already on it: one protocol for the whole team, a service the clinic can bill, CEUs everyone needed anyway, and it sticks because it's hands-on.",
  signatureName: "Dr. Nicholas Rolnick",
  signatureRole: "PT, DPT · The Human Performance Mechanic",
} as const;

// ---- Qualify form (spec §6.2 to §6.3) -------------------------------------
// Typeform-style, one question per screen, shown in a full-screen overlay. No
// budget/price gate (price is on the page, handled on the call). Each question
// from "setting" on carries a calm affirmation (Morgan is hype-allergic, so no
// exclamation pile-up). Prompts/affirmations interpolate {name}. The final step
// TERMINALLY BRANCHES three ways (see TeamTrainingFormFlow): qualified owner/
// director -> Cal booking; staff-champion -> make-the-case + forwardable summary
// + Cal; single seat / not-yet-a-fit -> certification, not the calendar.

export type TeamTrainingQuestionType = "text" | "email" | "select" | "longtext";

export type TeamTrainingQuestion = {
  id: string;
  type: TeamTrainingQuestionType;
  prompt: string;
  affirmation?: string; // shown above the prompt (the "pat"); supports {name}
  helper?: string;
  placeholder?: string;
  options?: ReadonlyArray<string>;
  required?: boolean;
};

// Branch anchors (must match the exact option strings below). The flow keys off
// these so the routing can't drift from the copy.
export const TEAM_TRAINING_CHAMPION_ROLE = "On staff, championing this to leadership";
export const TEAM_TRAINING_SINGLE_SEAT = "1";

export const TEAM_TRAINING_FORM = {
  progressLabel: "Question {current} of {total}",
  backLabel: "Back",
  nextLabel: "Next",
  finishLabel: "Continue",
  submittingLabel: "Sending...",
  requiredError: "Add an answer to continue.",
  emailError: "Enter a valid email so we can reach you.",
  questions: [
    {
      id: "name",
      type: "text",
      prompt: "First, what's your name?",
      placeholder: "First name",
      required: true,
    },
    {
      id: "email",
      type: "email",
      prompt: "Where should we send the details, {name}?",
      helper: "We'll only use this to follow up about training your team.",
      placeholder: "you@yourclinic.com",
      required: true,
    },
    {
      id: "role",
      type: "select",
      prompt: "What's your role?",
      options: [
        "Owner or co-owner",
        "Clinical or rehab director",
        "Athletic-training or performance director",
        "On staff, championing this to leadership",
      ],
      required: true,
    },
    {
      id: "setting",
      type: "select",
      affirmation: "Got it.",
      prompt: "What kind of practice or program?",
      options: [
        "Outpatient ortho or sports PT",
        "Multi-site group",
        "Hospital outpatient",
        "College, pro, or HS athletics",
        "Performance facility",
      ],
      required: true,
    },
    {
      id: "teamSize",
      type: "select",
      affirmation: "Thanks.",
      prompt: "How many clinicians or staff would you train?",
      options: ["1", "2 to 5", "6 to 10", "11 to 15", "16 to 30", "30+"],
      required: true,
    },
    {
      id: "formatInterest",
      type: "select",
      affirmation: "That helps.",
      prompt: "Which are you considering?",
      options: ["In-Person Workshop", "Live Virtual Training", "Not sure, want to discuss"],
      required: true,
    },
    {
      id: "cuffsOnHand",
      type: "select",
      affirmation: "Makes sense.",
      prompt: "Does your team already have BFR cuffs?",
      options: ["Yes, a full set", "A few", "No, none yet"],
      required: true,
    },
    {
      id: "timing",
      type: "select",
      affirmation: "Good to know.",
      prompt: "If we could wave a magic wand and have your team trained, when would that be?",
      options: ["This quarter", "Next quarter", "Later this year", "Just exploring"],
      required: true,
    },
    {
      id: "openNote",
      type: "longtext",
      affirmation: "Last one, {name}.",
      prompt: "Anything you'd want the call to cover?",
      placeholder: "Optional. Anything specific you want us to come ready to talk about.",
      required: false,
    },
  ] as ReadonlyArray<TeamTrainingQuestion>,
  // Branch A — qualified owner / director (team size 2+): the Cal.com embed.
  booking: {
    heading: "You're a fit for a team-training call",
    intro:
      "Pick a time that works for you. We'll talk through format, timing, travel if it's in-person, and your team's actual numbers. No pressure to commit on the call.",
    fallbackBefore: "If the calendar does not load above, ",
    fallbackLinkLabel: "click here",
    fallbackAfter: " to open it in a new tab.",
  },
  // Branch B — staff-champion: make the case, arm the champion, forwardable.
  champion: {
    heading: "Let's get your decision-maker what they need",
    intro:
      "You're the one who wants this. The person who signs off needs the owner's case, not the clinical pitch. Here's the short version you can forward or bring to a call:",
    summary: [
      "One protocol for the whole team, trained together in a single engagement.",
      "A billable, differentiating service the clinic owns, not a certificate one therapist files away.",
      "CEUs the team needed anyway (13.5 per person in-person, 5.5 virtual), folded into the spend.",
      "It sticks because it's hands-on, with the foundation pre-loaded by the included course.",
      "Flat pricing, the cuffs you already own, no $5,000 machine required.",
    ],
    callPrompt: "Want to bring them onto a call?",
    forwardNote: "Or just send them this page.",
    fallbackBefore: "If the calendar does not load above, ",
    fallbackLinkLabel: "click here",
    fallbackAfter: " to open it in a new tab.",
  },
  // Branch C — single seat / not-yet-a-fit (team size = 1): route to the cert.
  notReady: {
    heading: "Sounds like this is for you, not a whole team yet",
    body:
      "If it's one person rather than a team, the individual certification is the better path: the same research, the same instructor, self-paced, for $449. You can always come back for team training when you're ready to roll it out to the whole clinic.",
    ctaLabel: "See the certification",
  },
} as const;

// ---- Sibling-page cross-pointers (spec §7.3) ------------------------------
// One light pointer each, idea + link, exploratory. Hosted on the sibling pages
// (cert, consultation, /for/PT, /for/AT, /for/SC). /about gets NO pointer (stays
// mission-only). Centralized here so the lane's wayfinding has one source.
export const TEAM_TRAINING_POINTERS = {
  certification: {
    line: "Run a clinic, not just your own caseload? You can train your whole team to one BFR protocol in a single engagement.",
    cta: "Train your whole team",
  },
  consultation: {
    line: "Exploring this for a whole team, not just yourself? There's a lane for that.",
    cta: "See Train Your Team",
  },
  physicalTherapists: {
    line: "Own or run the practice? You can train your whole team at once, on your floor.",
    cta: "Train Your Team",
  },
  athleticTrainers: {
    line: "Run the program, not just the room? Train your whole staff to one BFR protocol.",
    cta: "Train Your Team",
  },
  strengthCoaches: {
    line: "Training a whole staff or facility? There's a team option.",
    cta: "Train Your Team",
  },
  href: "/train-your-team",
} as const;
