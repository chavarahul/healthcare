import { LoginData } from "@/app/constants/Types/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { NextApiRequest } from "next";
// import prisma from "@/app/lib/db";

const prisma = new PrismaClient()
export const POST = async(request:NextRequest) =>{
 const  registerData  = await request.json();
 console.log(registerData)
 const uname = registerData.name;
 console.log(uname)
 const user = await prisma.post.findFirst({
    where: {
      name:uname
    },
  });
  console.log(user)
  
if(!user){
    return null
}
console.log('ff')

return NextResponse.json({user},{status:200})

}
export const GET = async(request:NextApiRequest) =>{
  const  name  = request.query.name as string;
  console.log(name);

  // Query the database using Prisma
  const user = await prisma.post.findUnique({
    where: {
      name:name
    }
  });
  console.log(user);

  // If user doesn't exist, return null
  if (!user) {
    return null;
  }
  return NextResponse.json({user})
 }