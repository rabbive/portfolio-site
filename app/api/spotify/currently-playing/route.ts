import { NextResponse } from "next/server";
import { fetchSpotifyPlaybackPayload } from "@/lib/spotify-server";

const MEMORY_CACHE_MS = 12_000;
let memoryCache: { payload: Awaited<ReturnType<typeof fetchSpotifyPlaybackPayload>>; until: number } | null =
  null;

export async function GET() {
  const now = Date.now();
  if (memoryCache && memoryCache.until > now) {
    return NextResponse.json(memoryCache.payload, {
      headers: {
        "Cache-Control": "private, max-age=10, stale-while-revalidate=20",
      },
    });
  }

  try {
    const payload = await fetchSpotifyPlaybackPayload();
    memoryCache = { payload, until: now + MEMORY_CACHE_MS };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "private, max-age=10, stale-while-revalidate=20",
      },
    });
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json(
      { isPlaying: false, lastPlayed: null, source: "spotify" },
      {
        headers: {
          "Cache-Control": "private, max-age=10, stale-while-revalidate=20",
        },
      }
    );
  }
}
