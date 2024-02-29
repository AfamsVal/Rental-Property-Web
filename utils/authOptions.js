import { getSession } from "next-auth/react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import GoogleProvider from "next-auth/providers/google";

const firebaseConfig = {
  // Your Firebase configuration
  // ...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
    async signIn({ profile, account }) {
      const userExists = await checkIfUserExists(profile.email);

      if (!userExists) {
        await addUserToDatabase(profile);
      }

      return true; // Allow sign-in
    },
    async session({ session }) {
      const user = await getUserFromDatabase(session.user.email);
      session.userId = user.id;
      return session;
    },
  },
};

async function checkIfUserExists(email) {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);

  return querySnapshot.docs.some((doc) => doc.data().email === email);
}

async function addUserToDatabase(profile) {
  const usersCollection = collection(db, "users");
  await addDoc(usersCollection, {
    email: profile.email,
    // Add other user details as needed
  });
}

async function getUserFromDatabase(email) {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);

  const userDoc = querySnapshot.docs.find((doc) => doc.data().email === email);

  if (!userDoc) {
    throw new Error("User not found in the database");
  }

  return {
    id: userDoc.id,
    email: userDoc.data().email,
    // Add other user details as needed
  };
}
