import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const user_email = searchParams.get('user-email')!;
  //TODO: not recieving results from haque_45@hotmail.co.uk email after completing quiz
    try {
      const result = 
      await db.select().from(userScores)
                .where(eq(userScores.user_email, user_email))
                .orderBy(userScores.chapter_number);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

