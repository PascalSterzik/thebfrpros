// Single source of truth for brand-locked values used across every page.
// If a value lives in CLAUDE.md, brand-guide.md, BUILD-BRIEF.md, or the dossier,
// it lives here too. Update in one place, change the whole site.

export const ENROLL_URL =
  "https://bfr-pros.teachable.com/bundles/the-complete-bfr-certification?affcode=626725_rzfv6exi";

// Where the /contact form posts. Default is a `mailto:` so the static site
// works immediately without an external service. When MailerLite / GoHighLevel
// is wired (per BUILD-BRIEF email-tool decision), swap this to the real POST
// endpoint URL — the ContactForm component handles both mailto: and http:
// transports. One-line swap, no other code changes needed.
export const CONTACT_FORM_ENDPOINT = "mailto:nick@thebfrpros.com";

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
  // /get-certified variants at /get-certified (default v3) plus -v1 / -v2.
  // The internal variant-review index has moved to /preview.
  routes: {
    home: "/",
    preview: "/preview",
    v1: "/get-certified-v1",
    v2: "/get-certified-v2",
    v3: "/get-certified",
  },
} as const;

export const STATS = {
  publications: "72+",
  publicationsExact: 72,
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
  mediaOutlets: "14+",
  yearsInClinic: "10+",
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
    "Peer reviewer for 26+ journals",
    "NASM Chapter 12 author (Warm-up, Recovery, Injury Prevention)",
    "Founder of The BFR Pros, LLC (since June 2018)",
  ],
  publicationsLine: `${STATS.publications} peer-reviewed BFR publications`,
  // mediaList is the MODALITY-level set surfaced alongside FEATURED_IN logos. Nick-personal
  // media features live in ROLNICK_PERSONAL_MEDIA below per brand-guide.md modality-vs-brand
  // discipline (gotcha 71/72).
  mediaList: ["CNN", "Wall Street Journal", "Forbes", "ESPN", "Men's Health", "GQ", "PubMed", "NSCA"],
} as const;

