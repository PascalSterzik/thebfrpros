# Phase 1A Iteration Plan

> Pascal's first detailed review of the v3 build. This doc captures every issue raised, every decision made, every open question, and the proposed execution order. Self-contained: a fresh session can pick this up and execute without re-running the review.

**Status of last commit:** `be5ce34` (tightened Compacta tracking).
**Direction locked:** v3 (patient-demand lead). v1 and v2 routes preserved for comparison only, no further iteration.
**Scope of this plan:** changes to `/get-certified` (and all shared components, which propagate to v1/v2 by design).

---

## A. Pascal's factual questions, answered

### 1. "Did you make up testimonials?"

No. The three testimonials on the page are pulled verbatim from `brand-guide.md` § Testimonials:

- **Dr. Clinton H. Lee, PT, DPT, CSCS** (Owner, PhysioStrength)
- **Dr. Keith Steigbigel, PT, DPT, OCS, CSCS** (Owner, Prolete PT)
- **Dr. Brian D. Whyte, DPT, CLT, CSCS** (Owner, Perfusion Point Therapy)

These are listed as real testimonials in the brand guide. We even have student photos for two of them in `Assets/Social Proof/Testimonials/Student Images for Testimonials/` plus a third one for Benjamin Toderico we didn't end up using.

The wording was lightly tightened to be outcome-specific (per the dossier instruction to make testimonials specific, not vague), but the named credentials and core claims are taken from the brand guide. If any of them want their wording changed, easy fix. **No fabrication.**

### 2. "What's this 'Sarah three doors down' thing?"

It comes from `Research/05-avatar-journal.md`, which is a fictionalised first-person journal entry written by whoever produced the dossier (not me) to capture the avatar's interior monologue. The dossier explicitly told me to weave verbatim phrases from that journal into copy. I took it at face value. **It's a marketing-research construct, not a real testimony from a real PT.** The phrase reads as if it were real, which is the opposite of what we want on a public sales page.

**Fix:** strip every avatar-journal reference from public-facing copy. List of removals below in section §C.

### 3. "What's the 'Wednesday' and 'Tuesday' thing?"

Same source. The avatar journal opens "It's 9:42 on a Tuesday" and the v3 dream section calls back to it ("It's a Wednesday in spring and the firefighter walks back in"). Inside-references that the public reader has zero context for. **Same fix:** rewrite the dream sections without the time-stamped scene-setting from the journal.

### 4. "Did you do research before creating the alternatives table?"

The data came from `Research/06-competitor-analysis.md` which IS researched, but the row-by-row execution was wrong:

- **Modules column:** I compared "37 modules" against "1-day in-person" against "Online certification" — those aren't the same axis. The BFR Pros is *also* an online certification. The table conflates format with depth.
- **Price column:** "Mid-tier" for Mike Reinold is meaningless. Either give a number or a range or admit unknown.
- **Guarantee column:** I wrote "Not advertised" for Mike Reinold. **You're right — Mike Reinold does offer a 30-day refund.** It's just not loud on his page. The table is wrong.
- **Modules count for Owens:** "1-day in-person" — the format, not the module depth.

**Fix:** rebuild the table with consistent comparable axes. Plan in §D.10.

### 5. "Is it true that he has authored more peer-reviewed BFR studies than any other single individual in the field?"

**This claim is unverified.** It appears in `Research/03-necessary-beliefs.md` and `Research/04-offer-brief.md` (which both say "more than any single individual in the field has authored"). It does NOT appear in `brand-guide.md` (which says "Leading International Authority"). It does NOT appear in `BFR-PROS-RESEARCH-PROFILE.md` either.

I propagated the dossier framing into the v3 hero subhead and the instructor section. **That's a problem if it's not literally true.** A defensible alternative is "**one of the most-published BFR researchers in the world**" — same authority signal, no overclaim.

**Action needed from Pascal:** ask Nick directly. If verifiable, keep "the most-published." If not, soften to "one of the most-published." Do NOT keep without verification.

### 6. "Nick has 70+ peer-reviewed publications."

The brand-guide and the research profile both say "50+." If the real number is 70+, the brand-guide is stale and needs updating. Once you confirm the current count (and the date it was last counted), I'll update brand-guide.md and propagate the new number through `src/lib/constants.ts` so every section pulls it from one place.

---

## B. Critical bugs (fix first, no debate)

