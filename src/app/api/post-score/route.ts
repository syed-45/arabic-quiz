import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
 
export async function POST(request: Request) {
    const { user_id, chapter_number, score }: { user_id: string, chapter_number: number, score: number } = await request.json()

  try {
    let result = await db.insert(userScores)
                          .values({user_id: user_id, chapter_number: chapter_number, last_score: score})
                          .onConflictDoUpdate({
                            target: [userScores.user_id, userScores.chapter_number],
                            set: {last_score: score}
                          })
    revalidateTag('quiz-results')

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

