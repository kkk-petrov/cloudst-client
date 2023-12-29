import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import { UserModel } from "@/types";

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
      async authorize(credentials) {
        try {
          console.log("sending request to ", process.env.API_URL + "/auth/login")
          const res = await axios.post(process.env.API_URL + "/auth/login", credentials)
          const data = res.data
          console.log(data)

          if (res.status === 200 && data) {
            return data
          }
          return null
        } catch (err) {
          console.error('Error during request:', err);
        }
      }
    })

  ],
  theme: {
    brandColor: "#017EFA"
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error",
  //   verifyRequest: '/auth/verify',
  //   newUser: '/'
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

