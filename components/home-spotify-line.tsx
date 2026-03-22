"use client";

import { useEffect, useState } from "react";
import { SpotifyIcon } from "./icons";

type SpotifyPayload = {
  isPlaying: boolean;
  lastPlayed: {
    title: string;
    artist: string;
    albumImageUrl: string | null;
    songUrl: string;
  };
};

export function HomeSpotifyLine() {
  const [data, setData] = useState<SpotifyPayload | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/spotify/currently-playing")
      .then((r) => r.json())
      .then((j: SpotifyPayload) => {
        if (!cancelled) setData(j);
      })
      .catch(() => {
        if (!cancelled) setData(null);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!data?.lastPlayed?.title) return null;

  const { title, artist, songUrl } = data.lastPlayed;
  const href = songUrl && songUrl !== "#" ? songUrl : "https://open.spotify.com/";
  const prefix = data.isPlaying ? "Currently playing" : "Last played";

  return (
    <p className="flex flex-wrap items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
      <SpotifyIcon size={16} />
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="motion-colors inline-flex flex-wrap items-baseline gap-x-1 hover:underline"
        style={{ color: "var(--text-secondary)" }}
      >
        <span>
          {prefix} <span style={{ color: "var(--text-primary)" }}>{title}</span>
        </span>
        <span style={{ color: "var(--text-muted)" }}>— {artist}</span>
      </a>
    </p>
  );
}
