'use client'
import React from 'react'
import { poppin } from '../constants'
import { useRouter } from 'next/navigation'
import {button } from '../constants/Types/type'
const Button:React.FC<button> = ({BtnName,type}) => {
    const router  = useRouter()
    return (
        <button className='outline-none border-none flex flex-col w-full max-w-[140px] h-[50px] rounded-[0.5em] shadow-md overflow-hidden'
        onClick={()=>{router.push('/login')}}
        type={type}
        >
            <div className='transform translate-y-0 width-full'>
                <span className='flex-center'>
                    <p className={`${poppin.className} font-normal`}>{BtnName}</p>
                </span>
            </div>
            <div>
                <span className='flex-center'>
                    <p className={`${poppin.className} text-black`}></p>
                </span>
            </div>
        </button>
    )
}

export default Button
