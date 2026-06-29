// Copy + data for the /the-loading-wall opt-in (squeeze) page.
//
// COPY IS LOCKED. Verbatim from
//   Agency/Clients/The BFR Pros/Deliverables/Lead-Magnets/The Loading Wall/
//   the-loading-wall-opt-in-page-copy.md  (Headline Option A).
// Do not rewrite. Awareness-stage proof discipline is already baked in
// (author-level media features + results-language testimonials), per
// brand-guide.md "Proof elements must match the reader's awareness stage".
//
// Top-of-funnel, single conversion = the email. The certification is never
// sold here; it is referenced once only as author authority for the guide.

export const LOADING_WALL = {
  meta: {
    title: "The Loading Wall: A Free Guide for Post-Op Rehab",
    description:
      "A free 23-page guide from Dr. Nicholas Rolnick: 5 evidence-based ways to rebuild post-op strength when you can't load your patient heavy yet. Sent straight to your inbox.",
    canonical: "https://www.thebfrpros.com/the-loading-wall",
  },

  header: {
    logoAlt: "The BFR Pros",
  },

  hero: {
    eyebrow:
      "ATTENTION: PHYSICAL THERAPISTS, ATHLETIC TRAINERS & S&C COACHES WHO ARE TIRED OF WATCHING POST-OP PATIENTS PLATEAU",
    headline:
      "5 Evidence-Based Ways To Rebuild Post-Op Strength When You Can't Load Them Heavy Yet",
    subhead:
      "Inside this free 23-page guide: what the research on low-load training reveals about the recovery gap most clinicians were never taught to close, and the modality that closes it. Enter your email below and we'll send The Loading Wall straight to your inbox.",
    cta: "SEND ME THE FREE GUIDE",
    microcopy: "Free instant download. No spam. Unsubscribe anytime.",
  },

  hook: {
    paragraphs: [
      "You know the patient before you even open the chart. ACL reconstruction, eight weeks out. Quad sets, straight-leg raises, a leg press stack so light it embarrasses both of you. And session after session, you watch the quad shrink in front of you.",
      "It is not your protocol. You are running it correctly. The problem is that the standard early-rehab toolkit was never built to drive strength when you can't load them heavy yet. The Loading Wall shows you the method that is.",
    ],
    introLine:
      "Download your free copy of the guide Dr. Nicholas Rolnick wrote for clinicians who are done waiting:",
  },

  report: {
    calloutTitle:
      "The Loading Wall: 5 Evidence-Based Ways to Rebuild Post-Op Strength When Your Patient Can't Lift Heavy Yet",
    coverSrc: "/images/loading-wall/cover.png",
    coverAlt: "The Loading Wall guide cover",
    bulletsIntro: "In this free guide, you'll discover:",
    bullets: [
      {
        strong:
          "The 5 evidence-based ways to drive real strength gains in a patient who can't touch heavy load yet,",
        body: "starting in the first weeks after surgery instead of the third month, after the muscle loss is already done and far harder to reverse.",
      },
      {
        strong:
          "You were trained that it takes 60 to 70 percent of a 1-rep max to build muscle. For a post-op patient, that rule is the whole problem.",
        body: "See what actually triggers the growth signal when you can't load them heavy yet, and why light load on its own builds almost nothing.",
      },
      {
        strong: "The honest truth about why your post-op patients plateau,",
        body: "why it almost certainly isn't your fault, and the one job standard rehab protocols were never built to do.",
      },
      {
        strong:
          "The 4 quiet mistakes that cost post-op patients months of progress,",
        body: "including the one built into nearly every protocol you were handed in school. (It's mistake #2, and you are almost certainly making it right now.)",
      },
      // Removed 2026-06-29 (Pascal): the "Am I going to cause a clot?" and
      // "$5,000 cuff" bullets assumed the reader already knows/uses blood flow
      // restriction. This page is for the problem-aware reader who does NOT yet
      // know BFR is the answer, so a BFR-presuming bullet is the wrong awareness
      // stage. Kept the result/curiosity bullets that work regardless.
      {
        strong:
          "The real difference between the clinician who can confidently load the patient nobody else can load, and the one still waiting for a tool they were never handed.",
        body: "It is not talent. It is one specific piece of training.",
      },
    ],
    credibility:
      "The Loading Wall was written by Dr. Nicholas Rolnick, PT, DPT, MS, CSCS, founder of The BFR Pros and author of 74 peer-reviewed publications on blood flow restriction and low-load training. He is a practicing physical therapist in Manhattan, an Adjunct Assistant Professor of Physical Therapy at New York Medical College, and a Topic Editor for the journals Frontiers in Physiology and Frontiers in Sports and Active Living. More than 1,467 clinicians have trained in BFR with him, and his certification holds a 4.8-star rating across 767+ reviews.",
    authorImageSrc: "/images/instructors/rolnick-large.jpg",
    authorImageAlt: "Dr. Nicholas Rolnick, PT, DPT, MS, CSCS, founder of The BFR Pros",
  },

  testimonials: {
    heading: "What Practitioners Are Saying",
    // Verbatim from the 767-response student survey (Rehab Professionals who
    // scored the program 9-10). Results / practical-value language only, no
    // course-mechanics praise, per the awareness-stage proof rule.
    items: [
      {
        quote:
          "I think it can be a game changer for rehabilitation of our post operative patients especially.",
        name: "Jeremy Meschino",
        role: "Rehab Professional",
      },
      {
        quote:
          "Thorough, applicable, relevant to getting patients better faster.",
        name: "Jared Scoville",
        role: "Rehab Professional",
      },
      {
        quote: "Super practical & very valuable for patients.",
        name: "Caroline Durocher",
        role: "Rehab Professional",
      },
    ],
  },

  trustBar: {
    // Dr. Rolnick PERSONAL media features ONLY (where HE was featured, not the
    // BFR-modality coverage), per Pascal 2026-06-29. Sourced from the "Featured
    // in (the News)" asset folder, landscape format only (the square AskMen and
    // the modality-folder NY Post / CNN / FOX logos were dropped). These are
    // white-background .jpg/.webp logos, so the section renders on WHITE so the
    // logo backgrounds disappear instead of showing weird white boxes.
    heading: "Dr. Nicholas Rolnick Has Been Featured In",
    logos: [
      { src: "/images/featured/mens-health.jpg", alt: "Men's Health" },
      { src: "/images/featured/cnn-health.jpg", alt: "CNN Health" },
      { src: "/images/featured/cnet.jpg", alt: "CNET" },
      { src: "/images/featured/well-good.jpg", alt: "Well+Good" },
      { src: "/images/featured/webpt.jpg", alt: "WebPT" },
      { src: "/images/featured/eat-this-not-that.jpg", alt: "Eat This, Not That!" },
    ],
  },

  finalCta: {
    heading: "Get Instant Access To The Loading Wall",
    body: [
      "Enter your name and email below. We'll send The Loading Wall straight to your inbox, and you'll have it in under 60 seconds, in time to put the first technique to work with your next post-op patient.",
      "There is no countdown timer on this page and no pressure to buy anything. But the post-op patient on your caseload right now is losing strength this week, in a window that does not reopen. The sooner you read this, the sooner that stops.",
    ],
    cta: "YES, SEND ME THE FREE GUIDE",
    microcopy: "Free instant download. No spam. Unsubscribe anytime.",
  },

  footer: {
    privacyLabel: "Privacy Policy",
    privacyHref: "/privacy",
    copyright: "The BFR Pros",
  },

  pdfPath: "/downloads/the-loading-wall.pdf",
} as const;

// Thank-you page copy (PLAN.md §5; not in the main copy doc).
export const LOADING_WALL_THANK_YOU = {
  meta: {
    title: "You're In",
    description: "Your copy of The Loading Wall is on its way.",
    canonical: "https://www.thebfrpros.com/the-loading-wall/thank-you",
  },
  eyebrow: "YOU'RE IN",
  headline: "Your Copy Of The Loading Wall Is On Its Way",
  body: "Check your inbox in the next few minutes for an email from The BFR Pros with your download link. You do not have to wait for it, though. Grab the guide right here:",
  button: "DOWNLOAD THE LOADING WALL",
  belowButton:
    "Don't see the email? Check your spam or promotions folder, and add nick@thebfrpros.com to your contacts so the next few emails reach you.",
  downloadHref: "/downloads/the-loading-wall.pdf",
} as const;
