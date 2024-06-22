import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
 
export async function POST(request: Request) {
    const { user_email, chapter_number, score }: { user_email: string, chapter_number: number, score: number } = await request.json()

  try {
    let result1 = await db.select().from(userScores).
      where(
        and(
          eq(userScores.user_email, user_email),
          eq(userScores.chapter_number, chapter_number))
      );
    const isFirstTime = result1.length === 0;
    let result2 = isFirstTime ?
     await db.insert(userScores).values({ user_email, chapter_number, last_score: score }).returning()
        :
     await db.update(userScores).set({ last_score: score }).where(
       and(
         eq(userScores.user_email, user_email),
         eq(userScores.chapter_number, chapter_number)
        )
     )
     .returning();

    return NextResponse.json(result2, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

