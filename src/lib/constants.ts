// Single source of truth for brand-locked values used across every page.
// If a value lives in CLAUDE.md, brand-guide.md, BUILD-BRIEF.md, or the dossier,
// it lives here too. Update in one place, change the whole site.

export const ENROLL_URL =
  "https://bfr-pros.teachable.com/purchase?product_id=4010083&affcode=626725_rzfv6exi";

// Checkout URL for the /certification campaign LP. Unified with ENROLL_URL on
// 2026-05-22: Pascal restructured the Teachable product, so every CTA site-wide
// now routes to the same direct-purchase link. Kept as a separate export so the
// campaign components don't need to be re-pointed; both resolve identically.
export const CERTIFICATION_ENROLL_URL =
  "https://bfr-pros.teachable.com/purchase?product_id=4010083&affcode=626725_rzfv6exi";

// Lead-capture POST endpoint (default `mailto:` so the static site works
// immediately without an external service). When MailerLite / GoHighLevel is
// wired (per BUILD-BRIEF email-tool decision), swap this to the real POST
// endpoint URL: LeadMagnetCapture on /get-certified handles both mailto: and
// http: transports. One-line swap, no other code changes needed. (The /contact
// form that previously consumed this was removed 2026-06-06; /contact is now
// phone + email only.)
export const CONTACT_FORM_ENDPOINT = "mailto:nick@thebfrpros.com";

// ---- /consulting (1:1 clinical mentorship) --------------------------------
// New offer (2026-06-06): Dr. Rolnick sells one-on-one BFR case-review
// sessions to individual clinicians (PT / AT / S&C) at an hourly rate. Hourly
// only for v1; packages can be added later. The rate lives here as the single
// source of truth (schema.ts + the budget question read it); display strings
// like "$275 an hour" are composed in src/content/consulting.ts.
export const CONSULTING = {
  hourlyRate: 275,
  currency: "USD",
  currencySymbol: "$",
} as const;

// Where the /consulting qualification form posts its answers. Wired to the
// site's own API route, which persists each submission to Supabase
// (consulting_leads, via the anon key + INSERT-only RLS policy, so saving needs
// NO env setup) and best-effort emails Nick if RESEND_API_KEY is set. The form's
// submit handler treats any non-`mailto:` value as a JSON POST, so this stays a
// one-line swap (back to a `mailto:` or out to a CRM/GHL endpoint) if ever needed.
export const CONSULTING_FORM_ENDPOINT = "/api/consulting";

// The BFR Pros Cal.com booking link for 1:1 consulting (Pascal-provided
// 2026-06-06, live). Two uses: (1) the hero "Book a call" CTA + the booking-step
// fallback button link to CONSULTING_CAL_URL in a new tab; (2) the ConsultingForm
// booking step renders Cal.com's official inline embed using CONSULTING_CAL_LINK
// (the cal.com slug; embed namespace "consult"). Full embed snippet + setup notes
// archived at "Agency/Clients/The BFR Pros/Consulting-Integrations-Setup.md".
export const CONSULTING_CAL_URL = "https://cal.com/thebfrpros/consult";
export const CONSULTING_CAL_LINK = "thebfrpros/consult";

// ---- /train-your-team (clinic team-training lane) -------------------------
// New secondary offer lane (2026-06, Phase 4): Dr. Rolnick trains a clinic's
// WHOLE team to one BFR protocol in a single engagement. Two flat-priced
// offers. The structured numbers live here (single source of truth: the offer
// cards + buildTeamTrainingSchemaGraph read them); display prose is composed in
// src/content/team-training.ts.
//
// presentationOrder is LOCKED (spec §5.3 + feedback_bonus_sequencing): each
// offer card renders core -> price -> bonus -> ceuTotal, NEVER the bonus before
// the price. The card component iterates this array so the order can't drift.
// CEU math is honest: in-person 13.5 = 8 workshop + 5.5 course; virtual 5.5 is
// the course alone (the 4 live hours are NOT separately CEU-filed). perSeatAnchor
// is the individual professionalseminars.com/bfr workshop, used ONLY as a
// per-seat price anchor, never as "the same workshop" (spec §9.3.2 / §9.3.6).
export const TEAM_TRAINING = {
  currency: "USD",
  currencySymbol: "$",
  teamCapacity: 30, // "up to 30" is a capacity fact, NOT scarcity (spec §9.1)
  presentationOrder: ["core", "price", "bonus", "ceuTotal"] as const,
  courseModules: 13,
  courseCeu: 5.5,
  perSeatAnchor: 699,
  offers: {
    inPerson: {
      id: "in-person",
      name: "In-Person Workshop",
      price: 11000,
      priceDisplay: "$11,000",
      liveHours: 8,
      ceuTotal: 13.5,
      ceuWorkshop: 8,
      ceuCourse: 5.5,
    },
    virtual: {
      id: "virtual",
      name: "Live Virtual Training",
      price: 5000,
      priceDisplay: "$5,000",
      liveHours: 4,
      ceuTotal: 5.5,
      ceuCourse: 5.5,
    },
  },
} as const;

// Where the /train-your-team qualify form posts its answers. Wired to the site's
// own API route (POST /api/team-training -> Supabase clinic_inquiries via the
// anon key + INSERT-only RLS, so saving needs NO env setup; best-effort emails
// Nick if RESEND_API_KEY is set). Mirrors CONSULTING_FORM_ENDPOINT.
export const TEAM_TRAINING_FORM_ENDPOINT = "/api/team-training";

// The team-training Cal.com booking link. PASCAL CREATES THIS EVENT TYPE and
// supplies the slug (spec §6.5, open item §G.4); the suggested slug is
// thebfrpros/team-training (used here as the placeholder). The form's qualified
// + champion branches render Cal.com's official inline embed using
// TEAM_TRAINING_CAL_LINK (embed namespace "team-training"); the fallback link
// uses TEAM_TRAINING_CAL_URL. No on-page copy depends on the URL.
export const TEAM_TRAINING_CAL_URL = "https://cal.com/thebfrpros/team-training";
export const TEAM_TRAINING_CAL_LINK = "thebfrpros/team-training";

// Supabase REST config for the /consulting form (POST /api/consulting writes to
// the consulting_leads table). The anon (publishable) key is safe to commit and
// expose: it is already public (used in other Sterzik Solutions apps), and the
// consulting_leads table is protected by RLS with an INSERT-only policy for anon
// (the public can submit but cannot read or modify ANY data; only the
// service_role, used from the Supabase dashboard, can read submissions). So the
// form saves with NO env setup. To harden later, set SUPABASE_SERVICE_ROLE_KEY
// (and optionally SUPABASE_URL) in the deploy env; the route prefers those if
// present. Project: Sterzik Solutions (brvebfxaexxjghvwyidy).
export const SUPABASE_URL = "https://brvebfxaexxjghvwyidy.supabase.co";
export const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJydmViZnhhZXh4amdodnd5aWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjc5MjcsImV4cCI6MjA4ODc0MzkyN30.PJmaphJ1QDjKTwihIjnGKQf5pTfPFGj2f5EGatzwbqs";

// GA4 Measurement ID. Wired into the app via @next/third-parties/google in
// src/app/layout.tsx. Kept here (not an env var) so the live tag is committed,
// discoverable, and a one-line swap if the property ever changes.
export const GA_MEASUREMENT_ID = "G-XJX750B0KW";

export const SITE = {
  domain: "thebfrpros.com",
  origin: "https://thebfrpros.com",
  brandName: "The BFR Pros",
  legalName: "The BFR Pros",
  phone: "+1-914-400-3650",
  phoneDisplay: "1-914-400-3650",
  contactEmail: "nick@thebfrpros.com",
  city: "New York",
  region: "NY",
  country: "US",
  social: {
    instagram: "https://www.instagram.com/thebfrpros",
    facebook: "https://www.facebook.com/thebfrpros/",
    youtube: "https://www.youtube.com/@The-BFR-Pros",
    tiktok: "https://www.tiktok.com/@thebfrpros",
    twitter: "https://x.com/thebfrpros",
  },
  // The same Cloudflare-fronted Vercel project serves the homepage at / and the
  // canonical /get-certified certification page. The Phase 1A v1/v2 concept
  // variants were retired 2026-05-17 and 301 to /get-certified
  // (src/middleware.ts); the internal /preview review index was deleted and
  // now 404s (no SEO value, was noindex).
  routes: {
    home: "/",
    getCertified: "/certification",
  },
} as const;

export const STATS = {
  publications: "74",
  publicationsExact: 74,
  ceus: "11.75",
  ceusExact: 11.75,
  modules: "37",
  modulesExact: 37,
  reviewCount: 767,
  ratingValue: 4.8,
  clinicsTrusted: "100+",
  certifiedPractitioners: "1,467+",
  practitionersExact: 1467,
  refundsToDate: 1,
  mediaOutlets: "14",
  yearsInClinic: "10",
  socialFollowers: "42K+",
} as const;

// §N.13 Strategy A + Pascal-2026-05-08 v6: 11 bonuses at $800 (excluding the
// cuff-discount savings line item) + 4 courses at $654 = $1,454 advertised,
// save $1,005 at $449 sale price. Plus "up to $640 in cuff discount savings"
// called out separately. (CEU application moved from Bonus 12 → core offer.)
export const PRICING = {
  bundlePrice: 449,
  bundleValue: 1454,
  savings: 1005,
  cuffSavingsUpTo: 640,
  currency: "USD",
  currencySymbol: "$",
  guaranteeDays: 30,
  contentHours: "11.75",
  completionPace: "Do it in a weekend or take 4 weeks",
} as const;

export const ROLNICK = {
  fullName: "Dr. Nicholas Rolnick",
  shortName: "Dr. Rolnick",
  credentials: "PT, DPT, MS, CSCS",
  tagline: "The Human Performance Mechanic",
  city: "Manhattan, New York",
  alumniOf: [
    { name: "Columbia University", role: "Doctor of Physical Therapy (honors, 2017)" },
    { name: "American University", role: "MS, Health Promotion Management (2014)" },
    { name: "Franklin & Marshall College", role: "BA, Biology (2010)" },
  ],
  // Active university appointment (Lehman 2019-2025 and Concordia 2017-2021 are now past;
  // see brand-guide.md Source-of-Truth for Rolnick Claims and Research/rolnick-cv-facts.md).
  affiliations: [
    "Adjunct Assistant Professor of Physical Therapy, New York Medical College (Valhalla, NY, since Jul 2021)",
    "Topic Editor, Frontiers in Physiology and Frontiers in Sports and Active Living (Volumes I + II, 2024 – 2026)",
    "Peer reviewer for 26 journals",
    "NASM Chapter 12 author (Warm-up, Recovery, Injury Prevention)",
    "Founder of The BFR Pros, LLC (since June 2018)",
  ],
  publicationsLine: `${STATS.publications} peer-reviewed BFR publications`,
  // mediaList is the MODALITY-level set surfaced alongside FEATURED_IN logos. Nick-personal
  // media features live in ROLNICK_PERSONAL_MEDIA below per brand-guide.md modality-vs-brand
  // discipline (gotcha 71/72).
  mediaList: ["CNN", "Wall Street Journal", "Forbes", "ESPN", "Men's Health", "GQ", "PubMed", "NSCA"],
} as const;

