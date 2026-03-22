import { SPOTIFY_FALLBACK_RESPONSE, type SpotifyApiPayload } from "./spotify-fallback";

type SpotifyTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
};

type SpotifyTrack = {
  name: string;
  artists?: { name: string }[];
  external_urls?: { spotify?: string };
  album?: { images?: { url: string }[] };
};

type SpotifyCurrentlyPlaying = {
  is_playing?: boolean;
  item?: SpotifyTrack | null;
};

type SpotifyRecentlyPlayed = {
  items?: { track: SpotifyTrack }[];
};

let accessTokenCache: { token: string; expiresAtMs: number } | null = null;

function spotifyConfigured(): boolean {
  return Boolean(
    process.env.SPOTIFY_CLIENT_ID &&
      process.env.SPOTIFY_CLIENT_SECRET &&
      process.env.SPOTIFY_REFRESH_TOKEN,
  );
}

async function refreshAccessToken(): Promise<string | null> {
  if (!spotifyConfigured()) return null;

  const now = Date.now();
  if (accessTokenCache && accessTokenCache.expiresAtMs > now + 30_000) {
    return accessTokenCache.token;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
    cache: "no-store",
  });

  if (!res.ok) {
    accessTokenCache = null;
    return null;
  }

  const data = (await res.json()) as SpotifyTokenResponse;
  const expiresIn = typeof data.expires_in === "number" ? data.expires_in : 3600;
  accessTokenCache = {
    token: data.access_token,
    expiresAtMs: now + expiresIn * 1000,
  };
  return accessTokenCache.token;
}

function mapTrack(track: SpotifyTrack, isPlaying: boolean): SpotifyApiPayload {
  const artist = track.artists?.map((a) => a.name).join(", ") || "Unknown artist";
  const songUrl = track.external_urls?.spotify ?? "https://open.spotify.com/";
  const albumImageUrl = track.album?.images?.[0]?.url ?? null;
  return {
    isPlaying,
    lastPlayed: {
      title: track.name,
      artist,
      albumImageUrl,
      songUrl,
    },
    source: "spotify",
  };
}

export async function fetchSpotifyPlaybackPayload(): Promise<SpotifyApiPayload> {
  if (!spotifyConfigured()) {
    return SPOTIFY_FALLBACK_RESPONSE;
  }

  const token = await refreshAccessToken();
  if (!token) {
    return SPOTIFY_FALLBACK_RESPONSE;
  }

  const headers = { Authorization: `Bearer ${token}` };

  const currentRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers,
    cache: "no-store",
  });

  if (currentRes.status === 204) {
    const recentRes = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=1", {
      headers,
      cache: "no-store",
    });
    if (!recentRes.ok) {
      return { ...SPOTIFY_FALLBACK_RESPONSE, isPlaying: false };
    }
    const recent = (await recentRes.json()) as SpotifyRecentlyPlayed;
    const track = recent.items?.[0]?.track;
    if (!track) {
      return { ...SPOTIFY_FALLBACK_RESPONSE, isPlaying: false };
    }
    return mapTrack(track, false);
  }

  if (!currentRes.ok) {
    return SPOTIFY_FALLBACK_RESPONSE;
  }

  const body = (await currentRes.json()) as SpotifyCurrentlyPlaying;
  const item = body.item;
  if (!item) {
    return SPOTIFY_FALLBACK_RESPONSE;
  }
  return mapTrack(item, Boolean(body.is_playing));
}
