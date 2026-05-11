// JSON-LD schema generators. One @graph per page so the rich-results test sees one
// connected entity tree instead of competing snippets.

import { CEU_APPROVALS, ENROLL_URL, PRICING, ROLNICK, SITE, STATS } from "./constants";

type HomeSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  faq: ReadonlyArray<{ q: string; a: string }>;
};

// Homepage @graph. Differs from buildSchemaGraph: no BreadcrumbList (root page),
// WebPage URL is SITE.origin, WebSite includes a SearchAction (sitelinks
// searchbox eligibility), and the FAQ is the homepage's 5-item set.
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
        primaryImageOfPage: `${SITE.origin}/og/home`,
        datePublished: "2026-05-10",
        dateModified: "2026-05-10",
        author: { "@id": personId },
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
