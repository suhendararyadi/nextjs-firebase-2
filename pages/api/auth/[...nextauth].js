import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { db } from "../../../lib/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Firebase",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          );
          const user = userCredential.user;
          return { id: user.uid, email: user.email };
        } catch (error) {
          console.error("Error signing in:", error);
          return null;
        }
      },
    }),
  ],
  adapter: FirestoreAdapter(db),
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
});
