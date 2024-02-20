'use client'
import React, { useState } from 'react'
import Link from 'next/link';
const Active = () => {
    const [dot, setDot] = useState<Boolean>(true);
    const [index, setIndex] = useState<number>(0)

    const handleDot = (index: number) => {
        if (index === 0) {
            setDot(true);
            setIndex(0)
        } else {
            setDot(false);
            setIndex(1)
        }
    };

    return (
        <div className='h-[70%] w-9 flex-colm rounded-3xl mix-blend-difference'>
            <Link
                className='w-[45%] h-[15%] rounded-full flex-center'
                style={{ backgroundColor: `${index == 0 ? '#11081f' : '#fff'}` }}
                onClick={() => handleDot(0)}
                href='/#home'
            >
                <div
                    className='w-[45%] h-[45%] rounded-full z-10'
                    style={{ backgroundColor: `${index === 0 && 'white'}` }}
                ></div>
            </Link>
            <Link
                className='w-[45%] h-[15%] rounded-full flex-center'
                onClick={() => handleDot(1)}
                href='/#about'
                style={{ backgroundColor: `${index == 0 ? '#11081f' : '#fff'}` }}
            >
                <div
                    className='w-[45%] h-[45%] rounded-full z-10'
                    style={{ backgroundColor: `${index == 1 && '#11081f'}` }}
                ></div>
            </Link>
        </div>
    )
}

export default Active
