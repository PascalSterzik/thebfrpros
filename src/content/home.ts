// Homepage copy. Single source of truth for the public landing page at "/".
//
// Scope discipline (brand-guide.md Copy & Customer Journey Principles, Principle 6):
//   - Homepage sells the MODALITY and the practitioner outcome.
//   - /get-certified sells the certification.
//   - The two never overlap. The homepage has NO pricing, NO curriculum
//     preview, NO competitor comparison, NO cert-mechanics FAQ. Cert
//     sections (HOME_SOLUTION, HOME_COURSE_OVERVIEW, HOME_FAQ) that
//     previously lived here were removed because they belonged at
//     /get-certified, not /.
//
// Headline punctuation (brand-guide.md Principle 5):
//   - Display headlines never end with a terminal period.
//   - Subhead body copy follows normal sentence punctuation.

export const HOME_META = {
  // Absolute title (set as { absolute } in app/page.tsx metadata) bypasses
  // layout.tsx title.template so "| The BFR Pros" doesn't double-suffix.
  title: "The BFR Pros | Online BFR Certification by Dr. Nicholas Rolnick",
  description:
    "Online BFR certification taught by Dr. Nicholas Rolnick, author of 74 peer-reviewed BFR publications. 37 modules, 11.75 CEUs, equipment-agnostic, 30-day money-back guarantee.",
  canonicalPath: "/",
  ogImagePath: "/og/home",
} as const;

// Hero — Stage-2 awareness traffic (problem-aware, doesn't yet know BFR is
// the answer). Hooks on the practitioner's specific clinical pain ("post-op
// patients plateau" — avatar vocabulary from 02-avatar-sheet.md), names BFR
// as the protocol, lands credibility via Mayo / Cleveland / SOCOM in two
// sentences. No CTA: the homepage's only conversion path is the single
// soft gateway in HOME_FINAL_CTA at the end of the page.
export const HOME_HERO = {
  eyebrow: "Evidence-based BFR for licensed PTs, ATs, and S&C coaches",
  headline: "Stop watching post-op patients plateau",
  highlight: "plateau",
  subhead:
    "Blood flow restriction (BFR) accelerates strength gains for post-op, in-season, and geriatric patients. Mayo Clinic, Cleveland Clinic, and US Special Operations Command all use it.",
  photoSrc: "/images/hero/hero-banner.webp",
  photoAlt: "Dr. Nicholas Rolnick applying a blood flow restriction cuff to a patient's leg",
} as const;

// What BFR Does — modality explainer. Outcome FIRST, mechanism second.
export const WHAT_BFR_DOES = {
  eyebrow: "What BFR does for your practice",
  headline: "Build strength when heavy loads aren't an option",
  highlight: "Build strength",
  intro:
    "Blood flow restriction (BFR) drives strength and hypertrophy adaptations comparable to heavy resistance training using just 20-40% of one-rep max. A calibrated pneumatic cuff restricts venous return on the proximal limb while arterial flow continues, so the muscle works harder at lighter loads and the body adapts as if the load were heavy. Useful when heavy loading is contraindicated (post-op, in-season, geriatric) or simply isn't the priority.",
  pillars: [
    {
      eyebrow: "Mechanism",
      title: "Heavy-load gains at light-load tolerances",
      body: "Cell swelling, metabolite accumulation, and elevated motor-unit recruitment under restriction produce hypertrophy and strength adaptations across multiple muscle groups in published trials.",
    },
    {
      eyebrow: "Safety",
      title: "Lower event rates than standard resistance training",
      body: "The largest published BFR safety survey across 12,642 sessions reported deep vein thrombosis at 0.06%, pulmonary embolism at 0.01%, and rhabdomyolysis at 0.01%. Screening protocols and pressure prescription drive that record.",
    },
    {
      eyebrow: "Breadth",
      title: "Post-op ACL, rotator cuff, geriatrics, in-season athletes",
      body: "BFR has published evidence in post-surgical loading, sarcopenia, tendon adaptation, in-season maintenance, and aerobic conditioning across rehab and performance settings.",
    },
  ],
} as const;

