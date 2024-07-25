import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const user_id = searchParams.get('user-id')!;

  try {
    const result = 
    await db.select().from(userScores)
              .where(eq(userScores.user_id, user_id))
              .orderBy(userScores.chapter_number);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

