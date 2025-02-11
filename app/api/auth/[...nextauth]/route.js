import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import User from '@/app/models/User'
import Info from '@/app/models/Info'

export const authoptions = NextAuth({
  providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider == "github") {
        const client = await mongoose.connect("mongodb://localhost:27017/Biriyani")
        const currentuser = await User.findOne({email: email})
        if(!currentuser){
          const newUser = new User({
            email: email,
            username: email.split("@")[0],
          });

          await newUser.save();
          user.name = newUser.username;
        }else{
          user.name = currentuser.username;
        }
      } 
      return true;
    }
  }
})

export {authoptions as GET, authoptions as POST}