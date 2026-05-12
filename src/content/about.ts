// /about, /about/nicholas-rolnick, /about/nicholas-licameli copy.
// Single source of truth for all three pages.
//
// Scope discipline (brand-guide.md Copy & Customer Journey Principles):
//   - /about sells the MISSION (equipment-agnostic, research-led, implementation-first).
//     It does NOT sell the cert. One soft gateway at the end → /get-certified.
//   - /about/nicholas-rolnick installs Belief 5 (research authority) by stacking
//     publications, education, media, and clinical practice. One soft gateway
//     at the end → /get-certified.
//   - /about/nicholas-licameli installs the co-instructor credibility and the
//     rehab-to-performance bridge. One soft gateway at the end → /get-certified.
//
// Headline punctuation (brand-guide.md Principle 5):
//   - Display headlines never end with a terminal period.

// ----- /about ----------------------------------------------------------------

export const ABOUT_META = {
  title: "About The BFR Pros | Equipment-Agnostic BFR Certification",
  description:
    "The BFR Pros is the equipment-agnostic blood flow restriction certification founded by Dr. Nicholas Rolnick and Dr. Nicholas Licameli. We teach the technique. The cuff is the practitioner's choice.",
  canonicalPath: "/about",
  ogImagePath: "/og/home",
} as const;

export const ABOUT_HERO = {
  eyebrow: "About The BFR Pros",
  headline: "We teach the technique, not the cuff",
  subhead:
    "The Complete BFR Certification is built on 72+ peer-reviewed publications by Dr. Nicholas Rolnick. He treats post-op patients in Manhattan every week. Dr. Nicholas Licameli bridges rehab-side programming and athletic performance. Together they built the certification we couldn't find when we went looking for it.",
  photoSrc: "/images/hero/hero-banner.jpg",
  photoAlt: "Dr. Nicholas Rolnick applying a blood flow restriction cuff to a patient's leg",
} as const;

// The origin story. Belief 3 (equipment-agnostic positioning) installation,
// written as a narrative, not a feature list.
export const ABOUT_STORY = {
  eyebrow: "Why we built this",
  headline: "Every BFR course we found was tied to a cuff",
  paragraphs: [
    "Owens Recovery Science is excellent, but it's tied to the Delfi PTS at $5,000 and up. NE Seminars bundles a single brand. Smart Tools is a brand. Even the platforms that don't sell cuffs lean on partnerships with companies that do. The result: practitioners learn what one manufacturer makes, then commit to that ecosystem for the next five years.",
    "Dr. Rolnick had been publishing peer-reviewed BFR research since 2018. Dr. Licameli was bridging strength coaching and rehab in clinical settings. They kept hearing the same question from licensed PTs, ATs, and S&C coaches: which BFR certification is actually evidence-based and which cuff is the right one for my practice? Two different questions. Most courses answered the second one and skipped the first.",
    "The Complete BFR Certification was built on the answer to the first question. 72+ peer-reviewed publications. 37 modules. 11.75 CEUs. The protocols, screening, and pressure science taught independent of any single device. Practitioners pick the cuff that fits their clinic and budget after they understand the technique, not before.",
    "1,467+ certified PTs, ATs, and S&C coaches now hold this credential. One of them has used the 30-day money-back guarantee. The other 1,466 implemented BFR with their first patient and stayed.",
  ],
} as const;

// Three brand principles. Each is a load-bearing differentiator from
// 06-competitor-analysis.md, framed as a stand-alone position the brand
// can defend in any pitch.
export const ABOUT_PRINCIPLES = {
  eyebrow: "What we stand for",
  headline: "Three principles, applied to every module",
  principles: [
    {
      eyebrow: "Principle 1",
      title: "Equipment-agnostic",
      body:
        "We teach the technique. The cuff is the practitioner's choice. The curriculum walks through Delfi pneumatic systems, SmartCuffs, B Strong elastic bands, and wrapping straps with their specific evidence base and clinical use cases. No vendor relationship dictates which one we recommend. The bonus cuff-discount codes are a perk, not a requirement.",
    },
    {
      eyebrow: "Principle 2",
      title: "Research-led",
      body:
        "Every protocol is grounded in peer-reviewed research. Dr. Rolnick's 72+ publications form the spine of the curriculum, and every cited paper is in the downloadable module-by-module bibliography. When the research updates, the curriculum updates. We tell practitioners what the literature says and where the literature is still emerging, not what makes for a confident-sounding marketing line.",
    },
    {
      eyebrow: "Principle 3",
      title: "Implementation-first",
      body:
        "Most CE courses stop at the certificate. The Complete BFR Certification is built so practitioners apply BFR with their first patient by week two: screening, pressure prescription, programming, documentation, and the conversation with the referring surgeon. Dr. Rolnick answers implementation questions in the private graduate community every week.",
    },
  ],
} as const;

