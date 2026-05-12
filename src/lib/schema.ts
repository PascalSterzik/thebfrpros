// JSON-LD schema generators. One @graph per page so the rich-results test sees one
// connected entity tree instead of competing snippets.

import { CEU_APPROVALS, ENROLL_URL, LICAMELI, PRICING, ROLNICK, SITE, STATS } from "./constants";

type HomeSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  // FAQ is OPTIONAL on the homepage. Per brand-guide.md Copy & Customer
  // Journey Principles Principle 6, the homepage does not host a cert-
  // mechanics FAQ; that lives at /get-certified. The FAQPage @graph entry
  // is only emitted when a real FAQ section is rendered on the page.
  faq?: ReadonlyArray<{ q: string; a: string }>;
};

// Homepage @graph. Differs from buildSchemaGraph: no BreadcrumbList (root page),
// WebPage URL is SITE.origin, WebSite includes a SearchAction (sitelinks
// searchbox eligibility). FAQPage entry only present when faq is supplied.
export function buildHomeSchemaGraph({ pageTitle, pageDescription, faq }: HomeSchemaInput) {
  const pageUrl = `${SITE.origin}/`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const courseId = `${SITE.origin}#course`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;
  const faqId = `${pageUrl}#faq`;
  const ratingId = `${SITE.origin}#rating`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
        sameAs: [
          SITE.social.instagram,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.tiktok,
          SITE.social.twitter,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            email: SITE.contactEmail,
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE.origin}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: ROLNICK.fullName,
        jobTitle: "Doctor of Physical Therapy",
        description: `Founder of ${SITE.brandName}. ${ROLNICK.publicationsLine}.`,
        image: `${SITE.origin}/images/instructors/rolnick-portrait.jpg`,
        alumniOf: ROLNICK.alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a.name })),
        affiliation: ROLNICK.affiliations.map((name) => ({ "@type": "Organization", name })),
        worksFor: { "@id": orgId },
        sameAs: [
          "https://scholar.google.com/citations?user=GfVw8cIAAAAJ",
          "https://www.researchgate.net/profile/Nicholas-Rolnick",
          SITE.social.instagram,
        ],
      },
      {
        "@type": "Course",
        "@id": courseId,
        name: "The Complete BFR Certification",
        description:
          "37-module, 11.75 CEU professional certification in evidence-based blood flow restriction training for licensed physical therapists, athletic trainers, and strength and conditioning coaches.",
        provider: { "@id": orgId },
        instructor: { "@id": personId },
        url: `${SITE.origin}/get-certified`,
        educationalLevel: "Professional",
        teaches: "Blood flow restriction (BFR) training",
        coursePrerequisites: "Licensed PT, AT, S&C coach, or equivalent allied-health credential",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT15H45M",
            instructor: { "@id": personId },
          },
        ],
        offers: [
          {
            "@type": "Offer",
            price: PRICING.bundlePrice,
            priceCurrency: PRICING.currency,
            availability: "https://schema.org/InStock",
            url: ENROLL_URL,
            category: "Professional certification",
          },
        ],
        aggregateRating: { "@id": ratingId },
      },
      {
        "@type": "AggregateRating",
        "@id": ratingId,
        itemReviewed: { "@id": courseId },
        ratingValue: STATS.ratingValue,
        reviewCount: STATS.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      ...(faq && faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": faqId,
              mainEntity: faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": courseId },
        primaryImageOfPage: `${SITE.origin}/og/home`,
        datePublished: "2026-05-10",
        dateModified: "2026-05-10",
        author: { "@id": personId },
      },
    ],
  };
}

// /about parent page. AboutPage type. Links back to the canonical Person
// @ids for Rolnick and Licameli so the team cards' deep bios resolve as the
// same entities everywhere on the site.
type AboutSchemaInput = {
  pageTitle: string;
  pageDescription: string;
};

