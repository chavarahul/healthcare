'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { poppin } from '../constants';
import Navbar from '../Components/Navbar2';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { notify } from '../Components/Notification';
import { TextGenerateEffect } from '../UIComponents/TextGenerateEffect';
const Page = () => {
  const { data } = useSession()
  const [patient, setpatient] = useState<any>(null)
  const router = useRouter();
  const [flask, setFlask] = useState('')

  const handleFile = (e: any) => {
    const files = e.target.files[0];
    console.log(files)
    setpatient(files)
  }
  const handle = async () => {
    const formData:FormData = new FormData()
    formData.append('file', patient)
    const response = await axios.post('/api/extract', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    console.log(response);
  }

  return (
    <div className="bg-[#CCCCCC] w-screen min-h-screen">
      <Navbar />
      <div className="w-full h-[25lvh] flex-colm mt-20">
        <p>
          {" "}
          <TextGenerateEffect words="Empower your diagnosis with patient insights. Upload files for" />
        </p>
        <p className="-mt-2">
          <TextGenerateEffect words="enhanced health assessment" />
        </p>
      </div>
      <form
        action=""
        method="post"
        onSubmit={handle}
        className="w-[50%] m-auto h-[20%] relative"
      >
        <div className="relative w-full h-[15lvh] flex-center mt-10 ">
          <div className="input-div">
            <input
              className="input z-10"
              name="file"
              type="file"
              onChange={handleFile}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth={2}
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <polyline points="16 16 12 12 8 16" />
              <line y2={21} x2={12} y1={12} x1={12} />
              <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
              <polyline points="16 16 12 12 8 16" />
            </svg>
          </div>
        </div>
        <div className="relative  w-[100%] h-[130px] flex-center ">
          <button className='outline-none border-none flex flex-col w-full max-w-[160px] h-[50px]  shadow-md overflow-hidden unknoen'
            type="submit"
          >
            <div className='transform translate-y-0 width-full'>
              <span className='flex-center'>
                <p className={`${poppin.className} font-normal`}>Submit</p>
              </span>
            </div>
            <div>
              <span className='flex-center'>
                <p className={`${poppin.className} text-[#662264]`}></p>
              </span>
            </div>
          </button>
        </div>
      </form>
      <p>
        {flask}
      </p>
    </div>
  );
};

export default Page;

