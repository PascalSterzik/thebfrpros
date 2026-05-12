// Legal page content for /privacy, /terms, /disclaimer, /refund-policy.
//
// Source: live thebfrpros.com legal pages (/privacy-policy1, /terms-conditions,
// /disclaimer, /refund-policy) pulled 2026-05-12 with curl + a browser
// User-Agent. The text below is ported verbatim from those pages with only
// these adaptations (each flagged in a code comment near the change):
//
//   1. Email placeholders "[email protected]" replaced with the real
//      contact email (nick@thebfrpros.com) per brand-guide.md.
//   2. Privacy policy SECTION 4 swapped from "Woocommerce" framing to
//      "Teachable" — the new site sells The Complete BFR Certification
//      through Teachable, not a Woocommerce store. The Woocommerce-specific
//      cookies list in SECTION 7 is replaced with a generic cookie statement
//      that matches what this site actually sets (none beyond session and
//      Next.js framework cookies).
//   3. Refund policy rewritten end-to-end. The live policy is for physical
//      products + live workshops. This site sells one product: the digital
//      certification with a 30-day money-back guarantee (the same guarantee
//      claimed on /get-certified and in brand-guide.md). The new copy is
//      conservative and intentionally short — Pascal should have a lawyer
//      review before relying on it for disputes.
//
// Any further legal changes should be made with counsel. This file is the
// single source of truth that the four /legal route pages read from.
//
// Last reviewed: 2026-05-12.

export type LegalSection = {
  heading: string;
  paragraphs?: ReadonlyArray<string>;
  list?: ReadonlyArray<string>;
};

export type LegalDoc = {
  meta: {
    title: string;
    description: string;
    canonicalPath: string;
    ogImagePath: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lastUpdated: string;
  };
  intro?: ReadonlyArray<string>;
  sections: ReadonlyArray<LegalSection>;
  contact?: {
    heading: string;
    paragraphs: ReadonlyArray<string>;
  };
};

const LAST_UPDATED = "May 12, 2026";

// ---------------------------------------------------------------------------
// PRIVACY POLICY
// ---------------------------------------------------------------------------

export const PRIVACY: LegalDoc = {
  meta: {
    title: "Privacy Policy | The BFR Pros",
    description:
      "How The BFR Pros collects, uses, stores, and protects personal information. Contact nick@thebfrpros.com with privacy questions.",
    canonicalPath: "/privacy",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    lastUpdated: LAST_UPDATED,
  },
  sections: [
    {
      heading: "Section 1 — What do we do with your information",
      paragraphs: [
        "When you purchase The Complete BFR Certification or any other offering from The BFR Pros, as part of the buying and selling process, we collect the personal information that you give us such as your name, address, and email address.",
        "When you browse our website, we also automatically receive your computer's internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.",
        "Email marketing (if applicable): With your permission, we may send you emails about our courses, new releases, and other updates.",
      ],
    },
    {
      heading: "Section 2 — Consent",
      paragraphs: [
        "How do you get my consent? When you provide us with personal information to complete a transaction, verify your credit card, place an order, or request information, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.",
        "How do I withdraw my consent? If after you opt in you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use, or disclosure of your information, at any time, by contacting us at nick@thebfrpros.com.",
      ],
    },
    {
      heading: "Section 3 — Disclosure",
      paragraphs: [
        "We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.",
      ],
    },
    {
      // Adapted: replaced live-site Woocommerce framing with Teachable, which
      // is the platform that actually processes our course enrollments and
      // payment data.
      heading: "Section 4 — Teachable",
      paragraphs: [
        "The Complete BFR Certification is delivered through Teachable. Teachable provides us with the online course platform that allows us to sell our certification to you. Your account data is stored through Teachable's data storage, databases, and the general Teachable application. They store your data on a secure server behind a firewall.",
        "Payment: If you choose a direct payment gateway to complete your purchase, then Teachable's payment processor (Stripe, PayPal, or equivalent) stores your credit card data. It is encrypted through the Payment Card Industry Data Security Standard (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your purchase transaction. After that is complete, your purchase transaction information is retained per the payment processor's policy.",
        "All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express, and Discover. PCI-DSS requirements help ensure the secure handling of credit card information by our store and its service providers.",
        "For more insight you may want to read Teachable's Terms of Use and Privacy Policy at teachable.com.",
      ],
    },
    {
      heading: "Section 5 — Third-party services",
      paragraphs: [
        "In general, the third-party providers used by us will only collect, use, and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect of the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.",
        "In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.",
        "Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms of Service. When you click on links on our website, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.",
      ],
    },
    {
      heading: "Section 6 — Security",
      paragraphs: [
        "To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed.",
        "If you provide us with your credit card information through our payment processor, the information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.",
      ],
    },
    {
      // Adapted: replaced Woocommerce-specific cookie list with a generic
      // statement matching what this Next.js site actually sets.
      heading: "Section 7 — Cookies",
      paragraphs: [
        "Our website uses a minimal set of cookies for essential functionality, including session management and security. We do not currently use third-party analytics or advertising cookies on this site. If we add analytics or marketing cookies in the future, we will update this policy and where appropriate display a cookie banner with opt-in or opt-out controls.",
        "Teachable, where the certification itself is hosted, sets its own cookies for authentication and session management while you are logged into your course. See Teachable's privacy policy for the full list.",
      ],
    },
    {
      heading: "Section 8 — Age of consent",
      paragraphs: [
        "By using this site you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.",
      ],
    },
    {
      heading: "Section 9 — Changes to this Privacy Policy",
      paragraphs: [
        "We reserve the right to modify this Privacy Policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it. If our business is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to provide our courses to you.",
      ],
    },
  ],
  contact: {
    heading: "Questions and contact information",
    paragraphs: [
      "If you would like to access, correct, amend, or delete any personal information we have about you, register a complaint, or simply want more information, contact our Privacy Compliance Officer at nick@thebfrpros.com.",
      "Text marketing and notifications: By subscribing to text notifications you agree to receive recurring automated marketing messages at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message and data rates may apply. See this Privacy Policy and our Terms of Service for more information.",
    ],
  },
};

