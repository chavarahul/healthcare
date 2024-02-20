import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { NextResponse } from "next/server";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from 'bcrypt'
import prisma from "@/app/lib/db";
export const options: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: {
                    label: "username",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password",
                }

            },
            async authorize(credentials: { username: string; password: string }) {
                console.log('dd')
                if (!(credentials?.username) || !(credentials?.password)) {
                    return null
                }
                console.log(credentials?.username)
                const user = await prisma.user.findFirst({
                    where: {
                        username: credentials.username
                    }
                })
                console.log(user)
                if (!user) {
                    return null
                }
                const check = await bcrypt.compare(credentials.password, user.password);
                console.log(check)
                if (!check) {
                    return null;
                }
                console.log("jj");
                return {
                    // id:user.id + '',
                    name: user.username
                }
            },
        })
    ],
    callbacks: {
        async jwt({ token,user }) {
            // console.log(token)
            if(user){
            return {
                ...token,username:user.username
            }
        }
        return token
        },
        async session({ session,user, token }) {
            return {
                ...session , user:{
                    ...session.user,username:token.username
                }
            }
        }
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}