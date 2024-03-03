import GoogleProvider from "next-auth/providers/google";
import { Profile } from "next-auth";
import { Account } from "next-auth";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import connectDB from "@/config/db";
import UserModel from "@/models/UserModel";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    signIn: async ({
      profile,
    }: // account,
    {
      profile: Profile & { picture?: string };
      // account: Account;
    }) => {
      // const userExists = await checkIfUserExists(profile.email as string);
      // if (!userExists) {
      //   await addUserToDatabase(profile);
      // }

      await connectDB();
      const userExist = await UserModel.findOne({ email: profile.email });

      console.log("userExist:", userExist);
      console.log("profile:", profile);
      if (!userExist) {
        const username = profile.name?.slice(0, 20);

        await UserModel.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      return true; // Allow sign-in
    },
    session: async ({ session }: { session: any }) => {
      // const user = await getUserFromDatabase(session.user.email);
      // session.userId = user.id;
      console.log("session:", session);
      const user = await UserModel.findOne({ email: session.user.email });
      console.log("user:", user);
      session.user.id = user?._id?.toString();
      return session;
    },
  },
};

// async function checkIfUserExists(email: string): Promise<boolean> {
//   const usersCollection = collection(db, "users");
//   const querySnapshot = await getDocs(usersCollection);

//   return querySnapshot.docs.some((doc) => doc.data().email === email);
// }

// async function addUserToDatabase(profile): Promise<void> {
//   const usersCollection = collection(db, "users");
//   await addDoc(usersCollection, {
//     email: profile.email,
//     // Add other user details as needed
//   });
// }

// async function getUserFromDatabase(
//   email: string
// ): Promise<{ id: string; email: string }> {
//   const usersCollection = collection(db, "users");
//   const querySnapshot = await getDocs(usersCollection);

//   const userDoc = querySnapshot.docs.find((doc) => doc.data().email === email);

//   if (!userDoc) {
//     throw new Error("User not found in the database");
//   }

//   return {
//     id: userDoc.id,
//     email: userDoc.data().email,
//     // Add other user details as needed
//   };
// }
