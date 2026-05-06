# The BFR Pros: Phase 1A: /get-certified Concept Variants

**Status:** Phase 1A rerun build (first attempt 2026-05-06 was thrown out for skipping the skill stack: see gotchas 56 + 57).
**Build target:** Three concept variants of `/get-certified`, deployed to Vercel preview URLs for Pascal + Nick to pick a direction.
**Tech stack:** Next.js 14 (App Router, static export) + Tailwind CSS 3 + React 18 + Framer Motion 12.
**Repo:** PascalSterzik/thebfrpros.

---

## 1. Committed Aesthetic Direction

> **Poster-bold clinical authority: Compacta Bold (the actual brand display font, self-hosted via `next/font/local`) over humanist DM Sans body, atmospheric navy fields with subtle noise-textured depth, sharp red accents earned through restraint, generous editorial spacing, and motion that feels like a confident researcher turning pages, not a marketer waving its arms.**

(Initial build went to DM Serif Display because the brand guide currently directs Compacta Bold to short-form video only and lists Playfair Display + DM Serif Display as web alternatives. Pascal corrected that on 2026-05-06 — Compacta IS the brand identity for web headlines too — so the OTF was self-hosted from `Assets/Fonts/`. Brand guide should be updated to reflect this decision in the next edit pass.)

Reference points (from brand-guide.md): Mayo Clinic clinical credibility, Precision Nutrition identity-led conversion, NASM modular structure. Explicit anti-references: fitness-bro aesthetic, cold-academic walls of text.

## 2. Design Intelligence Query Result (verbatim)

Query: `python3 search.py "professional medical certification authority editorial" --design-system -p "The BFR Pros"`

```
PATTERN: Trust & Authority + Minimal
  Sections: Hero -> Features -> CTA (the user spec extends to 22 sections)

STYLE: Trust & Authority
  Keywords: certificates/badges displayed, expert credentials, case studies with metrics,
  before/after comparisons, industry recognition, security badges
  Best For: Healthcare/medical landing pages, financial services, premium products
  Performance: Excellent | Accessibility: WCAG AAA

COLORS (CLI suggestion): #0891B2 / #22D3EE / #22C55E / #F0FDFA / #134E4A
  - Brand-guide OVERRIDES: Navy #193763 + Red #AD1A27 + #F5F7FA + #1F2937 + #FFFFFF.

TYPOGRAPHY (CLI suggestion): Figtree / Noto Sans
  - Brand-guide OVERRIDES: DM Serif Display (headings) + DM Sans (body).
    DM Serif Display is in brand-guide's approved set AND on the user spec's
    recommended pairs list. DM Sans is on the recommended pairs list and avoids
    the forbidden Inter default.

KEY EFFECTS (KEPT): badge hover effects, metric pulse animations, certificate carousel,
  smooth stat reveal.

ANTI-PATTERNS (KEPT): generic content, no credentials, AI purple/pink gradients.
```

### Reconciliation

| Element | Source | Decision |
|---|---|---|
| Colors | brand-guide.md | Navy #193763 primary, Red #AD1A27 accent, Off-white #F5F7FA, Ink #1F2937, White |
| Typography | brand-guide.md (updated 2026-05-06 by Pascal) | **Compacta Bold (self-hosted) + DM Sans**. Webfont licensing must be confirmed before public deploy. |
| Pattern | CLI + user spec | Trust & Authority style applied to user's locked 22-section flow |
| Effects | CLI + frontend-design skill | Badge hover, metric pulse, smooth stat reveal, scroll fade-up, magnetic CTA on desktop only |
| Anti-patterns | CLI + frontend-design + user spec | No purple gradients, no Inter, no Playfair Display, no em-dashes, no forbidden AI words |

## 3. Variant Table

| Route | Belief | Lead Angle | H1 |
|---|---|---|---|
| `/get-certified-v1` | Belief 5 | Research-authority lead | "Learn BFR from the most-published BFR researcher in the world." |
| `/get-certified-v2` | Belief 3 | Equipment-agnostic lead | "The only BFR certification that doesn't sell you a cuff." |
| `/get-certified` | Belief 6 | Patient-demand lead (chosen 2026-05-06) | "Your patients are already asking for BFR. Be the clinic that delivers it." |

Variant-specific sections (locked): Announcement Bar, Hero, Problem, Dream Vision, Dream Deep Dive, Solution Bridge, Final CTA framing, P.S. All other sections share components.

