import { db } from '@/app/db';
import { chapterNames } from '@/app/db/schema';
import { NextResponse } from 'next/server';
 
export async function GET() {
  try {
    const result = await db.select().from(chapterNames).orderBy(chapterNames.chapterNumber);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}