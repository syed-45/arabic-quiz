import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { IUserScore } from '@/app/utils/types';
 
export async function POST(request: Request) {
  const { user_id, chapter_number, last_score, no_of_questions }: IUserScore = await request.json()

  try {
    let result = await 
    db.insert(userScores)
      .values({
        user_id: user_id,
        chapter_number: chapter_number,
        last_score: last_score,
        no_of_questions: no_of_questions
      })
      .onConflictDoUpdate({
        target: [userScores.user_id, userScores.chapter_number],
        set: {last_score: last_score, no_of_questions: no_of_questions}
      });
    revalidateTag('quiz-results')

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