// Nick-personal media features (BRAND-level claims; belong on /about/nicholas-rolnick
// and /press, NEVER on the homepage FEATURED_IN modality bar). Source-of-truth:
// Research/rolnick-cv-facts.md.
//
// Phase 4 (2026-05-14): logoSrc + url fields per entry. Logos live in
// /public/images/featured/. Article URLs verified live; broken/dead URLs
// carry `url: null` so the card renders without the Read-article CTA.
//
// 2026-05-14 update (Pascal):
//   - Added CNET, AskMen, Eat This Not That article URLs (Pascal supplied).
//   - Removed both WELL+GOOD URLs: the wellandgood.com domain was acquired
//     by theskimm and every old article path 301s to theskimm.com homepage.
//   - Removed Scarsdale Inquirer URL: the Scarsdale News outlet shut down.
//   - Added BLOOM-WFLA-TV, Zenger News, WESTFAIROnline logos (new WebP
//     files from Pascal's _Inbox/2).
//
// 2026-05-15 update (Pascal): NY Post, The Scarsdale Inquirer, and
// FOX 32 Chicago logos supplied and wired (ny-post.png /
// scarsdale-inquirer.png / fox-32-chicago.png in /public/images/featured/).
// Current logo coverage: 18 of 18 entries.
// Current URL coverage: 14 of 18 entries (still missing: NY Post, both
// WELL+GOOD entries, Scarsdale Inquirer).
export type RolnickMediaEntry = {
  outlet: string;
  headline: string;
  date: string;
  logoSrc: string | null;
  url: string | null;
};

export const ROLNICK_PERSONAL_MEDIA: ReadonlyArray<RolnickMediaEntry> = [
  { outlet: "New York Post", headline: "Use the talk test to lower your risk of having a heart attack like Hulk Hogan", date: "Aug 9, 2025", logoSrc: "/images/featured/ny-post.png", url: null },
  { outlet: "CNN Life But Better", headline: "Increase your chances of living longer with 14 gym-free ways to sneak more movement in your day", date: "Jul 31, 2025", logoSrc: "/images/featured/cnn.png", url: "https://edition.cnn.com/2025/07/31/health/ways-to-move-more-exercise-wellness" },
  { outlet: "Men's Health", headline: "What Blood Flow Restriction Training Can Do for Your Workouts", date: "Apr 9, 2025", logoSrc: "/images/featured/mens-health.jpg", url: "https://www.menshealth.com/fitness/a27285291/blood-flow-restriction-training/" },
  { outlet: "WELL + GOOD", headline: "3 Common Habits a Human Performance Mechanic Says Can Lead to Back Pain", date: "Jan 12, 2023", logoSrc: "/images/featured/well-good.jpg", url: null },
  { outlet: "BLOOM-WFLA-TV", headline: "Blood Flow Restriction Training", date: "Aug 24, 2022", logoSrc: "/images/featured/bloom-wfla.webp", url: "https://www.wfla.com/bloom/blood-flow-restriction-training/" },
  { outlet: "Zenger News", headline: '"The Human Performance Mechanic" Explains Why Exercise Is Sometimes The Best Medicine', date: "Aug 15, 2022", logoSrc: "/images/featured/zenger.webp", url: "https://www.zenger.news/2022/08/15/the-human-performance-mechanic-explains-why-exercise-is-sometimes-the-best-medicine/" },
  { outlet: "The Scarsdale Inquirer", headline: "Scarsdale Grad Rolnick Thrives As Physical Therapist", date: "Aug 12, 2022", logoSrc: "/images/featured/scarsdale-inquirer.png", url: null },
  { outlet: "WESTFAIROnline", headline: "A Physical Therapist's Antidote to Anxiety", date: "Aug 9, 2022", logoSrc: "/images/featured/westfair.webp", url: "https://westfaironline.com/health-care/a-physical-therapists-antidote-to-anxiety/" },
  { outlet: "FOX 32 Chicago", headline: "Blood Flow Restriction Training Gaining Steam In Fitness Community", date: "Jul 29, 2022", logoSrc: "/images/featured/fox-32-chicago.png", url: "https://www.fox32chicago.com/video/1098800" },
  { outlet: "CNET", headline: "Blood Flow Restriction Training Gets You Stronger Without the Heavy Weights", date: "Jun 8, 2022", logoSrc: "/images/featured/cnet.jpg", url: "https://www.cnet.com/health/fitness/get-stronger-with-blood-flow-restriction-training/" },
  { outlet: "Eat This, Not That!", headline: "10 Ways to Burn More Calories During Every Walk", date: "Nov 4, 2021", logoSrc: "/images/featured/eat-this-not-that.jpg", url: "https://www.eatthis.com/news-burn-more-calories-walking/" },
  { outlet: "Vitamin Shop WHAT'S GOOD", headline: "6 Ways To Support And Strengthen Your Knees", date: "Oct 27, 2021", logoSrc: "/images/featured/whats-good.webp", url: "https://whatsgood.vitaminshoppe.com/ways-to-strengthen-your-knees/" },
  { outlet: "AskMen", headline: "Partial Reps May Be the Ultimate Key to Building the Muscle You Want", date: "Sep 21, 2021", logoSrc: "/images/featured/askmen.jpg", url: "https://www.askmen.com/fitness/workout/partial-reps-may-be-the-ultimate-key-to-building-the-muscle-you-want.html" },
  { outlet: "CNN Health", headline: "Why kaatsu, a fitness trend spotted at the Games, isn't just for Olympians", date: "Jul 31, 2021", logoSrc: "/images/featured/cnn-health.jpg", url: "https://www.cnn.com/2021/07/31/health/blood-flow-restriction-training-kaatsu-olympics-wellness" },
  { outlet: "UPDOC Media", headline: "Top 40 Physical Therapy Influencers of 2020", date: "Jan 4, 2021", logoSrc: "/images/featured/updoc-media.webp", url: "https://www.updocmedia.com/top40-influencers-2020/" },
  { outlet: "Movement Guides", headline: "The Top 5 Strength and Conditioning Coach Instagram Accounts to Follow", date: "Jan 1, 2021", logoSrc: "/images/featured/movement-guides.webp", url: "https://movementguides.com/top-5-strength-coach-instagram-accounts-to-follow-2021/" },
  { outlet: "WebPT", headline: "12 Physical Therapists to Watch in 2021", date: "Dec 31, 2020", logoSrc: "/images/featured/webpt.jpg", url: "https://www.webpt.com/blog/12-physical-therapists-to-watch-in-2021" },
  { outlet: "WELL + GOOD", headline: "Thanks to Blood Flow Restriction Training, Injuries No Longer Have to Cramp Your Workout Progress", date: "Feb 27, 2020", logoSrc: "/images/featured/well-good.jpg", url: null },
] as const;

export const LICAMELI = {
  fullName: "Dr. Nicholas Licameli",
  shortName: "Dr. Licameli",
  credentials: "PT, DPT",
  tagline: "Director of Outpatient Therapy + Injury Reduction Specialist, 3D Muscle Journey",
} as const;

// CEU approvals restructured per §K.4: course-specific approvals (the COURSE itself is
// approved for credit) vs. profession-scope statements (the modality of BFR is in scope
// per these bodies). Two different claims; the new section presents them in two blocks.
export const CEU_COURSE_APPROVALS = [
  {
    body: "Board of Certification (BOC)",
    audience: "Athletic Trainers",
    detail: "Approved Provider AP# P10226",
    note: "Category A CEUs across all four courses",
    logoSrc: "/images/ceus/boc.png",
  },
  {
    body: "New York State PT Board",
    audience: "Physical Therapists",
    detail: "Approved December 12, 2024 through December 11, 2027",
    note: "Covers Optimize Rehab Outcomes, Accelerate Performance & Recovery, Clinical Rounds, What's New 2021",
    logoSrc: "/images/ceus/apta-ny.png",
  },
  {
    body: "New Jersey State PT Board",
    audience: "Physical Therapists",
    detail: "Approved through January 31, 2026",
    note: "Approval IDs: 2207-114 (5.5 PT CEUs), 2206-14 (2.25), 2210-53 (2)",
    logoSrc: null,
  },
] as const;

export const CEU_PROFESSION_SCOPE = [
  {
    body: "American Physical Therapy Association (APTA)",
    detail: "BFR is within the PT scope of practice. APTA does not approve courses; the scope statement is what makes the course practice-relevant for PTs.",
  },
  {
    body: "National Athletic Trainers Association (NATA)",
    detail: "BFR is approved for use by Athletic Trainers within the NATA scope.",
  },
] as const;

// 35 reciprocal states (per state regulation, NY/NJ approval is generally accepted).
export const CEU_RECIPROCAL_STATES = [
  "AL", "AK", "AR", "CO", "CT", "DE", "GA", "HI", "ID", "IN", "IA", "KS",
  "KY", "ME", "MA", "MI", "MO", "MT", "NE", "NH", "NC", "ND", "OR", "PA",
  "RI", "SC", "SD", "TN", "UT", "VT", "VA", "VI", "WA", "WI", "WY",
] as const;

// 13 states that require individual filing.
export const CEU_INDIVIDUAL_FILING_STATES = [
  "AZ", "DC", "MD", "MS", "NM", "CA", "LA", "IL", "MN", "NV", "OH", "TX", "WV",
] as const;

// Legacy export kept for any consumers outside the CEU section. Do not use in new code.
export const CEU_APPROVALS = [
  { body: "Board of Certification (BOC)", detail: "Approved Provider AP# P10226", hasLogo: true, logoSrc: "/images/badges/boc-approved.png" },
  { body: "American Physical Therapy Association", detail: "BFR within PT scope of practice", hasLogo: false },
  { body: "New York State PT Board", detail: "Approved through December 11, 2027", hasLogo: true, logoSrc: "/images/badges/apta-ny.png" },
  { body: "New Jersey PT Board", detail: "Approved through January 31, 2026", hasLogo: false },
  { body: "National Athletic Trainers Association", detail: "BFR approved for ATs", hasLogo: false },
] as const;

