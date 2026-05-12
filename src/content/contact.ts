// /contact page copy. Single source of truth for the contact route.
// Visitors arriving here are Stage-4/5: they know who we are and want to
// reach out. The page leads with the two direct contact methods (phone
// and email), then offers a structured form for asynchronous inquiries.
//
// Headline punctuation (brand-guide.md Principle 5): no terminal period.

export const CONTACT_META = {
  title: "Contact | The BFR Pros",
  description:
    "Questions about The Complete BFR Certification, partnership inquiries, press requests, or speaking engagements. Call 1-914-400-3650, email nick@thebfrpros.com, or send a message below.",
  canonicalPath: "/contact",
  ogImagePath: "/og/home",
} as const;

export const CONTACT_HERO = {
  eyebrow: "Get in touch",
  headline: "Talk to The BFR Pros",
  subhead:
    "Questions about the certification, partnership inquiries, press requests, or just want to say hello. The fastest path is direct, the form below works for anything that needs context.",
} as const;

export const CONTACT_WAYS = {
  eyebrow: "The direct paths",
  headline: "Reach us in two ways",
  intro:
    "Call or email Nick directly. Both go to a real person, not a queue.",
  ways: [
    {
      label: "Call or text",
      icon: "phone" as const,
      value: "1-914-400-3650",
      valueHref: "tel:+19144003650",
      detail: "Pick up Monday to Friday during US Eastern business hours.",
    },
    {
      label: "Email Nick",
      icon: "email" as const,
      value: "nick@thebfrpros.com",
      valueHref: "mailto:nick@thebfrpros.com",
      detail: "Reply within one business day.",
    },
  ],
} as const;

export const CONTACT_FORM = {
  eyebrow: "Send a message",
  headline: "Tell us what you need",
  intro:
    "Anything that needs more context than a quick call. We read every message.",
  fields: {
    nameLabel: "Full name",
    namePlaceholder: "Dr. Mia Sanchez",
    emailLabel: "Email",
    emailPlaceholder: "you@yourclinic.com",
    topicLabel: "What is this about",
    topicOptions: [
      "General question",
      "Certification question",
      "Group / clinic enrollment",
      "Partnership or sponsorship",
      "Press or media",
      "Speaking engagement",
      "Something else",
    ] as ReadonlyArray<string>,
    messageLabel: "Your message",
    messagePlaceholder: "What can we help with?",
    submitLabel: "Send message",
    submittingLabel: "Sending...",
    successHeadline: "Message sent",
    successBody:
      "We received it. Expect a reply within one business day to the email you provided. For anything urgent, the phone line above is the faster path.",
    errorHeadline: "Something went wrong",
    errorBody:
      "The message did not go through. Try the email link above (nick@thebfrpros.com) and we will get back to you the same way.",
    privacyNote:
      "We use your email only to reply. No newsletter signup, no third-party sharing.",
  },
} as const;
