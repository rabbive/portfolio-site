#!/usr/bin/env node
/**
 * One-time Spotify OAuth helper: prints the authorize URL.
 *
 * Prerequisites:
 * 1. Create an app at https://developer.spotify.com/dashboard
 * 2. Add a Redirect URI that matches SPOTIFY_REDIRECT_URI below (e.g. http://127.0.0.1:3000)
 * 3. Export SPOTIFY_CLIENT_ID (and later use SPOTIFY_CLIENT_SECRET when exchanging the code)
 *
 * Usage:
 *   SPOTIFY_CLIENT_ID=xxx node scripts/spotify-print-auth-url.mjs
 *
 * Open the printed URL, approve, then copy the `code` query param from the redirect URL
 * and exchange it for tokens (see ENV_SETUP.md or Spotify docs: Authorization Code flow).
 */

const clientId = process.env.SPOTIFY_CLIENT_ID;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI || "http://127.0.0.1:3000";
const scopes = ["user-read-currently-playing", "user-read-recently-played"].join(" ");

if (!clientId) {
  console.error("Set SPOTIFY_CLIENT_ID in the environment.");
  process.exit(1);
}

const params = new URLSearchParams({
  response_type: "code",
  client_id: clientId,
  scope: scopes,
  redirect_uri: redirectUri,
});

const url = `https://accounts.spotify.com/authorize?${params.toString()}`;
console.log("Open this URL in a browser (logged into Spotify):\n");
console.log(url);
console.log("\nAfter redirect, copy the `code` parameter and exchange it for refresh_token:");
console.log(
  "  curl -X POST https://accounts.spotify.com/api/token \\\\\n" +
    "    -d grant_type=authorization_code \\\\\n" +
    "    -d code=YOUR_CODE \\\\\n" +
    `    -d redirect_uri=${encodeURIComponent(redirectUri)} \\\\\n` +
    "    -d client_id=YOUR_CLIENT_ID \\\\\n" +
    "    -d client_secret=YOUR_CLIENT_SECRET",
);
