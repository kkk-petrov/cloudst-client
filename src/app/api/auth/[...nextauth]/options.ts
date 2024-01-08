import { authService } from "@/services";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { LoginData } from "@/types";
import { Awaitable } from "next-auth";


export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@mail.com",
        },
        password: {
          label: "Password",
          type: "password",
        }
      },
      async authorize(credentials): Promise<Awaitable<any>> {
        return authService.login(credentials as LoginData);
      }
    })

  ],
  theme: {
    brandColor: "#017EFA"
  },
  // pages: {
  //   // signIn: "/auth/signin",
  //   // signOut: "/auth/signout",
  //   // error: "/auth/error",
  //   // verifyRequest: '/auth/verify',
  //   // newUser: '/'
  // },
  callbacks: {
    async jwt({ token, user }) {
      const data = { ...token, ...user }
      return data
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
}

