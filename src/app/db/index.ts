import { drizzle } from 'drizzle-orm/postgres-js';
import { eq } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { users, chapterNames } from './schema';

// Optionally, if not using email/pass login, you can
// use the Drizzle adapter for Auth.js / NextAuth
// https://authjs.dev/reference/adapter/drizzle
let client = postgres(process.env.POSTGRES_URL!);
export let db = drizzle(client);

export async function getUser(email: string) {
  try {
    return await db.select().from(users).where(eq(users.email, email));
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function createUser(email: string, password: string, name: string) {
  let salt = genSaltSync(10);
  let hash = hashSync(password, salt);

  try {
    return await db.insert(users).values({ email, password: hash , name: name});
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}


export async function testGetChapterNames() {
  return await db.select().from(chapterNames)
}