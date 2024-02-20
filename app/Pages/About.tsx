'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
import Button from '../Components/Button'
import { poppin } from '../constants'
// import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

const About = () => {
  const router= useRouter()
  const [role,setRole] = useState<boolean>(true)
  const handleShift = (title:string) =>{
    console.log(title)
    {title==="doctor"&&setRole(false)}
    router.push(`/login?role=${role}`)
  }
  return (
    <section className='w-screen h-screen  section bg-[#11081f]  z-10 flex-center' id='about'>
      <div className='w-[80%]  h-full relative flex-center '>
        <div className="w-full h-[60%] flex-colm  mt-10" >
          <div className="w-full h-[50%] relative  flex-center">
            <div className="w-[70%] h-[60%] relative flex-center">
              <p className={`${poppin.className} text-white text-4xl`}>Choose Option</p>
            </div>
          </div>
          <div className='w-full h-[50%] relative flex-center'>
            <div className="w-[40%] h-full   flex items-center justify-evenly">
              <button className='outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-md overflow-hidden'
                onClick={()=>{handleShift('doctor')}}
                type="button"
              >
                <div className='transform translate-y-0 width-full'>
                  <span className='flex-center'>
                    <p className={`${poppin.className} font-normal`}>Doctor</p>
                  </span>
                </div>
                <div>
                  <span className='flex-center'>
                    <p className={`${poppin.className} text-black`}></p>
                  </span>
                </div>
              </button>
              <button className='outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-md overflow-hidden'
                onClick={()=>{handleShift('patient')}}
                type="button"
              >
                <div className='transform translate-y-0 width-full'>
                  <span className='flex-center'>
                    <p className={`${poppin.className} font-normal`}>Patient</p>
                  </span>
                </div>
                <div>
                  <span className='flex-center'>
                    <p className={`${poppin.className} text-black`}></p>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
