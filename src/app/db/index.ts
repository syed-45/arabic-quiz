import { drizzle } from 'drizzle-orm/postgres-js';
import { and, eq } from 'drizzle-orm';
import postgres from 'postgres';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { classes, schools, users } from './schema';

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

export async function updateUser(email: string, name: string, gradientNum: number, id: string) {
  try {
    await db.update(users).set({
      email: email,
      name: name,
      gradientNum: gradientNum,
    }).where(
      eq(users.id, id)
    )
    //TODO: drizzle issue found where ERROR does NOT appear when WHERE conditional parameter does not match.

    return
  } catch (error) {
    console.error('Failed to update user data: ', error);
    throw new Error('Failed to update user data.');
  }
}

export async function createNewSchool(schoolName:string) {
  try {
    await db.insert(schools).values({name: schoolName})
  } catch (error) {
    console.error('Failed to insert school name into database: ', error);
    throw new Error('Failed to register new school');
  }
}

export async function checkIfSchoolExists(schoolName:string): Promise<boolean> {
  const res = await db.select().from(schools).where(eq(schools.name,schoolName))
  return res[0]!==undefined 
}

export async function checkIfClassExists(schoolName:string,groupClassName:string): Promise<boolean> {
  const res = await db.select().from(classes)
  .where(
    and(eq(classes.name,groupClassName),eq(classes.schoolName,schoolName))
  )
  return res[0]!==undefined 
}

export async function createNewGroupClass(groupClassName:string, schoolName: string) {
  try {
    const code: { code: string }[] = await db.insert(classes).values({name: groupClassName, schoolName: schoolName}).returning({code: classes.code})
    return code
  } catch (error) {
    console.error('Failed to insert group / class into database: ', error);
    throw new Error('Failed to register new group / class');
  }
}

export interface IJoinClassRes {
  msg: string,
  data: {
    class: string,
    school: string
  } | null
}

export async function joinClassLeaderboard(code: string, userId: string): Promise<IJoinClassRes> {
  const res1 = (await db.select().from(classes).where(eq(classes.code,code)))[0]
  if (res1===undefined) return {msg:'The code you have entered does not match any existing class', data:null}
  const classData = {school: res1.schoolName, class:res1.name}
  await db.update(users).set(classData).where(eq(users.id,userId))
  return {msg:'Success', data:classData}
}