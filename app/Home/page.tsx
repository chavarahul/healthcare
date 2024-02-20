'use client'
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { TextGenerateEffect } from '../UIComponents/TextGenerateEffect';
import Navbar from '../Components/Navbar';
import { poppin } from '../constants';
import { notifyError } from '../Components/Notification';
import SysLoader from '../UIComponents/SysLoader';

const Page = () => {
  const words = "Unlock insights by entering your disease and age for";
  const [querysp, setQuerys] = useState({
    disease: '',
    age: '',
  });
  const [datas, setDatas] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState('');
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (e: any) => {
    setLoading(true)
    e.preventDefault();
    if (querysp.age === '' || querysp.disease === "" || lang === "") {
      notifyError("Fill details")
    }
    const query = {
      querysp,
      lang
    }
    console.log(querysp);
    const datap = await axios.post('/api/chronic', { q: query });
    console.log(datap);
    let res = datap.data.text.replace(/\*/g, '');
    res = res.replace(/lifestyle/g, '\nlifetime\n');
    setDatas(res);
    setLoading(false)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuerys((d) => ({ ...d, [name]: value }));
  };

  return (
    <div className='bg-[#fff] w-screen min-h-screen pb-5'>
      <Navbar />
      <div className='card mt-10'>
        <div className="w-full h-[20lvh] flex-colm ">
          <p className={`${poppin.className} flex items-center justify-center flex-col text-4xl`}>
            <TextGenerateEffect words={words} />
          </p>
          <p className='-mt-3'><TextGenerateEffect words='  disease analysis' /></p>
        </div>
        <form onSubmit={handleSubmit} className='w-[50%] m-auto h-[20%] relative'>
          <div className="LoginEmail -mt-5">
            <div className="-ml-20 w-[130%] h-[10vh] mt-10 z-50 relative rounded-lg flex items-center justify-between ">
            <div className="form__group field">
              <input placeholder="Name" className="form__field" type="input" />
              <label className="form__label" htmlFor="name">
                Disease
              </label>
            </div>
            <div className="form__group field">
              <input placeholder="Name" className="form__field" type="input" />
              <label className="form__label" htmlFor="name">
                Age
              </label>
            </div>
            <div className='relative  w-[30%] h-[50%]  z-10 -mt-4 landSele' onClick={() => { setOpen(!open) }}>
            <div className="form__group field">
              <input placeholder="Name" className="form__field" type="input" />
              <label className="form__label" htmlFor="name">
                Language
              </label>
            </div>
              <div className=" w-[100%] top-20 h-[25lvh] absolute " style={{ display: `${open ? 'block' : 'none'} ` }}>
                <div className={`bord w-full outline-none h-12 rounded-lg flex-center lanCol  my-3 cursor-pointer z-10`} onClick={() => { setLang("English") }}>
                  <p className={`${poppin.className}`}>English</p>
                </div>
                <div className='bord w-full outline-none h-12 rounded-lg flex-center lanCol my-3 cursor-pointer z-10' onClick={() => { setLang("Hindi") }}>
                  <p className={`${poppin.className}`}>Hindi</p>
                </div>
                <div className='bord w-full outline-none h-12 rounded-lg flex-center lanCol cursor-pointer z-10' onClick={() => { setLang("Bengali") }}>
                  <p className={`${poppin.className}`}>Bengali</p>
                </div>
              </div>
            </div>
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
      </div>
      {
        loading && <div className="flex-center">
          <SysLoader />
        </div>
      }
      <div className={`text-[#000] w-[75%]  m-auto leading-[3rem] p-5 card `}>

        <p className={`${poppin.className}`}>{datas}</p>
      </div>
    </div>
  );
};

export default Page;
