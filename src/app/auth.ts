import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from './db/index';
import { authConfig } from '../../auth.config';
import Google from 'next-auth/providers/google';
//TODO: piblish app on google console to allow non test users
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db/index"
// import type { Adapter } from "@auth/core/src/adapters"  // pnpm add @auth/core

declare module "next-auth" {
  interface User {
   gradientNum: number
  }
}

export const { handlers, auth, signIn, signOut, update} = NextAuth({
  adapter: DrizzleAdapter(db) as any, //as Adapter,
  ...authConfig,
  providers: [
    Google,
    Credentials({
      async authorize({ email, password }: any) {
        let user = await getUser(email);
        if (user.length === 0) return null;
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
      }
      if (trigger==="update") {
        token.name = session.user.name
        token.email = session.user.email
        token.gradientNum = session.user.gradientNum
        console.log('in jwt update callback')
      }
      return token
    },
    session({ session, token, trigger }) {
      if (!session || !session.user) return session
      if (trigger==="update") {
        session.user.name = token.name
        session.user.email = token.email
        session.user.gradientNum = token.gradientNum as number
        console.log('in session update callback')
      }
      session.user.id = token.id as string
      session.user.gradientNum = token.gradientNum as number
      return session
    },
  }
});