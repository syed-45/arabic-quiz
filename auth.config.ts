import { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [
    Google,
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user;
      let isOnDashboard = nextUrl.pathname.startsWith('/signedin');
      //TODO: prevent unauthorized users from accessing the api routes, attempted solution no fix yet

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/signedin', nextUrl));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