// ---------------------------------------------------------------------------
// TERMS & CONDITIONS
// ---------------------------------------------------------------------------

export const TERMS: LegalDoc = {
  meta: {
    title: "Terms and Conditions | The BFR Pros",
    description:
      "Terms and conditions for using thebfrpros.com and The Complete BFR Certification. Cookies, license, comments, iframes, content liability, and right of reservation.",
    canonicalPath: "/terms",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "Terms",
    title: "Terms and Conditions",
    lastUpdated: LAST_UPDATED,
  },
  intro: [
    "Welcome to The BFR Pros. These terms and conditions outline the rules and regulations for the use of The BFR Pros website, located at https://thebfrpros.com/.",
    "By accessing this website we assume you accept these terms and conditions. Do not continue to use The BFR Pros website if you do not agree to take all of the terms and conditions stated on this page.",
    "The following terminology applies to these Terms and Conditions: \"Client\", \"You\" and \"Your\" refers to the user, the person logged on this website and compliant to the Company's terms and conditions. \"The Company\", \"Ourselves\", \"We\", \"Our\" and \"Us\" refers to our Company. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of The BFR Pros' stated services, in accordance with and subject to the prevailing law of the USA. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they are taken as interchangeable and therefore as referring to the same.",
  ],
  sections: [
    {
      heading: "Cookies",
      paragraphs: [
        "We employ the use of cookies. By accessing https://thebfrpros.com/, you agreed to use cookies in agreement with The BFR Pros' Privacy Policy.",
        "Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate / advertising partners may also use cookies.",
      ],
    },
    {
      heading: "License",
      paragraphs: [
        "Unless otherwise stated, The BFR Pros and/or its licensors own the intellectual property rights for all material on https://thebfrpros.com/. All intellectual property rights are reserved. You may access this from The BFR Pros website for your own personal use subject to restrictions set in these terms and conditions.",
        "You must not republish material from The BFR Pros website, sell, rent, or sub-license material from the website, reproduce, duplicate, or copy material from the website, or redistribute content from the website.",
      ],
    },
    {
      heading: "Comments and user content",
      paragraphs: [
        "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. The BFR Pros does not filter, edit, publish, or review comments prior to their presence on the website. Comments do not reflect the views and opinions of The BFR Pros, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions.",
        "To the extent permitted by applicable laws, The BFR Pros shall not be liable for the comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the comments on this website.",
        "The BFR Pros reserves the right to monitor all comments and to remove any comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.",
        "You warrant and represent that you are entitled to post the comments on our website and have all necessary licenses and consents to do so; the comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party; the comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy; and the comments will not be used to solicit or promote business, custom, present commercial activities, or unlawful activity.",
        "You hereby grant The BFR Pros a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your comments in any and all forms, formats, or media.",
      ],
    },
    {
      heading: "iFrames",
      paragraphs: [
        "Without prior approval and written permission, you may not create frames around our webpages that alter in any way the visual presentation or appearance of our website.",
      ],
    },
    {
      heading: "Content liability",
      paragraphs: [
        "We shall not be held responsible for any content that appears on https://thebfrpros.com/. You agree to protect and defend us against all claims that arise from https://thebfrpros.com/. No link(s) should appear on any website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.",
      ],
    },
    {
      heading: "Reservation of rights",
      paragraphs: [
        "We reserve the right to request that you remove all links or any particular link to our website. You approve to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and our linking policy at any time. By continuously linking to our website, you agree to be bound to and follow these linking terms and conditions.",
      ],
    },
    {
      heading: "Removal of links from our website",
      paragraphs: [
        "If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to do so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.",
      ],
    },
  ],
  contact: {
    heading: "Questions",
    paragraphs: [
      "If you have any questions about these terms, contact us at nick@thebfrpros.com.",
    ],
  },
};

