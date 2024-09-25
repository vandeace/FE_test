import NextAuth from "next-auth";
import "next-auth/jwt";

import type { DefaultSession, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { TLoginResponse } from "./types/login";
import { z } from "zod";

async function getUser(
  username: string,
  password: string
): Promise<TLoginResponse | undefined> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    const user = await res.json();
    console.log(user, "userObject");
    if (user.message == "Successfully login") {
      return { token: user.token, email: "", ...user };
    } else {
      return undefined;
    }
  } catch (error) {
    throw new Error(`Failed to fetch user. error: ${error}`);
  }
}

const config = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(6) })
          .safeParse(credentials);
        console.log(parsedCredentials.success, "success");
        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username, password);
          if (!user) {
            return null;
          } else {
            return user as any;
          }
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
    async session({ session, token, user }) {
      const newSession = {
        ...session,
        ...token,
        ...user,
      };

      return newSession;
    },
  },
  experimental: {
    enableWebAuthn: true,
  },
  debug: process.env.NODE_ENV !== "production" ? true : false,
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);

declare module "next-auth" {
  interface Session {
    token?: string;
    user: {
      token?: string;
    } & DefaultSession["user"];
  }
  interface User {
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