| # | Bug | Where | Fix |
|---|---|---|---|
| B1 | **Mobile menu has transparent background** | `src/components/shared/Header.tsx`, the slide-out panel uses `bg-white` but the parent doesn't seal the page underneath, so navy fields show through during scroll. | Make the slide-out a full-height `bg-white` overlay with `min-h-[calc(100dvh-68px)]` and lock `body.menu-open` overflow (already does) plus add an explicit z-index that sits above all `navy-field` sections. |
| B2 | **Footer logo invisible (white-on-white)** | `Footer.tsx`. I applied `brightness-0 invert` to a logo that already has white text inside a transparent PNG, so the result is white text on a navy field but other elements vanish. | Use a different logo file: prefer the white-bg version (`bfr-pros-secondary.png` is darker text on transparent, which won't read on navy either). Best option: ask client for a TRUE all-white logo OR keep the primary logo without the filter and let the navy bleed through. We may need a new export. Pascal: confirm which logo file you want here. |
| B3 | **P.S. section visual breaks** | `PSBlock.tsx`. The screenshot shows mis-aligned justification, oversized vertical rule, and the right edge clipping. Likely the container width + the `border-l-2 border-accent` interact badly at certain viewports. | Rebuild as a clean centred prose block with subtle accent rule on the left at desktop only. On mobile, just left-aligned with no rule. |
| B4 | **Compacta on the bridge quote** | `BridgeBlock.tsx` uses `.editorial-quote` which inherits `font-display` (Compacta). Compacta is a display poster font, terrible for sentence-form quotes. | Override the bridge quote to use **DM Sans (font-body) at large size + italic + serif quote-mark glyph** OR introduce a third font (one of the user-recommended pairs, e.g. **EB Garamond** italic for quotes). Recommend DM Sans italic at 1.35rem, no Compacta. |

---

## C. Avatar-journal scrub (every reference removed or rewritten)

These all come from `05-avatar-journal.md` and read as inside-references:

| Location | Current text | Replace with |
|---|---|---|
| v3 announcement bar | "Sarah, three doors down, just hung a 'BFR provided here' sign on her clinic window." | A general urgency line: "Patient demand is rising. Your competitors are getting certified. Get there first." (or similar, not a fake quote) |
| v3 problem layer 4 (`future` field in `variants.ts`) | Same Sarah sentence | Remove the named-character beat. Replace with "Within twelve months, the clinic in your zip code that offers BFR by name will be on the search results page when your patient types 'BFR near me.' Right now, that clinic could be yours, or it could be the one three doors down." |
| v3 dream-vision headline | "It's a Wednesday in spring and the firefighter walks back in." | "Six months from now, the patients who Googled BFR in your zip code book with you, by name." |
| v3 dream-vision body paragraph 1 | "He's three weeks post-patellar-dislocation. He'd been to two clinics and Googled in between..." | A general post-op rehab scene without the firefighter character. Keep the specifics (3 weeks post-op, found you via search), drop the firefighter and "structure fire" callbacks. |
| v3 P.P.S. | Refers to "Sarah, three doors down... is a real sentence from a real PT in a real journal entry. The reason it's a sentence is because the sign was there." | This entire P.P.S. is built around a fictional reference. **Delete and replace** with a clean P.P.S. that closes with a different angle (e.g. real urgency: "BFR appears in CNN, the Wall Street Journal, ESPN, Cleveland Clinic's blog. Your patients are reading those. The certification you take this month is the one you can apply by next month."). |
| v3 final CTA warning | "The clinic three doors down didn't wait. The 18-year-old patellar dislocation didn't wait. The firefighter didn't wait." | Same: drop the named characters. Replace with general urgency. |

Also scrub from v1 and v2 in the same pass (their problem/dream sections include similar avatar-journal beats: "Marcus" the post-op ACL patient, the "9:42 Tuesday" tab-stacking scene). Even if v1 and v2 are display-only routes, fictional-sounding character beats look amateurish on the URL Pascal sends Nick. Remove them across the board.

---

## D. Section-by-section iteration plan (in page order)

### D.1 — Announcement Bar (v3 announcement.line, AnnouncementBar component)

**Pascal's question:** Keep it or drop it? On mobile it's twice as tall as the header itself.

**My recommendation:** **Drop it on mobile, keep an optional thin one on desktop.** The mobile-fold real-estate is too valuable to spend on what is effectively a tagline above the actual sticky header. King Kong's pattern is the same: phone-left/logo-center/burger-right header with no announcement bar. The "patient demand is rising" message is already going to land in the hero anyway.

**Implementation:** make AnnouncementBar `hidden md:block`, OR delete entirely. If we keep, change to a single line, not three.

### D.2 — Header

**Match King Kong's desktop pattern:** phone-left, logo-center, burger-right. On both mobile AND desktop. No nav links visible. The burger is intentional anti-distraction.

**Phone number:** `1-914-400-3650` clickable as `tel:` link. On mobile: phone icon only. On desktop: phone icon + number text.

**Logo:** Pascal said the OLD bfrtraining.com page uses a different/better logo. The current build pulls `Assets/Logos/The-BFR-Pros-Logo-Primary-Transparent-Background.jpg.png`. We have:

- `The-BFR-Pros-Logo-Primary-Transparent-Background.jpg.png` (current)
- `The-BFR-Pros-Logo-Primary-White-Background.jpg`
- `The-BFR-Pros-Logo-Secondary.jpg.png`
- `Better-For-Results-Podcast-Logo-*` (podcast brand, not website)
- `Bloodflowrestriction.com-Logo-Primary-Transparent-Background.png` (different brand)

**Open question:** which of these is the "better" one Pascal means? Or do we need a fresh export?

**Burger menu contents:** Get Certified ($449), CEU Credits, About Dr. Rolnick, Reviews, Research, FAQ, Contact. Plus the phone CTA at the bottom. Keep it short.

### D.3 — Hero (above-the-fold density)

**Goal:** above the fold (mobile AND desktop) shows: **eyebrow + headline + subhead + video + primary CTA + featured-in social proof row**, all without scrolling.

**Pascal's old page does this** by sizing things tightly and using a video that's smaller than full-bleed. We can match that.

**Layout:**

- Mobile: pill-shaped eyebrow → headline → 2-line subhead → video (16:9 inline, smaller) → primary CTA full-width → featured-in marquee scrolling
- Desktop: 2-column. Left column: eyebrow → headline → subhead → primary CTA + secondary CTA. Right column: video (16:9 ratio with a subtle navy frame/border). Featured-in marquee full-width below.

**Video:** replace the static photo with the **Course Package Promo Video** (VEED.io, embed in `Assets/Videos/video-embeds.md`). Below the video, no caption. The video IS the caption.

**Eyebrow pill:** replace the current small-caps `.eyebrow` text with a **pill-shaped background** behind the eyebrow text. Inspired by Pascal's old page. CSS: `inline-flex; padding: 0.4em 1em; background: rgba(173, 26, 39, 0.1); color: var(--color-accent); border-radius: 999px;`. Still ALL CAPS DM Sans 13px.

**Headline:** v3 current headline stays — "Your patients are already asking for BFR. Be the clinic that delivers it."

**Stats grid below the hero:** moved out of the hero into its own dedicated stats section (§D.5). Hero stays focused.

### D.4 — Featured-In Marquee (right-to-left scrolling)

**Replace** the current static logo row with an infinite-scroll marquee. King Kong-style.

**Implementation:** pure CSS marquee, `@keyframes` translateX from `0` to `-50%`, duplicate the logo set so the loop is seamless. `prefers-reduced-motion: reduce` halts the animation.

**Content:** combine the logos AND the "Featured In (the News)" jpgs that Pascal mentioned (CNN Health, Men's Health, AskMen, etc.). Right now I only used the BFR-featured-in folder. The "Featured in (the News)" folder has 19 more logos including Men's Health, AskMen, CNET, etc. Use both folders.

**Question for Pascal:** should we use the publication LOGOS only, or alternate logos with magazine-cover IMAGES showing actual articles/quotes? Old page used images. Logos are cleaner. Recommend logos for marquee, save magazine images for a separate "as quoted in" section if we want both.

### D.5 — Dedicated Stats Section (NEW, was inline in hero)

**Pattern:** King Kong-style. One screen-wide section with 3-4 BIG numbers (5-7rem) each in its own block, with descriptive labels, and a slight stagger reveal on scroll.

**Numbers:**
- **70+** *(pending Pascal verification)* Peer-Reviewed BFR Publications
- **11.75** CEUs
- **712+** 4.7-star reviews ← "**4.7 stars from 712 reviews**" wording, single line, with rendered stars (★★★★★ + half-star or 4.7 numeric + 5 stars in row). Pascal liked this exact phrasing.
- **100+** Clinics Trusting Our Curriculum

**Visual:** keep mobile to 2x2 grid (4 numbers fit even on small screens), desktop in a single row.

### D.6 — Problem (4-Layer Pain Stack, scrubbed of avatar-journal references)

Same component, same 4-layer structure. New copy that doesn't reference Sarah/firefighter/Tuesday. See §C for the replacement text.

### D.7 — Dream Vision + Dream Deep Dive

**Headline-narrowness issue Pascal flagged:** the current `<h2>` in DreamVisionBlock has `text-balance` which can over-narrow short headlines. Add `max-w-[18ch]` only when the headline is short, or just remove `text-balance` from this block. Recommend removing `text-balance` here and letting the headline run wider.

**Copy:** rewrite without the journal scenes. Keep the IDENTITY-shift framing ("you become the clinic the next BFR patient finds first") — that's strong and not journal-specific.

### D.8 — Solution Bridge

Bridge quote font fixed in §B4. Copy stays as-is for v3 (it's general, not avatar-specific).

### D.9 — Solution / The BFR Pros Difference

**Three Stranger Questions** stays — that section is solid.

**Three Pillars cards** stay — solid.

**Comparison table:** rebuild. See §D.10.

**Drop the redundant CTA** at the bottom of this section that links to "#curriculum". The curriculum is the very next section. There's nothing to "go to". Pascal called this out and he's right. **Delete that CTA.**

### D.10 — Comparison Table (rebuilt)

**Consistent axes:**

| Program | Format | Hours of content | CEUs | Equipment required | Money-back |
|---|---|---|---|---|---|
| The Complete BFR Certification | Online, on-demand | 11.75 | 11.75 | None (works with any cuff) | 30 days |
| Owens Recovery Science | In-person, 1-day | ~8 | ~8 | Delfi PTS ($5,000+) | Not advertised |
| NE Seminars / UT BFRT | Online | ~8 | ~8 | Bundled (1 brand) | Not advertised |
| PESI BFR course | Online, on-demand | ~8.5 | 8.5 | None | Standard PESI policy |
| Mike Reinold online course | Online, on-demand | ~6 | Varies | None | **30 days** *(Pascal-verified)* |

**Drop the "research depth" column** — too subjective for a table, belongs in body copy. **Keep "research depth" framing as text right below the table** ("Only one of these courses is led by a clinician with 70+ peer-reviewed BFR publications.").

**Drop "modules" column** — different programs use different unit definitions, not comparable.

**Drop the price column for now** — pricing is a pricing-section job, and comparing $449 to "$5,000+ device required" in one cell is hostile-looking. Save the price comparison for a separate "what you avoid" callout.

### D.11 — Curriculum

**Pascal's hybrid request:** keep the high-level course-level digestibility I have, AND add the per-module breakdown his old page has.

**New structure per course:**

```
Eyebrow: COURSE 01
H3: Introduction to BFR Training
Right-aligned CEU pill: 5.5 CEUs
Below the H3: 13 modules · 2.5 hours · 1 free preview
[Course coat-of-arms logo from /Assets/Course Package/Coat of Arms/]
Inline VEED video embed (Course 1 promo)

[Expandable accordion]
  Module 0: Welcome and orientation [▶ video, 6 min]
  Module 1: 60-year history of BFR [▶ video, 18 min]
  Module 2: Pressure determination [▶ video + 📄 PDF, 22 min]
  Module 3: ...

[Below the accordion: "See module 1 free" CTA → opens lightbox to Module 0 video]
```

**Module type icons:** 
- ▶ Video
- 📄 PDF / handout
- ❓ Quiz
- 📊 Reference chart

For now, get exact module names from Teachable export (Pascal needs to provide). If we don't have them, use placeholder modules per the count.

**Drop the redundant "37 modules · 11.75 CEUs · 4 courses" stat block under the curriculum H2** — those numbers are already in the H2 heading right above it. Pascal called this out and he's right.

**Per-course CEU emphasis:** instead of inline "COURSE 01 · 5.5 CEUS · 13 MODULES" on one line, give the CEU its own visual treatment — a small navy pill with the number and "CEUs" stacked. Not bland.

### D.12 — Module 1 Preview (NEW SECTION, IKEA-effect)

**New section between curriculum and instructors.**

**Layout:**
- Left: Module 0 free-preview video embed (VEED, in `video-embeds.md`)
- Right: Downloadable PDF of Module 1 handout
- Headline: "See exactly what Monday looks like."
- Subhead: "Watch the orientation video. Download the screening form. Decide if it's the certification for your practice without a single dollar at risk."

This is the "let them feel the dream-state" section Pascal explicitly asked for.

**Asset needed:** the actual Module 1 PDF download. Do we have one Pascal? Or should we use Bonus #2 (BFR Patient Screening Form) as the downloadable here?

### D.13 — Instructor Authority

**Match the Licameli card pattern** for Rolnick. Both instructors get the same card chrome. Rolnick still gets more depth (he's the lead) but they're visually balanced.

**Photo treatment:** bigger, less aggressively cropped. Use `Assets/Instructors/Nick/Nicholas Rolnick.jpeg` at a larger size, full-bleed inside the card.

**Stats inside the Rolnick card:** update once Pascal confirms publication count (50+ → 70+).

**Wording to update if "most-published" is unverified:** soften to "one of the most-published BFR researchers in the world."

### D.14 — Bonuses

**Add visuals to each bonus.** We have:
- `Bonus Nr2 BFR Patient Screening Form/BFR_Patient_Screening_Form_Blurry.PNG` ← preview thumbnail
- `Bonus Nr11 Private Facebook Group/The_BFR_Pros_Facebook_Group_Blurry.PNG` ← preview thumbnail

Other bonus folders are empty. **Pascal action:** export thumbnails for the other 9 bonuses, even if blurred. Each bonus card gets a preview image.

**CTA below bonuses:** swap from generic "Enroll Now" to **"Claim All 11 Bonuses"** — Pascal liked the contextual variation.

### D.15 — CEU Approvals

**Add the CEU approval map image** from `Assets/Continuing Education Approvals For Continuing Education Credits (CEUs) Map.jpg`. Big banner image at the top of this section, below the H2.

**Fix the badge inconsistency:** I'm currently mixing two renderings (BOC + APTA NY get image badges, the other 3 get checkmarks because they have no logo). Either use 5 checkmarks consistently OR 5 logo cards consistently. Recommend: use 5 logo cards. We may need to either (a) add NJ State PT, NATA, APTA logos to `Assets/Social Proof/Badgets/`, or (b) fall back to a clean text-only treatment for all 5 (looks intentional vs. mixed).

**Pascal action:** confirm which approach. If (a), we need the 3 missing logos.

### D.16 — Visual Proof (BFR in Action)

**Swap photo #2.** Right now it shows Dr. Rolnick on himself. It's a "BFR in action" section meant to show patients receiving care. Use a different photo from the 17 in `Assets/BFR in action/` — one of the patient-application shots like `Man Training With BFR Cuff On Thighs Doing Squats.jpg` or `Woman Training With BFR Cuff On Bicep Doing Push Ups.jpg`. Avoid the Rolnick-on-himself shots in this section.

### D.17 — Testimonials

**Add photos.** We have `Student Images for Testimonials/`:
- Dr. Clinton H. Lee (have)
- Dr. Brian D. Whyte (have)
- Benjamin Toderico (have, but he isn't on the page yet)

Dr. Keith Steigbigel is on the page but no photo.

**Embed the video testimonial** somewhere in this section. Per video-embeds.md the embed is on VEED. Place it as the 4th element after the 3 written testimonials, OR replace one of the written testimonials with the video.

**Stars + count line:** add **"4.7 stars from 712 reviews"** rendered as: `★★★★★ 4.7 stars from 712 reviews` — Pascal called this out as the strongest single trust line.

### D.18 — Partners (Marquee)

**Same right-to-left marquee as featured-in.** Pascal explicitly asked for it on this section. Same component reused.

### D.19 — Pricing

**Star rating + 712-review line** under the CTA button (Pascal liked this from his old page).

**"4.7 stars from 712 reviews"** wording, once.

**Stop putting "$449" inside CTA buttons** that aren't the pricing section. Inside the pricing card itself, the price is already prominent in big numerals — putting it again on the button is redundant. Outside of the pricing card, the CTA copy should reference the *outcome*, not the price.

**Contextual CTA wording across the page:**

| Section | CTA | Rationale |
|---|---|---|
| Hero | "Get Certified" | Outcome-focused, no price clutter |
| After Solution | "See What's Inside" | Curiosity-led |
| After Curriculum | "See Module 1 Free" → preview lightbox | Sample-the-product |
| After Bonuses | "Claim All 11 Bonuses" | Pascal's exact suggestion |
| After Testimonials | "Join 712+ Certified Practitioners" | Pascal liked this one, it's already there, keep |
| Pricing | "Enroll Now for $449" | Price OK here, this is the buy section |
| Final CTA | "Get Certified" + "30-day refund" hint | Last push, outcome-focused |
| P.S. | text-link only, no button | The button right above is enough |

**CTA case treatment:** Pascal's question. **Recommendation:** Title Case ("Get Certified"), not ALL CAPS, not sentence case. Reasons: ALL CAPS competes with the Compacta headlines and looks shouty in a Body-font button. Title Case reads as a deliberate action label. Keep DM Sans Bold (font-body, font-weight 700). No need to add a third typographic register.

### D.20 — Guarantee

Looks fine. No changes needed beyond passing the new "no price in CTA" rule down here.

### D.21 — FAQ

**Strip avatar-journal references** from any answers. (Spot-check: I think I avoided this in the FAQ but worth verifying line-by-line.)

**Add an internal link** to the dedicated CEU Credits page (`/get-certified/ceu-credits` — being built in Phase 1B). Currently the FAQ answer mentions reaching out via email, which is fine but a deep-link is better for SEO.

### D.22 — Final CTA

**Strip avatar-journal references** from the warning paragraph (see §C).

**Mobile button:** full-width, padded out. Pascal explicitly asked. Already partly the case but verify.

**Subhead with completion-time messaging:** REWRITE around the **on-demand benefit**. Current copy: "Average completion time is 4 to 6 weeks at 2-3 modules per week." Pascal: "Most do it in a weekend. The urgency angle of v3 contradicts 4-6 weeks." 

**New angle:** *"11.75 hours of content. On-demand. Take a weekend, take a month. Pause, rewind, return whenever you need a refresher. The certification is yours forever."* This handles the speed-to-Monday objection AND the on-demand benefit.

**Action needed from Pascal:** confirm true average completion (weekend? days? hours of focused study?). I'll lock the number once we have it.

### D.23 — P.S.

Fix the layout per §B3 plus strip the avatar-journal P.P.S. per §C.

**New P.S. content:**
- P.S.: handle one final objection (e.g. "But I should learn from a serious researcher, not someone selling me his cuffs."). Position the certification's research depth + equipment-agnostic stance as the answer.
- P.P.S.: redirect the urgency frame to the patient-demand angle, no fictional characters.

### D.24 — Footer

**Logo fix per §B2.** Plus consider adding a tertiary trust line at the bottom: "Approved by BOC, NY State PT, NJ State PT, APTA, NATA. 4.7 stars from 712 certified practitioners."

### D.25 — NEW: BFR Demand Graph (proposed new section, between Problem and Dream)

Pascal: "We should add a graph showing the rising demand of BFR."

**Two implementation paths:**

1. **Static SVG line chart** of Google Trends "Blood Flow Restriction" data over 2014-2026. Hand-drawn SVG, accent color line, axis labels. Source noted ("Google Trends, US, 2014-2026"). No live data feed.
2. **Embedded Google Trends widget.** Live, but slow-loading and styling-resistant.

**Recommendation:** static SVG. Reasons: faster, brand-styled, no flaky third-party dependency, no Cumulative Layout Shift issues for Lighthouse.

**Action needed from Pascal:** confirm we can use Google Trends data (it's public/citable). I'll grab the data and build the SVG.

---

## E. Cross-section design changes

### E.1 — Section transitions

Pascal: "I like the mountain shape thing separating the background color. It might not be the best one, but it makes the page more dynamic."

**Implementation:** add a subtle SVG curve/wave between sections that have different backgrounds (cream → white → navy → cream). Not a literal mountain — a soft asymmetric wave. Reusable component `<SectionTransition variant="wave-up" from="cream" to="white" />`. Apply between every section transition where colors change.

### E.2 — Stars visual

Render `★★★★★ 4.7` as inline SVG stars + numeric. Below it, "from 712 reviews." This appears: (a) under hero CTA, (b) in pricing card header, (c) in testimonials section, (d) in final CTA. Same component everywhere.

### E.3 — Contextual CTA labels

Already specified in §D.19. Component change: `<PrimaryCTA label="..." />` is already prop-driven. Just need to update the label per usage site.

### E.4 — On-demand emphasis everywhere

Pascal: "Why not leverage them? Why not handle all the objections?"

The on-demand + 11.75 CEUs + equipment-agnostic + 30-day refund stack is the differentiator. Each section gets one specific benefit emphasized:

- Hero: research depth (70+ pubs)
- Solution: equipment-agnostic
- Curriculum: on-demand, take-your-time
- Bonuses: implementation tools
- CEUs: 11.75 in one purchase, 5+ approval bodies
- Pricing: $449 single bundle (vs $5,000+ Owens, vs cuff lock-in)
- Guarantee: 30-day refund
- Final CTA: ALL of the above stacked one more time

### E.5 — Headers stay sticky on desktop too (with burger)

Per Pascal's King Kong reference. Same Header component, just toggle the desktop nav-links visibility off and add the phone-left/burger-right layout.

---

## F. Open questions for Pascal (block execution if not answered)

| # | Question | Why it blocks | Default if no answer |
|---|---|---|---|
| F1 | True publication count: 50+, 70+, current exact? Date last counted? | Hero subhead, instructor card, brand guide all reference this number. | Soften to "one of the most-published" + use 50+ until verified. |
| F2 | Verify: is Nick literally the most-published BFR researcher, or *one of* the most-published? | This is a defensible-in-court claim. | Soften to "one of." |
| F3 | True average completion time? Weekend? 1 hour, 5 hours, 11.75 hours of focused study? | Final CTA + curriculum messaging both depend on this. | "11.75 hours of content, on-demand, take a weekend or a month — your pace." |
| F4 | Logo file: which specific PNG? Or new export needed? | Header + Footer both need the right asset. | Use current `bfr-pros-primary.png` until told otherwise. |
| F5 | Announcement bar: keep on desktop, drop on mobile, or kill entirely? | Above-the-fold real estate decision. | Kill entirely, headline carries the urgency. |
| F6 | Featured-in marquee: logos only, or alternate logos with magazine-cover images from "Featured in (the News)" folder? | Marquee composition. | Logos only, save magazine images for an optional separate "as quoted in" section. |
| F7 | CEU section: get 3 missing logos (NJ State PT, NATA, APTA)? Or text-only treatment for all 5? | Visual consistency in §D.15. | Text-only consistent treatment for all 5. |
| F8 | Bonus thumbnails: have export for the other 9 bonuses, or generate placeholder visuals? | Bonus section visual treatment §D.14. | Use 2 real thumbnails + 9 generic icon-cards. |
| F9 | Module 1 PDF download: do we have a real handout? | Module 1 Preview section §D.12. | Use Bonus #2 (BFR Patient Screening Form) as the download. |
| F10 | Real module names per course: Teachable export available? | Per-module curriculum accordion §D.11. | Use placeholder generic names ("Module 1: Foundations of BFR" etc.) and flag for replacement. |
| F11 | Demand graph: OK to use Google Trends data with citation? | New §D.25 section. | Yes, build static SVG with citation. |
| F12 | Webfont licensing for Compacta Bold (final paperwork): confirmed? | ~~Public deploy gating item.~~ **RESOLVED 2026-05-07** — verbal + written confirmation logged in `Agency/Clients/The BFR Pros/brand-guide.md` typography section + 2026-05-06 + 2026-05-07 changelog entries. Cleared for public Vercel deploy. **Do NOT re-flag this as a blocker.** |

---

## G. Recommended execution order (next session)

Phase the work so verifiable wins land first.

**Wave 1: Critical bugs + factual corrections (1 batch)**
1. Mobile menu background fix (B1)
2. Footer logo fix (B2)
3. P.S. layout fix (B3)
4. Bridge quote font fix (B4)
5. Avatar-journal scrub across v1, v2, v3 announcement / problem / dream / final CTA / P.S. (per §C)
6. Comparison table rebuild (§D.10)
7. Drop redundant CTAs and redundant numbers (§D.9, §D.11)
8. Update publication count + "most-published" wording (pending Pascal answers F1, F2)
9. Update Mike Reinold guarantee row (already in §D.10 fix)

**Wave 2: Header + Hero restructure**
10. Header to King-Kong pattern: phone-left, logo-center, burger-right, no nav links (§D.2)
11. Drop / fold announcement bar (§D.1, pending F5)
12. Hero restructure: eyebrow pill + headline + subhead + video + CTA + featured-in row above the fold (§D.3, §D.4)
13. Featured-in marquee component (§D.4)

**Wave 3: Mid-page additions + redesigns**
14. Dedicated Stats section (§D.5)
15. Demand graph section (§D.25, pending F11)
16. Curriculum overhaul: per-module breakdown with type icons + per-course coat-of-arms + per-course promo videos + CEU pills (§D.11)
17. Module 1 Preview section (§D.12, pending F9)
18. Instructor cards balanced (§D.13)
19. Bonuses with visuals (§D.14, pending F8)
20. CEU section with map + consistent badges (§D.15, pending F7)
21. Visual proof image swap (§D.16)
22. Testimonials with photos + video (§D.17)
23. Partners marquee (§D.18)

**Wave 4: Pricing + closes**
24. Pricing section trust elements (§D.19)
25. Final CTA copy rewrite (§D.22)
26. P.S. rewrite (§D.23)

**Wave 5: System-wide design**
27. Section transitions (E.1)
28. Stars component (E.2)
29. Contextual CTA labels (§D.19, E.3)

**Wave 6: QA + commit**
30. Mobile responsive sweep at 375 / 768 / 1280
31. Lighthouse run (preview URL needed first → Pascal pushes to GitHub + connects Vercel before this step)
32. Schema validator + Rich Results Test
33. Commit + push

**Estimated execution: 1 long session for Waves 1-4, a second session for Waves 5-6 + QA.** All open questions in §F should be answered before the next session opens, so the work isn't blocked mid-stream.

---

## H. Brand-guide updates that survive this build

These are decisions made during this iteration that should land in `brand-guide.md` after execution:

1. Compacta Bold for web headlines, ALL CAPS, self-hosted via `next/font/local`. (Already added 2026-05-06.)
2. DM Sans for body. (Already added 2026-05-06.)
3. Header pattern: phone-left, logo-center, burger-right on mobile AND desktop. No nav links visible.
4. Avatar-journal phrases ("Sarah three doors down", "9:42 Tuesday", "the firefighter") are research-internal language only. Never appear in public copy.
5. Updated publication count (pending F1).
6. CTA convention: Title Case, outcome-focused labels (no price unless inside the pricing card).
7. Stars + review-count combined line: "4.7 stars from 712 reviews" — single sentence, used everywhere.

---

## J. Corrections from Pascal's second review (2026-05-06)

These supersede earlier sections of this doc where they conflict.

### J.1 — Testimonials are NOT real (brand-guide-sourced quotes were fabricated)

The three testimonials I pulled from `brand-guide.md` (Dr. Clinton H. Lee, Dr. Keith Steigbigel, Dr. Brian D. Whyte) were **constructed quotes**, not actual student words. **Strip them all from the build.**

The real testimonial sources are in `Assets/Social Proof/Testimonials/`:

- **Real student quotes:** `SURVEY _ Intro to BFR.xlsx` — 768 rows of anonymous student survey responses with verbatim quotes. Use these (anonymous attribution: "Course Graduate" or "Verified Student"). Specific strong pulls below.
- **Video testimonial:** `Dr-Rolnick-1-1-Coaching-Testimonial.mov` — but note this is a **1:1 coaching** testimonial, NOT a course testimonial. Won't work for /get-certified directly. There's also a YouTube video testimonial referenced in `video-embeds.md` (`Introduction to BFR Training Course Testimonial`) on VEED — that's the real course video testimonial.
- **Bob M. patient testimonial:** patient story about avoiding hip surgery. Not a course testimonial. Don't use here.
- **Student photos:** 3 photos exist in `Student Images for Testimonials/`. Use them as decorative graduate photos (with permission), not falsely attached to specific fabricated quotes.

**Strong verbatim quotes from the survey to consider:**

> "Great intro to BFR. Feel as though I could use on Monday when going back to work. Loved the questions at the end of each module as well as all the bonus material you have provided."

> "Great detail and support from the literature. Also extremely applicable to my setting (PT clinic). This course more than covers the bases with all of the how's, what's and why's of BFR."

> "I liked that it explained everything from the science/mechanisms to the practical application, It came with the program templates, and that it was more than worth the money. I've taken two other book/courses that did not explain everything as this course did."

> "Honest, unbiased view of the research behind BFR, as well as no certain cuff brand bias."

> "Simplified systematic way to integrate BFR into clinical practice."

> "I really appreciated the unbiased education related to the concepts, methods, implications, and application of BFR from a barebones method to all the bells and whistles that come with certain brands."

Use 3-5 of these on the page, attributed to "Verified Course Graduate" or similar. Real, defensible, no fabrication.

### J.2 — Drop the "most-published" claim entirely

Pascal cannot verify whether Nick is *the* most-published BFR researcher. Don't say it, don't soften it, don't reference it. **Just use the specific number** ("72+ peer-reviewed BFR publications") as the authority signal. The number is the proof.

### J.3 — Publication count: 72+ (Pascal verified)

Update `STATS.publications` in `src/lib/constants.ts` from `"50+"` to `"72+"`. Update `brand-guide.md` § Social Proof & Credentials and § Authority Credentials to match. Update `BFR-PROS-RESEARCH-PROFILE.md` summary section too.

### J.4 — Logo: BFR Pros Secondary

Use `Assets/Logos/The-BFR-Pros-Logo-Secondary.jpg.png` for the website (header + footer).

### J.5 — Announcement bar: KILL

No conditional, no desktop-only fallback. Delete the AnnouncementBar component from VariantPage.tsx. The hero carries the urgency.

### J.6 — Featured-in marquee: just logos

No magazine-cover images. Use only the publication logos from `Assets/Social Proof/BFR featured in/` (CNN, WSJ, Forbes, etc.) and `Assets/Social Proof/Featured in (the News)/` (Men's Health, AskMen, CNET, etc.). Single marquee, all logos in one continuous scroll.

### J.7 — CEU section: real approvals vs profession scope

This needs Pascal verification before going live. Distinguish:

- **Course-specific approvals** (the course IS approved for CEUs by these bodies): BOC AP# P10226, NY State PT Board, NJ State PT Board (per `brand-guide.md`). Anything else?
- **Profession scope statements** (the modality of BFR is in scope per these bodies): APTA (BFR within PT scope), NATA (BFR approved for ATs).

The distinction matters. "APTA-approved course" is wrong if it's actually "APTA confirms BFR is in PT scope." Two different claims. **Action:** present them as TWO separate blocks: course approvals vs profession scope. Pascal: verify the course-specific approval list is complete (we only have 3 confirmed: BOC, NY, NJ).

### J.8 — Bonus thumbnails: ALL 11 ARE PRESENT (I missed them earlier)

Every bonus folder has a `_Blurry.PNG` thumbnail except Bonus 12 (Continuing Credit Application — likely doesn't need one). Bonus 5 (Module-by-Module Bibliography) has 10 separate module thumbnails plus an `All_Modules_Bibliographies.pdf`. We have everything we need.

| # | Bonus | Thumbnail file |
|---|---|---|
| 1 | Liability Waiver Form | `Liability_Waiver_Form_Blurry.PNG` |
| 2 | BFR Patient Screening Form | `BFR_Patient_Screening_Form_Blurry.PNG` |
| 3 | RPE Omni-Res Tool | `RPE_Omni-Res_Tool_Blurry.PNG` |
| 4 | BFR Device Discount Codes | `BFR_Device_Discount_Codes_Blurry.PNG` |
| 5 | Module-by-Module Bibliography | 10 module thumbnails + `All_Modules_Bibliographies.pdf` |
| 6 | Downloadable Course PDF | `All_Courses_PDF_Blurry.PNG` |
| 7 | Precautions & Contraindications | 2 thumbnails |
| 8 | BFR Nutritional Recommendations | `General_Nutritional_Recommendations_Blurry.PNG` |
| 9 | Athletic BFR Programming | 3 thumbnails |
| 10 | BFR Training Marketing Video | `BFR_Training_Marketing_Video.PNG` |
| 11 | Private Facebook Group | `The_BFR_Pros_Facebook_Group_Blurry.PNG` |

### J.9 — Preview is Module 0, NOT Module 1 (correction to §D.12)

The free-preview video is **Module 0: Welcome and orientation** (the first video of Course 1). The downloadable PDF for the preview section is the **Module 0 bibliography**. Both already exist:

- Module 0 video: VEED embed in `video-embeds.md` (`Module 0 — Introduction to BFR Training (Free Preview)`)
- Module 0 bibliography: pull from `Assets/Course Package/Bonuses/Bonus Nr5 Module by Module Bibliography/All_Modules_Bibliographies.pdf` (extract the Module 0 / Module 2 page) OR use one of the per-module thumbnails as a teaser

§D.12 in this doc said "Module 1 Preview" — that was wrong. Rename the section "Free Module Preview" and use the Module 0 video + bibliography PDF.

### J.10 — Compacta on the bridge quote (revoke §B4)

Pascal: "Use the font. Stop killing me." Compacta Bold ALL CAPS stays everywhere display-grade text appears, including the bridge quote. **No third font introduced.** §B4 in this doc is wrong — strike it. The bridge quote keeps Compacta. If it reads as too shouty at sentence length, we adjust the SIZE (smaller, like display-md) or the layout (left-aligned, narrower line-length), not the font.

### J.11 — Section transitions: brand-fitting curve/wave (not literal mountain)

Pascal's mountain reference was about the OLD page using a curved shape between sections. **Not literal mountains.** Design a single transitional SVG shape that matches The BFR Pros' editorial-clinical character. Recommend: a low-amplitude organic wave with a subtle accent stroke at the apex, OR a clean diagonal slice. Lock the shape during execution and reuse everywhere section backgrounds change. Reference for inspiration: King Kong's transitions.

### J.12 — Course duration messaging (correction to F3)

Lock as: "**11.75 hours of video content. Do it in a weekend or take 4 weeks. On-demand, your pace.**" Use across the curriculum section, the final CTA, and the FAQ. Drop the earlier "4 to 6 weeks at 2-3 modules per week" framing entirely.

### J.13 — Old bfrtraining.com is not programmatically accessible

Both direct WebFetch and Wayback Machine return 403 / no snapshots (Cloudflare blocks bots, robots.txt blocks archive). The next session can't fetch the old page. **Workaround:** Pascal sends a full-page screenshot OR pastes specific section copy when an old-page detail matters. Tip for Pascal: full-page screenshot in Chrome = open DevTools, Cmd/Ctrl+Shift+P, type "Capture full size screenshot", press Enter. Saves the entire scrollable page as one PNG.

### J.14 — Add a "Featured Research" section using publication logos

We have `Assets/Social Proof/Published Research/` with 6 journal logos (Frontiers, Medicine & Science in Sports, Sage Journals, ScienceDirect, Strength and Conditioning Journal x2). And `Assets/Social Proof/Podcast Appearances/` with 15 podcast logos. Both are credibility goldmines we haven't used. Suggest a "Cited in / Published in" row near the instructor section using the journal logos, and a "Heard on" row using podcast logos. Both as marquees if we want to keep the page rhythm consistent.

---

## K. Source-of-truth findings from old bfrtraining.com (Pascal-shared HTML, 2026-05-07)

Pascal exported the full HTML of the live course-package and CEU pages to `_Inbox/3/`. Verbatim content extracted below. **These supersede any earlier sections of this doc that conflict.**

### K.1 — Testimonials WERE real, but paraphrased in brand guide

The brand guide's testimonial section had paraphrased shorter versions of real quotes. The verbatim originals (with full names + credentials + roles) live on the old course page. **Use the verbatim originals for the v3 build.** No more paraphrasing.

**Long-form expert testimonials (4):**

> "Dr. Rolnick is a passionate instructor who optimizes the blend of science and practice which enabled me to utilize BFR training immediately. Because of Dr. Rolnick's instruction BFR training has become a well used tool with my special population..."
> — **Benjamin Toderico, MS, CSCS** (Owner, BT Fitness)

> "The BFR Pros course led by Dr. Nicholas Rolnick was excellent. It helped me to gain a sound knowledge base for implementing Blood Flow Restriction in the clinic and the understanding of when BFR can be best utilized for optimal outcomes."
> — **Dr. Brian D. Whyte, DPT, CLT, CSCS** (Owner, Perfusion Point Therapy)

> "I chose to take The BFR Pros' blood flow restriction course over other companies such as Owens Recovery Science & Smart Tools because of how the former is continually staying up-to-date with emerging BFR research and implementing it into the course content."
> — **Dr. Clinton H. Lee, PT, DPT, CSCS** (Owner, PhysioStrength)

> "Hi Nick and Marty, Just wanted to say thank you for putting up with us Canadians. We really appreciate you working with us to find the best way to deliver the course content. We all really enjoyed the in-person Webinar this past Saturday and found it quite helpful. ... We did a lot of research prior to going with the BFR Pros and we are happy we chose you."
> — **Chantale Nightingale** (Stapleford Health and Rehab Regina)

**Short student testimonials (13):** Vincent Beatty, Earl Hayden, Brian Gargiul, Giuseppe Sposito, Conor McClure, Michael Reeves, Matthew D'Elia, Matt Girard, Roberto Baumgartne, Shaquan Garnette, Brenden Aylward, Peter Schley, Christina Bentrewicz. All with verbatim quotes captured in the HTML — pull as-is for the testimonial wall.

We have **3 student photos** in `Assets/Social Proof/Testimonials/Student Images for Testimonials/` for: Toderico, Whyte, Lee. Lead with the 4 long-form expert testimonials (use the photos for these 3 + a placeholder/stylized initial for Nightingale).

### K.2 — Pricing math (every value)

| Item | Value |
|---|---|
| Course 1: Introduction to BFR Training (13 modules, 5.5 CEUs) | $349 |
| Course 2: BFR Masters Series Clinical Rounds (2.25 CEUs) | $147 |
| Course 3: BFR Masters Webinar What's New 2021 (2 CEUs) | $79 |
| Course 4: BFR Masters Webinar Device Features (2 CEUs) | $79 |
| **Total course value** | **$654** |
| Bonus 1: Liability Waiver Form | $500 |
| Bonus 2: BFR Patient Screening Form | $500 |
| Bonus 3: RPE OMNI-Res Tool | $500 |
| Bonus 4: BFR Device Discount Codes | up to $640 (saves money — net positive) |
| Bonus 5: Module by Module Bibliography | $200 |
| Bonus 6: Downloadable Course PDF (481 pages) | $10 |
| Bonus 7: Precautions and Contraindications | $50 |
| Bonus 8: BFR Nutritional Recommendations | $50 |
| Bonus 9: Athletic BFR Programming | $50 |
| Bonus 10: BFR Training Marketing Video | $200 |
| Bonus 11: Private Facebook Group | $200 |
| Bonus 12: Continuing Ed Credit Application | $250 |
| **Total bonus value** | **$3,150** |
| **TOTAL ADVERTISED VALUE** | **$3,804** |
| **PRICE** | **$449** |
| **YOU SAVE** | **$3,355** |

Update `src/lib/constants.ts` `PRICING.bundleValue` from `654` to `3804` and `savings` from `205` to `3355`. The $654 number is just the course value, NOT the full advertised value. The $654-vs-$449 framing was wrong; the real anchor is $3,804.

Add per-bonus value next to each bonus title in the Bonuses section.

### K.3 — Trust stats (real numbers)

- **712+** reviews, **4.7 stars** (already in the build)
- **1,467+** professionals have completed the training (NEW — this is the "graduates" number, more powerful than 712 reviews)
- **1 out of 1,467** customers has ever refunded (NEW — devastating-good guarantee statistic, use it)
- **50+** peer-reviewed publications (OLD-page stat, supersede with **72+** per Pascal verification)
- **10+** years experience
- **60+** workshops held (matches the 26 workshop banners in `Assets/Workshop/`)
- **42K+** social followers (combined across IG, FB, YT, TikTok, X)

### K.4 — CEU approvals (the actual definitive list)

**Physical Therapists:**

- **New York PT Board** (approved Dec 12, 2024 → Dec 11, 2027). Approved courses:
  - Optimize Rehab Outcomes Advanced Clinical Workshop
  - Accelerate Performance & Recovery Intro On-Demand Course
  - BFR Masters Series Clinical Rounds
  - What's New in BFR 2021

- **New Jersey PT Board** (approved through Jan 31, 2026). Approved courses + IDs:
  - Accelerate Performance & Recovery (5.5 PT CEUs, approval **2207-114**)
  - BFR Masters Series Clinical Rounds (2.25 PT CEUs, approval **2206-14**)
  - What's New in BFR 2021 (2 PT CEUs, approval **2210-53**)

- **35 reciprocal states** likely accepted (per state regulation): AL, AK, AR, CO, CT, DE, GA, HI, ID, IN, IA, KS, KY, ME, MA, MI, MO, MT, NE, NH, NC, ND, OR, PA, RI, SC, SD, TN, UT, VT, VA, VI, WA, WI, WY

- **13 states NOT pre-approved** (file individually): AZ, DC, MD, MS, NM, CA, LA, IL, MN, NV, OH, TX, WV

- Question contact: `info@redefinehealthed.com`

**Athletic Trainers:**

- **Board of Certification (BOC) AP# P10226**. ATs claim only hours actually spent. Approved courses:
  - Optimize Rehab Outcomes (8 Cat A CEUs)
  - Accelerate Performance & Recovery (5.5 Cat A CEUs)
  - Clinical Rounds (2.25 Cat A CEUs)
  - What's New 2021 (2 Cat A CEUs)
  - Device Selection Webinar 2024 (2 Cat A CEUs)

**Implementation for new page:** use the CEU map image from `Assets/Continuing Education Approvals For Continuing Education Credits (CEUs) Map.jpg`. Below the map, two clear blocks:

- **Course-specific approvals:** BOC + NY State PT Board + NJ State PT Board (with approval IDs).
- **Reciprocal coverage:** the 35-state list rendered as small inline pill chips. The 13 not-pre-approved states get a "file individually" note with a link to the application doc.

Drop the previous misleading lump that included "APTA-approved" (APTA only confirms BFR is in PT scope, not approves the course).

### K.5 — Course modules (Course 1 has full breakdown; use this verbatim)

**Course 1: Introduction to BFR Training** (13 modules + Module 0 = 14 videos, 5.5 CEUs, $349 value)

| Module | Title | Duration |
|---|---|---|
| 0 | Course Overview | 10:12 |
| 1 | A Brief History of BFR | 5:23 |
| 2 | Scientific Basis of BFR | 8:30 |
| 3 | Consequences of Injury and Combating Disuse | 11:49 |
| 4 | The Science Behind BFR Training | 13:09 |
| 5 | Fatigue and Blood Flow Restriction Training | 10:21 |
| 6 | Primary Mechanisms of BFR Training | 13:18 |
| 7 | Safety & Proper Use of BFR | 38:32 |
| 8 | Pillar One: Cell Swelling / IPC | 10:37 |
| 9 | Pillar Two: Aerobic Training | 26:59 |
| 10 | Pillar Three: Resistance Training | 47:02 |
| 11 | Programming BFR | 57:30 |
| 12 | Other BFR-Related Evidence | 17:22 |
| 13 | Summary of BFR & Wrap Up | 6:01 |
| — | Survey, Bonus Material, Quiz, CEU Credits (5.5) | — |

**Course 2: BFR Masters Series Clinical Rounds** — 2.25 CEUs, $147

6 parts (each + a quiz):
- Part 1: Pillars of BFR + Post-Surgical Screening (20:10) → Quiz: The Pillars & Post-Surgical Training
- Part 2: BFR Post-Surgical ACL Rehab in 19yo female athlete (11:40) → Quiz: Lejkowski (2011)
- Part 3: 99-year-old Sarcopenic Male (14:50) → Quiz: Scarpelli (2021)
- Part 4: BFR walking home-based program, 67yo female (8:51) → Quiz: Weisner (2021)
- Part 5: Lower leg strength + reduced knee swelling, 17yo reactive arthritis (14:06) → Quiz: Jørgensen (2021)
- Part 6: In-Season BFR Rehab, two decathletes with patellar tendinopathy (22:01) → Quiz: Cuddeford (2020)

**Course 3: BFR Masters Webinar "What's New In BFR 2021?"** — 2 CEUs, $79

5 papers + intro:
- Part 1: Introduction to The BFR Pros (12:06)
- Part 2: Perceived Barriers to BFR (18:01) — Rolnick (2021)
- Part 3: Repetition Failure & Applied Pressure (12:02) — Carqueira (2021)
- Part 4: BFR Improves Strength in Chronic Atrophic Post-Surgical Patients (14:46) — Noyes (2021)
- Part 5: Muscle Activation & Applied BFR Pressure (17:22) — De Queiros (2021)
- Part 6: BFR Induces Comparable Patellar Tendon Changes as Heavy Load (20:27) — Centner (2021)

**Course 4: BFR Masters Webinar "Device Features"** — 2 CEUs, $79

- Part 1: BFR Masters Webinar 2024 (97:48 — devices, autoregulation, bladder design, cuff width)
- Part 2: Knowledge Assessment (practical BFR with wrapping straps vs elastic bands)

### K.6 — Hero pattern (rotating-word headline)

Old page:
> "The Only [Cutting-Edge / Unbiased / Evidence-Based / Comprehensive / On-Demand / Risk-Free / Self-Paced / Online / Physical Therapy / Science-Based / World-Class / Beginner-Friendly / Well-Structured / Not Boring / Advanced / Professional / Rehabilitation / Cool / Virtual / Informative / From-Home / Educational / Instructional / Fast / Engaging / Easy-To-Follow / Leading / Refundable / Supercalifragilistic-expialidocious] Blood Flow Restriction Training (BFR) Course You'll Ever Need."

The "supercalifragilistic" tail is a deliberate joke to break tension. Pascal probably wants to keep the personality. **Decision needed:** keep the rotating-word trick on v3, or use a static patient-demand hero. The patient-demand angle Pascal locked needs a tighter, more urgency-led hero. Recommend keep v3's static "Your patients are already asking for BFR" hero (matches the chosen direction), and use rotating words ONLY in a smaller secondary section if at all.

### K.7 — Audience cards (4 segments, with copy)

There's a copy bug in the old page (two cards labeled "Rehabilitation Specialists"). The intent was 4-5 distinct audiences:

| Audience | Old-page copy | Use as |
|---|---|---|
| Physical Therapists | "Licensed PTs looking to accelerate client recovery and expand their treatment options." | Card 1 |
| Performance Coaches | "Trainers seeking science-backed methods to deliver better results for diverse clients." | Card 2 |
| Rehabilitation Specialists | "Healthcare providers wanting to enhance outcomes for post-surgery and injury recovery." | Card 3 |
| ~~Rehabilitation Specialists~~ → Athletic Trainers / Sports Performance | "Sports performance experts aiming to safely maximize athlete gains." | Card 4 (renamed) |
| Practice Owners | "Clinic owners ready to differentiate their services and increase revenue." | Card 5 |

Resolve the duplicate by renaming the second one **"Athletic Trainers"** (or "Sports Performance Experts" if Pascal prefers).

### K.8 — Real case studies for the proof section (5 specific)

Use these as the "BFR in action" / "case studies" content (replacing the avatar-journal driven Dream Vision):

1. **ACL surgery recovery** — accelerated the recovery process; specific BFR protocols documented; remarkable improvements observed
2. **99-year-old male with sarcopenia** — improved muscle mass, strength, AND cardiovascular health (defies the "BFR is only for athletes" assumption)
3. **Home-based BFR walking during COVID** — maintained muscle mass + cardio during lockdowns when gyms were closed
4. **17-year-old with reactive arthritis** — improved lower-leg strength + perceived function while reducing knee joint swelling, in a home-based intervention
5. **Two collegiate decathletes with patellar tendinopathy** — in-season strength training without aggravating the injury

Each could be a small card with a clinical line + a "Learn more →" expansion. Pull from Course 2 (Clinical Rounds) module bodies for citation depth.

### K.9 — Course completion timing (verbatim from old FAQ)

> "You can work them through in a day (and many of our students have done that) but we recommend working everything through thoroughly to get the most value out of it. So, we recommend a week minimum. And you can always get back to sections whenever you need to."

> "After completing the core modules and safety protocols (approximately 5-7 hours of study), you'll have the foundational knowledge to begin implementing BFR safely with appropriate clients."

**Locked messaging:** "**11.5 hours of video content. 11.75 CEUs. You can work it through in a day, in a week, or take longer. Lifetime access to come back whenever you need.**"

Stop saying "4-6 weeks at 2-3 modules per week." That's wrong. The old page is closer to truth (day to week, 5-7 hours to first patient).

### K.10 — CEU map image confirmed

`Assets/Continuing Education Approvals For Continuing Education Credits (CEUs) Map.jpg` is the live map (also at `https://bfrtraining.com/wp-content/uploads/2025/02/updatedMap-768x465.png` on the old page). Use it.

### K.11 — Old page has 3 sections we don't have on v3

Add these to the section flow:

1. **"Simply Follow Our Blueprint to Success"** + **"Save Yourself Months Of Costly Trial And Error"** — these are mid-page reframing sections that handle the "I could just learn it on YouTube" objection. Lightweight, two paragraphs each, optional but powerful.

2. **"Become A Certified BFR Provider"** identity-stack section (5 benefits cards + 4 audience cards). The patient-demand frame can lead, the "certified provider" identity-shift section reinforces it.

3. **TL;DR section after FAQ** — a one-paragraph summary for skim-readers, pre-final-CTA. Old page has this.

### K.12 — P.S. and P.P.S. content (for v3, Pascal's tone)

Old page P.S. is long and conversational ("Oh still here? Need a little more convincing? 1 Comprehensive Course package. 4 courses. 12 bonuses. $3804 value for only $449. And it's still not worth it?"). Pascal: feel free to keep the v3 patient-demand frame OR adapt this conversational shape. The "1 out of 1,467 customers has refunded" line MUST appear somewhere near the guarantee.

---

## L. Updated open question status (after K)

| # | Question | Status |
|---|---|---|
| F1 | True publication count? | **72+** — Pascal verified |
| F2 | "Most-published" claim? | **Drop entirely** — use 72+ as the authority signal |
| F3 | Average completion time? | **"Day to week, your pace"** — verbatim from old page FAQ, Pascal verified |
| F4 | Logo? | **BFR Pros Secondary** — Pascal verified |
| F5 | Announcement bar? | **Kill** — Pascal verified |
| F6 | Featured-in marquee composition? | **Logos only** — Pascal verified |
| F7 | CEU section: missing approval logos vs text? | **Use the CEU map image** as the headline visual + structured text blocks per K.4. No new logo files needed. |
| F8 | Bonus thumbnails? | **All 11 in the asset folders** — confirmed in §J.8 |
| F9 | Module 1 PDF? | **Module 0 video + downloadable bibliography PDF** (Bonus 5 has the all-modules-bibliographies.pdf) |
| F10 | Real module names? | **All 14 modules with names + durations confirmed** in K.5. Use verbatim. |
| F11 | Demand graph: Google Trends OK? | Still open. Recommend yes. |
| F12 | Compacta webfont license written confirmation? | Still open. Pascal: send paperwork before Vercel push. |

---

## M. Source files in `_Inbox/3/` for the next session

The next session should pull from these:

- `_Inbox/3/course page.txt` — full HTML of `bfrtraining.com/course-package/` (verbatim source for testimonials, modules, bonuses, pricing, FAQ, P.S./P.P.S.)
- `_Inbox/3/CEU page.txt` — full HTML of `bfrtraining.com/continuing-education-credits/` (verbatim source for the CEU approval list, state lists, contact email)
- `Assets/Social Proof/Testimonials/SURVEY _ Intro to BFR.xlsx` — 768 anonymous survey responses (additional verbatim quotes if more variety wanted)
- `Assets/Videos/video-embeds.md` — all VEED.io video embed URLs
- `Assets/Course Package/Bonuses/*` — bonus thumbnail images (all 11 + module bibliographies)
- `Assets/Continuing Education Approvals For Continuing Education Credits (CEUs) Map.jpg` — CEU approval map
- `Assets/Workshop/*.jpg` — 26 workshop event photos (proof of national reach + clinic partnerships)

---

## N. Pascal's Round 2 review (2026-05-07, after Waves 1-4 + 5.E.2 + demand graph executed)

The other session shipped most of the plan. This section captures what Pascal flagged on review of the live build. **Treat as a punch list for the next session.** Every item below is a defect or a refinement, not a re-litigation.

> **Execution status as of 2026-05-08 — every N item below is shipped or deferred:**
>
> - **DONE:** N.1 (4.8/767 stars), N.2 (fractional fill), N.3 (marquee animating), N.5 (StatsBlock moved after Problem), N.6 (demand graph annotations), N.7 (Dream Vision text-balance dropped), N.9 (pillar cards: hover off, icons in), N.10 (Mike Reinold 6.0 CEUs), N.11 (curriculum overhaul: type icons removed, video-first reorder, "What you can expect" rename, course icon enlarged + frame removed, CEUs+value below icon, "See Module 1 Free" CTA killed, Module 0 bibliography only, fluff caption removed), N.12 (Rolnick card matches Licameli card pattern, larger), N.13 (Strategy A realistic values shipped: $1,000 bonus subtotal + $640 cuff savings, $1,654 advertised, save $1,205; hover dropped on bonus cards; Bonus 12 rendered as 12th card), N.14 through N.21 (buttons, certificate, body logos, testimonial tail, guarantee gap, P.S. padding, mobile rail, Rolnick research+podcast logos), J.12 (verbatim duration phrase in curriculum).
> - **DEFERRED (Pascal call):** J.11 section transitions (need shape spec from Pascal).
> - **OPEN (need source from Pascal):** N.11 module descriptions verbatim — old course page HTML doesn't expose them programmatically; Pascal to drop a copy in `_Inbox/3/` if he wants per-module descriptions added.
> - **OBSOLETE:** N.8 EB Garamond Italic for bridge quote — superseded by Pascal's later "Use the font. Stop killing me." → Compacta on bridge quote stays. Brand-guide says no third font.

### N.1 — Real survey rating numbers: 4.8 from 767 (Pascal-confirmed)

Survey contains two rating columns. Both are real student ratings:

- Overall Impression column: 762 ratings, mean **4.68** → rounds to 4.7
- Course Content column: 767 ratings, mean **4.77** → rounds to **4.8**

**Use 4.8 stars from 767 ratings** (Course Content column). Stronger and equally defensible. Update `STATS.ratingValue` from `4.7` to `4.8`, `STATS.reviewCount` from `712` to `767`. Note in source: "Course Content rating from internal student survey, n=767."

### N.2 — Stars.tsx: render fractional fill, not rounded

`Stars.tsx` line 18: `const filled = Math.round(rating)` rounds 4.7 to 5. Render the LAST star at **70% fill** for a 4.7 score. Standard pattern: an SVG `linearGradient` with two stops, or two stacked stars (gold full + gray ghost) with `clip-path: inset(0 30% 0 0)` on the gold one for the partial. Apply across every Stars instance.

### N.3 — Marquee not animating

`Marquee.tsx` has the correct two-copy track structure. The animation isn't running because `@keyframes marquee` is either missing from `globals.css` or the `.marquee-track` rule isn't selecting properly. Add:

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee 38s linear infinite;
  will-change: transform;
}
.marquee-mask {
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

Apply to both Featured-In and Partners marquees.

### N.4 — Hero structure: stacked single column, max-width centered (NOT full-bleed)

Drop the 2-column desktop split. Stack everything in **one centered column with a sane max-width** (~720-800px content width). Mobile and desktop, same structure:

```
[eyebrow pill]
[H1 headline, ≤14ch wrap]
[2-line subhead, ≤60ch]
[hero video, 16:9, max-width 720px]
[primary CTA: full-width on mobile (with side margin), max-width ~360px on desktop]
[stars + 767 reviews line]
[Featured-in marquee, full-width below]
```

Pascal clarification: "single column" means the content stack is one column, not that the section content goes full-bleed across the desktop. Container max-width stays bounded so reading width is comfortable.

Two-column layouts are still allowed where they make structural sense (image + text with an actual image, e.g. instructor cards). Two-column **text + text** is what we're cutting. King Kong's rhythm is the reference.

### N.5 — Stats / numbers placement

Move `StatsBlock` from above-the-fold area down to **after the Problem section** (or after Dream Vision). Numbers prove a claim already raised. They're punctuation, not exposition. Current order proves something the reader hasn't been asked yet to question.

### N.6 — Demand graph: keep the real chart, add King-Kong-style annotations (Pascal-confirmed)

Pascal: keep the real Google Trends screenshot. Real chart > stylised SVG (more credible). Add King-Kong-style annotation overlay (red circles, curved arrows, bold callouts).

**Asset path:** `Assets/.../google-trends-bfr-worldwide.csv` is the source. Existing screenshot lives at `public/images/demand-trend.png` (rebuilt from a Pascal-supplied screenshot).

**Pascal builds the annotated image manually in Canva.** Specs to overlay on the screenshot:

| # | Element | Position | Text |
|---|---|---|---|
| 1 | Bold text above chart | Top centre | **"+317% IN 7 MONTHS"** (or **"4.2× IN 7 MONTHS"** — pick whichever reads stronger) |
| 2 | Red circle | Around Feb 2026 peak (index 100, top-right of the line) | — |
| 3 | Red curved arrow + label | Above-right of #2 | **"~80,000 searches/month — Feb 2026"** |
| 4 | Red circle | Around July 2025 (index 24, just before the line takes off upward) | — |
| 5 | Red curved arrow + label | Below-left of #4 | **"~19,000 searches/month — July 2025"** |
| 6 | Bold text below chart | Bottom centre | **"2.6× higher than the previous record (~31k/month, Sep 2021)"** |
| 7 | Source caption | Below #6, smaller + lighter | "Google Trends · Glimpse · Worldwide · Jan 2012 to May 2026" |

**Verified figures (Google Trends index + Glimpse-derived absolute volume):**

| Month | Trends index | Approx. searches/month |
|---|---|---|
| July 2025 (take-off) | 24 | ~19,000 |
| August 2025 (single-month jump) | 64 | ~51,000 |
| September 2021 (previous all-time high) | 39 | ~31,000 |
| February 2026 (new all-time high) | 100 | **~80,000** |

Multiplier July 2025 → Feb 2026: **100 / 24 = 4.17× = +317% over 7 months**, in absolute terms ~19k → ~80k searches/month.

Absolute volumes derived by anchoring Glimpse's reported peak (~80k searches/month at index 100) to the relative Google Trends index. Source: Glimpse Chrome extension over Google Trends, May 2026 query.

**Style:** circles + arrows in `#AD1A27` (brand accent). Bold text in **Compacta Bold** (brand consistency) OR a marker handwriting font for the King-Kong "scribbled-on" feel — Pascal's call.

Once Pascal exports the annotated PNG to `_Inbox/3/`, the next session swaps `public/images/demand-trend.png`, deletes the SVG overlay code in `DemandGraph.tsx`, and renders the static image with `next/image` only.

### N.7 — Dream Vision ("THE DESTINATION") headline still narrow

Means the `text-balance` CSS or a `max-w-` constraint is still there. Remove `text-balance` from the H2 in `DreamVisionBlock.tsx` and any `max-w-prose-narrow` from the heading itself (keep it on the body paragraphs).

### N.8 — Bridge quote: serif italic exception (introduce a third font, only for quotes)

Pascal: a quote is an exception to the brand type system. Traditional convention is serif italic, that's what makes it visually read as "quote." Adding one more font weight specifically scoped to `.editorial-quote` is fine.

**Use EB Garamond Italic** (Google Fonts, free, weight 400 only — minimal payload, ~25KB). Classic editorial serif italic, not on any "avoid" list, pairs cleanly with Compacta + DM Sans without competing.

```css
.editorial-quote {
  font-family: "EB Garamond", Georgia, serif;
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  line-height: 1.45;
  color: var(--color-navy-deeper);
  border-left: 2px solid var(--color-accent);
  padding-left: 1.5rem;
}
```

Wire via `next/font/google` in `layout.tsx`:
```ts
import { EB_Garamond } from "next/font/google";
const fontQuote = EB_Garamond({ subsets: ["latin"], weight: ["400"], style: ["italic"], variable: "--font-quote", display: "swap" });
```

Update brand-guide.md typography note: "Compacta Bold for headlines + hooks (ALL CAPS), DM Sans for body, EB Garamond Italic reserved exclusively for quoted text."

Alternative if Pascal prefers a different serif: Lora Italic (more modern), Source Serif Pro Italic (workhorse). EB Garamond is the recommended default.

### N.9 — "BFR Pros Difference" pillar cards: drop hover effect, add icons

Three cards (research-led, equipment-agnostic, implementation-focused) currently have a hover lift but aren't clickable. Remove the hover. Add a fitting Lucide icon per pillar:

- Research-led: `BookOpen` or `Microscope`
- Equipment-agnostic: `Unplug` or `CircleSlash` (the "no cuff" lock-out symbol)
- Implementation-focused: `Wrench` or `ClipboardCheck`

### N.10 — Comparison table: Mike Reinold guarantee + CEUs

Mike Reinold's course IS approved for PT in most states + ATs for **6.0 CEU contact hours**. Update the comparison row from "Varies" → "**6.0 CEUs**." Keep the 30-day guarantee Pascal verified earlier.

### N.11 — Curriculum section overhaul (a lot)

Pascal's specific list:
- **Add module descriptions** verbatim from the old page (every module has a 1-line description).
- **Show all 14 modules per course** (not just bullet summaries). The old page lists them all.
- **Remove module-type icons** (▶ video / ❓ quiz / 📄 PDF). Just show the module number + title + duration. No type-differentiation icons.
- **Move the course promo video** above "WHAT'S INSIDE" inside the course card.
- **Rename "COURSE PREVIEW"** → **"WHAT YOU CAN EXPECT"**.
- **Move CEUs + dollar value** from inline meta-line up to the course card header, right below the course icon. Visual treatment: two prominent elements stacked (e.g. "5.5 CEUs" big, "$349 Value" smaller below).
- **Remove the round frame** around the course icon. Bigger icon, no frame.
- **Delete the "See Module 1 Free" CTA** below the curriculum (it goes to the next section, the Module 0 preview, which is right there). It's both wrong-numbered (it's Module 0) and useless.
- **Bibliography PDF download:** restrict to **Module 0 bibliography only**, not the entire `All_Modules_Bibliographies.pdf`. The download button goes **below** the preview video, not above.
- **Don't put CTA buttons above videos** anywhere on the page. Videos play, then CTAs prompt.
- **Remove fluff** small text below the video and the small paragraph above the CTA. The video is the explanation; no caption needed.

### N.12 — Instructors section: Rolnick must match Licameli's card

Currently Rolnick has a different (sprawling) layout, Licameli has a tight card. Rebuild Rolnick in the same card pattern, just bigger / featured. Add the **publication-source logos** (Frontiers, JOSPT, etc., from `Assets/Social Proof/Published Research/`) and the **podcast logos** (from `Assets/Social Proof/Podcast Appearances/`) inside or below the Rolnick card as marquee or static logo row. Pascal: "Logos of brands Nick was featured on aren't there." That's the fix.

### N.13 — Bonuses section

- **Realistic bonus values.** Current $500 for a liability waiver is not believable. See N.13.1 below for the proposed table.
- **Drop the hover effect** on bonus cards. They're not clickable.
- **Bonus 12 must be a card like the other 11.** Right now it's tiny text below a CTA. Render Bonus 12 ("Continuing Ed Credit Application", filing-service value) as the 12th card in the grid.

#### N.13.1 — Proposed realistic bonus values

Three pricing strategies. Pick one:

**Strategy A: Conservative real-market values (recommended)**

| # | Bonus | Realistic value | Justification |
|---|---|---|---|
| 1 | Liability Waiver Form | $50 | Marketplace template price; real legal-drafted waivers are $300-500 but readers won't believe a free PDF is worth that |
| 2 | BFR Patient Screening Form | $75 | Clinical templates on Etsy/TPT |
| 3 | RPE OMNI-Res Tool | $25 | Printable scale, low marketplace |
| 4 | BFR Device Discount Codes | "Up to $640 in savings" | Frame as savings, not value |
| 5 | Module-by-Module Bibliography | $50 | Research compilation |
| 6 | Downloadable Course PDF (481 pages) | $150 | Comparable to a textbook |
| 7 | Precautions & Contraindications | $25 | Reference card |
| 8 | BFR Nutritional Recommendations | $25 | Reference card |
| 9 | Athletic BFR Programming Guide | $100 | Programming guides retail |
| 10 | BFR Training Marketing Video | $200 | Custom marketing video freelance rate |
| 11 | Private Facebook Group | $100/year | Community access tier |
| 12 | Continuing Ed Credit Application | **$200** | Concierge filing-service rate (was $50, bumped after Pascal review — real services charge $150-300) |
| | **Bonus subtotal** | **$1,000** + $640 savings | |
| | **Course value** | $654 | |
| | **Total advertised value** | **$1,654** + up to $640 in savings | |
| | **Sale price** | $449 | |
| | **You save** | $1,205 (+ up to $640 device savings) | |

**Strategy B: Mid-range market values** — bump each by 50%, total ~$1,275 + $640 savings, advertised value ~$1,929.

**Strategy C: Drop the dollar values entirely.** Lead with "**12 bonuses you can't buy anywhere else**" and emphasize utility, not anchoring. Total advertised value just becomes the course value ($654).

Recommend Strategy **A**. Defensible numbers, still 3-4× the price, no inflation cringe.

### N.14 — CTA button styling

Pascal's spec:
- **Font:** Compacta Bold (display font)
- **Case:** ALL CAPS
- **Border-radius:** sharper. Current is `999px` (pill); use `8-12px` (rounded rectangle).
- **Size:** larger. Increase padding to `1.4rem 2.4rem`.
- **Subtle text-shadow:** old page has `text-shadow: 0 1px 2px rgba(0,0,0,0.15)` for depth.
- **Full-width on mobile** (`width: 100%; max-width: 480px;`).
- **Mild lift on hover:** `transform: translateY(-2px)` + `box-shadow: 0 14px 28px -10px rgba(173, 26, 39, 0.5)` (color-tinted, not gray).

Reference for shape: King Kong's primary buttons + the old bfrtraining page's red buttons.

Counter-arguments (so Pascal can decide):
- Compacta Bold ALL CAPS at button scale is loud. With the headlines also ALL CAPS, the page can start to feel SHOUTY.
- Counter-counter: brand consistency wins. Compacta is the brand voice; using DM Sans on buttons makes them look generic. Recommend **proceed with Compacta Bold ALL CAPS**, just accept the boldness as a brand choice.

### N.15 — Certificate image missing

The blurred course-completion certificate (`/images/guarantee/certificate.png`) was supposed to appear in the Pricing card or near the Guarantee. It's not rendering. Add it as the visual anchor inside the Pricing card (top-right thumbnail) OR as a hero element on the Guarantee block.

### N.16 — CEU section: bring back the body logos we have

For the bodies we have logos for (BOC, APTA NY), use the logo. For the bodies we don't (NJ State PT, NATA), use a clean text card. The CEU map image is a separate visual that lives above the body list, not a replacement for the per-body logos.

### N.17 — Testimonial #3 missing tail

The third testimonial is missing "**... clients as well.**" at the end. Pull the verbatim tail from `_Inbox/3/course page.txt` and append.

### N.18 — Guarantee section: spacing

Add `gap: 1.5rem` (or `space-y-6`) between the money-back logo image and the "THE GUARANTEE" eyebrow text. Currently they're touching.

### N.19 — P.S. / P.P.S.: more white space above

Add `padding-top: 4rem` (or `mt-16`) before the P.S. block. Currently it crowds into the previous section. Consider the section transition (when implemented per Wave 5.E.1) to break the visual flow before the P.S.

### N.20 — Side padding: cut from 24px to 12px on mobile

Current `container-rail` uses `px-6 sm:px-8 lg:px-12`. Cut mobile to `px-3` (12px). Especially affects card content that already has its own internal padding — without this fix, cards squeeze the text on small screens.

### N.21 — Rolnick instructor: add featured-in publication logos

Per N.12, render the publication logos (Frontiers, MDPI, Sage, ScienceDirect, Strength & Conditioning Journal) and the podcast logos as a strip inside or under the Rolnick card. Asset folders are ready: `Assets/Social Proof/Published Research/` (6 logos) + `Assets/Social Proof/Podcast Appearances/` (15 logos).

### N.22 — Recurring patterns to break (self-learning fodder)

These mistakes recurred across iterations and are noted for the gotchas table:

- **CTAs above videos** — videos are explanations, CTAs are conversions. Order is video → CTA, never CTA → video.
- **CTAs leading to the very next section** — if the section the CTA links to is right below it, the CTA is redundant. Cut.
- **Hover effects on non-clickable cards** — adds dead interactivity. Hover effects only on cards that actually do something (link, click-to-expand, etc.).
- **Module 1 vs Module 0 confusion** — the free preview is Module 0, never call it Module 1.
- **Fluff caption text below videos and above CTAs** — videos and CTAs do their own work. No filler captions.
- **Card frames around small icons** that limit icon scale unnecessarily.

---

## I. What's NOT in this iteration (deliberate scope cut)

To keep the next session focused, these are deferred to Phase 1B or later:

- The CEU Credits sub-page (`/get-certified/ceu-credits`).
- Variants v1 and v2 cosmetic polish (they get the bug fixes and avatar-scrub, but no new features).
- The remaining 6 conversion-core pages (About, Dr. Rolnick, Dr. Licameli, Contact, Privacy, Terms, Disclaimer, Refund Policy).
- bfrtraining.com 301-redirect activation.
- Old Squarespace decommission.
- bloodflowrestriction.com SEO content hub.
