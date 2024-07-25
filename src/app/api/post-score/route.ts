import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { eq, and } from 'drizzle-orm';
import { revalidatePath, revalidateTag } from 'next/cache';
 
export async function POST(request: Request) {
    const { user_id, chapter_number, score }: { user_id: string, chapter_number: number, score: number } = await request.json()

  try {
    let result1 = await db.select().from(userScores).
      where(
        and(
          eq(userScores.user_id, user_id),
          eq(userScores.chapter_number, chapter_number))
        );
    const isFirstTime = result1.length === 0;

    let result2 = isFirstTime ?
      await db.insert(userScores).values({ user_id, chapter_number, last_score: score }).returning()
        :
      await db.update(userScores).set({ last_score: score }).where(
        and(
          eq(userScores.user_id, user_id),
          eq(userScores.chapter_number, chapter_number)
          )
        )
        .returning();

    revalidateTag('quiz-results')

    return NextResponse.json(result2, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

