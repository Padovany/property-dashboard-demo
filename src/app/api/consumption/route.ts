import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { consumption } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  const { propertyId, value } = body;

  await db.insert(consumption).values({
    propertyId,
    value,
  });

  return NextResponse.json({ success: true });
}
