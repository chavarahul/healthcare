'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const RoleDoctor = () => {
    const router= useRouter()
    const {data} = useSession();
    const [names,setnames] = useState<string>('rahul');
    console.log(data?.user?.name === 'rahul')
    if(data?.user?.name === 'rahul'){
       router.push('/doctor') 
    }else{
        router.push('/Home')  
    }
  return (
    <div>
     
    </div>
  )
}

export default RoleDoctor
