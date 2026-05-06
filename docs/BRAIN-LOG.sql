-- Brain log INSERT for Phase 1A rerun build.
--
-- Per CLAUDE.md, session_uuid must be resolved via Skills/find-session-fields/SKILL.md
-- before this runs. The placeholder below MUST be replaced with the real UUID for THIS
-- session. Do NOT fabricate.
--
-- Cowork-style identifier fields:
--   session       = full label (`local_<uuid>`) once UUID is resolved
--   session_uuid  = resolved UUID, mandatory
--   session_slug  = NULL (claude_code source has no Cowork slug)
--   session_title = NULL (no customTitle on this session)
--
-- After resolution, run this from the workspace root with the open_brain credentials.

INSERT INTO public.open_brain (
    content,
    source,
    type,
    area,
    client,
    summary,
    session,
    session_uuid,
    session_slug,
    session_title,
    status,
    files_edited,
    metadata,
    created_at
)
VALUES (
    'Built 3 concept variants of /get-certified for The BFR Pros (Phase 1A rerun). Tech stack: Next.js 14 + Tailwind 3 + React 18 + Framer Motion 12, static export. All 22 sections per variant, 12-step copywriting framework applied, real client imagery throughout. JSON-LD: Organization, WebSite, Person (Dr. Rolnick), Course (449 USD, 11.75 CEUs), AggregateRating (4.7/712), FAQPage, BreadcrumbList, WebPage. AI bot allow-list in robots.txt. Mobile hamburger nav. Aesthetic direction committed: editorial clinical authority, DM Serif Display + DM Sans, navy fields with red accents, restrained motion. Verified: typecheck clean, production build clean (4 static routes, 154 kB First Load JS), zero em-dashes, zero forbidden AI words, hero rendering verified at mobile viewport. Local git initialized + first commit landed. NOT YET pushed or deployed to Vercel (blocked on Pascal credentials). Replaces 2026-05-06 attempt that was scrapped (gotchas 56 + 57).',
    'claude_code',
    'Website Built',
    'Marketing',
    'The BFR Pros',
    'Phase 1A rerun: 3 /get-certified concept variants built, local commit landed, awaiting Pascal push + Vercel deploy.',
    'local_<RESOLVED_UUID>',
    '<RESOLVED_UUID>',
    NULL,
    NULL,
    'Success',
    'Agency/Clients/The BFR Pros/Deliverables/Website/ (full Next.js project, 30+ files, package-lock.json, public/images/ assets, src/app, src/components/{shared,sections}, src/content, src/lib, README.md, docs/DEPLOY.md, docs/BRAIN-LOG.sql); Agency/Clients/The BFR Pros/Research/WEBSITE-PROJECT-ORCHESTRATOR.md (status updated to Phase 1A complete)',
    jsonb_build_object(
        'phase', '1A-rerun',
        'parent_gotcha', 57,
        'tech_stack', 'next14+tailwind3+react18+framermotion12',
        'variants', jsonb_build_array('v1-research-authority', 'v2-equipment-agnostic', 'v3-patient-demand'),
        'sections_per_variant', 22,
        'first_load_js_kb', 154,
        'static_routes', 4,
        'pushed_to_github', false,
        'deployed_to_vercel', false,
        'lighthouse_run', false,
        'schema_validated', false
    ),
    now()
);
