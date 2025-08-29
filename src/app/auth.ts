import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from './db/index';
import { authConfig } from '../../auth.config';
import Google from 'next-auth/providers/google';
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db/index"
import { accounts, users } from './db/schema';
// import type { Adapter } from "@auth/core/src/adapters"  // pnpm add @auth/core

declare module "next-auth" {
  interface User {
   gradientNum: number,
   school?:string,
   class?: string,
   isRegistrant: boolean
  }
}

export const { handlers, auth, signIn, signOut, unstable_update} = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
  }) as any, //as Adapter,
  ...authConfig,
  providers: [
    Google,
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
        // if !user[0].password { ... }
        let passwordsMatch = await compare(password, user[0].password!);
        if (passwordsMatch) return user[0] as any;
      },
    }),
  ],
  session: {
    strategy:"jwt"
  },
  callbacks: {
    jwt({ token, user, trigger, session}) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.gradientNum = user.gradientNum
        token.class = user.class
        token.school = user.school
        token.isRegistrant = user.isRegistrant
      }
      if (trigger==="update") {
        token.name = session.user.name
        token.email = session.user.email
        token.gradientNum = session.user.gradientNum
        token.class = session.user.class
        token.school = session.user.school
        token.isRegistrant = session.user.isRegistrant
      }
      return token
    },
    session({ session, token, trigger }) {
      if (!session || !session.user) return session
      if (trigger==="update") {
        session.user.name = token.name as string
        session.user.email = token.email as string
        session.user.gradientNum = token.gradientNum as number
        session.user.class = token.class as string || undefined
        session.user.school = token.school as string || undefined
        session.user.isRegistrant = token.isRegistrant as boolean
      }
      session.user.id = token.id as string
      session.user.gradientNum = token.gradientNum as number
      session.user.class = token.class as string || undefined
      session.user.school = token.school as string || undefined
      session.user.isRegistrant = token.isRegistrant as boolean

      return session
    },
  }
});