// 17 publication logos for the infinite marquee. Order is intentional: highest
// recognition first so the loop opens strong (CNN, WSJ, Forbes, ESPN), then mid-tier
// editorial (Men's Health, GQ), then research/credentialing (PubMed, NSCA), then
// vertical media (CNN Health, Well+Good, AskMen, etc.).
export const FEATURED_IN = [
  { name: "CNN", src: "/images/featured/cnn.png", w: 120, h: 56 },
  { name: "The Wall Street Journal", src: "/images/featured/wsj.png", w: 180, h: 56 },
  { name: "Forbes", src: "/images/featured/forbes.png", w: 130, h: 56 },
  { name: "ESPN", src: "/images/featured/espn.png", w: 120, h: 56 },
  { name: "Men's Health", src: "/images/featured/mens-health.jpg", w: 140, h: 56 },
  { name: "GQ", src: "/images/featured/gq.png", w: 90, h: 56 },
  { name: "PubMed", src: "/images/featured/pubmed.png", w: 140, h: 56 },
  { name: "NSCA", src: "/images/featured/nsca.webp", w: 120, h: 56 },
  { name: "CNN Health", src: "/images/featured/cnn-health.jpg", w: 130, h: 56 },
  { name: "Well+Good", src: "/images/featured/well-good.jpg", w: 130, h: 56 },
  { name: "AskMen", src: "/images/featured/askmen.jpg", w: 130, h: 56 },
  { name: "InsideHook", src: "/images/featured/insidehook.png", w: 140, h: 56 },
  { name: "CNET", src: "/images/featured/cnet.jpg", w: 110, h: 56 },
  { name: "Eat This, Not That!", src: "/images/featured/eat-this-not-that.jpg", w: 150, h: 56 },
  { name: "WebPT", src: "/images/featured/webpt.jpg", w: 130, h: 56 },
  { name: "Military Times", src: "/images/featured/military-times.webp", w: 160, h: 56 },
  { name: "NFL", src: "/images/featured/nfl.png", w: 90, h: 56 },
] as const;

// Gumlet video embeds. Source of truth: Assets/Videos/video-embeds.md.
// Migrated off VEED.io on 2026-06-26 (Veed was cancelled; every Veed embed
// went dead and was re-uploaded to Gumlet). gumletEmbed() builds the player
// URL from a Gumlet asset ID. preload=false keeps the click-to-play poster
// facade cheap; the facade (shared VideoPoster + the testimonial cards) swaps
// autoplay=false -> autoplay=true when it mounts the iframe, because the click
// is the required user gesture. disable_player_controls=false keeps the native
// player controls visible.
export const gumletEmbed = (id: string, autoplay = false) =>
  `https://play.gumlet.io/embed/${id}?preload=false&autoplay=${autoplay}&loop=false&disable_player_controls=false`;

export const VIDEOS = {
  coursePackagePromo: gumletEmbed("6a3d96608a92d68f436bd585"),
  // Module 0 was NOT in Pascal's Gumlet upload batch, so it has no live embed
  // yet. Kept null so ModulePreview hides its embed instead of shipping the
  // dead Veed URL; restore by setting gumletEmbed("<id>") once Pascal supplies
  // the ID.
  module0Preview: null as string | null, // TODO: Gumlet ID pending
  whatIsBFR: gumletEmbed("6a3dae193583eb1726d55270"),
  // Homepage hero video: Nick covering common questions about BFR. Stage-2
  // friendly (no cert pitch). Used in HomeHero.tsx + CertHero.tsx.
  homepageHero: gumletEmbed("6a3d96b13583eb1726d39620"),
  course1Promo: gumletEmbed("6a3db17e79d93c513c348694"),
  course2Promo: gumletEmbed("6a3db1c63583eb1726d586be"),
  course3Promo: gumletEmbed("6a3db1f83583eb1726d5896c"),
  course4Promo: gumletEmbed("6a3db21e3583eb1726d58b88"),
} as const;

// Arsenal: uploaded to Gumlet and ready, but intentionally NOT placed on any
// page yet (source of truth: Assets/Videos/video-embeds.md "Arsenal"). Reach
// for these when a home is decided; wiring them is a separate, future task.
export const VIDEOS_ARSENAL = {
  // Who is Dr. Nicholas Rolnick (The Human Performance Mechanic). 16/9.
  whoIsRolnick: gumletEmbed("69ff69c8d4e28d9d1c9ad2c8"),
  // How to perform BFR Training, putting on the cuff. 16/9.
  howToCuff: gumletEmbed("69ff69f0347cfac89d7470ba"),
  // Dhimant Indrayan testimonial (House of Hypertrophy YouTuber, off the
  // PT/AT avatar). Was the legacy VIDEOS.testimonial / VIDEO_TESTIMONIALS[4]
  // slot on Veed; parked here unwired per the migration plan. 16/9.
  dhimantTestimonial: gumletEmbed("6a3e734079d93c513c477c9e"),
} as const;

// §Pascal-2026-05-08: BFR-in-action exercise demonstration clips. Used in
// VisualProofSection — replaces the 4 static photos with 6 short Gumlet embeds
// that show a real BFR cuff in motion across common compound lifts. Each clip
// keeps its poster + animated-loop facade; only the embed src moved to Gumlet
// (2026-06-26 migration). The Veed color/watermark/sharing params are dropped
// (Veed-only).
export const ACTION_VIDEOS = [
  { title: "Romanian Deadlift vs Regular Deadlift", src: gumletEmbed("6a3db7b879d93c513c34e3bb"), posterSrc: "/images/posters/action-romanian-deadlift.jpg", animated: { webm: "/videos/thumbnails/action-romanian-deadlift.webm", mp4: "/videos/thumbnails/action-romanian-deadlift.mp4" } },
  { title: "Leg Press with BFR", src: gumletEmbed("6a3db6aa3583eb1726d5d0b0"), posterSrc: "/images/posters/action-leg-press.jpg", animated: { webm: "/videos/thumbnails/action-leg-press.webm", mp4: "/videos/thumbnails/action-leg-press.mp4" } },
  { title: "Leg Curl with BFR", src: gumletEmbed("6a3db55a3583eb1726d5bc42"), posterSrc: "/images/posters/action-leg-curl.jpg", animated: { webm: "/videos/thumbnails/action-leg-curl.webm", mp4: "/videos/thumbnails/action-leg-curl.mp4" } },
  { title: "Split Squat with BFR", src: gumletEmbed("6a3db8e779d93c513c34f291"), posterSrc: "/images/posters/action-split-squat.jpg", animated: { webm: "/videos/thumbnails/action-split-squat.webm", mp4: "/videos/thumbnails/action-split-squat.mp4" } },
  { title: "Heel Elevated High-Bar Squat with BFR", src: gumletEmbed("6a3db27479d93c513c349500"), posterSrc: "/images/posters/action-high-bar-squat.jpg", animated: { webm: "/videos/thumbnails/action-high-bar-squat.webm", mp4: "/videos/thumbnails/action-high-bar-squat.mp4" } },
  { title: "Hip Thrust with BFR", src: gumletEmbed("6a3db29c3583eb1726d59365"), posterSrc: "/images/posters/action-hip-thrust.jpg", animated: { webm: "/videos/thumbnails/action-hip-thrust.webm", mp4: "/videos/thumbnails/action-hip-thrust.mp4" } },
] as const;

// BFR_DEMAND_TREND was a hand-typed approximation of Google Trends data for an SVG
// line chart. Replaced 2026-05-07 by the actual screenshot at public/images/demand-trend.png
// (rendered by DemandGraph.tsx). To refresh: drop a new export from trends.google.com
// over that file. The const is no longer used and was removed to keep one source of truth.

export const PARTNERS = [
  { name: "Ivy Rehab Network", src: "/images/partners/ivy-rehab.jpg", w: 160, h: 56 },
  { name: "Kinesport", src: "/images/partners/kinesport.png", w: 160, h: 56 },
  { name: "Team ACL", src: "/images/partners/team-acl.png", w: 140, h: 56 },
  { name: "AccessPT", src: "/images/partners/access-pt.png", w: 140, h: 56 },
  { name: "Professional Physical Therapy", src: "/images/partners/professional-pt.png", w: 180, h: 56 },
] as const;

