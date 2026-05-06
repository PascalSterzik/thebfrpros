# Deploy steps for Pascal

## What's done locally

- Next.js 14 project scaffolded at `Agency/Clients/The BFR Pros/Deliverables/Website/`
- 3 concept variants of `/get-certified` (v1 research-authority lead, v2 equipment-agnostic lead, v3 patient-demand lead)
- Private review index at `/`
- Static export (`output: 'export'`) so the site can deploy to Vercel as static HTML/JS
- Local git initialized, first commit landed, branch `main`, remote `origin` set to `https://github.com/PascalSterzik/thebfrpros.git`
- `node_modules/` and `.next/` and `out/` are gitignored
- Production build verified locally: 4 static routes, 154 kB First Load JS, zero typecheck errors

## What's NOT done (and why)

- The repo has not been pushed to GitHub. The local environment does not have `gh` CLI installed and pushing to a remote is a visible-to-others action that needs your credentials.
- Vercel project not connected. Same reason: shared infrastructure setup needs you in the loop.
- Lighthouse scores and schema validator results are documented as TBD in the README. Run them after the Vercel preview URL is live.

## Push the repo

From inside `Agency/Clients/The BFR Pros/Deliverables/Website/`:

```bash
git push -u origin main
```

If GitHub asks for credentials, use a Personal Access Token (Settings → Developer settings → Personal access tokens). The remote is already configured to `PascalSterzik/thebfrpros`. The `bash "System/git-setup.sh"` flow from the CLAUDE.md code-layer doc is the canonical helper if it's set up on this machine.

If you prefer GitHub Desktop, open the `Deliverables/Website/` folder in GitHub Desktop and click "Publish repository".

## Connect to Vercel

1. Go to https://vercel.com/new and import `PascalSterzik/thebfrpros`.
2. Vercel auto-detects Next.js. Leave defaults.
3. No environment variables needed for Phase 1A. The enrollment URL is hard-coded as a single constant in `src/lib/constants.ts` (`ENROLL_URL`).
4. Build command: `next build` (default). Output directory: `out` (because `output: 'export'`). Vercel handles this automatically.
5. Deploy. The first build should produce one preview URL serving all 4 routes (`/`, `/get-certified-v1`, `/get-certified-v2`, `/get-certified-v3`).

## Run Lighthouse and schema validation

For each variant URL on the Vercel preview:

1. PageSpeed Insights: https://pagespeed.web.dev/ — record the four scores in `README.md`.
2. Schema.org validator: https://validator.schema.org/ — paste the variant URL, expect zero errors. Record any warnings in `README.md`.
3. Google Rich Results Test: https://search.google.com/test/rich-results — paste the variant URL, take a screenshot of the detected rich results (Course, FAQPage, AggregateRating, BreadcrumbList).

Target scores per variant:

- Performance: 90+
- Accessibility: 95+
- SEO: 95+
- Best Practices: 95+

If any score falls below target, the most likely fixes are:

- LCP issues: ensure hero photo `priority` flag is set (it is). The original assets are large; if needed, run a one-time image-resize pass to under 200 KB each.
- CLS: every `<Image>` already has `fill` + a fixed-aspect parent or explicit width/height. No CLS expected.
- Accessibility: the build should already pass WCAG AA contrast. Anything that surfaces is likely a contrast tweak in the cream-on-white text or the white-on-navy/85% opacity body copy.
- SEO: every variant has unique title + meta description, canonical, OG, and full JSON-LD. If the SEO score is below 95, check the meta description length (Vercel preview URLs add a `vercel.app` suffix that may need a separate canonical).

## Next phase

Once Pascal + Dr. Rolnick pick a direction, Phase 1B builds the remaining 6 conversion-core pages (About, Dr. Rolnick, Contact, Privacy, Terms, Disclaimer, Refund Policy) in the chosen variant's design system.