// ---------------------------------------------------------------------------
// DISCLAIMER
// ---------------------------------------------------------------------------

export const DISCLAIMER: LegalDoc = {
  meta: {
    title: "Disclaimer | The BFR Pros",
    description:
      "The BFR Pros disclaimer. Information on this website is for educational and informational purposes only and is not medical or health advice.",
    canonicalPath: "/disclaimer",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "Disclaimer",
    title: "Disclaimer",
    lastUpdated: LAST_UPDATED,
  },
  intro: [
    "This website is owned and operated by The BFR Pros (\"Company\", \"we\", or \"us\" hereafter in this document). This Disclaimer, along with the Terms of Use and Privacy Policy, governs your access to and use of https://thebfrpros.com/, including any content, functionality, and services offered on or through https://thebfrpros.com/ (the \"Website\" hereafter), whether as a guest or a registered user.",
    "Please read the Disclaimer carefully before you start to use the Website. By using the Website or by clicking to accept or agree to the Terms of Use when this option is made available to you, you accept and agree to be bound and abide by the Disclaimer. If you do not want to agree to the Privacy Policy, you must not access or use the Website.",
  ],
  sections: [
    {
      heading: "For informational purposes",
      paragraphs: [
        "The information contained on this Website and the resources available for download through this website are for informational purposes only.",
      ],
    },
    {
      heading: "No health advice",
      paragraphs: [
        "The information contained on this Website and the resources available for download through this website is not intended as, and shall not be understood or construed as, medical or health advice. While the professionals at the Company address health issues and the information provided on this Website relates to medical and/or health issues, the information contained on this Website is not a substitute for medical or health advice from a professional who is aware of the facts and circumstances of your individual situation.",
        "We have done our best to ensure that the information provided on this Website and the resources available for download are accurate and provide valuable information. Neither the Company nor any of its employees or owners shall be held liable or responsible for any errors or omissions on this website or for any damage you may suffer as a result of failing to seek competent medical or health advice from a professional who is familiar with your situation.",
      ],
    },
    {
      heading: "User's personal responsibility",
      paragraphs: [
        "By using this Website, you accept personal responsibility for the results of your actions. You agree to take full responsibility for any harm or damage you suffer as a result of the use, or non-use, of the information available on this Website or the resources available for download from this Website. You agree to use judgment and conduct due diligence before taking any action or implementing any plan or policy suggested or recommended on this Website.",
      ],
    },
    {
      heading: "Errors and omissions",
      paragraphs: [
        "This Website is a public resource of general information that is intended, but not promised or guaranteed, to be correct, complete, and up to date. We have taken reasonable steps to ensure that the information contained in this Website is accurate, but we cannot represent that this Website is free of errors. You accept that the information contained on this Website may be erroneous and agree to conduct due diligence to verify any information obtained from this Website and/or resources available on it prior to taking any action.",
      ],
    },
    {
      heading: "No endorsements",
      paragraphs: [
        "From time to time, the Company will refer to other products, services, coaches, consultants, and/or experts. Any such reference is not intended as an endorsement or statement that the information provided by the other party is accurate. The Company provides this information as a reference for users. It is your responsibility to conduct your own investigation and make your own determination about any such product, service, coach, consultant, and/or expert.",
      ],
    },
    {
      heading: "No warranties",
      paragraphs: [
        "The Company makes no warranties regarding the performance or operation of this website. The Company further makes no representations or warranties of any kind, express or implied, as to the information, contents, materials, documents, programs, products, books, or services included on or through this website. To the fullest extent permissible under the law, the Company disclaims all warranties, express or implied, including implied warranties of merchantability and fitness for a particular purpose.",
      ],
    },
    {
      heading: "Limitation of liability",
      paragraphs: [
        "You agree to absolve the Company of any and all liability or loss that you or any person or entity associated with you may suffer or incur as a result of use of the information contained on this website and/or the resources you may download from this website. You agree that the Company shall not be liable to you for any type of damages, including direct, indirect, special, incidental, equitable, or consequential loss or damages for use of this website.",
        "The information, software, products, and services included in or available through the website may include inaccuracies or typographical errors. Changes are periodically added to the information herein. The Company and/or its suppliers may make improvements and/or changes in the website at any time.",
        "The Company and/or its suppliers make no representations about the suitability, reliability, availability, timeliness, and accuracy of the information, software, products, services, and related graphics contained on the website for any purpose. To the maximum extent permitted by applicable law, all such information, software, products, services, and related graphics are provided \"as is\" without warranty or condition of any kind. The Company and/or its suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services, and related graphics, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title, and non-infringement.",
      ],
    },
  ],
  contact: {
    heading: "Questions",
    paragraphs: [
      "If you have any questions about this disclaimer, contact us at nick@thebfrpros.com.",
    ],
  },
};

