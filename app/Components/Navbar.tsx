'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Pacifico, Poppins } from 'next/font/google'

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' })
const poppin = Poppins({ subsets: ['latin'], weight: ['400', '500', '300', '600'] })
const Navbar = () => {
    const navElements = [
        {name:"Home",link:'/'},
        {name:"Maps",link:'/'}
    ]
    const [nav, setNav] = useState<Boolean>(false)
    return (
        <header className=' h-[17vh] w-screen relative pt-6 pr-5'>
            <div className='w-full h-[9vh]  flex justify-around relative mt-5  items-end'>
                <div className='w-[20%] h-full relative flex items-center justify-center transition duration-1000'>
                    <div className='w-[120px] h-full absolute left-0 mt-6  ml-24'>
                        <h1 className={`text-[26px]  w-full flex-center font-cursive  ${poppin.className} absolute -left-4`}>
                            <span className='pt-1 h-10   font-semibold relative text-gray-800 '>
                            <span className={`text-8xl absolute left-[-15px] top-[-25px] text-[#662264d9] font-thin ${poppin.className}`}>C</span>areSync
                            </span>
                        </h1>
                    </div>
                </div>
                <nav className='w-[60%] h-full relative'>
                    <ul className='flex items-center justify-evenly w-full h-full uppercase mt-1'>
                        <div className={` absolute right-0 ${nav ? "w-[25%]" : "w-10"} h-[40px] p-2 rounded-full ${nav ? "flex-all" : "flex-bet"} transition-all duration-700 bg-[#662264d9] mr-10`}>
                            <div className={`h-full w-[95%] flex-all overflow-hidden text-sm text-white links `}>
                                {
                                    nav &&
                                    <>
                                    {
                                        navElements.map((t,index)=>(
                                            <Link href={t.link} className='text-white ' key={index}>{t.name}</Link>
                                        ))
                                    }
                                        
                                    </>
                                }
                            </div>
                            <div className={`h-[25px] w-[25px] rounded-full flex-center absolute right-2 bg-[whitesmoke] ml-6 rotate z-10 cursor-pointer rotate`} onClick={() => setNav(!nav)}>
                                {nav ? <i className="bi bi-list"></i> : <i className="bi bi-list"></i>}
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
