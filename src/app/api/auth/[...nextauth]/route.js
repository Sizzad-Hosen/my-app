import connectDB from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";


export const authOptions = {
  secret : process.env.NEXT_AUTH_URL,
  session: {
    strategy: "jwt",
    maxAge:30*24*60*60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Your Email",
        },
        password: {
          label: "Password",
          type: "password", 
          placeholder: "Your Password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        
        if (!credentials) {
          return null;
        }
        if(email)
        {

          const db = await connectDB();
          const currentUser = await db.collection('users').findOne({email});

            // const currentUser = users.find((user)=>user.email===email)

           if(currentUser)
           {
            if(currentUser.password ===password)
            {
                return currentUser;

            }
           }
        }
        return null;


      
        
        return { id: 1, name: "User", email };

   
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

   GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],

  callbacks:{
    async jwt({ token, account,user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.type = user.type
      
      }
      return token
    },
    async session({ session, token }) {
     session.user.type = token.type
     return session
    },

  }


}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
