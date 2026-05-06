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
  // The same Cloudflare-fronted Vercel project serves all variants; review index is at /.
  routes: {
    index: "/",
    v1: "/get-certified-v1",
    v2: "/get-certified-v2",
    v3: "/get-certified-v3",
  },
} as const;

export const STATS = {
  publications: "50+",
  publicationsExact: 50,
  ceus: "11.75",
  ceusExact: 11.75,
  modules: "37",
  modulesExact: 37,
  reviewCount: 712,
  ratingValue: 4.7,
  clinicsTrusted: "100+",
  certifiedPractitioners: "712+",
  mediaOutlets: "14+",
  yearsInClinic: "10+",
  socialFollowers: "7,350+",
} as const;

export const PRICING = {
  bundlePrice: 449,
  bundleValue: 654,
  savings: 205,
  currency: "USD",
  currencySymbol: "$",
  guaranteeDays: 30,
  averageCompletionWeeks: "4 to 6",
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

export const CEU_APPROVALS = [
  { body: "Board of Certification (BOC)", detail: "Approved Provider AP# P10226", hasLogo: true, logoSrc: "/images/badges/boc-approved.png" },
  { body: "American Physical Therapy Association", detail: "BFR within PT scope of practice", hasLogo: false },
  { body: "New York State PT Board", detail: "Approved through December 11, 2027", hasLogo: true, logoSrc: "/images/badges/apta-ny.png" },
  { body: "New Jersey PT Board", detail: "Approved through January 31, 2026", hasLogo: false },
  { body: "National Athletic Trainers Association", detail: "BFR approved for ATs", hasLogo: false },
] as const;

export const FEATURED_IN = [
  { name: "CNN", src: "/images/featured/cnn.png", w: 120, h: 56 },
  { name: "The Wall Street Journal", src: "/images/featured/wsj.png", w: 180, h: 56 },
  { name: "Forbes", src: "/images/featured/forbes.png", w: 130, h: 56 },
  { name: "ESPN", src: "/images/featured/espn.png", w: 120, h: 56 },
  { name: "Men's Health", src: "/images/featured/mens-health.jpg", w: 140, h: 56 },
  { name: "GQ", src: "/images/featured/gq.png", w: 90, h: 56 },
  { name: "PubMed", src: "/images/featured/pubmed.png", w: 140, h: 56 },
  { name: "NSCA", src: "/images/featured/nsca.webp", w: 120, h: 56 },
] as const;

export const PARTNERS = [
  { name: "Ivy Rehab Network", src: "/images/partners/ivy-rehab.jpg", w: 160, h: 56 },
  { name: "Kinesport", src: "/images/partners/kinesport.png", w: 160, h: 56 },
  { name: "Team ACL", src: "/images/partners/team-acl.png", w: 140, h: 56 },
  { name: "AccessPT", src: "/images/partners/access-pt.png", w: 140, h: 56 },
  { name: "Professional Physical Therapy", src: "/images/partners/professional-pt.png", w: 180, h: 56 },
] as const;

// 11 implementation bonuses (Step 7 stack from offer brief)
export const BONUSES = [
  { n: 1, title: "Liability Waiver Form", line: "Drop-in waiver clinics use to formally adopt BFR into their consent flow." },
  { n: 2, title: "BFR Patient Screening Form", line: "Risk-stratify every candidate against precautions and contraindications before the first cuff goes on." },
  { n: 3, title: "RPE Omni-Res Tool", line: "Validated rating-of-perceived-exertion scale built specifically for BFR sets." },
  { n: 4, title: "BFR Device Discount Codes", line: "Negotiated discounts on Delfi, SmartCuffs, B Strong, and others. Pick the cuff that fits the practice." },
  { n: 5, title: "Module-by-Module Bibliography", line: "Every cited study, every module, with PubMed links. The trail of receipts." },
  { n: 6, title: "Downloadable Course PDF", line: "Searchable workbook for the clinic floor. Quick reference between patients." },
  { n: 7, title: "Precautions and Contraindications List", line: "Pulled straight from the Frontiers literature review. Laminate it for the cuff cart." },
  { n: 8, title: "Nutritional Recommendations for BFR", line: "Carb timing, protein dosing, and hydration cues for the recovery window." },
  { n: 9, title: "Athletic BFR Programming Guide", line: "In-season maintenance, hypertrophy at low loads, and ischemic preconditioning protocols." },
  { n: 10, title: "BFR Training Marketing Video", line: "Co-brandable explainer to introduce BFR to your patients without writing a word of new copy." },
  { n: 11, title: "Private Facebook Group", line: "100+ certified clinicians. Dr. Rolnick answers implementation questions in real time." },
] as const;

// Three named-credential testimonials, outcome-specific (per dossier).
export const TESTIMONIALS = [
  {
    name: "Dr. Clinton H. Lee, PT, DPT, CSCS",
    role: "Owner, PhysioStrength",
    quote:
      "I shopped Owens Recovery Science and Smart Tools first. I picked The BFR Pros because the curriculum stays current with emerging research instead of trailing behind it.",
    angle: "research-authority",
  },
  {
    name: "Dr. Keith Steigbigel, PT, DPT, OCS, CSCS",
    role: "Owner, Prolete PT",
    quote:
      "Game-changer for athletes and orthopedic patients. Dr. Rolnick's clinical experience is the difference between a course you watch and a course you can apply on Monday.",
    angle: "clinical-outcomes",
  },
  {
    name: "Dr. Brian D. Whyte, DPT, CLT, CSCS",
    role: "Owner, Perfusion Point Therapy",
    quote:
      "I now know which patients are right for BFR, which patients are not, and how to integrate it into the plans I was already building. That clarity is what was missing.",
    angle: "implementation",
  },
] as const;

// 4 courses / 37 modules / 11.75 CEU breakdown for the curriculum accordion.
export const CURRICULUM = [
  {
    title: "Introduction to BFR Training",
    ceus: "5.5 CEUs",
    moduleCount: 13,
    bullets: [
      "Foundations: 60 years of BFR research from Sato (1966) to present-day clinical adoption",
      "Mechanisms: why low-load BFR drives strength gains comparable to heavy resistance training",
      "Pressure determination: limb occlusion pressure, percentage prescription, and the operator-error gap automated cuffs solve",
      "Patient screening: precautions and absolute contraindications, pulled from the Frontiers literature review",
      "Equipment evaluation framework that works whether you use Delfi, SmartCuffs, B Strong, or LiveBand",
    ],
  },
  {
    title: "Clinical Application: Optimize Rehab Outcomes",
    ceus: "2.5 CEUs",
    moduleCount: 12,
    bullets: [
      "Post-op ACL: closing the late-stage LSI gap when heavy loading is still off the table",
      "Total joint replacement: building strength inside the protected loading window",
      "Rotator cuff and shoulder: integrating BFR into early-stage rehab without compromising healing",
      "Geriatric and arthritic populations: gaining strength under load thresholds the patient can tolerate",
      "Documentation, billing language, and clinic-fit considerations for the first 90 days of adoption",
    ],
  },
  {
    title: "Masters Series, Module 14: Clinical Rounds",
    ceus: "2.25 CEUs",
    moduleCount: 7,
    bullets: [
      "Case-based clinical rounds with Dr. Rolnick walking through real patient decisions",
      "Edge cases: patients on anticoagulants, hypertension, prior DVT, athlete special populations",
      "Programming integration: where BFR replaces a set, where it complements one, where it should not be in the plan at all",
      "Cross-discipline collaboration patterns with surgeons and strength coaches",
    ],
  },
  {
    title: "What's New in BFR + Device Features Webinars",
    ceus: "1.5 CEUs",
    moduleCount: 5,
    bullets: [
      "Quarterly research updates so the certification keeps current after the purchase",
      "Comparative review of 2024-2025 BFR cuff design data, including Dr. Rolnick's own published work",
      "Device feature deep-dive: arterial Doppler vs estimation, automated vs manual, app reliability",
      "Future-proofing: what to look for in the next generation of cuffs without committing to one brand today",
    ],
  },
] as const;

// Verbatim avatar phrases (must appear somewhere in body copy across the variants).
// Pulled from 05-avatar-journal.md; the variants distribute them.
export const AVATAR_PHRASES = {
  PTSchoolReason: "I went to PT school because I wanted to actually help people get better.",
  outcomesPlateau: "I'm watching my outcomes plateau in week 14.",
  patientsCanTell: "Patients can tell when you're stalling.",
  techniqueNotCuff: "The certification is the technique, not the cuff.",
  marketedToByExClinicians: "Half of being a clinician is being marketed to by people who used to be clinicians.",
  fourYearsTellingMyself: "I've been telling myself I'll get to it for four years.",
  CEvsSpecialty: "I've been treating the BFR decision like it's a CE choice when it's actually a specialty choice.",
  notAGeneralist: "I am not going to be a generalist for 25 more years.",
  SarahThreeDoorsDown: "Sarah, three doors down, just hung a 'BFR provided here' sign on her clinic window.",
  firefighter:
    "Can I ask if there's a certain cuff you recommend for personal use? I am recovering from a recent patellar dislocation and would like to do what I can to get back to my firefighting job.",
} as const;

export const COMPETITOR_TABLE = [
  {
    name: "The BFR Pros",
    isUs: true,
    research: "50+ peer-reviewed publications",
    equipment: "Equipment-agnostic, works with any quality cuff",
    modules: "37 modules",
    ceus: "11.75 CEUs",
    price: "$449 single bundle",
    guarantee: "30-day money-back",
  },
  {
    name: "Owens Recovery Science",
    isUs: false,
    research: "Practitioner-led",
    equipment: "Tied to Delfi PTS ($5,000+ device required)",
    modules: "1-day in-person",
    ceus: "Variable by location",
    price: "Tuition + Delfi unit",
    guarantee: "Not advertised",
  },
  {
    name: "NE Seminars / UT BFRT",
    isUs: false,
    research: "University-backed",
    equipment: "Bundled cuffs (single brand)",
    modules: "Online certification",
    ceus: "Included",
    price: "$649 bundle (cuffs included)",
    guarantee: "Not advertised",
  },
  {
    name: "PESI BFR course",
    isUs: false,
    research: "Generic CE platform",
    equipment: "None included",
    modules: "Single course",
    ceus: "8.5 CEUs",
    price: "$250 list, often discounted",
    guarantee: "Not advertised",
  },
  {
    name: "Mike Reinold online course",
    isUs: false,
    research: "Practitioner-led",
    equipment: "Reviews multiple cuffs",
    modules: "Online course",
    ceus: "Included",
    price: "Mid-tier",
    guarantee: "Not advertised",
  },
] as const;
