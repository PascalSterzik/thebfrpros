// Variant-specific copy and metadata. Sections that change between v1, v2, and v3:
// announcement bar, hero, problem, dream vision, dream deep dive, solution bridge,
// final CTA frame, and P.S. Everything else (curriculum, instructors, bonuses,
// CEUs, visual proof, testimonials, partners, pricing, guarantee, FAQ) is shared.

export type Variant = {
  slug: "v1" | "v2" | "v3";
  routePath: string;
  belief: string;
  beliefNumber: number;
  metaTitle: string;
  metaDescription: string;
  ogImage: string;

  announcement: { eyebrow: string; line: string; cta: string };

  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: string;
    secondaryCta: string;
    supportingStat: { label: string; value: string }[];
    photoSrc: string;
    photoAlt: string;
  };

  problem: {
    label: string;
    headline: string;
    intro: string;
    surface: string;
    emotional: string;
    future: string;
    visceral: string;
  };

  dreamVision: {
    label: string;
    headline: string;
    paragraphs: string[];
  };

  dreamDeep: {
    label: string;
    headline: string;
    paragraphs: string[];
  };

  bridge: {
    line: string;
  };

  finalCta: {
    headline: string;
    subhead: string;
    warning: string;
    primary: string;
  };

  ps: string[];
};

const photoCommon = "Dr. Nicholas Rolnick applying a blood flow restriction cuff to a patient's biceps";