// Team members on the parent /about page. Mirrors the live thebfrpros.com/our-team
// roster verbatim: same 5 humans, same role labels, same bio framing. Rolnick
// and Licameli link to deep bio sub-pages; the other three carry their bio
// paragraph inline on the card until their deep bios ship.
//
// Source: https://www.thebfrpros.com/our-team plus individual bio pages
// (/nick-rolnick, /nick-licameli, /mathias-thoelen, /marty-rolnick, /erica-marcano).
// Pulled verbatim 2026-05-12. Role labels are the live-site SMALL-CAPS labels.
export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  photoSrc?: string;
  initials?: string;
  profileHref?: string;
  profileLabel?: string;
};

export const ABOUT_TEAM = {
  eyebrow: "Our team",
  headline: "Built by passionate clinicians",
  intro:
    "The BFR Pros are proud to have a team of passionate clinicians working to ensure that both our colleagues and the populations they serve have the best possible experience with Blood Flow Restriction Training. Together, we're doing our part to make the world a happier place.",
  members: [
    {
      name: "Dr. Nicholas Rolnick",
      role: "Founder-Owner",
      credentials: "PT, MS, CSCS",
      bio:
        "Author of 72+ peer-reviewed BFR publications. Doctor of Physical Therapy from Columbia University with honors. Faculty at Lehman College CUNY and Concordia University Chicago. Active clinical practice in Manhattan. Featured in CNN, the Wall Street Journal, Forbes, ESPN, and PubMed.",
      photoSrc: "/images/instructors/rolnick-large.jpg",
      profileHref: "/about/nicholas-rolnick",
      profileLabel: "Read the full profile",
    },
    {
      name: "Nick Licameli",
      role: "Clinical Instructor / Blog Author",
      credentials: "PT, DPT",
      bio:
        "Director of an outpatient therapy clinic and Injury Reduction Specialist for 3D Muscle Journey. Active natural bodybuilder competitor. Bridges rehab-side BFR programming and athletic performance applications across the curriculum.",
      photoSrc: "/images/instructors/licameli.jpg",
      profileHref: "/about/nicholas-licameli",
      profileLabel: "Read the full profile",
    },
    {
      name: "Mathias Thoelen",
      role: "Clinical Instructor",
      credentials: "Sports Physical Therapist",
      bio:
        "Belgian Sports Physical Therapist at Anna TopSupport Eindhoven in The Netherlands. Works daily with Sports Doctors and Orthopedic Surgeons on conservative and post-operative rehabilitation of recreational and elite athletes. Graduated cum laude from Hasselt University in 2020 with a BSc and MSc in Rehabilitation Sciences & Sports Physical Therapy. Teaches BFR Workshops in Belgium and The Netherlands for The BFR Pros and is engaged in research on BFR training in post-operative patients.",
      initials: "MT",
    },
    {
      name: "Marty Rolnick",
      role: "Philosopher / Marketing Lunatic / Ideaholic",
      credentials: "",
      bio:
        "Philosopher, marketing lunatic, and ideaholic whose craft is the conceiving and spreading of sustainable ideas. An idealist who believes the best solutions are those where all stakeholders benefit. Across his life he has been father, athlete, corporate executive, and entrepreneur. Now a teacher, coach, and mentor who helps small business owners and entrepreneurs achieve their dreams.",
      initials: "MR",
    },
    {
      name: "Erica Marcano",
      role: "Consultant",
      credentials: "MS, ATC, CSCS",
      bio:
        "The Notorious ATC. BOC-certified and NYS-licensed Athletic Trainer, NSCA-certified Strength and Conditioning Specialist, American Red Cross CPR Instructor, BFR-certified, Reiki Master, and Breathwork & Meditation practitioner. MS in Athletic Training from LIU Brooklyn (2005). Past Sports Medicine at Penn State, then back to LIU Brooklyn as Assistant Athletic Trainer and Associate Professor. Northeast Regional Coordinator with The Rugby Research and Injury Prevention Group and Athletic Trainer for the USOC-sanctioned Northeast Rugby Academy.",
      initials: "EM",
    },
  ] as ReadonlyArray<TeamMember>,
  mascot: {
    name: "Buff",
    role: "Mascot",
    tagline: "#CHASETHEPUMP!",
    photoSrc: "/images/team/buff.png",
  },
} as const;