// 6 peer-reviewed journals where Dr. Rolnick has published. Sourced from
// Assets/Social Proof/Published Research/. Rendered as a colored RTL marquee
// (no grayscale, no hover) with each logo wrapped in an outbound link directly
// to the Rolnick article in that journal (Pascal-supplied 2026-05-08, full list
// at Research/dr-rolnick-publications-and-appearances.md). Still used on
// /about/nicholas-rolnick (RolnickJournals marquee). On /research the marquee
// has been replaced by ROLNICK_JOURNAL_CARDS below (Phase 2b 2026-05-13).
export const ROLNICK_PUBLICATIONS = [
  { name: "Frontiers in Physiology, BFR exercise research", src: "/images/research/frontiers.jpg", w: 220, h: 80, href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2022.808622/full" },
  { name: "Medicine & Science in Sports & Exercise", src: "/images/research/medicine-science-sports.jpg", w: 240, h: 80, href: "https://journals.lww.com/acsm-msse/" },
  { name: "Sage Journals, BFR research and clinical outcomes", src: "/images/research/sage-journals.jpg", w: 220, h: 80, href: "https://journals.sagepub.com/doi/full/10.1177/15593258231173494" },
  { name: "ScienceDirect, BFR clinical applications", src: "/images/research/sciencedirect.jpg", w: 220, h: 80, href: "https://www.sciencedirect.com/science/article/abs/pii/S1466853X21000511" },
  { name: "Strength & Conditioning Journal, BFR during aerobic exercise", src: "/images/research/strength-conditioning-journal-1.jpg", w: 240, h: 80, href: "https://journals.lww.com/nsca-scj/Abstract/2020/10000/Can_Blood_Flow_Restriction_Used_During_Aerobic.5.aspx" },
  { name: "Strength & Conditioning Journal, BFR for the physique athlete", src: "/images/research/strength-conditioning-journal-2.jpg", w: 240, h: 80, href: "https://journals.lww.com/nsca-scj/Fulltext/2020/10000/Blood_Flow_Restriction_Training_and_the_Physique.4.aspx" },
] as const;

// Phase 2b (2026-05-13): journal cards for /research replacing the prior
// RTL marquee. Each card: journal name + Rolnick publication-count badge +
// short note + outbound link to a Rolnick article in that journal. Counts
// are conservative anchors based on the CV (Research/rolnick-cv-facts.md)
// — the full 74 trail extends across many more journals; these six are
// the heaviest-load anchors.
export const ROLNICK_JOURNAL_CARDS = [
  {
    name: "Frontiers in Physiology",
    count: "10+",
    note: "BFR device features, risk stratification, autoregulation, multi-chambered bladder design",
    href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2022.808622/full",
  },
  {
    name: "Frontiers in Sports and Active Living",
    count: "8+",
    note: "Methodological considerations, device features, hemophilia + BFR, cuff design comparisons",
    href: "https://www.frontiersin.org/journals/sports-and-active-living",
  },
  {
    name: "Strength and Conditioning Journal (NSCA)",
    count: "5+",
    note: "Physique athlete protocols, aerobic BFR, bodybuilding hypertrophy, narrative reviews",
    href: "https://journals.lww.com/nsca-scj/Fulltext/2020/10000/Blood_Flow_Restriction_Training_and_the_Physique.4.aspx",
  },
  {
    name: "British Journal of Sports Medicine",
    count: "2",
    note: "Co-first author on the BFR methods and apparatus position paper (2025)",
    href: "https://bjsm.bmj.com/content/early/2025/02/07/bjsports-2024-109365",
  },
  {
    name: "Scandinavian Journal of Medicine and Science in Sports",
    count: "1",
    note: "Low-intensity resistance + BFR systematic review on arterial stiffness",
    href: "https://onlinelibrary.wiley.com/doi/10.1111/sms.13902",
  },
  {
    name: "Sports Medicine and Health Science",
    count: "1",
    note: "BFR training in older adults: overview of systematic reviews",
    href: "https://doi.org/10.1016/j.smhs.2025.10.002",
  },
] as const;

// Phase 2b (2026-05-13): Dr. Rolnick's editorial roles at Frontiers,
// surfaced as its own section on /research. Source: CV § EDITORIAL
// CONTRIBUTIONS and Research/rolnick-cv-facts.md.
export const ROLNICK_TOPIC_EDITOR = {
  publisher: "Frontiers in Physiology and Frontiers in Sports and Active Living",
  collection:
    "Impact of Blood Flow Restriction Device Features and Methodological Considerations on Acute and Longitudinal Responses to Blood Flow Restricted Exercise",
  volumes: [
    { label: "Volume I", years: "2024 – 2025" },
    { label: "Volume II", years: "2025 – 2026" },
  ],
  alsoCommunityReviewer:
    "Community Reviewer (Editor), Rehabilitation for Musculoskeletal Conditions and Interventions for Rehabilitation, Frontiers in Sports and Active Living (2025)",
} as const;

// Phase 2b (2026-05-13): 26 named journals where Dr. Rolnick serves as peer
// reviewer. Order roughly mirrors the CV § PEER REVIEWER block, newest tier
// first. Verified against Research/rolnick-cv-facts.md.
export const ROLNICK_PEER_REVIEWER_JOURNALS = [
  "Frontiers in Sport and Active Living",
  "Journal of Fitness, Wellness and Human Performance",
  "Multiple Sclerosis and Related Disorders",
  "International Journal of Strength & Conditioning",
  "Annals of Medicine Elevate",
  "Scandinavian Journal of Medicine & Science in Sports",
  "PM&R: The Journal of Injury, Function and Rehabilitation",
  "International Journal of Sports Physiology & Performance",
  "German Journal of Exercise and Sport Research",
  "Journal of Sports Science",
  "Medicine and Science in Sport and Exercise",
  "Journal of Medicine, Surgery, and Public Health",
  "Physical Therapy in Sport",
  "Frontiers in Physiology",
  "Clinical Rehabilitation",
  "Journal of Sport and Health Science",
  "Biology of Sport",
  "Journal of Science and Medicine in Sport",
  "International Journal of Environmental and Public Health",
  "Scientific Reports",
  "European Journal of Sports Science",
  "BMC Sports Science, Medicine and Rehabilitation",
  "Sports Medicine - Open",
  "PeerJ",
  "Medical Hypotheses",
  "Journal of Strength & Conditioning Research",
  "Sports Health",
] as const;

// Featured peer-reviewed publications co-authored by Dr. Rolnick. Pulled
// verbatim from the live thebfrpros.com/published-research page (titles +
// abstracts) plus the source-of-truth URL list in
// Research/dr-rolnick-publications-and-appearances.md. Used on /research
// and /research/publications. Six papers are surfaced; the full 74
// publication body is represented by the journal marquee.
export const ROLNICK_FEATURED_PAPERS = [
  {
    title:
      "Blood Flow Restriction Training and the Physique Athlete: A Practical Research-Based Guide to Maximizing Muscle Size",
    journal: "Strength and Conditioning Journal (NSCA)",
    year: 2020,
    abstract:
      "Emerging evidence indicates that low-load blood flow restriction (BFR) training is an effective strategy to increase muscular adaptations. Yet, it remains questionable as to whether combining BFR with traditional resistance training can potentiate hypertrophic adaptations. This article provides an evidence-based review of current research on the topic, including underlying mechanisms of BFR training, and draws practical conclusions as to how BFR can be applied by physique athletes to optimize increases in muscle mass.",
    url: "https://journals.lww.com/nsca-scj/Fulltext/2020/10000/Blood_Flow_Restriction_Training_and_the_Physique.4.aspx",
    tags: ["hypertrophy", "physique"],
  },
  {
    title:
      "Can Blood Flow Restriction Used During Aerobic Training Enhance Body Composition in Physique Athletes?",
    journal: "Strength and Conditioning Journal (NSCA)",
    year: 2020,
    abstract:
      "Emerging evidence indicates low-load blood flow restriction (BFR) training is an effective strategy to increase muscular adaptations when performed during resistance training. Yet, it remains questionable as to whether combining BFR with traditional aerobic training can preserve or perhaps even potentiate hypertrophic adaptations. This article provides an evidence-based review of current research on the topic and draws practical conclusions as to how BFR can be applied by physique athletes to optimize increases in muscle mass.",
    url: "https://journals.lww.com/nsca-scj/Abstract/2020/10000/Can_Blood_Flow_Restriction_Used_During_Aerobic.5.aspx",
    tags: ["aerobic", "body composition"],
  },
  {
    title:
      "Low-intensity resistance exercise with blood flow restriction and arterial stiffness in humans: A systematic review",
    journal: "Scandinavian Journal of Medicine and Science in Sports",
    year: 2021,
    abstract:
      "Low-intensity resistance exercise with blood flow restriction is an emerging type of exercise recognition worldwide. This systematic review evaluated the effects of low-intensity resistance exercise performed with concurrent blood flow restriction (LIRE-BFR) on acute and chronic measures of arterial stiffness in humans.",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/sms.13902",
    tags: ["arterial stiffness", "systematic review"],
  },
  {
    title:
      "Perceived Barriers to Blood Flow Restriction Training",
    journal: "Frontiers in Rehabilitation Sciences",
    year: 2021,
    abstract:
      "There are likely some perceived barriers that practitioners must overcome to effectively implement this modality into practice. These barriers include determining BFR training pressures, access to appropriate BFR training technologies for relevant demographics based on the current evidence, a comprehensive and systematic approach to medical screening for safe practice, and strategies to mitigate excessive perceptual demands of BFR training to foster long-term compliance. This manuscript discusses each of these barriers and provides evidence-based strategies and direction to guide clinical practice and future research.",
    url: "https://www.frontiersin.org/articles/10.3389/fresc.2021.697082/full",
    tags: ["clinical implementation", "screening"],
  },
  {
    title:
      "Comparison of blood flow restriction devices and their effect on quadriceps muscle activation",
    journal: "Strength and Conditioning Journal (NSCA)",
    year: 2021,
    abstract:
      "Letter to the editor addressing the methodology and conclusions of a comparison study between blood flow restriction devices and their effect on quadriceps muscle activation during low-load resistance exercise.",
    url: null,
    tags: ["devices", "EMG"],
  },
  {
    title:
      "Letter on the effectiveness of blood-flow restricted resistance training in the musculoskeletal rehabilitation of patients with lower limb disorders",
    journal: "Letter to the editor on a systematic review and meta-analysis",
    year: 2021,
    abstract:
      "Letter to the editor addressing methodology, inclusion criteria, and clinical-implementation conclusions in a published systematic review and meta-analysis on the effectiveness of BFR-restricted resistance training in the musculoskeletal rehabilitation of patients with lower limb disorders.",
    url: null,
    tags: ["lower limb", "rehab"],
  },
] as const;

// The BFR Pros host their own podcast: "BFR Better-For-Results Podcast".
// Source: YouTube playlist of record
// https://www.youtube.com/playlist?list=PLXUxkOcM1cbuNd7KbJrPnYfsmUdD_ZEUi
// enumerated 2026-05-13. **20 published episodes** (the prior "gap at 11
// and 17" comment was wrong — both are published in the playlist:
//   Ep 11 = "Taking Breathwork Seriously with Inspiratory Muscle Training"
//   Ep 17 = "Challenges and Triumphs with Smart Tools Founder"
// Each entry now carries the YouTube videoId, taken from the playlist in
// playlist order. Titles stay in the brand-curated tight form; the more
// verbose YouTube titles live on YouTube. The page links the platform
// feeds plus inline-embeds each video by ID in EpisodeGrid.tsx.
export const BFR_PODCAST_PLATFORMS = [
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/de/podcast/bfr-better-for-results-podcast/id1726669945",
  },
  {
    name: "Spotify",
    href: "https://creators.spotify.com/pod/profile/betterforresultspodcast/episodes/Who-Is-The-Human-Performance-Mechanic---BFR-Better-For-Results-Podcast---Ep--01-e2e6hid",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/watch?v=cRvD7qKUFnQ&list=PLXUxkOcM1cbuNd7KbJrPnYfsmUdD_ZEUi",
  },
] as const;

export type BFRPodcastEpisode = {
  number: number;
  title: string;
  topic: string;
  youtubeId: string;
};

