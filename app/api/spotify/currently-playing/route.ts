import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    isPlaying: false,
    lastPlayed: {
      title: "Maula Mere Maula",
      artist: "Roop Kumar Rathod, Sayeed Quadri",
      albumImageUrl: null,
      songUrl: "#",
    },
  });
}
