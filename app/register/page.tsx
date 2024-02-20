'use client'
import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { LoginData } from '../constants/Types/type'
import Link from 'next/link'
import Button from '../Components/Button'
import { poppin } from '../constants'


const page = () => {
    const [showPassword, setshowPassword] = useState<Boolean>(false)
    const [data, setData] = useState<LoginData>({
        username: '',
        password: '',
        phone:'',
    })
    const shPassword = () => {
        setshowPassword(!showPassword)
        console.log(showPassword)
    }
    const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((d) => ({ ...d, [name]: value }));
    }
    
    const handleSubmit = () =>{
        console.log(data)
    axios.post('/api/register',data).then((res)=>{
       console.log("yess")
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        console.log("fff")
    })
    }

    return (
        <div className='LoginContainer bg-[#11081f]'>
            <div className="Wrapper">
                <div className="LoginBox">
                    <div className="ShowSide bg-[#11081f]">
                        <div className="MainHeader">
                            <h1 className={`text-[26px]  w-full flex-center font-cursive  ${poppin.className} absolute left-0`}>
                                <span className='pt-1 h-10   font-semibold relative text-white'>
                                    <span className='text-8xl absolute left-[-20px] top-[-24px] textColorBg fontless'>C</span>areSync
                                </span>
                            </h1>
                        </div>
                        <div className="Sub Header text-white">
                        <span className='text-xl'>Empowering your health journey, one step at a time..</span>
                        </div>
                        <div className="Image">
                            {/* <Image
                                src=''
                                alt="Login Image"
                                height={300}
                                width={450}
                                priority={true}
                            /> */}
                        </div>
                    </div>
                    <div className="Login relative bg-[#fff]">
                        <div className="Loginwrapper mr-6 rounded-xl ">
                            <div className="TitleLogin">
                                <div className="Main Header ">
                                    <h4 className='textColorBg'>Register Form</h4>
                                </div>
                                <div className="Sub Header">
                                    <span className={`${poppin.className}`}>Enter your credentials to access your account</span>
                                </div>
                            </div>
                            <div className="LoginCredentials Register">
                                <form action="" method='post' autoComplete='on' onSubmit={handleSubmit}>
                                    <div className="LoginEmail Tab">
                                        <label className='mb-3'>Username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder='Enter your Username'
                                            value={data.username.toString()}
                                            onChange={handleRegisterChange}
                                            autoComplete='username'
                                            maxLength={12}
                                            // className='mb-10'
                                        />
                                    </div>
                                    <div className="LoginPassword Tab ">
                                        <label className=' mb-3 mt-3'>Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder='Enter your password'
                                            autoComplete="current-password"
                                            value={data.password.toString()}
                                            onChange={handleRegisterChange}
                                            maxLength={10}
                                            autoComplete="current-password"
                                        />
                                    </div>
                                    <div className="LoginPassword Tab ">
                                        <label className=' mb-3 mt-3'>Phone Number</label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            placeholder='Enter your phonenumber'
                                            autoComplete="tel"
                                            value={data.phone}
                                            onChange={handleRegisterChange}
                                            maxLength={10}
                                        />
                                    </div>
                                    <div className="shPassword mt-5 mb-2">
                                        <div className="AdjshPassword">
                                            <div className="Tick">
                                                <input
                                                    type="checkbox" onClick={shPassword}
                                                    style={{ backgroundColor: showPassword ? "#11081f" : "#fff" }}
                                                />
                                            </div>
                                            <label className='text-black -ml-10'>show password</label>
                                        </div>
                                    </div>
                                    <div className="Alaccount m-2">
                                        <p className='text-black'>Do you have an account? <span> <Link href="/login" className='textColorBg'> Login</Link></span></p>
                                    </div>
                                    <div className=" ml-72 mt-4">
                                        <Button BtnName="Submit" type='submit' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default page