// ---------------------------------------------------------------------------
// REFUND POLICY
// ---------------------------------------------------------------------------
// Adapted: the live policy is for physical products + live workshops; this
// rewrite covers the digital certification, which is the single product sold
// on this site at launch. The 30-day money-back guarantee matches what is
// claimed in brand-guide.md and on /get-certified.

export const REFUND: LegalDoc = {
  meta: {
    title: "Refund Policy | The BFR Pros",
    description:
      "30-day money-back guarantee on The Complete BFR Certification. No questions asked. How to request a refund and what to expect.",
    canonicalPath: "/refund-policy",
    ogImagePath: "/og/home",
  },
  hero: {
    eyebrow: "Refunds",
    title: "Refund Policy",
    lastUpdated: LAST_UPDATED,
  },
  intro: [
    "The Complete BFR Certification is the primary product sold by The BFR Pros. This policy covers refunds on that purchase. If you buy a different product or service from us in the future, the refund terms applicable to that product will be stated at checkout and on the product page.",
  ],
  sections: [
    {
      heading: "30-day money-back guarantee",
      paragraphs: [
        "If you are not satisfied with The Complete BFR Certification, you may request a full refund within 30 days of your enrollment. The refund is no questions asked: we will not ask you to prove dissatisfaction, complete modules, or take a survey before issuing the refund.",
        "To request a refund, email nick@thebfrpros.com from the email address you used to enroll. Include your order number if you have it. We will confirm receipt of your request and process the refund through Teachable, the platform that handles enrollment and payment.",
      ],
    },
    {
      heading: "How long the refund takes",
      paragraphs: [
        "Once we approve the refund, Teachable returns the funds to your original payment method. Depending on your card issuer or bank, the credit usually posts within five to ten business days. If you have not seen the credit after ten business days, contact your card issuer first; if they confirm the refund has not been received, contact us at nick@thebfrpros.com and we will help resolve it with Teachable.",
      ],
    },
    {
      heading: "After the 30-day window",
      paragraphs: [
        "After the 30-day window we generally do not issue refunds. If you have an extenuating circumstance, contact us at nick@thebfrpros.com and we will review the request in good faith.",
      ],
    },
    {
      heading: "Subscriptions, payment plans, and discounted purchases",
      paragraphs: [
        "If you purchased through a payment plan, the 30-day window starts from the date of the first payment. Refunds are issued for any payments made within the window; payments scheduled after a refund is approved are cancelled.",
        "Discount codes, affiliate-credit codes, and bundle pricing do not change the 30-day window or the refund process.",
      ],
    },
    {
      heading: "Group enrollments and clinic purchases",
      paragraphs: [
        "If you enrolled a group or a clinic team and one or more seats need to be cancelled, contact nick@thebfrpros.com. Group refunds within the 30-day window are issued on the same terms as individual refunds. After the 30-day window, unused group seats are not refunded but may be transferable to other practitioners at your discretion.",
      ],
    },
    {
      heading: "Disputes and chargebacks",
      paragraphs: [
        "Before filing a chargeback with your card issuer, please contact us at nick@thebfrpros.com. We honor the 30-day money-back guarantee and would rather resolve any refund request directly than through a chargeback process.",
      ],
    },
  ],
  contact: {
    heading: "Refund requests and questions",
    paragraphs: [
      "Email nick@thebfrpros.com to request a refund or ask a question about this policy. We reply within one business day.",
    ],
  },
};

// ---------------------------------------------------------------------------
// EXPORT MAP — used by the four route pages.
// ---------------------------------------------------------------------------

export const LEGAL_DOCS = {
  privacy: PRIVACY,
  terms: TERMS,
  disclaimer: DISCLAIMER,
  refund: REFUND,
} as const;
