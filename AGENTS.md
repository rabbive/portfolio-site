# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Project Overview
- Framework: Next.js 16 App Router with React 19 and TypeScript.
- Styling: Tailwind CSS v4.
- Package manager: npm with `package-lock.json`.
- Primary directories:
  - `app/` for routes, layouts, and page-level composition.
  - `components/` for reusable UI pieces.
  - `lib/` for shared utilities and helpers.
  - `public/` for static assets.

## Working Rules
- Keep changes small and targeted to the user request.
- Preserve the existing App Router structure; do not introduce a Pages Router setup.
- Match the existing TypeScript and React style in nearby files.
- Prefer server components by default; only add `"use client"` when browser-only behavior is required.
- Do not add new dependencies unless the user asks or the task clearly requires them.
- Reuse existing components and utilities before creating new abstractions.
- Avoid broad refactors unless they are necessary to complete the task safely.

## Commands
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`
- Run lint: `npm run lint`

## Validation
- For UI or behavior changes, run the narrowest useful validation first.
- Use `npm run lint` for code quality checks when relevant.
- Use `npm run build` when changes could affect routing, typing, or production output.

## Notes
- Keep generated output and dependencies out of commits; rely on the existing `.gitignore`.
- If you add new repo conventions, document them here instead of scattering them across replies.
