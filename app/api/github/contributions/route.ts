import { NextResponse } from "next/server";

const USERNAME = "rabbive";

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate: 3600 } },
    );
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = await res.json();
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
    });
  } catch {
    return NextResponse.json({ contributions: [], total: {} });
  }
}
