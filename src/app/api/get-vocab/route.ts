import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const chapter_number = parseInt(searchParams.get('chapter_number') || '0');
 
  try {
    let verbs;
    let nouns;
    switch (chapter_number) {
      case 1:
        verbs = await sql`SELECT * FROM chapter_1_verbs`;
        nouns = await sql`SELECT * FROM chapter_1_nouns`;
        break;
      case 2:
        verbs = await sql`SELECT * FROM chapter_2_verbs`;
        nouns = await sql`SELECT * FROM chapter_2_nouns`;
        break;
      case 3:
        verbs = await sql`SELECT * FROM chapter_3_verbs`;
        nouns = await sql`SELECT * FROM chapter_3_nouns`;
        break;
      case 4:
        verbs = await sql`SELECT * FROM chapter_4_verbs`;
        nouns = await sql`SELECT * FROM chapter_4_nouns`;
        break;
      case 5:
        verbs = await sql`SELECT * FROM chapter_5_verbs`;
        nouns = await sql`SELECT * FROM chapter_5_nouns`;
        break;
      case 6:
        verbs = await sql`SELECT * FROM chapter_6_verbs`;
        nouns = await sql`SELECT * FROM chapter_6_nouns`;
        break;
      case 7:
        verbs = await sql`SELECT * FROM chapter_7_verbs`;
        nouns = await sql`SELECT * FROM chapter_7_nouns`;
        break;
      case 8:
        verbs = await sql`SELECT * FROM chapter_8_verbs`;
        nouns = await sql`SELECT * FROM chapter_8_nouns`;
        break;
      case 9:
        verbs = await sql`SELECT * FROM chapter_9_verbs`;
        nouns = await sql`SELECT * FROM chapter_9_nouns`;
        break;
      case 10:
        verbs = await sql`SELECT * FROM chapter_10_verbs`;
        nouns = await sql`SELECT * FROM chapter_10_nouns`;
        break;
      case 11:
        verbs = await sql`SELECT * FROM chapter_11_verbs`;
        nouns = await sql`SELECT * FROM chapter_11_nouns`;
        break;
      case 12:
        verbs = await sql`SELECT * FROM chapter_12_verbs`;
        nouns = await sql`SELECT * FROM chapter_12_nouns`;
        break;
      case 13:
        verbs = await sql`SELECT * FROM chapter_13_verbs`;
        nouns = await sql`SELECT * FROM chapter_13_nouns`;
        break;
      case 14:
        verbs = await sql`SELECT * FROM chapter_14_verbs`;
        nouns = await sql`SELECT * FROM chapter_14_nouns`;
        break;
      case 15:
        verbs = await sql`SELECT * FROM chapter_15_verbs`;
        nouns = await sql`SELECT * FROM chapter_15_nouns`;
        break;
      case 16:
        verbs = await sql`SELECT * FROM chapter_16_verbs`;
        nouns = await sql`SELECT * FROM chapter_16_nouns`;
        break;
    }
    
    return NextResponse.json({ verbs, nouns }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

}
// example usage:
// fetch('/api/get-vocab?chapter_number=1')