export const ABOUT_FINAL_CTA = {
  eyebrow: "The next step",
  headline: "See what's inside the certification",
  body:
    "The Complete BFR Certification teaches the protocols, screening, and pressure science behind everything written above. Built on Dr. Rolnick's 72+ publications, equipment-agnostic, online and self-paced.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/nicholas-rolnick -----------------------------------------------

export const ROLNICK_META = {
  title: "Dr. Nicholas Rolnick | 72+ Peer-Reviewed BFR Publications",
  description:
    "Doctor of Physical Therapy. Co-founder and lead instructor of The BFR Pros. 72+ peer-reviewed BFR publications. Faculty at Lehman College CUNY and Concordia University Chicago. Active clinical practice in Manhattan.",
  canonicalPath: "/about/nicholas-rolnick",
  ogImagePath: "/og/home",
} as const;

export const ROLNICK_HERO = {
  eyebrow: "Co-founder, lead instructor",
  headline: "Dr. Nicholas Rolnick",
  credentialsLine: "PT, DPT, MS",
  tagline: "The Human Performance Mechanic",
  subhead:
    "Author of 72+ peer-reviewed BFR publications. Doctor of Physical Therapy from Columbia University with honors. Faculty at Lehman College CUNY and Concordia University Chicago. Active clinical practice in Manhattan.",
  photoSrc: "/images/instructors/rolnick-large.jpg",
} as const;

export const ROLNICK_BODY = {
  eyebrow: "The work",
  headline: "Researcher first, clinician every weekday morning",
  paragraphs: [
    "Dr. Rolnick earned his Doctor of Physical Therapy at Columbia University with honors. He completed his Master of Science in Health Promotion Management at American University and authored Chapter 12 of the National Academy of Sports Medicine textbook on Warm-up, Recovery, and Injury Prevention. He sits as faculty in Exercise Science at Lehman College CUNY and at Concordia University Chicago's MS Exercise Science program.",
    "His 72+ peer-reviewed BFR publications span Frontiers in Physiology, the British Journal of Sports Medicine, the Strength and Conditioning Journal, Medicine and Science in Sports and Exercise, ScienceDirect, and Sage Journals. The Pillars of BFR Training framework, the post-surgical screening algorithm, and the pressure-and-perception research that anchor The Complete BFR Certification all came out of that body of work.",
    "He maintains an active outpatient physical therapy practice in Manhattan and sees patients every week. The post-op ACL at week six, the rotator cuff repair at month three, the geriatric patient whose joints cannot tolerate heavy loading. The cases that show up in the curriculum are the cases he treats on Monday morning. The certification is built on the chart from Friday.",
    "Beyond research and clinical practice, Dr. Rolnick's work has been cited in CNN, the Wall Street Journal, Forbes, ESPN, Men's Health, GQ, the Military Times, the NSCA, and Eat This Not That. He hosts the BFR Better-For-Results Podcast and has appeared on more than 15 guest podcasts covering BFR, hypertrophy, rehab, and the integration of research into clinical practice.",
  ],
} as const;

export const ROLNICK_STATS = [
  { value: "72+", label: "peer-reviewed BFR publications" },
  { value: "10+", label: "years in active Manhattan practice" },
  { value: "2", label: "university faculty appointments" },
  { value: "14+", label: "major media features" },
] as const;

export const ROLNICK_CREDENTIALS = {
  eyebrow: "Education and appointments",
  headline: "Where the credentials come from",
  items: [
    {
      role: "Doctor of Physical Therapy (honors)",
      org: "Columbia University",
    },
    {
      role: "MS, Health Promotion Management",
      org: "American University",
    },
    {
      role: "Faculty, Exercise Science",
      org: "Lehman College CUNY",
    },
    {
      role: "Faculty, MS Exercise Science",
      org: "Concordia University Chicago",
    },
    {
      role: "Chapter 12 author (Warm-up, Recovery, Injury Prevention)",
      org: "National Academy of Sports Medicine textbook",
    },
    {
      role: "Co-founder and lead instructor",
      org: "The BFR Pros",
    },
  ],
} as const;

export const ROLNICK_PUBLISHED = {
  eyebrow: "Published in",
  headline: "Dr. Rolnick's research appears in the journals clinicians actually read",
} as const;

export const ROLNICK_FEATURED = {
  eyebrow: "As featured in",
  headline: "Dr. Rolnick's BFR work has reached mainstream and clinical press",
} as const;

export const ROLNICK_HOSTED = {
  eyebrow: "On air",
  headline: "BFR Better-For-Results Podcast and 15+ guest appearances",
  body:
    "Dr. Rolnick hosts the BFR Better-For-Results Podcast (Apple, Spotify, YouTube) and appears as a guest on podcasts across the rehab, strength-and-conditioning, and pain-science fields.",
  ownPodcast: [
    {
      platform: "Apple Podcasts",
      href: "https://podcasts.apple.com/de/podcast/bfr-better-for-results-podcast/id1726669945",
    },
    {
      platform: "Spotify",
      href: "https://creators.spotify.com/pod/profile/betterforresultspodcast/episodes/Who-Is-The-Human-Performance-Mechanic---BFR-Better-For-Results-Podcast---Ep--01-e2e6hid",
    },
    {
      platform: "YouTube",
      href: "https://www.youtube.com/watch?v=cRvD7qKUFnQ&list=PLXUxkOcM1cbuNd7KbJrPnYfsmUdD_ZEUi",
    },
  ],
} as const;

export const ROLNICK_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Learn BFR from the source",
  body:
    "The Complete BFR Certification is built on Dr. Rolnick's 72+ peer-reviewed publications and the cases he treats every week. 37 modules, 11.75 CEUs, equipment-agnostic.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/nicholas-licameli ----------------------------------------------

export const LICAMELI_META = {
  title: "Dr. Nicholas Licameli | Co-Instructor, The BFR Pros",
  description:
    "Doctor of Physical Therapy. Director of an outpatient therapy clinic. Injury Reduction Specialist for 3D Muscle Journey. Co-instructor of The Complete BFR Certification. Bridges rehab-side BFR programming and athletic performance applications.",
  canonicalPath: "/about/nicholas-licameli",
  ogImagePath: "/og/home",
} as const;

export const LICAMELI_HERO = {
  eyebrow: "Co-founder, co-instructor",
  headline: "Dr. Nicholas Licameli",
  credentialsLine: "PT, DPT",
  tagline: "Director of Outpatient Therapy",
  subhead:
    "Doctor of Physical Therapy. Director of an outpatient therapy clinic. Injury Reduction Specialist for 3D Muscle Journey. Active natural bodybuilder competitor. Bridges rehab-side BFR programming and athletic performance applications across the curriculum.",
  photoSrc: "/images/instructors/licameli.jpg",
} as const;

export const LICAMELI_BODY = {
  eyebrow: "The work",
  headline: "The bridge between rehab and performance",
  paragraphs: [
    "Dr. Licameli directs an outpatient physical therapy clinic and serves as Injury Reduction Specialist for 3D Muscle Journey, a coaching practice for natural bodybuilders. He is himself a competitive natural bodybuilder. The clinical-floor practitioner and the under-the-bar lifter live in the same person. That dual lens is rare in BFR education.",
    "Most BFR certifications are written by rehab specialists. The protocols read like rehab. The case examples are rehab. The athletic side, in-season maintenance, hypertrophy at low loads, performance applications, return-to-sport, get a paragraph and a footnote. Dr. Licameli's chapters in The Complete BFR Certification cover that side at the same depth Dr. Rolnick covers the rehab side.",
    "When a graduate of the certification asks how to integrate BFR with an athlete in-season, or how to layer ischemic preconditioning into a strength program, or how to apply BFR to the patient who recovered enough to load harder, Dr. Licameli's material is the answer.",
  ],
} as const;

export const LICAMELI_AREAS = {
  eyebrow: "What he covers in the certification",
  headline: "Where Dr. Licameli's chapters fit",
  items: [
    "Athletic BFR programming and in-season maintenance protocols",
    "Hypertrophy-focused BFR at 20-40% one-rep max",
    "Ischemic preconditioning for performance",
    "Bridging post-surgical rehab into return-to-sport loading",
    "Bodybuilding-adjacent applications most rehab-led courses skip entirely",
  ],
} as const;

export const LICAMELI_ROLES = {
  eyebrow: "Practice and affiliations",
  headline: "Where the work happens",
  items: [
    { role: "Doctor of Physical Therapy", org: "" },
    { role: "Director, outpatient therapy clinic", org: "" },
    { role: "Injury Reduction Specialist", org: "3D Muscle Journey" },
    { role: "Active natural bodybuilder competitor", org: "" },
    { role: "Co-founder and co-instructor", org: "The BFR Pros" },
  ],
} as const;

export const LICAMELI_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Where Dr. Licameli's material fits in your practice",
  body:
    "The Complete BFR Certification teaches both rehab-side protocols and athletic applications. Dr. Licameli's chapters cover everything from in-season maintenance to ischemic preconditioning to the bodybuilding-adjacent applications most rehab courses skip.",
  primaryCta: "See the certification",
  primaryCtaHref: "/get-certified",
} as const;
