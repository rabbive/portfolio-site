export type SpotifyApiPayload = {
  isPlaying: boolean;
  lastPlayed: {
    title: string;
    artist: string;
    albumImageUrl: string | null;
    songUrl: string;
  };
  source: "spotify" | "fallback";
};

/** JSON shape returned by `/api/spotify/currently-playing` when Spotify is not configured or errors occur. */
export const SPOTIFY_FALLBACK_RESPONSE: SpotifyApiPayload = {
  isPlaying: false,
  lastPlayed: {
    title: "Maula Mere Maula",
    artist: "Roop Kumar Rathod, Sayeed Quadri",
    albumImageUrl: null,
    songUrl: "#",
  },
  source: "fallback",
};
