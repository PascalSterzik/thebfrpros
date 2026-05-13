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
  highlight: "the technique",
  subhead:
    "The Complete BFR Certification is built on 72+ peer-reviewed publications by Dr. Nicholas Rolnick. He treats post-op patients in Manhattan every week. Dr. Nicholas Licameli bridges rehab-side programming and athletic performance. Together they built the certification we couldn't find when we went looking for it.",
  photoSrc: "/images/hero/hero-banner.webp",
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
      credentials: "PT, DPT, MS, CSCS",
      bio:
        "Author of 72+ peer-reviewed BFR publications. Doctor of Physical Therapy from Columbia University with honors. Adjunct Assistant Professor of Physical Therapy at New York Medical College. Topic Editor at Frontiers in Physiology and Frontiers in Sports and Active Living. Active clinical practice in Manhattan. Founded The BFR Pros, LLC in June 2018.",
      photoSrc: "/images/team/nick-rolnick.webp",
      profileHref: "/about/nicholas-rolnick",
      profileLabel: "Read the full profile",
    },
    {
      name: "Nick Licameli",
      role: "Clinical Instructor / Blog Author",
      credentials: "PT, DPT",
      bio:
        "Director of an outpatient therapy clinic and Injury Reduction Specialist for 3D Muscle Journey. Active natural bodybuilder competitor. Bridges rehab-side BFR programming and athletic performance applications across the curriculum.",
      photoSrc: "/images/team/nick-licameli.webp",
      profileHref: "/about/nicholas-licameli",
      profileLabel: "Read the full profile",
    },
    {
      name: "Mathias Thoelen",
      role: "Clinical Instructor",
      credentials: "Sports Physical Therapist",
      bio:
        "Belgian Sports Physical Therapist at Anna TopSupport Eindhoven in The Netherlands. Works with Sports Doctors and Orthopedic Surgeons on conservative and post-operative rehabilitation of athletes from recreational to elite. Teaches BFR Workshops in Belgium and The Netherlands for The BFR Pros.",
      photoSrc: "/images/team/mathias-thoelen.webp",
      profileHref: "/about/mathias-thoelen",
      profileLabel: "Read the full profile",
    },
    {
      name: "Marty Rolnick",
      role: "Philosopher / Marketing Lunatic / Ideaholic",
      credentials: "",
      bio:
        "Philosopher, marketing lunatic, and ideaholic whose craft is the conceiving and spreading of sustainable ideas. An idealist who believes the best solutions are those where all stakeholders benefit. Teacher, coach, and mentor to small business owners and entrepreneurs.",
      photoSrc: "/images/team/marty-rolnick.webp",
      profileHref: "/about/marty-rolnick",
      profileLabel: "Read the full profile",
    },
    {
      name: "Erica Marcano",
      role: "Consultant",
      credentials: "MS, ATC, CSCS",
      bio:
        "The Notorious ATC. BOC-certified Athletic Trainer, NSCA Strength & Conditioning Specialist, BFR-certified, Reiki Master. Associate Professor at LIU Brooklyn and Northeast Regional Coordinator with The Rugby Research and Injury Prevention Group.",
      photoSrc: "/images/team/erica-marcano.webp",
      profileHref: "/about/erica-marcano",
      profileLabel: "Read the full profile",
    },
  ] as ReadonlyArray<TeamMember>,
  mascot: {
    name: "Buff",
    role: "Mascot",
    tagline: "#CHASETHEPUMP!",
    photoSrc: "/images/team/buff.webp",
  },
} as const;

