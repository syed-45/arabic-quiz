import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
//TODO: update api routes to use drizzle
 
export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM chapters;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}