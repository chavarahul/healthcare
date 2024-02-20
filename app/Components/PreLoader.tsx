'use client'
import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [remove, setRemove] = useState<Boolean>(true)

    useEffect(() => {
        const time: any = setTimeout(() => {
            setRemove(false)
        }, 2000)
        return () => clearTimeout(time)
    }, [])
    return (
        <div>
            {
                remove &&
                <div className='w-screen h-screen absolute top-0 left-0 bg-[#11081f] transition-all duration-500 z-10'>
                    <div className="w-full h-full flex items-center justify-center absolute">
                        <div className="z-10 text-5xl w-[350px] h-[50px]relative text-white">
                            <div className='font-semibold relative overflow-hidden animate-span word-spacing uppercase'>
                                <span className='textColorBg'>c</span>
                                <span className='textColorBg'>a</span>
                                <span className='textColorBg'>r</span>
                                <span className='textColorBg'>e</span>
                                <span>s</span>
                                <span>y</span>
                                <span>n</span>
                                <span>c</span>
                                {/* <span>O</span> */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default PreLoader
