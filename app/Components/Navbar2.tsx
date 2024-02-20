'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Pacifico, Poppins } from 'next/font/google'
import { useSession,signOut } from 'next-auth/react'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const poppin = Poppins({ subsets: ['latin'], weight: ['400', '500', '300', '600'] })
const Navbar = () => {
    const [nav, setNav] = useState<Boolean>(false)
    const {data} = useSession();
    return (
        <header className=' h-[17vh] w-screen relative pt-6 pr-5'>
            <div className='w-full h-[9vh]  flex justify-between relative mt-5  items-end '>
                <div className='w-[20%] h-full relative flex items-center justify-center transition duration-1000'>
                    <div className='w-[120px] h-full absolute left-0 mt-6  ml-40'>
                        <h1 className={`text-[26px]  w-full flex-center font-cursive  ${poppin.className} absolute left-0`}>
                            <span className='pt-1 h-10   font-semibold relative  text-[#662264d9] '>
                                <span className={`text-8xl absolute left-[-20px] top-[-25px] text-[#662264d9] font-thin ${poppin.className}`}>C</span>areSync
                            </span>
                        </h1>
                    </div>
                </div>
                <nav className='w-[3%] h-full relative mr-32 mt-12 '>
                    <div className="w-[35px] h-[35px] rounded-full bg-[#662264d9] relative ml-1 cursor-pointer mt-4"
                    onClick={()=>{setNav(!nav)}}
                    ></div>
                    <div className={`w-full h-[8rem] absolute top-10 flex-colm mt-10`}>
                        <div className="w-full relative h-[3rem] flex items-end justify-end rounded-3xl inwidth z-10">
                            <div className="absolute w-[0px] bg-[gray] h-full right-0 flex justify-start flex-center rounded-full full">
                                <div className={`w-[35px] h-[35px] rounded-full bg-[#662264d9] absolute right-2 z-10 ${!nav? "hidden":"block"} `}>
                                </div>
                               <p className={`${poppin.className} capitalize text-left hidden -ml-5`}>{data?.user?.name}</p>
                            </div>
                        </div>
                        <div className="w-full relative h-[3rem] flex items-end justify-end rounded-3xl inwidth ">
                            <div className="absolute w-[0px] bg-[#662264d9] h-full right-0 flex-center rounded-full full">
                                <div className={`w-[35px] h-[35px] rounded-full bg-[#662264d9] absolute right-2 z-10 cursor-pointer ${!nav? "hidden":"block"} `}
                                onClick={()=>{signOut()}}
                                >
                                </div>
                            <p className={`${poppin.className} capitalize text-left hidden -ml-5 cursor-pointer`}
                             onClick={()=>{signOut()}}
                            >signOut</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