## 4. Section Architecture (22 sections, in order)

Per the user spec Step 4. Variant differences live only in the bolded sections.

1. **Top Announcement Bar**: variant-specific lead-belief hook
2. Sticky Header with mobile hamburger
3. **Hero**: variant-specific Step 1 headline + subhead + primary CTA + supporting visual
4. Credibility Bar: real Featured-In logos (CNN, WSJ, Forbes, ESPN, Men's Health, GQ, PubMed, NSCA)
5. **Problem Section**: Step 2, 4-Layer Pain Stack from 02-avatar-sheet + 05-avatar-journal verbatim phrases
6. **Dream Vision**: longform sensory prose, NO bullets, the 9:42 Tuesday mood
7. **Dream Deep Dive**: identity-marketing amplification, no broken-person framing
8. **Solution Bridge**: 150-250 words, the hinge between emotion and product
9. Solution / The BFR Pros Difference: Step 3 + Three Stranger Questions
10. Curriculum: 4 courses, 37 modules, 11.75 CEUs, accordion
11. Instructor Authority: Dr. Rolnick + Dr. Licameli (Step 4)
12. What's Included / Bonuses: 11 implementation bonuses (Step 7 stack)
13. CEU Approvals: real BOC + APTA NY badges, text for NJ State PT, NATA, APTA scope
14. Visual Proof: real BFR-in-action photos
15. Testimonials: exactly 3, specific outcomes only
16. Partners: Ivy Rehab, Kinesport, Team ACL, AccessPT, Professional PT
17. Pricing: Step 7, $449 single bundle vs $654 value, primary CTA
18. Guarantee: Step 9, 30-day money-back, real logo
19. FAQ: minimum 8 questions covering objection list from 04-offer-brief
20. **Final CTA**: Step 10 + Step 11 Warning, variant-specific urgency frame
21. **P.S.**: Step 12, third most-read element
22. Footer

CTA distribution: 6+ per variant, after hero / after credibility / after dream deep dive / after curriculum / after testimonials / in pricing / in final CTA.

## 5. 12-Step Framework Mapping (per variant)

| Step | Section | Where |
|---|---|---|
| 1: Headline | Hero H1 | Section 3 |
| 2: Identify Problem | 4-Layer Pain Stack | Section 5 |
| 3: Solution + Three Stranger Questions | Solution / BFR Pros Difference | Section 9 |
| 4: Credentials | Instructor Authority | Section 11 |
| 5: Benefits | Solution + What's Included | Sections 9, 12 |
| 6: Social Proof | Credibility Bar + Testimonials + Partners | Sections 4, 15, 16 |
| 7: Offer | Pricing + Bonuses | Sections 12, 17 |
| 8: Scarcity | Announcement Bar (real scarcity only: patient-demand momentum) | Section 1 |
| 9: Guarantee | Money-Back block | Section 18 |
| 10: CTA | 6+ throughout, primary in Pricing | Sections 3, 4, 7, 10, 15, 17, 20 |
| 11: Warning | Final CTA cost-of-inaction frame | Section 20 |
| 12: P.S. | P.S. block | Section 21 |

## 6. SEO + AEO + GEO + LLMO + Schema (per variant)

Each variant ships with:

**Technical SEO:**
- Unique `<title>` (~60 chars), unique `<meta description>` (~155 chars), canonical URL
- Open Graph + Twitter Card with 1200x630 share image
- robots.txt allowing all major bots (incl. GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended)
- sitemap.xml referencing all three variant URLs + the index
- Semantic HTML, single H1, no skipped levels
- Descriptive alt text on every image
- next/image with `unoptimized: true` for static export, lazy-loading below fold
- Lighthouse 90+ Performance, 95+ Accessibility, 95+ SEO

**Structured data (JSON-LD via @graph):**
- Organization (sitewide)
- WebSite (per variant)
- Course (price 449 USD, provider The BFR Pros, instructor Dr. Nicholas Rolnick, duration 11.75 CEUs, courseMode online, educationalLevel Professional)
- Person (Dr. Nicholas Rolnick: credentials, alumniOf Columbia, affiliation Lehman CUNY + Concordia, sameAs social)
- FAQPage (every Q+A as Item)
- AggregateRating (4.7 / 712 reviews)
- BreadcrumbList

**AEO + GEO + LLMO patterns (Princeton GEO research-backed):**
- Direct-answer FAQ blocks (definition first, expansion after)
- Cite sources (+40% boost): PubMed links on Rolnick's research
- Add statistics (+37%): 50+ pubs, 11.75 CEUs, 4.7/712 reviews, 100+ clinics
- Add quotations (+30%): 3 named-credential testimonials
- Named-entity consistency: "Dr. Nicholas Rolnick" first reference, "The BFR Pros" with article
- Definition snippets near top: "Blood flow restriction (BFR) is..."
- Comparison table near solution section (BFR Pros vs Owens vs PESI vs NE Seminars vs Mike Reinold)
- Author bylines + "Last updated" dates + outbound citations to peer-reviewed work

## 7. Mandatory Editing Pass Status

| Pass | Description | Status |
|---|---|---|
| Visual Rewrite | Every claim is a scene; abstract → concrete | Pending after first draft |
| Chain Check | Each section's last line pulls into the next | Pending after first draft |
| Brand & Voice Match | Re-verified against brand-guide.md | Pending after first draft |
| Compliance Scan | No income claims, no fake scarcity, no fabricated testimonials | Pending after first draft |

## 8. Forbidden List (zero tolerance, grep-verified before declaring complete)

- Em-dashes anywhere (CLAUDE.md + copywriting skill)
- "transform", "unlock", "leverage", "synergy", "seamlessly", "empower", "harness", "elevate", "revolutionize", "journey", "in today's world", "world-class", "best-in-class", "cutting-edge", "game-changing"
- Weasel words: "might", "could", "may help"
- Fonts: Inter, Roboto, Arial, system-ui, Space Grotesk, Playfair Display
- Colors: default Tailwind blue/indigo/purple, purple-on-white gradients

## 9. Lighthouse Scores (per variant)

To be filled in after deploy.

| Variant | Performance | Accessibility | SEO | Best Practices |
|---|---|---|---|---|
| v1 | TBD | TBD | TBD | TBD |
| v2 | TBD | TBD | TBD | TBD |
| v3 | TBD | TBD | TBD | TBD |

## 10. Schema Validation (per variant)

To be filled in after deploy. Tools: https://validator.schema.org and https://search.google.com/test/rich-results.

## 11. Deploy Steps

1. Initialize git in this folder, commit, push to PascalSterzik/thebfrpros (`main`).
2. Connect repo to Vercel, import as a new project.
3. Build settings: Next.js detected automatically. Output: static export.
4. Vercel preview URL is the deliverable. The same project serves all three routes.
5. Run Lighthouse on each variant route via PageSpeed Insights, document scores in this README.
6. Run schema validator + Rich Results test on each variant, document.
7. Send Pascal: 3 preview URLs + Lighthouse + schema results + DoD checklist + this aesthetic direction sentence.

## 12. Definition of Done Checklist

- [x] Aesthetic direction committed in writing before any code (above)
- [x] Design intelligence query was run, result saved (above)
- [x] All 6 mandatory skills invoked (landing-page-builder, frontend-design, copywriting, seo, ui-ux-design-intelligence, website-qa)
- [x] All 11 context files read in full (orchestrator, BUILD-BRIEF, site-architecture, brand-guide, dossier 02-06, COPY-ASSETS)
- [x] All 11+ Asset subfolders ls'd before scaffolding
- [ ] All 22 sections per Step 4 present in each variant
- [ ] All 12 copywriting steps applied (P.S. visible, Warning visible, real Scarcity, Three Stranger Questions answered early)
- [ ] Mandatory Editing Pass run on all copy (4 passes documented in this README)
- [ ] Zero em-dashes (grep verified)
- [ ] Zero forbidden defaults: typography NOT Inter/Roboto/Arial/system-ui/Space Grotesk
- [ ] Zero forbidden AI words
- [ ] Real client imagery used wherever inventory covers it
- [ ] Mobile hamburger nav working at 375px viewport
- [ ] All structured data validates
- [ ] Lighthouse 90+ Performance, 95+ Accessibility, 95+ SEO on each variant
- [ ] WCAG AA contrast verified
- [ ] 6+ CTAs distributed per variant
- [ ] All 3 variants verified on dev server with screenshots at 375 + 1280
- [ ] website-qa skill quality gate run as final gate
- [ ] No console errors, no broken images, no broken links
