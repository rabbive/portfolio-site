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

## Optional: Spotify “now playing”

To populate `/api/spotify/currently-playing` with live data (see [`lib/spotify-server.ts`](lib/spotify-server.ts)), set:

| Variable | Description |
| --- | --- |
| `SPOTIFY_CLIENT_ID` | From [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) |
| `SPOTIFY_CLIENT_SECRET` | Same app |
| `SPOTIFY_REFRESH_TOKEN` | From Authorization Code flow with scopes `user-read-currently-playing` and `user-read-recently-played` |

Redirect URI in the Spotify app must match what you use when obtaining the code (for example `http://127.0.0.1:3000`).

Print an authorize URL:

```bash
SPOTIFY_CLIENT_ID=your_id node scripts/spotify-print-auth-url.mjs
```

If these variables are unset, the API returns the static fallback payload and the site behaves as before.

## Notes

- If the environment cannot persist browser caches, Playwright may re-download Chromium frequently.
- The capture scripts assume a deterministic viewport (`1280x900`) and headless Chromium.
