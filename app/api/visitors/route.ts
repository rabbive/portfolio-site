import { NextResponse } from "next/server";
import { VISITOR_COUNT_DISPLAY } from "@/lib/site-data";

export async function GET() {
  return NextResponse.json({ count: VISITOR_COUNT_DISPLAY });
}
