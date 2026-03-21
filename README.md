# Portfolio Site

A high-fidelity Next.js site focused on matching layout, typography, interactions, and route structure as closely as possible.

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- `next-themes` for dark/light mode
- `lucide-react` + custom brand SVGs for icon parity

## Implemented Routes

- `/`
- `/work`
- `/blog`
- `/blog/[slug]`
- `/resume`
- `/books`
- `/movies`
- `/gears`
- `/setup`
- `/terminal`
- `/api/visitors` (stub)
- `/api/spotify/currently-playing` (stub)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality Checks

```bash
npm run lint
npm run build
```

Both commands should pass before pushing changes.

## Project Structure

```text
app/         App Router pages, layout, and API routes
components/  Reusable UI components (header, footer, cards, command palette)
lib/         Content/data source and shared logic
public/      Static assets and fonts
```

## Design/Parity Notes

- Global guidance lives in `AGENTS.md`.
- Visual + behavior parity checkpoints live in `PARITY_CHECKLIST.md`.
- Motion/easing tokens are defined in `app/globals.css`.
- Keep source parity over stylistic preference when making UI changes.

## Deployment

This project can be deployed on any Next.js-compatible platform (for example, Vercel).
