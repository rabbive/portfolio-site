# Cloud Environment Setup (Cursor Cloud Agents)

This repo uses Playwright + Chromium for motion timing parity capture (`npm run parity:motion`).

## Required environment capabilities

- Node.js + npm
- `npm ci` works (uses `package-lock.json`)
- Playwright installed (dev dependency)
- Playwright Chromium browser binaries installed

## One-time install (Cloud Agent image or startup script)

Run from repo root:

```bash
npm ci
npx playwright install chromium
```

## Verification

Start the app (in one terminal):

```bash
npm run dev
```

Then run a capture (in another terminal):

```bash
npm run parity:motion:capture:local:light
```

Or run the full parity workflow:

```bash
npm run parity:motion
```

## Notes

- If the environment cannot persist browser caches, Playwright may re-download Chromium frequently.
- The capture scripts assume a deterministic viewport (`1280x900`) and headless Chromium.
