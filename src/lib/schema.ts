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

// /blog index. Transition-state schema: a CollectionPage carrying a
// Blog with BlogPosting ItemList. Each BlogPosting points at the
// external (legacy) URL via `url`. When Phase 4 migration moves the
// posts onto this site, each BlogPosting `url` will switch to the
// internal /blog/[slug] path.
type BlogSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  posts: ReadonlyArray<{ title: string; externalUrl: string; category: string }>;
};

export function buildBlogSchemaGraph({
  pageTitle,
  pageDescription,
  posts,
}: BlogSchemaInput) {
  const pageUrl = `${SITE.origin}/blog`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const blogId = `${pageUrl}#blog`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;
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
          { "@type": "ListItem", position: 2, name: "Blog", item: pageUrl },
        ],
      },
      {
        "@type": "Blog",
        "@id": blogId,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        publisher: { "@id": orgId },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: p.externalUrl,
          author: { "@id": personId },
          publisher: { "@id": orgId },
          articleSection: p.category,
        })),
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": blogId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /podcast. PodcastSeries carrying a PodcastEpisode ItemList. Host
// references the canonical Rolnick Person @id. Platform links surfaced
// as sameAs entries on the PodcastSeries so Google can disambiguate the
// show across Apple/Spotify/YouTube.
type PodcastSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  platforms: ReadonlyArray<{ name: string; href: string }>;
  episodes: ReadonlyArray<{ number: number; title: string; topic: string }>;
};

export function buildPodcastSchemaGraph({
  pageTitle,
  pageDescription,
  platforms,
  episodes,
}: PodcastSchemaInput) {
  const pageUrl = `${SITE.origin}/podcast`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const seriesId = `${pageUrl}#series`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;

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
          { "@type": "ListItem", position: 2, name: "Podcast", item: pageUrl },
        ],
      },
      {
        "@type": "PodcastSeries",
        "@id": seriesId,
        name: "BFR Better-For-Results Podcast",
        url: pageUrl,
        description: pageDescription,
        publisher: { "@id": orgId },
        author: { "@id": personId },
        sameAs: platforms.map((p) => p.href),
        episode: episodes.map((ep) => ({
          "@type": "PodcastEpisode",
          name: ep.title,
          episodeNumber: ep.number,
          partOfSeries: { "@id": seriesId },
          about: ep.topic,
        })),
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": seriesId },
        breadcrumb: { "@id": breadcrumbId },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /research and /research/publications. Both surface the same Person
// (Dr. Rolnick) + a ScholarlyArticle ItemList. /research is the brand-
// level page with the WebPage type; /research/publications is the deep
// CollectionPage where each ScholarlyArticle gets author/headline/url
// detail for Google's research-rich-result surfaces.
type ResearchPaperItem = {
  title: string;
  abstract: string;
  url: string | null;
  journal: string;
  year: number;
};

function rolnickPersonRef(orgId: string) {
  return {
    "@type": "Person",
    "@id": `${SITE.origin}/about/nicholas-rolnick#person`,
    name: ROLNICK.fullName,
    jobTitle: "Doctor of Physical Therapy",
    worksFor: { "@id": orgId },
  };
}

type ResearchSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  papers: ReadonlyArray<ResearchPaperItem>;
};

export function buildResearchSchemaGraph({
  pageTitle,
  pageDescription,
  papers,
}: ResearchSchemaInput) {
  const pageUrl = `${SITE.origin}/research`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;

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
      rolnickPersonRef(orgId),
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "Research", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: papers.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "ScholarlyArticle",
              headline: p.title,
              author: { "@id": personId },
              datePublished: String(p.year),
              isPartOf: { "@type": "Periodical", name: p.journal },
              ...(p.url ? { url: p.url } : {}),
            },
          })),
        },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

export function buildPublicationsSchemaGraph({
  pageTitle,
  pageDescription,
  papers,
}: ResearchSchemaInput) {
  const pageUrl = `${SITE.origin}/research/publications`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const personId = `${SITE.origin}/about/nicholas-rolnick#person`;

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
      rolnickPersonRef(orgId),
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.origin },
          { "@type": "ListItem", position: 2, name: "Research", item: `${SITE.origin}/research` },
          { "@type": "ListItem", position: 3, name: "Publications", item: pageUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: papers.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "ScholarlyArticle",
              headline: p.title,
              abstract: p.abstract,
              author: { "@id": personId },
              datePublished: String(p.year),
              isPartOf: { "@type": "Periodical", name: p.journal },
              ...(p.url ? { url: p.url } : {}),
            },
          })),
        },
        datePublished: "2026-05-12",
        dateModified: "2026-05-12",
      },
    ],
  };
}

// /reviews page. CollectionPage carrying the canonical AggregateRating
// for the Course plus a Review @list pulled from the same TESTIMONIALS +
// STUDENT_TESTIMONIALS used on screen. Anchors the same #rating @id used
// on the homepage and /get-certified so Google sees one consistent rating
// entity sitewide.
type ReviewsSchemaInput = {
  pageTitle: string;
  pageDescription: string;
  longForm: ReadonlyArray<{ name: string; quote: string; role?: string }>;
  shortForm: ReadonlyArray<{ name: string; quote: string }>;
};

export function buildReviewsSchemaGraph({
  pageTitle,
  pageDescription,
  longForm,
  shortForm,
}: ReviewsSchemaInput) {
  const pageUrl = `${SITE.origin}/reviews`;
  const orgId = `${SITE.origin}#organization`;
  const websiteId = `${SITE.origin}#website`;
  const courseId = `${SITE.origin}#course`;
  const ratingId = `${SITE.origin}#rating`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const reviewItems = [
    ...longForm.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: { "@id": courseId },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
    })),
    ...shortForm.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: { "@id": courseId },
      reviewRating: {
        "@type": "Rating",
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
    })),
  ];

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
          { "@type": "ListItem", position: 2, name: "Reviews", item: pageUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        url: pageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": courseId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: reviewItems,
        },
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