export const BFR_PODCAST_EPISODES: ReadonlyArray<BFRPodcastEpisode> = [
  { number: 1, title: "Who Is The Human Performance Mechanic?", topic: "Introduction", youtubeId: "cRvD7qKUFnQ" },
  { number: 2, title: "Kyle Ruth: CrossFit Performance", topic: "Performance", youtubeId: "YpdJz4W3csg" },
  { number: 3, title: "Jeremy Loenneke: Muscle Size & Strength", topic: "Hypertrophy science", youtubeId: "WdkaNFYDVc0" },
  { number: 4, title: "Tim Werner: Arterial Stiffness", topic: "Safety research", youtubeId: "0tJBL9FMhQU" },
  { number: 5, title: "Paul Carter: The Volume Debate", topic: "Training volume", youtubeId: "JNth7TPorSs" },
  { number: 6, title: "BFR Education & Device Selection", topic: "Practitioner education", youtubeId: "_6JvNlXZfxM" },
  { number: 7, title: "Nitric Oxide & NNOXX", topic: "Physiology", youtubeId: "1pztk3CwZ0g" },
  { number: 8, title: "The Lengthened-Partial Debate", topic: "Programming", youtubeId: "726gFJBKZ00" },
  { number: 9, title: "Lengthened Partials: Science & Social Media", topic: "Evidence translation", youtubeId: "2ziC_S31YJs" },
  { number: 10, title: "Bringing BFR To India", topic: "Global adoption", youtubeId: "2DwgcBoGuCg" },
  { number: 11, title: "Breathwork & Inspiratory Muscle Training", topic: "Breathwork", youtubeId: "1ouxgMYfiyE" },
  { number: 12, title: "Communicating Fitness, Art, & Social Media", topic: "Communication", youtubeId: "UdXL4JwaVIw" },
  { number: 13, title: "Optimizing Performance Monitoring", topic: "Performance", youtubeId: "wJzOpKuumR0" },
  { number: 14, title: "Principles Over Protocols", topic: "Coaching philosophy", youtubeId: "VAEkvcpqv4M" },
  { number: 15, title: "Repetition Schemes & Muscle Growth", topic: "Hypertrophy programming", youtubeId: "VBR3NCXMI7I" },
  { number: 16, title: "The Pressure-Load Continuum", topic: "BFR programming", youtubeId: "2Ksed6851Ds" },
  { number: 17, title: "Smart Tools Founder: Challenges and Triumphs", topic: "Industry conversation", youtubeId: "iByGg7jnn50" },
  { number: 18, title: "Auto-Regulation & BFR", topic: "Auto-regulation", youtubeId: "Ly_VnzhG_o0" },
  { number: 19, title: "Exploring Blood Flow Restriction", topic: "BFR fundamentals", youtubeId: "45Oq6sOchlo" },
  { number: 20, title: "PT Pet Peeves, Rehab BFR, & Social Media", topic: "Clinical practice", youtubeId: "t5GszFvFjVY" },
];

// Blog posts published on the live site at thebfrpros.com/bfr-blog/[slug].
// Per WEBSITE-PROJECT-ORCHESTRATOR Phase 3 + SITE-ARCHITECTURE §6 redirect
// plan, these will eventually live at thebfrpros.com/blog/[slug] on this
// new site (full content migrated). For now the /blog index lists each
// post and links OUT to the live URL — transition state until the
// migration happens. Titles pulled verbatim from the live /bfr-blog
// index on 2026-05-12.
export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  externalUrl: string;
};

const BLOG_BASE = "https://www.thebfrpros.com/bfr-blog";

export const BLOG_POSTS: ReadonlyArray<BlogPost> = [
  {
    slug: "methodological-concerns-future-bfr-research",
    title: "Important Methodological Concerns for the Future of BFR Research",
    category: "Research methodology",
    externalUrl: `${BLOG_BASE}/methodological-concerns-future-bfr-research`,
  },
  {
    slug: "who-better-than-us",
    title: "Who Better Than Us?",
    category: "Practice",
    externalUrl: `${BLOG_BASE}/who-better-than-us`,
  },
  {
    slug: "low-load-dynamic-vs-estim",
    title: "Low-Load BFR Dynamic Exercise Superior to Electrical Stimulation with BFR",
    category: "Comparative research",
    externalUrl: `${BLOG_BASE}/low-load-dynamic-vs-estim`,
  },
  {
    slug: "healing-heel-pain",
    title: "Another BFR Success Story: Healing Heel Pain",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/healing-heel-pain`,
  },
  {
    slug: "smart-tools-compare",
    title: "Smart Cuffs Pro Generation 3 Validated Compared To Doppler Ultrasound",
    category: "Device research",
    externalUrl: `${BLOG_BASE}/smart-tools-compare`,
  },
  {
    slug: "meniscal-repair-acl-akrx7",
    title: "Another BFR Success Story: The Crucial Role of BFR After a Second Meniscal Repair within ACL Rehab (Part 2)",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/meniscal-repair-acl-akrx7`,
  },
  {
    slug: "meniscal-repair-acl-2",
    title: "Another BFR Success Story: The Crucial Role of BFR After a Second Meniscal Repair within ACL Rehab (Part 1)",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/meniscal-repair-acl-2`,
  },
  {
    slug: "adjust-cuff-pressure-2",
    title: "Should We Adjust Cuff Pressure Over the Course of an Intervention? Part 2",
    category: "Programming",
    externalUrl: `${BLOG_BASE}/adjust-cuff-pressure-2`,
  },
  {
    slug: "adjust-cuff-pressure",
    title: "Should We Adjust Cuff Pressure Over the Course of an Intervention? Part 1",
    category: "Programming",
    externalUrl: `${BLOG_BASE}/adjust-cuff-pressure`,
  },
  {
    slug: "exercise-pressor-reflex-1-cb6t9",
    title: "The Exercise Pressor Reflex: Should We Be Concerned? Part 2",
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/exercise-pressor-reflex-1-cb6t9`,
  },
  {
    slug: "exercise-pressor-reflex-1",
    title: "The Exercise Pressor Reflex: Should We Be Concerned? Part 1",
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/exercise-pressor-reflex-1`,
  },
  {
    slug: "protect-and-serve",
    title: "Another BFR Success Story: Protect and Serve",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/protect-and-serve`,
  },
  {
    slug: "bfr-and-the-elderly",
    title: "Blood Flow Restriction and the Elderly",
    category: "Population research",
    externalUrl: `${BLOG_BASE}/bfr-and-the-elderly`,
  },
  {
    slug: "success-story-chris-hemsworth-revisited",
    title: "Another BFR Success Story: Chris Hemsworth Revisited",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-chris-hemsworth-revisited`,
  },
  {
    slug: "bfr-and-tendinopathy-part-2",
    title: "A One-Two Punch for BFR and Tendinopathy: Part 2",
    category: "Conditions",
    externalUrl: `${BLOG_BASE}/bfr-and-tendinopathy-part-2`,
  },
  {
    slug: "bfr-and-tendinopathy-part-1",
    title: "A One-Two Punch for BFR and Tendinopathy: Part 1",
    category: "Conditions",
    externalUrl: `${BLOG_BASE}/bfr-and-tendinopathy-part-1`,
  },
  {
    slug: "think-passive-bfr-is-boring-think-again-part-2",
    title: "Think Passive BFR Is Boring? Think Again! Part 2",
    category: "Programming",
    externalUrl: `${BLOG_BASE}/think-passive-bfr-is-boring-think-again-part-2`,
  },
  {
    slug: "think-passive-bfr-is-boring-think-again-part-1",
    title: "Think Passive BFR Is Boring? Think Again! Part 1",
    category: "Programming",
    externalUrl: `${BLOG_BASE}/think-passive-bfr-is-boring-think-again-part-1`,
  },
  {
    slug: "return-to-running",
    title: "Another BFR Success Story: A Return to Running",
    category: "Case study",
    externalUrl: `${BLOG_BASE}/return-to-running`,
  },
  {
    slug: "post-surgical",
    title: "When Should We Start Blood Flow Restriction Training Post Operatively?",
    category: "Programming",
    externalUrl: `${BLOG_BASE}/post-surgical`,
  },
  {
    slug: "osteochondral-fracture",
    title: `Another BFR Success Story: 22-Year-Old Bodybuilder with an Osteochondral Fracture`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/osteochondral-fracture`,
  },
  {
    slug: "bonedensity-bfr",
    title: `Progressive Overload in Blood Flow Restriction Training`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bonedensity-bfr`,
  },
  {
    slug: "progressive-overload-bfr-wzpm8",
    title: `BFR and Bone Health: Muscle and Bone Interconnectivity`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/progressive-overload-bfr-wzpm8`,
  },
  {
    slug: "two-year-old",
    title: `Another BFR Success Story: A 2 Year Old with Spinal Instability`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/two-year-old`,
  },
  {
    slug: "osteoarthritis",
    title: `Another BFR Success Story: Osteoarthritis`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/osteoarthritis`,
  },
  {
    slug: "bfr-screening-tool",
    title: `The Blood Flow Restriction Screening Process`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-screening-tool`,
  },
  {
    slug: "football-acl-tear",
    title: `Another BFR Success Story: ACL Tear in a High School Football Athlete`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/football-acl-tear`,
  },
  {
    slug: "bfr-elevator-pitch",
    title: `Need a BFR Elevator Pitch? We Have You Covered!`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/bfr-elevator-pitch`,
  },
  {
    slug: "success-story-grandfather",
    title: `Another BFR Success Story: Being a Grandfather!`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-grandfather`,
  },  {
    slug: "reasons-to-use-bfr",
    title: `Four Evidence-Based Reasons To Include BFR Training In Your Program`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/reasons-to-use-bfr`,
  },
  {
    slug: "three-bfr-hurdles",
    title: `Three Hurdles to Blood Flow Restriction Success`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/three-bfr-hurdles`,
  },
  {
    slug: "top-ten-benefits",
    title: `Top 10 Benefits of Blood Flow Restriction Training`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/top-ten-benefits`,
  },
  {
    slug: "success-story-meniscus-repair",
    title: `Another BFR Success Story: Meniscus Repair`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-meniscus-repair`,
  },
  {
    slug: "pulse-oximeter",
    title: `Limb Occlusion Pressure Assessment Using A Pulse Oximeter?`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/pulse-oximeter`,
  },
  {
    slug: "success-story-dan-marino",
    title: `Another BFR Success Story: Dan Marino`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-dan-marino`,
  },
  {
    slug: "central-hemodynamics",
    title: `Blood Flow Restriction Training and Central Hemodynamics`,
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/central-hemodynamics`,
  },
  {
    slug: "post-partum-pelvic-floor",
    title: `Another BFR Success Story: Blood Flow Restriction And Its Potential Use In Women With Pelvic Organ Prolapse And Stress Incontinence`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/post-partum-pelvic-floor`,
  },
  {
    slug: "limb-occlusion-pressure",
    title: `Limb Occlusion Pressure For Blood Flow Restricted Exercise: Variability And Relations With Participant Characteristics`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/limb-occlusion-pressure`,
  },  {
    slug: "effort-is-crucial",
    title: `Effort Is Crucial To Building Muscle With Or Without Blood Flow Restriction`,
    category: "Mechanism",
    externalUrl: `${BLOG_BASE}/effort-is-crucial`,
  },
  {
    slug: "success-story-chris-hemsworth",
    title: `Another BFR Success Story: Chris Hemsworth`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-chris-hemsworth`,
  },
  {
    slug: "cuff-position",
    title: `Cuff Bladder Position Impacts Occlusion Pressure`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/cuff-position`,
  },
  {
    slug: "success-story-powerlifter-in-pain",
    title: `Another BFR Success Story: A Power Lifter In Pain`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-powerlifter-in-pain`,
  },
  {
    slug: "safety-first",
    title: `Safety First!`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/safety-first`,
  },
  {
    slug: "success-story-powerlifter-knee-pain",
    title: `Another BFR Success Story: Elite Powerlifter Plagued By Knee Pain`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-powerlifter-knee-pain`,
  },
  {
    slug: "proximal-hypertension",
    title: `Blood Flow Restriction Training And A Mechanistic Approach To Explaining Hypertension`,
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/proximal-hypertension`,
  },
  {
    slug: "success-story-sarcopenia",
    title: `Another BFR Success Story: Sarcopenia`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-sarcopenia`,
  },
  {
    slug: "exercise-is-medicine",
    title: `Exercise Is Medicine`,
    category: "Practice",
    externalUrl: `${BLOG_BASE}/exercise-is-medicine`,
  },  {
    slug: "success-story-aclr-rehab",
    title: `Another BFR Success Story: ACL-R Rehab`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-aclr-rehab`,
  },
  {
    slug: "proximal-hypertrophy",
    title: `What’s The Deal With Proximal Hypertrophy?`,
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/proximal-hypertrophy`,
  },
  {
    slug: "bfr-for-pain-modulation",
    title: `Pain Modulation In Strength And Physique Sport Athletes`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-for-pain-modulation`,
  },
  {
    slug: "success-story-dista-biceps",
    title: `Another BFR Success Story: Recovery From Distal Biceps Repair in a 35 Year-Old Weightlifter`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-dista-biceps`,
  },
  {
    slug: "success-story-patellar-tendinopathy",
    title: `Another BFR Success Story: Patellar Tendinopathy`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-patellar-tendinopathy`,
  },
  {
    slug: "bfr-for-aerobic-athletes",
    title: `BFR & The Aerobic Athlete`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-for-aerobic-athletes`,
  },
  {
    slug: "bfr-for-powerlifters",
    title: `Does Blood Flow Restriction Training Have A Place In Powerlifting Training?`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-for-powerlifters`,
  },
  {
    slug: "success-story-post-partum-recovery",
    title: `Another BFR Success Story: A New Mom’s Recovery`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-post-partum-recovery`,
  },
  {
    slug: "bfr-for-bodybuilders",
    title: `Blood Flow Restriction Training For Bodybuilders`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-for-bodybuilders`,
  },  {
    slug: "success-story-new-father",
    title: `Another BFR Success Story: A New Father And Professional Natural Bodybuilder Shares His BFR Story`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-new-father`,
  },
  {
    slug: "metabolic-stress",
    title: `Metabolic Stress: It Burns So Good!`,
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/metabolic-stress`,
  },
  {
    slug: "the-pump",
    title: `The Pump! The Potential Of Cell Swelling To Enhance Muscle Growth`,
    category: "Mechanism",
    externalUrl: `${BLOG_BASE}/the-pump`,
  },
  {
    slug: "success-story-mark-wahlburg-pl2ln",
    title: `Another BFR Success Story: Dwight Howard`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-mark-wahlburg-pl2ln`,
  },
  {
    slug: "low-load-failure",
    title: `Perceptual And Arterial Occlusion Responses To Very Low Load Blood Flow Restricted Exercise Performed To Volitional Failure`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/low-load-failure`,
  },
  {
    slug: "success-story-mark-wahlburg",
    title: `Another BFR Success Story: Mark Wahlberg`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-mark-wahlburg`,
  },
  {
    slug: "anterior-knee-pain",
    title: `Blood Flow Restriction Training Reduces Anterior Knee Pain To Allow For Therapeutic Loading`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/anterior-knee-pain`,
  },
  {
    slug: "success-story-natural-bodybuilder",
    title: `Another BFR Success Story: BFR In Natural BodyBuilding`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-natural-bodybuilder`,
  },
  {
    slug: "single-multi-joint-exercise",
    title: `Blood Flow Restriction Training In Practice: Isolation Vs. Multi-Joint Exercises`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/single-multi-joint-exercise`,
  },  {
    slug: "success-story-female-physique",
    title: `Another BFR Success Story: Female Physique Competitor`,
    category: "Case study",
    externalUrl: `${BLOG_BASE}/success-story-female-physique`,
  },
  {
    slug: "bfr-acl-rehab",
    title: `BFR & ACL Rehab`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/bfr-acl-rehab`,
  },
  {
    slug: "often-cited-mechanisms",
    title: `A Brief Overview Of 3 Often Cited Mechanisms (And Why They Likely Are Not Unique To BFR Training)`,
    category: "Safety research",
    externalUrl: `${BLOG_BASE}/often-cited-mechanisms`,
  },
  {
    slug: "low-load-tendon",
    title: `Improving Tendon Properties With Low-Load Blood Flow Restriction Training`,
    category: "Programming",
    externalUrl: `${BLOG_BASE}/low-load-tendon`,
  },
  {
    slug: "bfs-knee-osteoarthritis",
    title: `Knee Osteoarthritis & BFR`,
    category: "Conditions",
    externalUrl: `${BLOG_BASE}/bfs-knee-osteoarthritis`,
  },
  {
    slug: "science-behind-bfr-1",
    title: `The Science Behind Blood Flow Restriction, Part 1`,
    category: "Mechanism",
    externalUrl: `${BLOG_BASE}/science-behind-bfr-1`,
  },
  {
    slug: "muscle-activation-patterns",
    title: `The Science Behind Blood Flow Restriction, Part 3`,
    category: "Mechanism",
    externalUrl: `${BLOG_BASE}/muscle-activation-patterns`,
  },
  {
    slug: "brr-fatigue",
    title: `The Science Behind Blood Flow Restriction, Part 2`,
    category: "Mechanism",
    externalUrl: `${BLOG_BASE}/brr-fatigue`,
  },
];

