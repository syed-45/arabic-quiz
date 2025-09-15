import { drizzle } from 'drizzle-orm/postgres-js';
import { and, eq } from 'drizzle-orm';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import { accounts, classes, schools, users } from './schema';

export let db = drizzle({connection:process.env.POSTGRES_URL!,casing:'snake_case'});

export async function getUser(email: string) {
    return await db.select().from(users).where(eq(users.email, email)); 
}

export async function checkForProviderAccount(userId: string):Promise<string | null> {
  const providerAccountSearch = await db.select().from(accounts).where(eq(accounts.userId, userId))
  return providerAccountSearch[0].provider
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

export async function createNewGroupClass(groupClassName:string, schoolName: string, userId: string) {
  try {
    const code: { code: string }[] = await db.insert(classes)
                                              .values({name: groupClassName, schoolName: schoolName, registrantId: userId})
                                              .returning({code: classes.code})
    await db.update(users)
            .set({school: schoolName, class: groupClassName, isRegistrant: true})
            .where(eq(users.id,userId))
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
    school: string,
    isRegistrant: boolean
  } | null
}

export async function joinClassLeaderboard(code: string, userId: string): Promise<IJoinClassRes> {
  const res1 = (await db.select().from(classes).where(eq(classes.code,code)))[0]
  if (res1===undefined) return {
    msg:'The code you have entered does not match any existing class',
    data:null
  }
  const isRegistrant = res1.registrantId === userId // if user joins their registered class back from a different one
  const classData = {
    school: res1.schoolName,
    class: res1.name,
    isRegistrant: isRegistrant
  }
  await db.update(users).set(classData).where(eq(users.id,userId))
  return {
    msg:'Success', 
    data:classData
  }
}