export const ABOUT_FINAL_CTA = {
  eyebrow: "The next step",
  headline: "Ready to apply BFR yourself?",
  body:
    "The Complete BFR Certification teaches the protocols, screening, and pressure science behind everything written above. Built on Dr. Rolnick's 72+ publications, equipment-agnostic, online and self-paced.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/nicholas-rolnick -----------------------------------------------

export const ROLNICK_META = {
  title: "Dr. Nicholas Rolnick | 72+ Peer-Reviewed BFR Publications",
  description:
    "Doctor of Physical Therapy, NSCA CSCS. Co-founder and lead instructor of The BFR Pros. 72+ peer-reviewed BFR publications. Adjunct Assistant Professor of Physical Therapy at New York Medical College. Topic Editor at Frontiers in Physiology and Frontiers in Sports and Active Living. Active clinical practice in Manhattan.",
  canonicalPath: "/about/nicholas-rolnick",
  ogImagePath: "/og/home",
} as const;

export const ROLNICK_HERO = {
  eyebrow: "Co-founder, lead instructor",
  headline: "Dr. Nicholas Rolnick",
  credentialsLine: "PT, DPT, MS, CSCS",
  tagline: "The Human Performance Mechanic",
  subhead:
    "Author of 72+ peer-reviewed BFR publications. Doctor of Physical Therapy from Columbia University with honors. Adjunct Assistant Professor of Physical Therapy at New York Medical College. Topic Editor at Frontiers in Physiology and Frontiers in Sports and Active Living. Active clinical practice in Manhattan.",
  photoSrc: "/images/instructors/rolnick-large.jpg",
} as const;

export const ROLNICK_BODY = {
  eyebrow: "The work",
  headline: "Researcher first, clinician every weekday morning",
  paragraphs: [
    "Dr. Rolnick earned his Doctor of Physical Therapy at Columbia University with honors, after a Master of Science in Health Promotion Management at American University and a Bachelor of Arts in Biology at Franklin & Marshall College. He authored Chapter 12 of the National Academy of Sports Medicine textbook on Warm-up, Recovery, and Injury Prevention, and he co-authored the Smart Tools Level One BFR Course Manual in 2018, a foundational curriculum still in wide use today. He is a New York State licensed Physical Therapist (license #0416481, valid through 2029) and an NSCA Certified Strength and Conditioning Specialist (license #201175480, current through Dec 2026). He founded The BFR Pros, LLC in June 2018, and on September 4, 2020 launched the on-demand Introduction to BFR Training course that became the spine of the certification.",
    "Today, Dr. Rolnick is Adjunct Assistant Professor of Physical Therapy at New York Medical College in Valhalla, advising student BFR research projects. He previously served as faculty at Lehman College CUNY (Kinesiology and Biomechanics, 2019 – 2025) and at Concordia University Chicago (Strength and Conditioning, Kinesiology, 2017 – 2021). He is also Topic Editor for Frontiers in Physiology and Frontiers in Sports and Active Living across Volumes I and II of the Impact of Blood Flow Restriction Device Features research collection (2024 – 2026), and a peer reviewer for more than 26 named journals.",
    "His 72+ peer-reviewed BFR publications span Frontiers in Physiology, the British Journal of Sports Medicine, the Strength and Conditioning Journal, Medicine and Science in Sports and Exercise, the Scandinavian Journal of Medicine and Science in Sports, Sports Medicine Open, and many others. The Pillars of BFR Training framework, the post-surgical screening algorithm, and the pressure-and-perception research that anchor The Complete BFR Certification all came out of that body of work.",
    "He maintains an active outpatient physical therapy practice in Manhattan and sees patients every week. The post-op ACL at week six, the rotator cuff repair at month three, the geriatric patient whose joints cannot tolerate heavy loading. The cases that show up in the curriculum are the cases he treats on Monday morning. The certification is built on the chart from Friday.",
    "Beyond research and clinical practice, Dr. Rolnick has been personally featured in the New York Post, CNN Life But Better, Men's Health, FOX 32 Chicago, CNET, BLOOM-WFLA-TV, Zenger News, the Scarsdale Inquirer, WESTFAIROnline, WELL+GOOD, AskMen, Eat This Not That, and Vitamin Shop's What's Good. He has been named to UPDOC Media's Top 40 Physical Therapy Influencers and Movement Guides' Top 5 Strength and Conditioning Coach Instagram Accounts, and to WebPT's 12 Physical Therapists to Watch. He hosts the BFR Better-For-Results Podcast and has appeared as a guest on more than 15 podcasts covering BFR, hypertrophy, rehab, and the integration of research into clinical practice.",
  ],
} as const;

export const ROLNICK_STATS = [
  { value: "72+", label: "peer-reviewed BFR publications" },
  { value: "26+", label: "journals peer-reviewed" },
  { value: "10+", label: "years in active Manhattan practice" },
  { value: "14+", label: "major media features" },
] as const;

export const ROLNICK_CREDENTIALS = {
  eyebrow: "Education and appointments",
  headline: "Where the credentials come from",
  items: [
    {
      role: "Doctor of Physical Therapy (honors, 2017)",
      org: "Columbia University",
    },
    {
      role: "MS, Health Promotion Management (2014)",
      org: "American University",
    },
    {
      role: "BA, Biology (2010)",
      org: "Franklin & Marshall College",
    },
    {
      role: "Adjunct Assistant Professor of Physical Therapy (since Jul 2021)",
      org: "New York Medical College, Valhalla NY",
    },
    {
      role: "Topic Editor, Volumes I + II (2024 – 2026)",
      org: "Frontiers in Physiology and Frontiers in Sports and Active Living",
    },
    {
      role: "Peer reviewer for 26+ named journals",
      org: "Frontiers, Scandinavian Journal of Medicine and Science in Sports, Sports Medicine Open, BJSM, PM&R, and others",
    },
    {
      role: "NSCA Certified Strength and Conditioning Specialist",
      org: "License #201175480, current through Dec 2026",
    },
    {
      role: "New York State Licensed Physical Therapist",
      org: "License #0416481, valid through 2029",
    },
    {
      role: "CPR/AED + Basic First Aid certified",
      org: "American Academy of CPR & First Aid, through Aug 17 2026",
    },
    {
      role: "Chapter 12 author (Warm-up, Recovery, Injury Prevention)",
      org: "National Academy of Sports Medicine textbook",
    },
    {
      role: "Co-author, Smart Tools Level One BFR Course Manual (2018)",
      org: "Foundational curriculum still in wide use",
    },
    {
      role: "Founder and lead instructor (since June 2018)",
      org: "The BFR Pros, LLC",
    },
    {
      role: "Author, Introduction to BFR Training (launched Sep 4, 2020)",
      org: "On-demand course at bfrtraining.com (spine of The Complete BFR Certification)",
    },
    {
      role: "Past faculty, Kinesiology and Biomechanics (Aug 2019 – Jul 2025)",
      org: "Lehman College CUNY, Bronx NY",
    },
    {
      role: "Past faculty, Strength and Conditioning + Kinesiology (Jan 2017 – Jul 2021)",
      org: "Concordia University Chicago",
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
  headline: "Ready to learn BFR from the source?",
  body:
    "The Complete BFR Certification is built on Dr. Rolnick's 72+ peer-reviewed publications and the cases he treats every week. 37 modules, 11.75 CEUs, equipment-agnostic.",
  primaryCta: "Explore the certification",
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
    "Dr. Licameli graduated summa cum laude from Ramapo College of New Jersey with a bachelor's in biology, then earned his Doctor of Physical Therapy at Rutgers School of Biomedical and Health Sciences at age 24. He directs an outpatient physical and occupational therapy clinic, serves as the Injury Reduction and Management Specialist for 3D Muscle Journey, and runs his own online physical therapy and wellness company, Strength Together Inc.",
    "He is also a professional natural bodybuilder. The clinical-floor practitioner and the under-the-bar lifter live in the same person. That dual lens is rare in BFR education: most BFR certifications are written by rehab specialists, the protocols read like rehab, and the case examples are rehab. The athletic side, in-season maintenance, hypertrophy at low loads, performance applications, return-to-sport, gets a paragraph and a footnote. Dr. Licameli's chapters in The Complete BFR Certification cover that side at the same depth Dr. Rolnick covers the rehab side.",
    "When a graduate of the certification asks how to integrate BFR with an athlete in-season, or how to layer ischemic preconditioning into a strength program, or how to apply BFR to the patient who recovered enough to load harder, Dr. Licameli's material is the answer.",
  ],
} as const;

// Stats grid for /about/nicholas-licameli. Anchored on the verifiable
// facts from his live bio page (thebfrpros.com/nick-licameli pulled
// 2026-05-12): the DPT credential from Rutgers, the summa cum laude
// undergraduate distinction from Ramapo, the three current business
// affiliations (outpatient clinic director, 3D Muscle Journey specialist,
// Strength Together Inc. founder), and his professional natural-
// bodybuilder status. Numeric where the data supports a count; short
// labels where the achievement itself is the headline. Same BioStats
// component as the Rolnick page.
export const LICAMELI_STATS = [
  { value: "DPT", label: "Doctor of Physical Therapy (Rutgers)" },
  { value: "Summa", label: "Cum laude BSc, Biology (Ramapo)" },
  { value: "3", label: "Active practice and brand affiliations" },
  { value: "Pro", label: "Natural bodybuilder competitor" },
] as const;

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
  eyebrow: "Education and practice",
  headline: "Where the work happens",
  items: [
    { role: "Doctor of Physical Therapy", org: "Rutgers School of Biomedical and Health Sciences" },
    { role: "BSc, Biology (summa cum laude)", org: "Ramapo College of New Jersey" },
    { role: "Director", org: "Outpatient physical and occupational therapy clinic" },
    { role: "Injury Reduction and Management Specialist", org: "3D Muscle Journey" },
    { role: "Founder", org: "Strength Together Inc. (online PT and wellness)" },
    { role: "Professional natural bodybuilder", org: "" },
    { role: "Co-founder and co-instructor", org: "The BFR Pros" },
  ],
} as const;

export const LICAMELI_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Ready to apply BFR across rehab and performance?",
  body:
    "The Complete BFR Certification teaches both rehab-side protocols and athletic applications. Dr. Licameli's chapters cover everything from in-season maintenance to ischemic preconditioning to the bodybuilding-adjacent applications most rehab courses skip.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/mathias-thoelen --------------------------------------------------
// Source: live thebfrpros.com/mathias-thoelen page, pulled 2026-05-12.

export const THOELEN_META = {
  title: "Mathias Thoelen | Clinical Instructor, The BFR Pros",
  description:
    "Sports Physical Therapist at Anna TopSupport Eindhoven (The Netherlands). Clinical Instructor for The BFR Pros, teaching BFR workshops in Belgium and The Netherlands. Cum laude MSc in Rehabilitation Sciences and Sports Physical Therapy, Hasselt University.",
  canonicalPath: "/about/mathias-thoelen",
  ogImagePath: "/og/home",
} as const;

export const THOELEN_HERO = {
  eyebrow: "Clinical Instructor",
  headline: "Mathias Thoelen",
  credentialsLine: "Sports Physical Therapist",
  tagline: "Anna TopSupport Eindhoven",
  subhead:
    "Belgian Sports Physical Therapist working in The Netherlands. Clinical Instructor for The BFR Pros across Belgium and The Netherlands. Engaged in research on BFR training in post-operative patients.",
  photoSrc: "/images/team/mathias-thoelen.webp",
} as const;

export const THOELEN_BODY = {
  eyebrow: "The work",
  headline: "Sports rehab from acute trauma to elite return-to-sport",
  paragraphs: [
    "Mathias Thoelen works at Anna TopSupport Eindhoven in The Netherlands, a sports-medicine center where Sports Physical Therapists collaborate daily with Sports Doctors and Orthopedic Surgeons on the conservative and post-operative rehabilitation of athletes at every level, from recreational to elite. He is responsible for on-field rehabilitation and for screening athletes with acute traumas.",
    "He graduated cum laude from Hasselt University in 2020 with a Bachelor's and Master's of Science in Rehabilitation Sciences and Sports Physical Therapy. He attends new courses regularly to keep his practice grounded in the most current, evidence-based care. He has always sought to surround himself with people who are better at their craft, treating each interaction as a way to push himself further.",
    "Within The BFR Pros, Mathias teaches BFR Workshops across Belgium and The Netherlands. His ambition is to make BFR Training great in Europe by providing evidence-based workshops on the safe and objective application of BFR in different populations. He is also engaged in research on the use of BFR training in post-operative patients.",
  ],
} as const;

export const THOELEN_AREAS = {
  eyebrow: "What he covers in the workshops",
  headline: "Where Mathias's chapters fit",
  items: [
    "On-field rehabilitation and acute-trauma screening for athletes",
    "Conservative and post-operative rehabilitation across recreational and elite athletes",
    "Safe and objective BFR application across different patient and athlete populations",
    "BFR Workshops for clinicians and S&C professionals in Belgium and The Netherlands",
    "Active research on BFR training in post-operative patients",
  ],
} as const;

export const THOELEN_ROLES = {
  eyebrow: "Practice and affiliations",
  headline: "Where the work happens",
  items: [
    { role: "Sports Physical Therapist", org: "Anna TopSupport Eindhoven (The Netherlands)" },
    { role: "Clinical Instructor (Europe)", org: "The BFR Pros" },
    { role: "MSc, Rehabilitation Sciences and Sports Physical Therapy (cum laude, 2020)", org: "Hasselt University" },
    { role: "BSc, Rehabilitation Sciences and Sports Physical Therapy", org: "Hasselt University" },
  ],
} as const;

export const THOELEN_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Ready to apply BFR with confidence?",
  body:
    "The Complete BFR Certification covers the same screening, programming, and protocol decisions Mathias walks practitioners through in his European workshops. 37 modules, 11.75 CEUs, on-demand and self-paced.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/marty-rolnick ----------------------------------------------------
// Source: live thebfrpros.com/marty-rolnick page, pulled 2026-05-12.

export const MARTY_META = {
  title: "Marty Rolnick | Philosopher and Brand Voice, The BFR Pros",
  description:
    "Philosopher, marketing lunatic, and ideaholic at The BFR Pros. Teacher, coach, and mentor to small business owners and entrepreneurs. The brand voice behind The BFR Pros' message.",
  canonicalPath: "/about/marty-rolnick",
  ogImagePath: "/og/home",
} as const;

export const MARTY_HERO = {
  eyebrow: "Philosopher / Marketing Lunatic / Ideaholic",
  headline: "Marty Rolnick",
  credentialsLine: "Brand and message",
  tagline: "Sustainable ideas built for every stakeholder",
  subhead:
    "Philosopher, marketing lunatic, and ideaholic whose craft is the conceiving and spreading of sustainable ideas. The voice that keeps The BFR Pros' message clear, grounded, and aimed at every stakeholder it touches.",
  photoSrc: "/images/team/marty-rolnick.webp",
} as const;

export const MARTY_BODY = {
  eyebrow: "The craft",
  headline: "Ideas that work for every stakeholder",
  paragraphs: [
    "Marty's craft is the conceiving and spreading of sustainable ideas. He is an idealist who believes the best solutions are the ones where all stakeholders benefit, not the ones that trade one party's gain for another party's loss. That stance shows up in how The BFR Pros writes, sells, and shows up for practitioners and the patients they serve.",
    "He has played many different roles across his life: father, athlete, corporate executive, and entrepreneur. He now works as a teacher, coach, and mentor to small business owners and entrepreneurs, helping them clarify the ideas worth spreading and the businesses worth building. At The BFR Pros, that work translates into the voice and the brand stance behind every piece of communication that goes out.",
  ],
} as const;

export const MARTY_ROLES = {
  eyebrow: "Roles and craft",
  headline: "Where the work happens",
  items: [
    { role: "Philosopher / Marketing Lunatic / Ideaholic", org: "The BFR Pros" },
    { role: "Teacher, coach, and mentor", org: "Small business owners and entrepreneurs" },
    { role: "Past corporate executive and entrepreneur", org: "" },
    { role: "Lifelong athlete and father", org: "" },
  ],
} as const;

export const MARTY_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Ready to apply BFR yourself?",
  body:
    "The voice you hear across The BFR Pros points at one thing: practitioners who can apply BFR with their first patient. The Complete BFR Certification is the work the message points at.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;

// ----- /about/erica-marcano ----------------------------------------------------
// Source: live thebfrpros.com/erica-marcano page, pulled 2026-05-12.

export const MARCANO_META = {
  title: "Erica Marcano | Consultant, The BFR Pros",
  description:
    "BOC-certified Athletic Trainer, NSCA-certified Strength & Conditioning Specialist, BFR-certified, Reiki Master. Associate Professor at LIU Brooklyn. Northeast Regional Coordinator with The Rugby Research and Injury Prevention Group. Consultant for The BFR Pros.",
  canonicalPath: "/about/erica-marcano",
  ogImagePath: "/og/home",
} as const;

export const MARCANO_HERO = {
  eyebrow: "Consultant",
  headline: "Erica Marcano",
  credentialsLine: "MS, ATC, CSCS",
  tagline: "The Notorious ATC",
  subhead:
    "BOC-certified and NYS-licensed Athletic Trainer. NSCA-certified Strength & Conditioning Specialist. American Red Cross CPR Instructor. BFR-certified. Reiki Master. Breathwork and Meditation practitioner. Associate Professor at LIU Brooklyn.",
  // Second portrait (Pascal-supplied 2026-05-12) used here; the original
  // erica-marcano.webp stays on the AboutTeam card on /about so the two
  // contexts show different photos. Both photos available in /public/images/team/
  // and /Assets/Team/.
  photoSrc: "/images/team/erica-marcano-2.webp",
} as const;

export const MARCANO_BODY = {
  eyebrow: "The work",
  headline: "Athletic training, performance, and the academy",
  paragraphs: [
    "Erica Marcano, known as The Notorious ATC, earned her Bachelor of Science in Sports Sciences and her Master of Science in Athletic Training from LIU Brooklyn in 2005. She began her career in the Sports Medicine department at Penn State, handling acute care and rehabilitation of rugby, ice hockey, and tennis athletes, before returning to LIU Brooklyn Sports Medicine as Assistant Athletic Trainer for men's soccer, women's volleyball, track and field, women's lacrosse, and baseball.",
    "Today she is an Associate Professor at LIU Brooklyn, teaching undergraduate and graduate classes for the Athletic Training, Health and Exercise Sciences Division, the Physical Education department, and the Honors Program. She is the Northeast Regional Coordinator with The Rugby Research and Injury Prevention Group and an Athletic Trainer for the Northeast Rugby Academy, a USOC-sanctioned Community Olympic Development Program.",
    "She lectures at continuing education conferences for Sports Medicine professionals and serves as a mentor to the next generation of Athletic Trainers. Outside of the academy and the sideline, she offers her blend of high-performance services, BFR-certified care, and recovery-focused practices to clients throughout New York City.",
  ],
} as const;

export const MARCANO_CERTIFICATIONS = {
  eyebrow: "Certifications and disciplines",
  headline: "The credential stack",
  items: [
    "Board of Certification (BOC) Athletic Trainer",
    "New York State licensed Athletic Trainer",
    "NSCA Certified Strength and Conditioning Specialist (CSCS)",
    "American Red Cross CPR Instructor",
    "BFR-certified practitioner",
    "Reiki Master",
    "Breathwork and Meditation practitioner",
  ],
} as const;

export const MARCANO_ROLES = {
  eyebrow: "Practice and affiliations",
  headline: "Where the work happens",
  items: [
    { role: "Associate Professor", org: "LIU Brooklyn (Athletic Training, Health and Exercise Sciences, Physical Education, Honors Program)" },
    { role: "Northeast Regional Coordinator", org: "The Rugby Research and Injury Prevention Group" },
    { role: "Athletic Trainer", org: "Northeast Rugby Academy (USOC-sanctioned Community Olympic Development Program)" },
    { role: "Consultant", org: "The BFR Pros" },
    { role: "Past Assistant Athletic Trainer", org: "LIU Brooklyn Sports Medicine (men's soccer, women's volleyball, track and field, women's lacrosse, baseball)" },
    { role: "Past Sports Medicine", org: "Penn State (rugby, ice hockey, tennis)" },
    { role: "MS, Athletic Training (2005)", org: "LIU Brooklyn" },
    { role: "BS, Sports Sciences", org: "LIU Brooklyn" },
  ],
} as const;

export const MARCANO_FINAL_CTA = {
  eyebrow: "Inside the certification",
  headline: "Ready to add BFR to the AT toolkit?",
  body:
    "The Complete BFR Certification covers the screening, pressure science, and programming that an Athletic Trainer applies on the sideline and in the rehab room. 37 modules, 11.75 CEUs, BOC-approved.",
  primaryCta: "Explore the certification",
  primaryCtaHref: "/get-certified",
} as const;
