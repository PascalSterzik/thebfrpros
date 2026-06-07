// /contact page copy. Single source of truth for the contact route.
// Visitors arriving here are Stage-4/5: they know who we are and want to
// reach out. The page leads with the two direct contact methods (phone
// and email). The contact form was removed 2026-06-06 (low-value); the
// page stays live for SEO / NAP value.
//
// Headline punctuation (brand-guide.md Principle 5): no terminal period.

export const CONTACT_META = {
  title: "Contact | The BFR Pros",
  description:
    "Questions about The Complete BFR Certification, partnership inquiries, press requests, or speaking engagements. Call 1-914-400-3650 or email nick@thebfrpros.com.",
  canonicalPath: "/contact",
  ogImagePath: "/og/home",
} as const;

export const CONTACT_HERO = {
  eyebrow: "Get in touch",
  headline: "Talk to The BFR Pros",
  subhead:
    "Questions about the certification, partnership inquiries, press requests, or just want to say hello. The fastest path is direct, the phone and email below both reach a real person.",
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
