import { NextResponse } from "next/server";

let visitorCount = 32874;

export async function GET() {
  visitorCount += 1;
  return NextResponse.json({ count: visitorCount });
}