// 15 podcast appearances. Renders as a marquee under the Rolnick card per §N.21.
// Phase 4 (2026-05-13): 4 long-form Rolnick interviews published as
// standalone YouTube videos on the named outlet's channel. Distinct
// from ROLNICK_PODCASTS (podcasts that hosted Nick as a guest, logo
// only) and BFR_PODCAST_EPISODES (Nick's own show). Used on /press.
// Hosts verified against Research/rolnick-cv-facts.md Media Features
// where the CV records it: FOX 32 Chicago (Jul 29, 2022) and
// BLOOM-WFLA-TV (Aug 24, 2022 per CV; the specific interview is
// dated Aug 22, 2022). Ryan Paton and Boundless Body Radio are
// Pascal-supplied for this chip and don't appear in the CV media list.
export const ROLNICK_INTERVIEWS = [
  {
    title: "In Conversation with Ryan Paton: Blood Flow Restriction Training",
    host: "Ryan Paton",
    youtubeId: "TQjZATVHM9w",
  },
  {
    title: "Blood Flow Restriction BFR Training with Dr Nick Rolnick",
    host: "Boundless Body Radio",
    youtubeId: "LiDOW0QEYf0",
  },
  {
    title: "Blood Flow Restriction Training Gaining Steam in Fitness Community",
    host: "FOX 32 Chicago",
    youtubeId: "1aTorqQxm_w",
  },
  {
    title: "Blood Flow Restriction Training WFLA Interview",
    host: "BLOOM-WFLA-TV",
    hostDate: "Aug 22, 2022",
    youtubeId: "0OAzw1sAR6Q",
  },
] as const;

// Phase 4 (2026-05-13): per-episode href added on each entry. URLs verified
// against Research/dr-rolnick-publications-and-appearances.md (Pascal-
// curated catalog of every Rolnick outbound link). External, open in a new
// tab from card grids on /press, /podcast, /about/nicholas-rolnick.
export const ROLNICK_PODCASTS = [
  { name: "(P)REHAB Podcast", src: "/images/podcasts/prehab.jpg", w: 140, h: 56, href: "https://lnns.co/bQuxSigkqmY" },
  { name: "Physiotutors Podcast", src: "/images/podcasts/physiotutors.jpg", w: 140, h: 56, href: "https://www.youtube.com/watch?v=U15Q9QK-8BM" },
  { name: "Iron Culture", src: "/images/podcasts/iron-culture.jpg", w: 140, h: 56, href: "https://open.spotify.com/episode/4EpDf2RUHv4TbdYCOdXIFK" },
  { name: "Iron Health", src: "/images/podcasts/iron-health.jpg", w: 140, h: 56, href: "https://www.youtube.com/watch?v=tabVQaLimxM" },
  { name: "The Mind Muscle Project", src: "/images/podcasts/mind-muscle-project.jpg", w: 140, h: 56, href: "https://www.listennotes.com/podcasts/mind-muscle-project/573-tbt-nick-rolnick-hacking-nqO-ilW7xtQ/" },
  { name: "Modern Pain Podcast", src: "/images/podcasts/modern-pain.jpg", w: 140, h: 56, href: "https://lnns.co/GzPxF-wUk9Y" },
  { name: "Nova Talks", src: "/images/podcasts/nova-talks.jpg", w: 140, h: 56, href: "https://www.youtube.com/watch?v=5-cOh5m4BvA" },
  { name: "HET Healthcare Education Transformation", src: "/images/podcasts/het-healthcare.jpg", w: 140, h: 56, href: "https://lnns.co/4LMkHQvF0sf" },
  { name: "PTCoffeeCast", src: "/images/podcasts/ptcoffeecast.jpg", w: 140, h: 56, href: "https://podcasts.apple.com/ca/podcast/ptcoffeecast/id1336306312?i=1000475589226" },
  { name: "Physio Podcast", src: "/images/podcasts/physio-podcast.jpg", w: 140, h: 56, href: "https://lnns.co/SnHIWysgEow" },
  { name: "QualityLife Fitness", src: "/images/podcasts/qualitylife-fitness.jpg", w: 140, h: 56, href: "https://open.spotify.com/episode/2eIM4e5kNkP4zstO0mY8Lx" },
  { name: "Healthy Podcast", src: "/images/podcasts/healthy.jpg", w: 140, h: 56, href: "https://lnns.co/-nFzUpgIvis" },
  { name: "BFR Episode 008", src: "/images/podcasts/bfr-ep-008.jpg", w: 140, h: 56, href: "https://lnns.co/tPo0YV462_p" },
  { name: "The E3 R3HAB Podcast", src: "/images/podcasts/e3-r3hab.jpg", w: 140, h: 56, href: "https://lnns.co/_fugeWTopcQ" },
  { name: "The ASHPT Lunch Hour", src: "/images/podcasts/ashpt-lunch-hour.jpg", w: 140, h: 56, href: "https://www.listennotes.com/podcasts/the-cashpt-lunch/ep-136-blood-flow-KdaAIh90Tik/" },
] as const;

