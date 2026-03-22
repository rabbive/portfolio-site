# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Primary Objective
Build and maintain **Ashwanth Kumaravel's personal portfolio site**.

The site uses the design language originally inspired by `ramx.in` but all content and personal data belong to Ashwanth Kumaravel.

## Source of Truth
- All personal information comes from Ashwanth's resume and provided data.
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
  - `Geist` / `Geist Mono`

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
- Use `"use client"` only where browser behavior is required (theme toggle, copy, expand/collapse, filters).
- Avoid adding dependencies unless approved by user.

## Quality Checklist (Must Pass Before Completion)
For every relevant change:
1. Validate `npm run lint`.
2. Validate `npm run build`.
3. Verify key interactive states:
   - theme toggle
   - experience expand/collapse
   - blog tag filters
   - copy-email behavior
4. Verify footer/nav links are not broken.
5. Confirm route-level content for all required pages.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Run lint: `npm run lint`

## Notes
- Keep generated artifacts and local-only files out of commits.

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
