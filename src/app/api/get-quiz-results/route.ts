import { db } from '../../db/index';
import { userScores } from '../../db/schema';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { auth } from '@/app/auth';
 
export const GET = auth(async function GET(req) {
  try {
    const session = req.auth
    if (!session) return NextResponse.json({ message:'no session recieved' }, { status: 401 })
    if (!session.user?.id) return NextResponse.json({ message:'no user data recieved' }, { status: 401 })
    const user_id = session.user.id
    const result = await db.select().from(userScores)
                            .where(eq(userScores.user_id, user_id))
                            .orderBy(userScores.chapter_number);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
})