export function buildAboutSchemaGraph({ pageTitle, pageDescription }: AboutSchemaInput) {
  const pageUrl = `${SITE.origin}/about`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const rolnickId = `${SITE.origin}/about/nicholas-rolnick#person`;
  const licameliId = `${SITE.origin}/about/nicholas-licameli#person`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
        founders: [{ "@id": rolnickId }, { "@id": licameliId }],
        sameAs: [
          SITE.social.instagram,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.tiktok,
          SITE.social.twitter,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            email: SITE.contactEmail,
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Person",
        "@id": rolnickId,
        name: ROLNICK.fullName,
        jobTitle: "Doctor of Physical Therapy",
        description: `Co-founder of ${SITE.brandName}. ${ROLNICK.publicationsLine}.`,
        image: `${SITE.origin}/images/instructors/rolnick-large.jpg`,
        alumniOf: ROLNICK.alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a.name })),
        affiliation: ROLNICK.affiliations.map((name) => ({ "@type": "Organization", name })),
        worksFor: { "@id": orgId },
      },
      {
        "@type": "Person",
        "@id": licameliId,
        name: LICAMELI.fullName,
        jobTitle: "Doctor of Physical Therapy",
        description: `Co-founder of ${SITE.brandName}. ${LICAMELI.tagline}.`,
        image: `${SITE.origin}/images/instructors/licameli.jpg`,
        worksFor: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        mainEntity: { "@id": orgId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /faq page. Full FAQPage + BreadcrumbList + Organization + WebSite. The
// FAQPage entries carry every Q+A from the page so Google can surface
// rich-result snippets.
type FAQPageSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  items: ReadonlyArray<{ q: string; a: string }>;
};

export function buildFAQPageSchemaGraph({
  pageTitle,
  pageDescription,
  items,
}: FAQPageSchemaInput) {
  const pageUrl = `${SITE.origin}/faq`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "FAQ", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: items.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// Audience landing pages (/for/[profession]). WebPage + BreadcrumbList +
// Organization + Course reference, so search engines connect the audience
// page to the canonical Course entity. The page itself is a CollectionPage-
// style landing; we use WebPage since it's the right neutral schema for a
// long-form persuasion page.
type AudienceSchemaInput = {
  path: string;
  audienceName: string;
  pageTitle: string;
  pageDescription: string;
};

export function buildAudienceSchemaGraph({
  path,
  audienceName,
  pageTitle,
  pageDescription,
}: AudienceSchemaInput) {
  const pageUrl = `${SITE.origin}${path}`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const courseId = `${SITE.origin}#course`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: `BFR for ${audienceName}`, item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": courseId },
        breadcrumb: { "@id": breadcrumbId },
        audience: {
          "@type": "Audience",
          audienceType: audienceName,
        },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// Legal pages (/privacy, /terms, /disclaimer, /refund-policy). Minimal @graph:
// Organization + WebSite + BreadcrumbList + WebPage. WebPage subtype carries
// the right semantic for utility legal pages without inventing a non-standard
// schema type.
type LegalSchemaInput = {
  path: string;
  pageTitle: string;
  pageDescription: string;
  breadcrumbName: string;
};

export function buildLegalSchemaGraph({
  path,
  pageTitle,
  pageDescription,
  breadcrumbName,
}: LegalSchemaInput) {
  const pageUrl = `${SITE.origin}${path}`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: breadcrumbName, item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /contact ContactPage. Minimal @graph: Organization + WebSite + BreadcrumbList
// + ContactPage. The Organization carries the canonical contactPoint that
// search engines surface in knowledge-panel results, and the ContactPage
// mainEntity links back to it.
type ContactSchemaInput = {
  pageTitle: string;
  pageDescription: string;
};

export function buildContactSchemaGraph({ pageTitle, pageDescription }: ContactSchemaInput) {
  const pageUrl = `${SITE.origin}/contact`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
        sameAs: [
          SITE.social.instagram,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.tiktok,
          SITE.social.twitter,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            email: SITE.contactEmail,
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": orgId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /about/[bio] bio sub-pages. ProfilePage type with a Person mainEntity.
// PersonId mirrors the @id used in the Course / About / Home schemas so all
// references resolve as the same entity across the site.
type PersonPageSchemaInput = {
  path: string;
  personId: string;
  pageTitle: string;
  pageDescription: string;
  personName: string;
  jobTitle: string;
  imageSrc: string;
  alumniOf?: ReadonlyArray<{ name: string }>;
  affiliation?: ReadonlyArray<string>;
  sameAs?: ReadonlyArray<string>;
  parentBreadcrumb: { name: string; path: string };
};

export function buildPersonPageSchemaGraph({
  path,
  personId,
  pageTitle,
  pageDescription,
  personName,
  jobTitle,
  imageSrc,
  alumniOf,
  affiliation,
  sameAs,
  parentBreadcrumb,
}: PersonPageSchemaInput) {
  const pageUrl = `${SITE.origin}${path}`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
        sameAs: [
          SITE.social.instagram,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.tiktok,
          SITE.social.twitter,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            email: SITE.contactEmail,
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: personName,
        jobTitle,
        description: pageDescription,
        image: `${SITE.origin}${imageSrc}`,
        ...(alumniOf
          ? { alumniOf: alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a.name })) }
          : {}),
        ...(affiliation
          ? { affiliation: affiliation.map((name) => ({ "@type": "Organization", name })) }
          : {}),
        worksFor: { "@id": orgId },
        ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: parentBreadcrumb.name, item: `${SITE.origin}${parentBreadcrumb.path}` },
          { "@type": "ListItem", position: 3, name: personName, item: pageUrl },
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

type SchemaInput = {
  variantPath: string;
  pageTitle: string;
  pageDescription: string;
  faq: Array<{ q: string; a: string }>;
};

export function buildSchemaGraph({ variantPath, pageTitle, pageDescription, faq }: SchemaInput) {
  const pageUrl = `${SITE.origin}${variantPath}`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const courseId = `${SITE.origin}#course`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const faqId = `${pageUrl}#faq`;
  const ratingId = `${SITE.origin}#rating`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE.brandName,
        url: SITE.origin,
        logo: `${SITE.origin}/images/logos/bfr-pros-primary.png`,
        sameAs: [
          SITE.social.instagram,
          SITE.social.facebook,
          SITE.social.youtube,
          SITE.social.tiktok,
          SITE.social.twitter,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: SITE.phone,
            email: SITE.contactEmail,
            contactType: "customer support",
            areaServed: "US",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE.origin,
        name: SITE.brandName,
        publisher: { "@id": orgId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: ROLNICK.fullName,
        jobTitle: "Doctor of Physical Therapy",
        description: `Founder of ${SITE.brandName}. ${ROLNICK.publicationsLine}.`,
        image: `${SITE.origin}/images/instructors/rolnick-portrait.jpg`,
        alumniOf: ROLNICK.alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a.name })),
        affiliation: ROLNICK.affiliations.map((name) => ({ "@type": "Organization", name })),
        worksFor: { "@id": orgId },
        sameAs: [
          "https://scholar.google.com/citations?user=GfVw8cIAAAAJ",
          "https://www.researchgate.net/profile/Nicholas-Rolnick",
          SITE.social.instagram,
        ],
      },
      {
        "@type": "Course",
        "@id": courseId,
        name: "The Complete BFR Certification",
        description:
          "37-module, 11.75 CEU professional certification in evidence-based blood flow restriction training for licensed physical therapists, athletic trainers, and strength and conditioning coaches.",
        provider: { "@id": orgId },
        instructor: { "@id": personId },
        url: pageUrl,
        educationalLevel: "Professional",
        teaches: "Blood flow restriction (BFR) training",
        coursePrerequisites: "Licensed PT, AT, S&C coach, or equivalent allied-health credential",
        hasCourseInstance: [
          {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "PT15H45M",
            instructor: { "@id": personId },
          },
        ],
        offers: [
          {
            "@type": "Offer",
            price: PRICING.bundlePrice,
            priceCurrency: PRICING.currency,
            availability: "https://schema.org/InStock",
            url: ENROLL_URL,
            category: "Professional certification",
          },
        ],
        aggregateRating: { "@id": ratingId },
      },
      {
        "@type": "AggregateRating",
        "@id": ratingId,
        itemReviewed: { "@id": courseId },
        ratingValue: STATS.ratingValue,
        reviewCount: STATS.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "Get Certified", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": faqId,
        mainEntity: faq.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": courseId },
        breadcrumb: { "@id": breadcrumbId },
        primaryImageOfPage: `${SITE.origin}/images/og/og-${variantPath.replace(/^\//, "")}.png`,
        datePublished: "2026-05-06",
        dateModified: "2026-05-06",
        author: { "@id": personId },
        accreditedBy: CEU_APPROVALS.map((a) => ({ "@type": "Organization", name: a.body })),
      },
    ],
  };
}