export const VARIANTS: Record<"v1" | "v2" | "v3", Variant> = {
  v1: {
    slug: "v1",
    routePath: "/get-certified-v1",
    belief: "Belief 5: research-source authority",
    beliefNumber: 5,
    metaTitle: "BFR Certification Taught by the Most-Published BFR Researcher | The BFR Pros",
    metaDescription:
      "Earn 11.75 CEUs in 37 modules taught by Dr. Nicholas Rolnick, 50+ peer-reviewed BFR publications. Equipment-agnostic, evidence-based, 30-day money-back guarantee.",
    ogImage: "/images/og/og-v1.png",
    announcement: {
      eyebrow: "New cohort open",
      line: "Learn BFR from the most-published BFR researcher in the world.",
      cta: "See the certification",
    },
    hero: {
      eyebrow: "The Complete BFR Certification",
      headline: "Learn BFR from the most-published BFR researcher in the world.",
      subhead:
        "Dr. Nicholas Rolnick has authored more peer-reviewed BFR studies than any single individual in the field. The Complete BFR Certification is built on that work. 37 modules. 11.75 CEUs. Zero cuff sales pitches.",
      primaryCta: "Enroll Now for $449",
      secondaryCta: "See what's inside",
      supportingStat: [
        { value: "50+", label: "peer-reviewed BFR publications" },
        { value: "11.75", label: "CEUs (BOC + state PT boards)" },
        { value: "37", label: "modules across 4 courses" },
        { value: "4.7", label: "stars from 712 reviews" },
      ],
      photoSrc: "/images/instructors/rolnick-portrait.jpg",
      photoAlt: "Dr. Nicholas Rolnick, founder of The BFR Pros, in a Manhattan clinical practice setting",
    },
    problem: {
      label: "The problem",
      headline: "You can keep reading abstracts at 9:42 on a Tuesday. Or you can learn from the source.",
      intro:
        "You know what BFR is. You've watched the YouTube videos. You've read the Frontiers paper twice. You're not in the dark, you're in the wrong room.",
      surface:
        "You're saving PubMed tabs, comparing cuff specs at midnight, and Googling \"best BFR certification\" with five tabs open. Every search returns the same six options and the same six sales pages.",
      emotional:
        "Half of being a clinician is being marketed to by people who used to be clinicians. Each course feels like a pitch dressed as education. You're tired of being sold to and you don't know who is teaching from the science and who is teaching from the catalog.",
      future:
        "Twelve months go by. The post-op ACL plateaus at 71% LSI. The patient who asked you about cuffs last week is now training with a clinic that did the certification you didn't.",
      visceral:
        "The problem isn't that you don't have time. It's that you don't have a single trustworthy source to learn from. So the tabs stay open and Tuesday becomes Tuesday again.",
    },
    dreamVision: {
      label: "The destination",
      headline: "It's a Tuesday in September and Marcus's quad finally fires.",
      paragraphs: [
        "It's 4:15 in the afternoon. Marcus is back, week 18 post-op ACL, and the LSI is 86%. Last visit you applied the cuff yourself, set the pressure to 70% LOP, and walked him through the same low-load protocol you've used with the last seven post-op knees. He didn't ask if it would work. He just trusted you, the way patients trust clinicians who know their tools.",
        "On the computer beside you is the screening form from Bonus #2, filled out for tomorrow's first BFR consult. The surgeon down the hall has started CC'ing you on post-op orders. Sarah from three doors down stopped by last week to ask which cuff you went with and why. You answered her in two sentences.",
        "It's 9:42 on a Tuesday again, and tonight you are not on PubMed. You are reading a chapter for fun.",
      ],
    },
    dreamDeep: {
      label: "Who you become",
      headline: "You are already the clinician who reads the research. You become the one who teaches it.",
      paragraphs: [
        "You're not chasing a fad and you never were. The science was always going to win and you bet on the side with the publication trail. That's who you've been since DPT school.",
        "Six months from now, the local APTA chapter asks you to present on BFR for post-op return-to-sport. You don't say yes because you need the credential. You say yes because you have the cases, the protocols, and the receipts. You stand at the front of the room and say specific things from memory.",
        "Twelve months from now, the new graduates at your clinic ask you which BFR course they should take. You tell them. You don't sell them. You tell them.",
      ],
    },
    bridge: {
      line: "You don't need a different cuff. You need the curriculum the cuff manufacturers don't want you to see. The Complete BFR Certification is built on 50+ peer-reviewed publications by the practitioner teaching it, and it doesn't ship with a single product to upsell.",
    },
    finalCta: {
      headline: "Learn BFR from the most-published researcher in the field. Or read a different abstract.",
      subhead:
        "11.75 CEUs. 37 modules. $449. 30-day money-back guarantee. Average completion time is 4 to 6 weeks at 2-3 modules per week.",
      warning:
        "Every Tuesday you don't decide is a Tuesday Marcus stays at 71% and the patient on the schedule next week asks the question you don't yet have the answer to. The research isn't moving slower; you are.",
      primary: "Enroll for $449",
    },
    ps: [
      "P.S. The certification is the technique, not the cuff. If a year from now you switch from Delfi to SmartCuffs to LiveBand, you don't pay for re-education. The curriculum doesn't depend on what's in your closet. The 30-day money-back guarantee is the rest of the trade.",
      "P.P.S. You've been telling yourself you'll get to it for four years. Tonight is a Tuesday. The tab is open.",
    ],
  },
  v2: {
    slug: "v2",
    routePath: "/get-certified-v2",
    belief: "Belief 3: equipment-agnostic differentiator",
    beliefNumber: 3,
    metaTitle: "The Only BFR Certification That Doesn't Sell You a Cuff | The BFR Pros",
    metaDescription:
      "Equipment-agnostic BFR certification. Works with Delfi, SmartCuffs, B Strong, LiveBand. 37 modules, 11.75 CEUs, 50+ peer-reviewed publications. 30-day money-back.",
    ogImage: "/images/og/og-v2.png",
    announcement: {
      eyebrow: "Equipment-agnostic by design",
      line: "The only BFR certification that doesn't sell you a cuff.",
      cta: "See why it matters",
    },
    hero: {
      eyebrow: "The Complete BFR Certification",
      headline: "The only BFR certification that doesn't sell you a cuff.",
      subhead:
        "Owens sells you Delfi. NE Seminars bundles you a cuff. Smart Tools sells you SmartCuffs. We don't sell anything you wear. We teach the technique, not the equipment, so the certification still works when the cuff in your closet doesn't.",
      primaryCta: "Enroll Now for $449",
      secondaryCta: "Compare the alternatives",
      supportingStat: [
        { value: "0", label: "cuffs in the bundle" },
        { value: "11.75", label: "CEUs" },
        { value: "37", label: "modules across 4 courses" },
        { value: "$449", label: "single bundle, no upsells" },
      ],
      photoSrc: "/images/action/rolnick-applying-cuff.jpg",
      photoAlt: photoCommon,
    },
    problem: {
      label: "The problem",
      headline: "Half of being a clinician is being marketed to by people who used to be clinicians.",
      intro:
        "Every BFR course you've shopped came with a product attached. The curriculum is shaped by what the manufacturer wants you to buy. You can't tell where the education ends and the catalog begins.",
      surface:
        "Owens is excellent education. The Delfi PTS it requires is $5,000 your clinic owner won't approve. NE Seminars bundles cuffs at $649, but the cuffs are one specific brand. Smart Tools sells SmartCuffs and trains you on SmartCuffs. KAATSU sells KAATSU.",
      emotional:
        "You did not go through three years of DPT school to become someone else's distribution channel. You wanted to specialize. You didn't want to inherit a vendor relationship as part of the deal.",
      future:
        "If you pick the cheapest cuff today and the research moves to a different design in 18 months, you didn't buy a certification. You bought a stuck position. You'll have to relearn it on someone else's product, and you'll have to explain to your clinic owner why.",
      visceral:
        "You can feel the sales funnel from the second the page loads. So your finger hovers over buy and then you close the tab.",
    },
    dreamVision: {
      label: "The destination",
      headline: "Three years from now, you've been through three different cuff systems and the certification still works.",
      paragraphs: [
        "Year one you used the Delfi the surgeon's office had on loan. Year two your clinic bought SmartCuffs because the price-to-feature ratio made sense for your patient mix. This year you're testing a LiveBand setup because the research data on cuff width is interesting and you want to see it on your own floor.",
        "None of those switches required a new course. The screening form from Bonus #2 didn't change. The pressure prescription framework didn't change. The patient outcomes didn't change.",
        "When the next-generation BFR cuff arrives in three years and the manufacturer hasn't built a curriculum yet, you're not waiting for one. You already know how to evaluate it.",
      ],
    },
    dreamDeep: {
      label: "Who you become",
      headline: "You are the clinician who picks the equipment. You are not the clinician the equipment picks.",
      paragraphs: [
        "Patients ask you which cuff is best. You don't recite a brand. You ask three questions about their goals, their schedule, and what their insurance will cover, and you make a recommendation that fits them.",
        "When a sales rep walks into your clinic with a new BFR product, you don't get pitched. You ask them about pressure-cycling protocols and arterial Doppler accuracy and watch them flip through their slide deck looking for the answer. You leave the meeting with information. They leave it with respect.",
        "Six months from now, a peer at the next clinic over asks if she should switch from Delfi to SmartCuffs. You don't tell her yes or no. You tell her what to weigh and you watch her decide. That is what a specialist sounds like.",
      ],
    },
    bridge: {
      line: "The certification is the technique, not the cuff. The only way that's true is if the certification was designed without one. The Complete BFR Certification is the only program that was.",
    },
    finalCta: {
      headline: "Buy the certification. Not the inventory.",
      subhead:
        "$449 for the full 37-module bundle, 11.75 CEUs, 11 implementation bonuses, and 30 days to ask for your money back. No cuff in the cart. No SKU at checkout. Just the curriculum.",
      warning:
        "Every cuff you buy under the wrong assumption is a sunk cost. Every course tied to that cuff doubles the sunk cost. The cheapest version of this lesson is the one where you learn the technique first and the equipment second.",
      primary: "Enroll for $449",
    },
    ps: [
      "P.S. Bonus #4 is a list of negotiated discount codes across Delfi, SmartCuffs, B Strong, and LiveBand. We negotiated those because we don't sell any of them. The codes get cheaper when the seller doesn't have a margin to protect.",
      "P.P.S. The fastest way to find out if a BFR course is selling you a cuff is to read the order page. Read ours. Then read theirs.",
    ],
  },
  v3: {
    slug: "v3",
    routePath: "/get-certified",
    belief: "Belief 6: patient-demand and competitor adoption",
    beliefNumber: 6,
    metaTitle: "Your Patients Are Already Asking for BFR. Be the Clinic That Delivers. | The BFR Pros",
    metaDescription:
      "Patients are searching for BFR providers in your zip code. Get certified in 37 modules and 11.75 CEUs before the clinic across the street does. 30-day money-back guarantee.",
    ogImage: "/images/og/og-v3.png",
    announcement: {
      eyebrow: "Patient demand is rising",
      line: "Sarah, three doors down, just hung a 'BFR provided here' sign on her clinic window.",
      cta: "Get certified before the next one does",
    },
    hero: {
      eyebrow: "The Complete BFR Certification",
      headline: "Your patients are already asking for BFR. Be the clinic that delivers it.",
      subhead:
        "BFR has been on CNN, in the Wall Street Journal, on ESPN, and on Cleveland Clinic's blog. Your patients are searching for it. The question isn't whether your clinic offers BFR in 2026. It's whether you are the one offering it, or whether they're booking with the clinic three doors down.",
      primaryCta: "Get Certified for $449",
      secondaryCta: "See the curriculum",
      supportingStat: [
        { value: "100+", label: "clinics already certified through us" },
        { value: "11.75", label: "CEUs in one purchase" },
        { value: "37", label: "modules" },
        { value: "30", label: "days to a full refund" },
      ],
      photoSrc: "/images/action/rolnick-coaching.jpg",
      photoAlt: "Dr. Nicholas Rolnick coaching a patient through a BFR session",
    },
    problem: {
      label: "The problem",
      headline: "Patients can tell when you're stalling.",
      intro:
        "BFR has crossed into patient-facing media. The firefighter in your waiting room read about it on TikTok. The post-op ACL bookmarked a Cleveland Clinic article. The marathoner heard about it on a podcast. They are not asking if you've heard of it. They are asking which cuff you use.",
      surface:
        "Last month a patient asked you directly. You said something about looking into it for next visit. They nodded and went home and Googled. By next visit, they had answers. You still didn't.",
      emotional:
        "You went to PT school because you wanted to actually help people get better. The gap between that ambition and your Tuesday afternoon outcomes report is widening, and the gap is shaped exactly like the techniques your DPT program left out.",
      future:
        "Sarah, three doors down, just hung a \"BFR provided here\" sign on her clinic window. The surgeon you work with starts asking why she gets the post-op ACLs and you don't. The 18-year-old who came in last spring with a patellar dislocation is at her clinic this fall.",
      visceral:
        "The defensive cost of doing nothing is no longer zero. It's a sign on a window three doors down that wasn't there last quarter.",
    },
    dreamVision: {
      label: "The destination",
      headline: "It's a Wednesday in spring and the firefighter walks back in.",
      paragraphs: [
        "He's three weeks post-patellar-dislocation. He'd been to two clinics and Googled in between. He found you because your website says BFR provided here and your Google reviews mention specific outcomes by name. He came in for a consult and didn't leave for a second opinion.",
        "You apply the cuff. You set the pressure. You walk him through what the next eight weeks look like and you write it down for him. He's back at the firehouse in week ten, on light duty in week twelve, full duty in week sixteen. Six months later he sends you a text from a structure fire.",
        "There are seven of him on your schedule for the spring. Every one of them found you by name.",
      ],
    },
    dreamDeep: {
      label: "Who you become",
      headline: "You are the clinic the next BFR patient finds first.",
      paragraphs: [
        "Your Google reviews mention BFR by name. Your clinic's intake form has a box for blood flow restriction goals. Two surgeons in your zip code have you on their referral shortlist for late-stage post-op rehab. The cash-pay BFR program you launched last year covers your CE budget for the next three.",
        "You are not the only certified BFR clinician in your region. You are the first one a patient finds when they search. The certification is what got you in the door. The implementation is what kept you there.",
        "Six months from now, the new graduate down the hall asks how to start a BFR program at her own clinic. You tell her the same thing the firefighter tells his crewmates: this is real, and the time to be early is over.",
      ],
    },
    bridge: {
      line: "Patient demand is the only scarcity that's real in this market. The clinics getting certified now are the ones who will be on the search results page when your patient types \"BFR near me.\" The Complete BFR Certification is the fastest evidence-based path to being one of them.",
    },
    finalCta: {
      headline: "The patient walks in tomorrow either way. The question is which clinic answers.",
      subhead:
        "$449. 37 modules. 11.75 CEUs. 30-day money-back guarantee. Average completion time 4 to 6 weeks at 2-3 modules per week. The window to be the first BFR-certified clinic in your zip code is still open. It is not open forever.",
      warning:
        "The clinic three doors down didn't wait. The 18-year-old patellar dislocation didn't wait. The firefighter didn't wait. None of them waited for the right moment, and none of them are going to wait for you.",
      primary: "Get Certified for $449",
    },
    ps: [
      "P.S. \"Sarah, three doors down, just hung a 'BFR provided here' sign on her clinic window\" is a real sentence from a real PT in a real journal entry. The reason it's a sentence is because the sign was there. The reason the sign was there is because she didn't wait.",
      "P.P.S. The 30-day money-back guarantee means you can finish the curriculum, run BFR with your first patient, and refund out if it's not for your practice. The guarantee asks you to act now, not commit forever.",
    ],
  },
};
