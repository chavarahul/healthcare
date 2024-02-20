'use client'
import React,{useEffect, useState} from 'react'
import Navbar from '../Components/Navbar2'
import { poppin } from '../constants'
import axios from 'axios'
import Image from 'next/image'
import imgtest from '@/public/imgtest.jpg'
const page = () => {
    const [user,setuser]=useState([])
useEffect(() => {
  const handle = async() =>{
    const name  = "thanu"
   const res = await axios.get(`api/upload?name=${name}`)
   console.log(res.data)
   const d=res.data.user
   console.log(d)
   setuser(d)

  }

  return () => {
    handle()
  }
}, [])

  return (
    <div className='bg-[#11081f] w-screen min-h-screen'>
    <Navbar />
    <div className="w-full h-[20vh]">
      <p className='text-white  mt-16 ml-36 text-xl w-[20%] h-[40vh]  border border-white-500 rounded-lg bg-]'>
       <p className='ml-4 mt-5 capitalize'>name : {user.name}</p>
       <p className='ml-4 mt-5 capitalize'>disease : {user.problem}</p>
       <p className='ml-4 mt-5 capitalize'>medicine : {user.description}</p>
      </p>
       {/* <Image src={`/${user.image}`} width={30} height={30}/> */}
    </div>
  </div>
  )
}

export default page