// §N.13 Strategy A + Pascal-2026-05-08 v6: 11 bonuses (the CEU credit
// application is part of the core offer, not a bonus). Realistic per-item
// values, defensible to a clinical audience. Bonus 4 is "up to $640 in cuff
// discount savings" — called out separately, not summed into bonus value.
export const BONUSES = [
  { n: 1, title: "Liability Waiver Form", value: 50, img: "/images/bonuses/01-liability-waiver.png", line: "Drop-in waiver clinics use to formally adopt BFR into their consent flow." },
  { n: 2, title: "BFR Patient Screening Form", value: 75, img: "/images/bonuses/02-screening-form.png", line: "Risk-stratify every candidate against precautions and contraindications before the first cuff goes on." },
  { n: 3, title: "RPE Omni-Res Tool", value: 25, img: "/images/bonuses/03-rpe-tool.png", line: "Validated rating-of-perceived-exertion scale built specifically for BFR sets." },
  { n: 4, title: "BFR Device Discount Codes", value: 640, valuePrefix: "up to $", valueSuffix: " in savings", img: "/images/bonuses/04-discount-codes.png", line: "Negotiated discounts on Delfi, SmartCuffs, B Strong, and others. Pick the cuff that fits the practice." },
  { n: 5, title: "Module-by-Module Bibliography", value: 50, img: "/images/bonuses/05-bibliography.png", line: "Every cited study, every module, with PubMed links. The trail of receipts." },
  { n: 6, title: "Downloadable Course PDF", value: 150, img: "/images/bonuses/06-course-pdf.png", line: "481-page searchable workbook for the clinic floor. Quick reference between patients." },
  { n: 7, title: "Precautions and Contraindications List", value: 25, img: "/images/bonuses/07-precautions.png", line: "Pulled straight from the Frontiers literature review. Laminate it for the cuff cart." },
  { n: 8, title: "Nutritional Recommendations for BFR", value: 25, img: "/images/bonuses/08-nutrition.png", line: "Carb timing, protein dosing, and hydration cues for the recovery window." },
  { n: 9, title: "Athletic BFR Programming Guide", value: 100, img: "/images/bonuses/09-athletic-programming.png", line: "In-season maintenance, hypertrophy at low loads, and ischemic preconditioning protocols." },
  { n: 10, title: "BFR Training Marketing Video", value: 200, img: "/images/bonuses/10-marketing-video.png", line: "Co-brandable explainer that introduces BFR to your patients for you, no scripting or filming required." },
  { n: 11, title: "Private Facebook Group", value: 100, img: "/images/bonuses/11-facebook-group.png", line: "1,467+ certified clinicians. Dr. Rolnick answers implementation questions in real time." },
] as const;

// Verbatim long-form testimonials from the live bfrtraining.com course page (§K.1 source).
// Pulled exactly as written, no paraphrasing. Three of the four have student photos
// in Assets/Social Proof/Testimonials/Student Images for Testimonials/.
export const TESTIMONIALS = [
  {
    name: "Dr. Clinton H. Lee, PT, DPT, CSCS",
    role: "Owner, PhysioStrength",
    quote:
      "I chose to take The BFR Pros' blood flow restriction course over other companies such as Owens Recovery Science & Smart Tools because of how the former is continually staying up-to-date with emerging BFR research and implementing it into the course content.",
    angle: "research-authority",
  },
  {
    name: "Dr. Brian D. Whyte, DPT, CLT, CSCS",
    role: "Owner, Perfusion Point Therapy",
    quote:
      "The BFR Pros course led by Dr. Nicholas Rolnick was excellent. It helped me to gain a sound knowledge base for implementing Blood Flow Restriction in the clinic and the understanding of when BFR can be best utilized for optimal outcomes.",
    angle: "implementation",
  },
  {
    name: "Benjamin Toderico, MS, CSCS",
    role: "Owner, BT Fitness",
    quote:
      "Dr. Rolnick is a passionate instructor who optimizes the blend of science and practice which enabled me to utilize BFR training immediately. Because of Dr. Rolnick's instruction BFR training has become a well used tool with my special population, and clients as well.",
    angle: "clinical-outcomes",
  },
  {
    name: "Chantale Nightingale",
    role: "Stapleford Health and Rehab, Regina",
    quote:
      "Just wanted to say thank you for putting up with us Canadians. We really appreciate you working with us to find the best way to deliver the course content. We all really enjoyed the in-person Webinar this past Saturday and found it quite helpful. We had quite a lively conversation after the webinar about the uses in clinic and potential clients that would benefit. We did a lot of research prior to going with the BFR Pros and we are happy we chose you. The presented research and clinical experience and insight was very much appreciated. Again, just wanted to say a big thank you from all of us at Stapleford Health and Rehab Centre in Regina.",
    angle: "group-cohort",
  },
] as const;

// STUDENT_TESTIMONIALS moved to src/content/student-reviews.ts (Phase 4,
// 2026-05-13) so the 681-entry survey export does not bloat the shared
// Next.js chunk that constants.ts feeds.

// Phase 2c (2026-05-13): /reviews video-testimonials section. Migrated to
// Gumlet 2026-06-26 (veedId -> gumletId). Four named PT/AT graduates in 16:9.
// Two UGC vertical clips and Dhimant Indrayan (House of Hypertrophy) are NOT
// in this live list: the verticals are parked below (no posters yet) and
// Dhimant is parked unwired in VIDEOS_ARSENAL (off the PT/AT avatar). All four
// render the same on /reviews, /certification and /get-certified. Thumbnail
// webps live under public/images/testimonials/video/{name}.webp.
export const VIDEO_TESTIMONIALS = [
  {
    name: "Matthew D'Elia",
    role: "Physical Therapist",
    gumletId: "6a3e720a79d93c513c4756c4",
    poster: "/images/testimonials/video/matthew-delia.webp",
    aspect: "16/9",
    animated: { webm: "/videos/thumbnails/testimonial-matthew-delia.webm", mp4: "/videos/thumbnails/testimonial-matthew-delia.mp4" },
  },
  {
    name: "Erica Marcano",
    role: "Athletic Trainer, MS, ATC, CSCS",
    gumletId: "6a3e6fe379d93c513c471378",
    poster: "/images/testimonials/video/erica-marcano.webp",
    aspect: "16/9",
    animated: { webm: "/videos/thumbnails/testimonial-erica-marcano.webm", mp4: "/videos/thumbnails/testimonial-erica-marcano.mp4" },
  },
  {
    name: "Keith Steigbigel",
    role: "PT, DPT, OCS, CSCS, Owner, Prolete PT",
    gumletId: "6a3e72413583eb1726e858a6",
    poster: "/images/testimonials/video/keith-steigbigel.webp",
    aspect: "16/9",
    animated: { webm: "/videos/thumbnails/testimonial-keith-steigbigel.webm", mp4: "/videos/thumbnails/testimonial-keith-steigbigel.mp4" },
  },
  {
    name: "Dawn Thomas",
    role: "Physical Therapist",
    gumletId: "6a3e72aa8a92d68f4380b4c6",
    poster: "/images/testimonials/video/dawn-thomas.webp",
    aspect: "16/9",
    animated: { webm: "/videos/thumbnails/testimonial-dawn-thomas.webm", mp4: "/videos/thumbnails/testimonial-dawn-thomas.mp4" },
  },
] as const;

// TODO: two vertical UGC testimonials uploaded to Gumlet but NOT wired (no
// posters yet). When Pascal supplies posters, add them to VIDEO_TESTIMONIALS
// above with the noted aspect + poster path, and frame them vertically.
// - Arash, PreHab Guys:    gumletId "6a3e752b3583eb1726e8aeb7" (aspect 9/16)
// - Brazilian Researcher:  gumletId "6a3e95043583eb1726ec48d5" (aspect 11/20)

// 4 courses, full module breakdown verbatim from the live bfrtraining.com course page
// (§K.5 of the iteration plan). Module type 'video' / 'quiz' / 'pdf' / 'chart' is no
// longer rendered as an icon; duration column signals video vs quiz. Descriptions are
// Pascal-supplied 2026-05-08 from the live Teachable curriculum.
export type ModuleType = "video" | "quiz" | "pdf" | "chart";
export type CourseModule = {
  n: number | string;
  title: string;
  duration: string;
  type: ModuleType;
  description?: string;
};

