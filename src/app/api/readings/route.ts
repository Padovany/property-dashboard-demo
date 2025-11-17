import { db } from "@/db/drizzle";
import { properties, readings } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
  const rows = await db
    .select()
    .from(readings)
    .leftJoin(properties, eq(readings.propertyId, properties.id))
    .orderBy(readings.createdAt)
    .limit(100);

  return NextResponse.json(rows);
}

export async function POST(req: Request) {
  const { value, propertyId } = await req.json();

  const result = await db
    .insert(readings)
    .values({
      value,
      propertyId,
    })
    .returning();

  return NextResponse.json(result[0]);
}
