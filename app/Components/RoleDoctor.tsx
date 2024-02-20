'use client'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
const RoleDoctor = () => {
    const router= useRouter()
    const {data} = useSession();
    const [names,setnames] = useState<string>('rahul');
    if(data?.user?.name === 'rahul'){
       router.push('/doctor') 
    }else{
        router.push('/home')  
    }
  return (
    <div>
      kkkkkkk
    </div>
  )
}

export default RoleDoctor