// Nick-personal media features (BRAND-level claims; belong on /about/nicholas-rolnick,
// NEVER on the homepage FEATURED_IN modality bar). Source-of-truth: Research/rolnick-cv-facts.md.
// Phase 2f of the publish-ready iteration will render this as its own section on the bio
// page; the const is the data plumbing.
export const ROLNICK_PERSONAL_MEDIA = [
  { outlet: "New York Post", headline: "Use the talk test to lower your risk of having a heart attack like Hulk Hogan", date: "Aug 9, 2025" },
  { outlet: "CNN Life But Better", headline: "Increase your chances of living longer with 14 gym-free ways to sneak more movement in your day", date: "Jul 31, 2025" },
  { outlet: "Men's Health", headline: "What Blood Flow Restriction Training Can Do for Your Workouts", date: "Apr 9, 2025" },
  { outlet: "WELL + GOOD", headline: "3 Common Habits a Human Performance Mechanic Says Can Lead to Back Pain", date: "Jan 12, 2023" },
  { outlet: "BLOOM-WFLA-TV", headline: "Blood Flow Restriction Training", date: "Aug 24, 2022" },
  { outlet: "Zenger News", headline: '"The Human Performance Mechanic" Explains Why Exercise Is Sometimes The Best Medicine', date: "Aug 15, 2022" },
  { outlet: "The Scarsdale Inquirer", headline: "Scarsdale Grad Rolnick Thrives As Physical Therapist", date: "Aug 12, 2022" },
  { outlet: "WESTFAIROnline", headline: "A Physical Therapist's Antidote to Anxiety", date: "Aug 9, 2022" },
  { outlet: "FOX 32 Chicago", headline: "Blood Flow Restriction Training Gaining Steam In Fitness Community", date: "Jul 29, 2022" },
  { outlet: "CNET", headline: "Blood Flow Restriction Training Gets You Stronger Without the Heavy Weights", date: "Jun 8, 2022" },
  { outlet: "Eat This, Not That!", headline: "10 Ways to Burn More Calories During Every Walk", date: "Nov 4, 2021" },
  { outlet: "Vitamin Shop WHAT'S GOOD", headline: "6 Ways To Support And Strengthen Your Knees", date: "Oct 27, 2021" },
  { outlet: "AskMen", headline: "Partial Reps May Be the Ultimate Key to Building the Muscle You Want", date: "Sep 21, 2021" },
  { outlet: "CNN Health", headline: "Why kaatsu, a fitness trend spotted at the Games, isn't just for Olympians", date: "Jul 31, 2021" },
  { outlet: "UPDOC Media", headline: "Top 40 Physical Therapy Influencers of 2020", date: "Jan 4, 2021" },
  { outlet: "Movement Guides", headline: "The Top 5 Strength and Conditioning Coach Instagram Accounts to Follow", date: "Jan 1, 2021" },
  { outlet: "WebPT", headline: "12 Physical Therapists to Watch in 2021", date: "Dec 31, 2020" },
  { outlet: "WELL + GOOD", headline: "Thanks to Blood Flow Restriction Training, Injuries No Longer Have to Cramp Your Workout Progress", date: "Feb 27, 2020" },
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

// VEED.io video embeds. Source of truth: Assets/Videos/video-embeds.md.
// Each value is the embed src URL (already includes watermark=0&color=blue&sharing=0&title=0).
export const VIDEOS = {
  coursePackagePromo: "https://www.veed.io/embed/b95b8cb0-60e6-44b8-ba46-6b4a8f18bd71?watermark=0&color=blue&sharing=0&title=0",
  module0Preview: "https://www.veed.io/embed/6090711f-f32f-41ac-a6a2-4840df4eb9e1?watermark=0&color=blue&sharing=0&title=0",
  testimonial: "https://www.veed.io/embed/447b2350-3678-4c64-b638-727760e4534f?watermark=0&color=blue&sharing=0&title=0",
  whatIsBFR: "https://www.veed.io/embed/c9d62acf-0808-4194-a27c-6ec3d94ea85a?watermark=0&color=blue&sharing=0&title=0",
  // Homepage hero video: Nick covering common questions about BFR. Stage-2
  // friendly (no cert pitch). Used in HomeHero.tsx below the subhead.
  homepageHero: "https://www.veed.io/embed/a6ceb7f2-af2c-411c-aaf5-c8121e59816b?watermark=0&color=blue&sharing=0&title=0",
  course1Promo: "https://www.veed.io/embed/277fd3eb-8c96-419c-86a1-f928bf84abe0?watermark=0&color=blue&sharing=0&title=0",
  course2Promo: "https://www.veed.io/embed/e1723f87-a5c7-4f54-9c4f-e8c8dfb83488?watermark=0&color=blue&sharing=0&title=0",
  course3Promo: "https://www.veed.io/embed/0f0f4e0f-a62a-41a4-8880-5c4f941d1671?watermark=0&color=blue&sharing=0&title=0",
  course4Promo: "https://www.veed.io/embed/fcb198ed-bd3a-43f8-a281-b8e87d40548a?watermark=0&color=blue&sharing=0&title=0",
} as const;

// §Pascal-2026-05-08: BFR-in-action exercise demonstration clips. Used in
// VisualProofSection — replaces the 4 static photos with 6 short VEED embeds
// that show a real BFR cuff in motion across common compound lifts.
export const ACTION_VIDEOS = [
  { title: "Romanian Deadlift vs Regular Deadlift", src: "https://www.veed.io/embed/0ad32f9d-e62f-45e2-bda0-8abed95ece0b?watermark=0&color=red&sharing=0&title=0", posterSrc: "/images/posters/action-romanian-deadlift.jpg" },
  { title: "Leg Press with BFR", src: "https://www.veed.io/embed/5751e248-436e-44e7-ba2b-2a2e8e63cf6a?watermark=0&color=blue&sharing=0&title=0", posterSrc: "/images/posters/action-leg-press.jpg" },
  { title: "Leg Curl with BFR", src: "https://www.veed.io/embed/2e7d2fc0-5082-4732-a8f3-97b1d72b1e32?watermark=0&color=blue&sharing=0&title=0", posterSrc: "/images/posters/action-leg-curl.jpg" },
  { title: "Split Squat with BFR", src: "https://www.veed.io/embed/b3e3e1f9-34d4-4672-8c83-a64956949f78?watermark=0&color=blue&sharing=0&title=0", posterSrc: "/images/posters/action-split-squat.jpg" },
  { title: "Heel Elevated High-Bar Squat with BFR", src: "https://www.veed.io/embed/b8b73290-c1ed-4e7b-a4f3-7279c77d5426?watermark=0&color=blue&sharing=0&title=0", posterSrc: "/images/posters/action-high-bar-squat.jpg" },
  { title: "Hip Thrust with BFR", src: "https://www.veed.io/embed/97e4b507-edc5-4662-bfcc-f8bab006f100?watermark=0&color=blue&sharing=0&title=0", posterSrc: "/images/posters/action-hip-thrust.jpg" },
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
// — the full 72+ trail extends across many more journals; these six are
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
    count: "2+",
    note: "Co-first author on the BFR methods and apparatus position paper (2025)",
    href: "https://bjsm.bmj.com/content/early/2025/02/07/bjsports-2024-109365",
  },
  {
    name: "Scandinavian Journal of Medicine and Science in Sports",
    count: "1+",
    note: "Low-intensity resistance + BFR systematic review on arterial stiffness",
    href: "https://onlinelibrary.wiley.com/doi/10.1111/sms.13902",
  },
  {
    name: "Sports Medicine and Health Science",
    count: "1+",
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
  "Sports Medicine — Open",
  "PeerJ",
  "Medical Hypotheses",
  "Journal of Strength & Conditioning Research",
  "Sports Health",
] as const;

// Featured peer-reviewed publications co-authored by Dr. Rolnick. Pulled
// verbatim from the live thebfrpros.com/published-research page (titles +
// abstracts) plus the source-of-truth URL list in
// Research/dr-rolnick-publications-and-appearances.md. Used on /research
// and /research/publications. Six papers are surfaced; the full 72+
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
export const ROLNICK_PODCASTS = [
  { name: "(P)REHAB Podcast", src: "/images/podcasts/prehab.jpg", w: 140, h: 56 },
  { name: "Physiotutors Podcast", src: "/images/podcasts/physiotutors.jpg", w: 140, h: 56 },
  { name: "Iron Culture", src: "/images/podcasts/iron-culture.jpg", w: 140, h: 56 },
  { name: "Iron Health", src: "/images/podcasts/iron-health.jpg", w: 140, h: 56 },
  { name: "The Mind Muscle Project", src: "/images/podcasts/mind-muscle-project.jpg", w: 140, h: 56 },
  { name: "Modern Pain Podcast", src: "/images/podcasts/modern-pain.jpg", w: 140, h: 56 },
  { name: "Nova Talks", src: "/images/podcasts/nova-talks.jpg", w: 140, h: 56 },
  { name: "HET Healthcare Education Transformation", src: "/images/podcasts/het-healthcare.jpg", w: 140, h: 56 },
  { name: "PTCoffeeCast", src: "/images/podcasts/ptcoffeecast.jpg", w: 140, h: 56 },
  { name: "Physio Podcast", src: "/images/podcasts/physio-podcast.jpg", w: 140, h: 56 },
  { name: "QualityLife Fitness", src: "/images/podcasts/qualitylife-fitness.jpg", w: 140, h: 56 },
  { name: "Healthy Podcast", src: "/images/podcasts/healthy.jpg", w: 140, h: 56 },
  { name: "BFR Episode 008", src: "/images/podcasts/bfr-ep-008.jpg", w: 140, h: 56 },
  { name: "The E3 R3HAB Podcast", src: "/images/podcasts/e3-r3hab.jpg", w: 140, h: 56 },
  { name: "The ASHPT Lunch Hour", src: "/images/podcasts/ashpt-lunch-hour.jpg", w: 140, h: 56 },
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
  { n: 10, title: "BFR Training Marketing Video", value: 200, img: "/images/bonuses/10-marketing-video.png", line: "Co-brandable explainer to introduce BFR to your patients without writing a word of new copy." },
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

// Short student testimonials pulled verbatim from the bfrtraining.com course
// page (Research/source-extracts-2026-05-07/course page.txt). These are the
// "13 shorter testimonials" the brand-guide flags as held-in-reserve for a
// dedicated reviews wall. Used on /reviews. No paraphrasing.
export const STUDENT_TESTIMONIALS = [
  {
    name: "Christina Bentrewicz",
    quote:
      "Did a great job utilizing current and up to date research in the various modules to give the best information available.",
  },
  {
    name: "Vincent Beatty",
    quote:
      "Truly helped me achieve a greater understanding of BFR and now I'm motivated to push harder to bring this modality to my clinic.",
  },
  {
    name: "Earl Hayden",
    quote:
      "Easy to understand concepts thoroughly explained for those with little previous knowledge of BFR.",
  },
  {
    name: "Brian Gargiul",
    quote:
      "The amount of information given. In addition, the quizzes were helpful as well once the sections became more in depth.",
  },
  {
    name: "Giuseppe Sposito",
    quote:
      "I wish this [case study focus] was done more often. It helps take academia and theory and translate into practice. I think I took away a number of good strategies and ideas to use with patients, many of whom look very similar to the case study folks. The slides and materials look clean and nice. You guys are VERY good at speaking and presenting. Quality was top-notch there.",
  },
  {
    name: "Conor McClure",
    quote:
      "Very practical and thorough for an introductory-level course. Can't wait to see the advanced course.",
  },
  {
    name: "Michael Reeves",
    quote:
      "The videos, infographics and dissemination of the research in each video. The videos were easy to follow.",
  },
  {
    name: "Matthew D'Elia",
    quote:
      "I liked the more in-depth information of the topics than just brushing over them, such as getting into hypertrophy of muscles and how it happens. Also, the amount of research provided and explained was great to further back what was being said.",
  },
  {
    name: "Matt Girard",
    quote:
      "The content was very informative and well transmitted. Also the structure of the course is very clear and well interconnected. Moreover the questions afterwards are a good way to recap the content. All in all it was a good guided course and the level of the content was well prepared and selected for a beginners course.",
  },
  {
    name: "Roberto Baumgartne",
    quote:
      "The course managed to answer every question that I had, whenever I had a new one such as 'how does this compare to heavy non-BFR training?' it was answered in the following module or slide. I was highly impressed with the way Nicholas presented this course and the information presented.",
  },
  {
    name: "Shaquan Garnette",
    quote:
      "The depth of the content was fantastic. I will likely go through it again and take more notes now that I have a better understanding of how I will be applying BFR myself.",
  },
  {
    name: "Brenden Aylward",
    quote:
      "Well organized, thorough, evidence based. Did a great job taking a topic that would seem to be only effective to teach in person and made me more confident to start practicing it.",
  },
  {
    name: "Peter Schley",
    quote:
      "The different modules were good. Nice to break things up. The questions were helpful for some retention. Good overall format and flow of material.",
  },
] as const;

// Phase 2c (2026-05-13): /reviews video-testimonials section. Four VEED.io
// embeds in 16:9 plus 2 UGC vertical-format clips parked for later (Pascal
// hasn't supplied thumbnails for those yet). Thumbnail webps live under
// public/images/testimonials/video/{name}.webp (converted from PNG via
// Pillow; sources moved to _Trash after conversion).
export const VIDEO_TESTIMONIALS = [
  {
    name: "Matthew D'Elia",
    role: "Physical Therapist",
    veedId: "6c84a8f4-2a11-4f7d-b5f7-78c84bb6c6b5",
    poster: "/images/testimonials/video/matthew-delia.webp",
    aspect: "16/9",
  },
  {
    name: "Erica Marcano",
    role: "Athletic Trainer, MS, ATC, CSCS",
    veedId: "0a56db20-a55f-4fba-b990-fdbde79b2add",
    poster: "/images/testimonials/video/erica-marcano.webp",
    aspect: "16/9",
  },
  {
    name: "Keith Steigbigel",
    role: "PT, DPT, OCS, CSCS — Owner, Prolete PT",
    veedId: "9d70c743-2afa-439b-bc5d-c76737fa34b3",
    poster: "/images/testimonials/video/keith-steigbigel.webp",
    aspect: "16/9",
  },
  {
    name: "Dawn Thomas",
    role: "Physical Therapist",
    veedId: "fb515674-f11a-4f58-884f-9bddf9cc3eb4",
    poster: "/images/testimonials/video/dawn-thomas.webp",
    aspect: "16/9",
  },
] as const;

// TODO: thumbnails pending from Pascal — parked here so they don't get lost.
// When Pascal supplies posters, add them to VIDEO_TESTIMONIALS above with
// aspect: "9/16" and the corresponding poster path.
// - Arash from PreHab Guys: veedId "e732af41-7b20-4ba5-8750-22eb98853d6f"
// - Brazilian Researcher:    veedId "163ca6a1-f6c2-45bc-acc3-4424f580ba80"

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
    title: "BFR Masters Webinar — What's New in BFR 2021",
    ceus: "2",
    totalDuration: "1h 35m",
    moduleCount: 6,
    courseValue: 79,
    promoVideoKey: "course3Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-3.jpg",
    posterSrc: "/images/posters/course-3.jpg",
    summary:
      "Five 2021 papers walked through with the lead author's commentary on what each finding means for the clinic floor.",
    modules: [
      { n: 1, title: "Introduction to The BFR Pros", duration: "12:06", type: "video", description: "Short background of The BFR Pros and the five 2021 papers that frame the rest of the course." },
      { n: 2, title: "Perceived Barriers to BFR — Rolnick (2021)", duration: "18:01", type: "video", description: "Reviews and discusses the medical-screening funnel algorithm that reduces risk when applying BFR to patients who shouldn't receive it." },
      { n: 3, title: "Repetition Failure & Applied Pressure — Carqueira (2021)", duration: "12:02", type: "video", description: "Reviews and discusses the minimum pressure shown to meaningfully accelerate fatigue, and speculates on its clinical implications." },
      { n: 4, title: "BFR Improves Strength in Chronic Atrophic Post-Surgical Patients — Noyes (2021)", duration: "14:46", type: "video", description: "Reviews and discusses the successful application of BFR in chronic atrophic post-surgical knee patients." },
      { n: 5, title: "Muscle Activation & Applied BFR Pressure — De Queiros (2021)", duration: "17:22", type: "video", description: "Reviews and discusses muscle activation and applied pressure, and its potential role in BFR exercise." },
      { n: 6, title: "BFR Induces Comparable Patellar Tendon Changes as Heavy Load — Centner (2021)", duration: "20:27", type: "video", description: "Reviews and discusses how BFR can improve tendon properties in a similar manner as heavy-load strength training." },
    ] as CourseModule[],
  },
  {
    slug: "course-4",
    title: "BFR Masters Webinar — Device Features 2024",
    ceus: "2",
    totalDuration: "1h 38m",
    moduleCount: 2,
    courseValue: 79,
    promoVideoKey: "course4Promo" as const,
    coatOfArmsSrc: "/images/course-arms/course-4.jpg",
    posterSrc: "/images/posters/course-4.jpg",
    summary:
      "Comparative review of 2024 cuff design data plus a practical knowledge assessment on wrapping straps versus elastic bands.",
    modules: [
      { n: 1, title: "BFR Masters Webinar 2024 — Devices, Autoregulation, Bladder Design, Cuff Width", duration: "97:48", type: "video", description: "Device features that are relevant to the physiology, perception, and safety of BFR exercise: autoregulation, bladder design (single- vs multi-chambered), set/interface pressure." },
      { n: 2, title: "Knowledge Assessment — Practical BFR with Wrapping Straps vs Elastic Bands", duration: "Quiz", type: "quiz", description: "When is it appropriate to perform practical BFR with wrapping straps versus elastic bands?" },
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