export const CURRICULUM = [
  {
    slug: "course-1",
    title: "Introduction to BFR Training",
    ceus: "5.5",
    totalDuration: "5h 16m",
    moduleCount: 14,
    courseValue: 349,
    promoVideoKey: "course1Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-1.png",
    posterSrc: "/images/posters/course-1.jpg",
    animatedSrc: { webm: "/videos/thumbnails/course-1.webm", mp4: "/videos/thumbnails/course-1.mp4" },
    summary:
      "The foundation course. 60 years of BFR research, mechanisms, pressure determination, screening, and the three pillars of clinical application.",
    modules: [
      { n: 0, title: "Course Overview", duration: "10:12", type: "video", description: "Introducing the course, the three hurdles of blood flow restriction training, and an overview of each of the modules contained within the course." },
      { n: 1, title: "A Brief History of BFR", duration: "5:23", type: "video", description: "A brief contextual overview of how blood flow restriction training has gained popularity in both rehabilitation and fitness since its inception 50 years ago." },
      { n: 2, title: "Scientific Basis of BFR", duration: "8:30", type: "video", description: "The context and history surrounding the application of BFR in the rehab and fitness settings." },
      { n: 3, title: "Consequences of Injury and Combating Disuse", duration: "11:49", type: "video", description: "The consequences of injury and disuse on our musculoskeletal system, and what you can do as a BFR provider to address them." },
      { n: 4, title: "The Science Behind BFR Training", duration: "13:09", type: "video", description: "The role of BFR training with respect to traditional low- and heavy-load strength training." },
      { n: 5, title: "Fatigue and Blood Flow Restriction Training", duration: "10:21", type: "video", description: "Fatigue and the importance of exertion in the muscle-building process." },
      { n: 6, title: "Primary Mechanisms of BFR Training", duration: "13:18", type: "video", description: "The primary mechanisms behind BFR's effects on muscle and the role of exertion in the muscle-building process." },
      { n: 7, title: "Safety & Proper Use of BFR", duration: "38:32", type: "video", description: "How whole-body responses affect populations that may be at higher risk using BFR training, above and beyond what you would expect in healthy individuals." },
      { n: 8, title: "Pillar One: Cell Swelling / IPC", duration: "10:37", type: "video", description: "Cell swelling and ischemic pre- and post-conditioning. Augments performance in athletes and minimizes the negative effects of disuse atrophy in rehab populations." },
      { n: 9, title: "Pillar Two: Aerobic Training", duration: "26:59", type: "video", description: "Aerobic training under occlusion: the science of exercise under occlusion and how it can build muscle mass and strength while doing aerobic exercise." },
      { n: 10, title: "Pillar Three: Resistance Training", duration: "47:02", type: "video", description: "What the research says can be done to optimize muscle growth with low-load BFR training using loads between 20–40% 1RM." },
      { n: 11, title: "Programming BFR", duration: "57:30", type: "video", description: "Determining safe BFR application and integrating the pillars of BFR into a progressive, periodized model that fits both fitness and rehabilitation settings." },
      { n: 12, title: "Other BFR-Related Evidence", duration: "17:22", type: "video", description: "How BFR is challenging our understanding of physiology, including its effect on tendon and bone adaptation, its pain-relieving properties, and augmenting sports performance." },
      { n: 13, title: "Summary of BFR & Wrap Up", duration: "6:01", type: "video", description: "Brings everything covered in the course together and concludes on the role of low-load BFR exercise in both fitness and rehabilitation settings." },
    ] as CourseModule[],
  },
  {
    slug: "course-2",
    title: "BFR Masters Series Clinical Rounds",
    ceus: "2.25",
    totalDuration: "1h 32m",
    moduleCount: 12,
    courseValue: 147,
    promoVideoKey: "course2Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-2.png",
    posterSrc: "/images/posters/course-2.jpg",
    animatedSrc: { webm: "/videos/thumbnails/course-2.webm", mp4: "/videos/thumbnails/course-2.mp4" },
    summary:
      "Six case-based clinical rounds with Dr. Rolnick walking through real patient decisions, each paired with a quiz on the underlying paper.",
    modules: [
      { n: 1, title: "Pillars of BFR + Post-Surgical Screening", duration: "20:10", type: "video", description: "The Pillars of BFR Training and Post-Surgical BFR Screening." },
      { n: "1Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
      { n: 2, title: "BFR Post-Surgical ACL Rehab in 19yo Female Athlete", duration: "11:40", type: "video", description: "BFR post-surgical ACL rehabilitation in a 19-year-old female athlete." },
      { n: "2Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
      { n: 3, title: "99-Year-Old Sarcopenic Male", duration: "14:50", type: "video", description: "Successful use of BFR on a very old patient." },
      { n: "3Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
      { n: 4, title: "BFR Walking Home-Based Program, 67yo Female", duration: "8:51", type: "video", description: "67-year-old sedentary female using a high-frequency BFR walking home-based program." },
      { n: "4Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
      { n: 5, title: "Lower Leg Strength + Reduced Knee Swelling, 17yo Reactive Arthritis", duration: "14:06", type: "video", description: "Improving lower-leg strength and perceived function while reducing knee-joint swelling in a 17-year-old with reactive arthritis, in a home-based BFR training intervention." },
      { n: "5Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
      { n: 6, title: "In-Season BFR Rehab, Two Decathletes with Patellar Tendinopathy", duration: "22:01", type: "video", description: "In-season BFR rehabilitation on two decathletes with patellar tendinopathy." },
      { n: "6Q", title: "End of part quiz", duration: "Quiz", type: "quiz" },
    ] as CourseModule[],
  },
  {
    slug: "course-3",
    title: "BFR Masters Webinar “What’s New In BFR 2021?”",
    ceus: "2",
    totalDuration: "1h 35m",
    moduleCount: 6,
    courseValue: 79,
    promoVideoKey: "course3Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-3.jpg",
    posterSrc: "/images/posters/course-3.jpg",
    animatedSrc: { webm: "/videos/thumbnails/course-3.webm", mp4: "/videos/thumbnails/course-3.mp4" },
    summary:
      "Five 2021 papers walked through with the lead author's commentary on what each finding means for the clinic floor.",
    modules: [
      { n: 1, title: "Introduction to The BFR Pros", duration: "12:06", type: "video", description: "Short background of The BFR Pros and the five 2021 papers that frame the rest of the course." },
      { n: 2, title: "Perceived Barriers to BFR Training (Rolnick 2021)", duration: "18:01", type: "video", description: "Reviews and discusses the medical-screening funnel algorithm that reduces risk when applying BFR to patients who shouldn't receive it." },
      { n: 3, title: "Repetition Failure & Applied Pressure (Carqueira 2021)", duration: "12:02", type: "video", description: "Reviews and discusses the minimum pressure shown to meaningfully accelerate fatigue, and speculates on its clinical implications." },
      { n: 4, title: "BFR Improves Strength in Chronic Atrophic Post-Surgical Patients (Noyes 2021)", duration: "14:46", type: "video", description: "Reviews and discusses the successful application of BFR in chronic atrophic post-surgical knee patients." },
      { n: 5, title: "Muscle Activation & Applied BFR Pressure (De Queiros 2021)", duration: "17:22", type: "video", description: "Reviews and discusses muscle activation and applied pressure, and its potential role in BFR exercise." },
      { n: 6, title: "BFR Induces Comparable Patellar Tendon Changes as Heavy Load Strength Training (Centner 2021)", duration: "20:27", type: "video", description: "Reviews and discusses how BFR can improve tendon properties in a similar manner as heavy-load strength training." },
    ] as CourseModule[],
  },
  {
    slug: "course-4",
    // real-name: title verbatim from bfrtraining.com/course-package (curly quotes U+201C/U+201D + en-dash U+2013 per content-fidelity)
    title: "BFR Masters Webinar “Device Features – Selection Of Blood Flow Restriction And Their Potential Impact on Practice”",
    ceus: "2",
    totalDuration: "1h 38m",
    moduleCount: 2,
    courseValue: 79,
    promoVideoKey: "course4Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-4.jpg",
    posterSrc: "/images/posters/course-4.jpg",
    animatedSrc: { webm: "/videos/thumbnails/course-4.webm", mp4: "/videos/thumbnails/course-4.mp4" },
    summary:
      "Comparative review of 2024 cuff design data plus a practical knowledge assessment on wrapping straps versus elastic bands.",
    modules: [
      { n: 1, title: "BFR Masters Webinar 2024: Devices, Autoregulation, Bladder Design, Cuff Width", duration: "97:48", type: "video", description: "Device features that are relevant to the physiology, perception, and safety of BFR exercise: autoregulation, bladder design (single- vs multi-chambered), set/interface pressure." },
      { n: 2, title: "Knowledge Assessment: Practical BFR with Wrapping Straps vs Elastic Bands", duration: "Quiz", type: "quiz", description: "When is it appropriate to perform practical BFR with wrapping straps versus elastic bands?" },
    ] as CourseModule[],
  },
] as const;

// Avatar phrases retained as voice-of-customer reference for future copy work.
// Journal-only fictional beats (Sarah three doors down, firefighter, 9:42 Tuesday)
// were stripped per §C of the iteration plan: they read as inside-references on a
// public sales page even though they came from research, not fabrication.
export const AVATAR_PHRASES = {
  PTSchoolReason: "I went to PT school because I wanted to actually help people get better.",
  outcomesPlateau: "I'm watching my outcomes plateau in week 14.",
  patientsCanTell: "Patients can tell when you're stalling.",
  techniqueNotCuff: "The certification is the technique, not the cuff.",
  marketedToByExClinicians: "Half of being a clinician is being marketed to by people who used to be clinicians.",
  CEvsSpecialty: "I've been treating the BFR decision like it's a CE choice when it's actually a specialty choice.",
  notAGeneralist: "I am not going to be a generalist for 25 more years.",
} as const;

// Comparison table rebuilt with consistent axes per §D.10:
// Format / Hours / CEUs / Equipment / Money-back. Modules and price columns dropped
// (different programs use different unit definitions; price comparison belongs in a
// dedicated callout). Mike Reinold guarantee corrected to 30 days.
export const COMPETITOR_TABLE = [
  {
    name: "The Complete BFR Certification",
    isUs: true,
    format: "Online, on-demand",
    hours: "11.75",
    ceus: "11.75",
    equipment: "None required, works with any cuff",
    guarantee: "30 days",
  },
  {
    name: "Owens Recovery Science",
    isUs: false,
    format: "In-person, 1-day",
    hours: "~8",
    ceus: "~8",
    equipment: "Delfi PTS ($5,000+)",
    guarantee: "Not advertised",
  },
  {
    name: "NE Seminars / UT BFRT",
    isUs: false,
    format: "Online",
    hours: "~8",
    ceus: "~8",
    equipment: "Bundled, single brand",
    guarantee: "Not advertised",
  },
  {
    name: "PESI BFR course",
    isUs: false,
    format: "Online, on-demand",
    hours: "~8.5",
    ceus: "8.5",
    equipment: "None required",
    guarantee: "Standard PESI policy",
  },
  {
    name: "Mike Reinold online course",
    isUs: false,
    format: "Online, on-demand",
    hours: "~6",
    ceus: "6.0",
    equipment: "None required",
    guarantee: "30 days",
  },
] as const;
