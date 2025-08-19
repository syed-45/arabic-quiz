import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { IUserScore } from '@/app/utils/types';
import { auth } from "@/app/auth"

export const POST = auth(async function POST(req) {
  try {
    const session = req.auth
    if (!session) throw new Error('Unable to retrieve session')
    if (!session.user?.id) throw new Error('Unable to retrieve user data from session')
    const user_id = session.user.id
  
    const { chapter_number, last_score, no_of_questions }: IUserScore = await req.json()
    await db.insert(userScores)
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
})

