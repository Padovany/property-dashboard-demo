import { db } from "@/db/drizzle";
import { consumption } from "@/db/schema";
import { NextResponse } from "next/server";

export async function GET() {
  const rows = await db.select().from(consumption).limit(50);
  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  try {
    const { propertyId, value } = await req.json();

    const inserted = await db
      .insert(consumption)
      .values({
        propertyId,
        value,
        createdAt: new Date(),
      })
      .returning();

    return NextResponse.json(inserted[0], { status: 201 });
  } catch (err) {
    console.error("POST /api/consumption error:", err);
    return NextResponse.json(
      { error: "Failed to insert reading" },
      { status: 500 }
    );
  }
}