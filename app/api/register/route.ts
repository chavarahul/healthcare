import { LoginData } from "@/app/constants/Types/type";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
// import prisma from "@/app/lib/db";

const prisma = new PrismaClient()
export const POST = async(request:NextRequest) =>{
 const  registerData : LoginData = await request.json();
 console.log(registerData)
 const {username,password,phone} = registerData;
 console.log(phone)
 const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  
if(user){
    return NextResponse.json({status:301})
}
try{
    const hashedPassword  =  await bcrypt.hash(password,5)
const newUser = await prisma.user.create({
    data:{
        username,
        password:hashedPassword, 
        phone : phone,    
    }
})
return NextResponse.json({newUser},{status:201})
}catch(err){
    return NextResponse.json({status:500})
}
}