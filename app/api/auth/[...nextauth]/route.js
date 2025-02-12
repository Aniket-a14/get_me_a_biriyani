import mongoose from "mongoose";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/app/models/User";

const MONGODB_URI = "mongodb://127.0.0.1:27017/authDB";

let isConnected = false; // Track connection status

async function connectToDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(MONGODB_URI, {});
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
}

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("🔹 Received signIn callback");
      console.log("👤 GitHub Profile:", profile);
      console.log("📩 Email from user:", user?.email);
      console.log("📩 Email from profile:", profile?.email);

      await connectToDB(); // Ensure database connection

      let email = user?.email || profile?.email;
      if (!email) {
        email = `github_${profile.id}@example.com`;
        console.log("⚠️ Email not found, setting temporary email:", email);
      }

      let currentUser = await User.findOne({ email });
      console.log("🔍 Checking if user exists in DB:", currentUser);

      if (!currentUser) {
        currentUser = new User({
          email,
          username: profile?.login || `user_${Date.now()}`,
          profilepic: profile?.avatar_url || "",
        });
        await currentUser.save();
        console.log("✅ New user created:", currentUser);
      } else {
        console.log("✅ User already exists, logging in:", currentUser);
      }

      user.name = currentUser.username;
      return true;
    },
  },
});

export { authoptions as GET, authoptions as POST };
