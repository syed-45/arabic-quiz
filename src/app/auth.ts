import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { compare } from 'bcrypt-ts';
import { getUser } from './db/index';
import { authConfig } from '../../auth.config';
import Google from 'next-auth/providers/google';
//TODO: piblish app on google console to allow non test users
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db/index"
import type { Adapter } from "@auth/core/src/adapters"

export const { handlers, auth, signIn, signOut,} = NextAuth({
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
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session!.user!.id = token.id as string
      return session
    },
  }
});