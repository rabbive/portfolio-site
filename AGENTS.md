# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Primary Objective
Build and maintain an **exact functional and visual replica** of `https://ramx.in/`.

“Exact replica” means parity across:
- layout, spacing, typography, iconography, borders, radii, shadows
- light and dark theme behavior
- route structure and page composition
- copy/text content and ordering
- interactive states (hover/focus/active/expanded/collapsed)
- utility UI details (e.g., command palette trigger look, social icon treatment, quote cards, visitor line)

If a tradeoff is required, always choose **source parity** over local stylistic preference.

## Source of Truth
- Canonical reference: `https://ramx.in/` and all linked first-party routes.
- Required route set:
  - `/`
  - `/work`
  - `/blog`
  - `/blog/[slug]` (all known slugs)
  - `/resume`
  - `/books`
  - `/movies`
  - `/gears`
  - `/setup`
  - `/terminal`
- Typography baseline:
  - `Hanken Grotesk` / `Hanken Grotesk Italic`
  - `Geist` / `Geist Mono` as used in source behavior

## Technical Constraints
- Framework: Next.js App Router + React + TypeScript.
- Styling: Tailwind CSS v4 + global tokens where needed.
- Package manager: npm with `package-lock.json`.
- Keep current folder conventions:
  - `app/` routes/layouts/apis
  - `components/` reusable UI
  - `lib/` structured content/data
  - `public/` assets/fonts

## Implementation Rules
- Preserve source-comparable DOM structure where possible.
- Prefer parity-safe updates over abstractions that alter rendered output.
- Do not change component hierarchy, spacing scale, or typography scale unless it increases fidelity.
- Do not rename/relocate assets if that risks visual drift.
- Use `"use client"` only where browser behavior is required (theme toggle, copy, expand/collapse, filters).
- Avoid adding dependencies unless required for parity and approved by user.
- Keep copy close to source wording/punctuation/casing.

## Parity Checklist (Must Pass Before Completion)
For every relevant change:
1. Validate `npm run lint`.
2. Validate `npm run build`.
3. Compare light mode against source on desktop viewport.
4. Compare dark mode against source on desktop viewport.
5. Verify key interactive states:
   - theme toggle
   - experience expand/collapse
   - blog tag filters
   - copy-email behavior
6. Verify footer/nav parity (labels, ordering, spacing, icon button style).
7. Confirm route-level parity for all required pages.

## Quality Bar for “Done”
A task is not done if:
- any major visual token differs from source (font, spacing, sizing, color, border/radius)
- any expected UI element is missing, replaced, or simplified
- any expected route/content block is absent
- interactions are present but do not match source intent

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Run lint: `npm run lint`

## Notes
- Keep generated artifacts and local-only files out of commits.
- If a new parity rule is discovered, add it here immediately.

## Cursor Cloud specific instructions

### Services
This is a single-service app: **Next.js dev server** on port 3000. No databases, Docker, or external services are required. All API routes (`/api/visitors`, `/api/spotify/currently-playing`) are stubs returning hardcoded JSON.

### Running the app
- `npm run dev` starts the dev server at `http://localhost:3000`.
- All standard commands are in the **Commands** section above.

### Motion parity tooling
The update script installs Playwright Chromium (`npx playwright install --with-deps chromium`), so the `parity:motion` scripts work without any manual bootstrap. To run motion capture:
1. Start the dev server: `npm run dev`
2. In another terminal: `npm run parity:motion:capture:local:light` (or the full suite `npm run parity:motion`)

Playwright browsers are cached in `~/.cache/ms-playwright/` (~620 MB). If the cache is persisted between runs, `npx playwright install chromium` is a fast no-op; otherwise it re-downloads.

### Caveats
- **Google Fonts**: Geist / Geist Mono are fetched via `next/font/google` at build/dev time, requiring internet access. If fonts fail to load, the site still renders with fallback system fonts.
- **No `.env` required**: There are no environment variables needed to run the app.