// Why BFR Matters Now — the literature has matured, the clinic floor is
// catching up. Stage-2 / Stage-3 framing: the visitor decides BFR is
// credible and the time to learn it is now.
export const WHY_BFR_MATTERS_NOW = {
  eyebrow: "Why now",
  headline: "Sixty years of research, decades of clinical adoption",
  highlight: "decades of clinical adoption",
  intro:
    "The technique isn't new. The application in modern outpatient rehab and S&C is. The literature has matured, the equipment has standardized, and major institutions are bringing BFR into clinical and performance practice.",
  proofPoints: [
    {
      stat: "1966",
      title: "Sato develops the original protocol in Japan",
      body: "The KAATSU patent followed in 1994. Adoption in US clinical settings accelerated through the 2010s as research output expanded.",
    },
    {
      stat: "12,642",
      title: "Sessions in the largest published safety survey",
      body: "Adverse event rates comparable to or lower than standard resistance training, when applied with screening and pressure protocols.",
    },
    {
      stat: "30%",
      title: "Of one-rep max produces heavy-lifting strength gains",
      body: "Published trials demonstrate hypertrophy and strength adaptations at 20-40% 1RM under restriction that match traditional 70-80% 1RM training.",
    },
  ],
  closing:
    "Mayo Clinic, Cleveland Clinic, Northwestern Medicine, and US Special Operations Command all use BFR. The American Physical Therapy Association recognizes BFR within PT scope. The National Athletic Trainers Association approves BFR for athletic trainers.",
} as const;

// Who It's For — three audience identification cards. NOT cert selling.
// Body lines describe what each audience applies BFR to, not what the
// curriculum covers. License-scope line tells the reader "this is in
// scope for your credential" as identification proof, not as a CEU sell.
export const HOME_AUDIENCES = [
  {
    audience: "Physical Therapists",
    eyebrow: "For PTs",
    body: "Apply BFR to post-op loading, ACL rehab, rotator cuff, the total knee at month four, and the geriatric population whose joints can't tolerate heavy resistance.",
    scopeLine: "BFR is within PT scope of practice per APTA",
    href: "/for/physical-therapists",
    comingSoon: false,
  },
  {
    audience: "Athletic Trainers",
    eyebrow: "For ATs",
    body: "Apply BFR to in-season maintenance, sideline-friendly recovery, post-injury return-to-sport, and the athlete who can't load heavy in-season but still needs to maintain strength.",
    scopeLine: "BFR is approved for ATs per NATA",
    href: "/for/athletic-trainers",
    comingSoon: false,
  },
  {
    audience: "Strength & Conditioning Coaches",
    eyebrow: "For S&C",
    body: "Apply BFR to in-season hypertrophy at low loads, ischemic preconditioning, and the athlete whose schedule won't allow heavy training but who still needs to progress.",
    scopeLine: "Performance applications across rehab and S&C settings",
    href: "/for/strength-coaches",
    comingSoon: false,
  },
] as const;

// "Train Your Team" self-ID band (spec §4.3, Phase 4). A wayfinding POINTER that
// sells the team IDEA and routes to /train-your-team. Permitted under brand-guide
// Principle 6 because it carries NO offer mechanics. HARD scope gate (blocks the
// build): NO price, NO in-person-vs-virtual comparison, NO CEU stack, NO offer
// stack, NO booking embed, NO qualify form. Idea and link only. The CTA uses an
// exploratory verb ("See how...") for Stage-2 traffic, never "Book"/"Get started".
export const HOME_TRAIN_YOUR_TEAM = {
  eyebrow: "For clinic owners and directors",
  headline: "Train the clinic, not the clinician",
  highlight: "not the clinician",
  body:
    "Most BFR training certifies one therapist at a time. This brings the workshop to your floor and gets your whole team to one protocol, so BFR becomes a service the clinic delivers, not a thing one person knows.",
  ctaLabel: "See how team training works",
  href: "/train-your-team",
} as const;

