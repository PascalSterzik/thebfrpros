// Single source of truth for brand-locked values used across every page.
// If a value lives in CLAUDE.md, brand-guide.md, BUILD-BRIEF.md, or the dossier,
// it lives here too. Update in one place, change the whole site.

export const ENROLL_URL =
  "https://bfr-pros.teachable.com/bundles/the-complete-bfr-certification?affcode=626725_rzfv6exi";

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
  credentials: "PT, DPT, MS",
  tagline: "The Human Performance Mechanic",
  city: "Manhattan, New York",
  alumniOf: [
    { name: "Columbia University", role: "Doctor of Physical Therapy (honors)" },
    { name: "American University", role: "MS, Health Promotion Management" },
  ],
  affiliations: [
    "Lehman College CUNY (Exercise Science faculty)",
    "Concordia University Chicago (MS Exercise Science faculty)",
    "NASM Chapter 12 author (Warm-up, Recovery, Injury Prevention)",
  ],
  publicationsLine: `${STATS.publications} peer-reviewed BFR publications`,
  mediaList: ["CNN", "Wall Street Journal", "Forbes", "ESPN", "Men's Health", "GQ", "PubMed", "NSCA"],
} as const;

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
// at Research/dr-rolnick-publications-and-appearances.md).
export const ROLNICK_PUBLICATIONS = [
  { name: "Frontiers in Physiology, BFR exercise research", src: "/images/research/frontiers.jpg", w: 220, h: 80, href: "https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2022.808622/full" },
  { name: "Medicine & Science in Sports & Exercise", src: "/images/research/medicine-science-sports.jpg", w: 240, h: 80, href: "https://journals.lww.com/acsm-msse/" },
  { name: "Sage Journals, BFR research and clinical outcomes", src: "/images/research/sage-journals.jpg", w: 220, h: 80, href: "https://journals.sagepub.com/doi/full/10.1177/15593258231173494" },
  { name: "ScienceDirect, BFR clinical applications", src: "/images/research/sciencedirect.jpg", w: 220, h: 80, href: "https://www.sciencedirect.com/science/article/abs/pii/S1466853X21000511" },
  { name: "Strength & Conditioning Journal, BFR during aerobic exercise", src: "/images/research/strength-conditioning-journal-1.jpg", w: 240, h: 80, href: "https://journals.lww.com/nsca-scj/Abstract/2020/10000/Can_Blood_Flow_Restriction_Used_During_Aerobic.5.aspx" },
  { name: "Strength & Conditioning Journal, BFR for the physique athlete", src: "/images/research/strength-conditioning-journal-2.jpg", w: 240, h: 80, href: "https://journals.lww.com/nsca-scj/Fulltext/2020/10000/Blood_Flow_Restriction_Training_and_the_Physique.4.aspx" },
] as const;

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
] as const;

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
