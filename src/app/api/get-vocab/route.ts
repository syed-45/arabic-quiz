import { NextResponse } from 'next/server';
import { verbs, nouns } from '@/app/db/schema';
import { db } from '@/app/db';
import { eq } from 'drizzle-orm';
 
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const chapterNumberParam = searchParams.get('chapter_number')
  if (!chapterNumberParam) return NextResponse.json({message:'Require a chapter number'},{status:400});
  const chapterNumber = parseInt(chapterNumberParam);
  if (chapterNumber < 1 || chapterNumber > 16) return NextResponse.json({message:'Chapter number must be between 1 and 16'},{status:400});
 
  try {
    
    const [verbsData, nounsData] = await Promise.all([
      await db.select().from(verbs).where(eq(verbs.chapterNumber, chapterNumber)),
      await db.select().from(nouns).where(eq(nouns.chapterNumber, chapterNumber))
    ])
    
    return NextResponse.json({ verbsData, nounsData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}
// example usage:
// fetch('/api/get-vocab?chapter_number=1')