// Phase 4 (2026-05-13): brand-hub team strip replacing the old
// HomeInstructor section. Renders ABOUT_TEAM.members + mascot (single
// source of truth). Card density is tighter than /about's AboutTeam:
// no bio paragraph, just photo + role + name + credentials + link.
// Mascot card links to /about. 2026-05-15: roster trimmed to 3 humans
// + mascot after Nick removed Licameli + Thoelen; intro + grid updated
// to match the new count (4 cards render lg:grid-cols-4, one clean row).
export const HOME_TEAM = {
  eyebrow: "The team",
  headline: "Built by clinicians who teach what they practice",
  intro:
    "A small team of clinicians, educators, and operators behind The BFR Pros. The teaching is Dr. Rolnick's work; everyone here makes it ship.",
} as const;

// Instructor — brief Belief 5 (research source) installation. Names
// Dr. Rolnick by the specific publication count, never a superlative
// (Forbidden Claims in brand-guide.md).
// (Retired 2026-05-13 — see HOME_TEAM above. Const retained for now in
// case a future cert-page strip wants the same headline rhythm.)
export const HOME_INSTRUCTOR = {
  eyebrow: "Your instructors",
  headline: "Learn from the source",
  intro:
    "Dr. Nicholas Rolnick has authored 74 peer-reviewed BFR publications and maintains an active clinical practice in Manhattan. Dr. Nicholas Licameli, the co-instructor, bridges rehab-side BFR programming and athletic performance applications.",
  ctaLabel: "Read the instructor profile",
  ctaHref: "/about/nicholas-rolnick",
  ctaComingSoon: false,
} as const;

// Phase 4 (2026-05-13): brand-hub content discovery strips. Show the
// 3 most-recent podcast episodes and the 3 newest blog posts, each with
// a "see all" CTA to the full page. Homepage stays Stage-2-friendly —
// these are brand-richness signals, not cert sells. Per Principle 6,
// these sections handle "Is this brand serious about teaching?" without
// selling the cert.
export const HOME_RECENT_EPISODES = {
  eyebrow: "Latest from the podcast",
  headline: "BFR Better-For-Results, hosted by Dr. Rolnick",
  intro:
    "Long-form conversations with researchers, clinicians, and athletes pushing BFR forward. Three most recent episodes below.",
  ctaLabel: "See all episodes",
  ctaHref: "/podcast",
} as const;

export const HOME_RECENT_BLOG = {
  eyebrow: "From the blog",
  headline: "Clinical writing on BFR, by the team that teaches it",
  intro:
    "Research breakdowns, programming notes, and case-led commentary. Three newest posts below.",
  ctaLabel: "See all posts",
  ctaHref: "/blog",
} as const;

// Phase 4 (2026-05-13): homepage media-cluster preview. One card from
// each of the three /press buckets — most-recent personal media feature,
// the marquee long-form interview, and the marquee podcast guest spot.
// Single soft link to /press for the full inventory.
export const HOME_RECENT_MEDIA = {
  eyebrow: "Where Nick has shown up",
  headline: "Press features, interviews, and podcasts",
  intro:
    "A sample from the personal-press catalog. The full inventory of mainstream features, on-camera interviews, and podcast appearances lives on the press page.",
  ctaLabel: "See where Nick has shown up",
  ctaHref: "/press",
} as const;

// Final CTA — the homepage's ONE soft gateway to /get-certified. Per
// Principle 6 in brand-guide.md, the homepage does not sell the cert.
// This block is the single exit point: it tells the convinced visitor
// where to go next without selling the offer. Pricing, guarantee,
// bonuses, and module breakdown all live at /get-certified.
export const HOME_FINAL_CTA = {
  eyebrow: "The next step",
  headline: "Ready to apply BFR yourself?",
  highlight: "apply BFR yourself",
  body:
    "The Complete BFR Certification teaches the protocols, screening, and pressure science. Taught by Dr. Nicholas Rolnick, equipment-agnostic, online and self-paced.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/certification",
} as const;
