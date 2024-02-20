'use client'
import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { LoginData } from '../constants/Types/type'
import { poppin } from '../constants'
import Button from '../Components/Button'
import { SignInResponse, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import doctor from '@/public/doctor.png'
import { notify, notifyError } from '../Components/Notification'
const Login = () => {
  const router  =useRouter()
  const [showPassword, setshowPassword] = useState<Boolean>(false)
  const [loginData, setLoginData] = useState<LoginData>({
   username: '',
    password: ''  
  })
  const shPassword = (): void => {
    setshowPassword(!showPassword)
    console.log(showPassword)
  }
  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleLoginChange called:', e.target.name, e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setLoginData((d) => ({ ...d, [name]: value }));
  }
  const handleLogin = async(e:ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault()
    if(loginData.password===''||loginData.username==='')
       return;
    const response : SignInResponse | undefined= await signIn('credentials', {
      ...loginData,
      redirect: false,
    })
    console.log(response)

    if (response?.status === 200) {
      // If login is successful, redirect to RoleDoctor component
      notify('Login Successful')
      router.push('/role');
    }else{
      notifyError('Login Failed')
    }
  };

  return (

    <div className='LoginContainer bg-[#11081f]'>
      <div className="Wrapper">
        <div className="LoginBox ">
          <div className="ShowSide bg-[#2b2d3548] ">
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
            {/* <div className="Image">
              <Image
                src={doctor}
                alt="Login Image"
              />
            </div> */}
          </div>
          <div className="Login overflow-hidden bg-white">
            <div className="Loginwrapper mr-6 rounded-xl overflow-hidden">
              <div className="TitleLogin mt-5">
                <div className="Main Header ">
                  <h4 className='textColorBg text-3xl'>Get Started Now</h4>
                </div>
                <div className="Sub Header">
                  <span className='text-black text-lg'>Enter your credentials to access your account</span>
                </div>
              </div>
              <div className="LoginCredentials ">
                <form method='post' onSubmit={handleLogin}>
                  <div className="LoginEmail Tab">
                    <label className='text-black  mb-3' htmlFor='username'>Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder='Enter your username'
                      onChange={handleLoginChange}
                      value={loginData.username.toString()}
                    />
                  </div>
                  <div className="LoginPassword Tab mt-5">
                    <label className='text-black mb-3' htmlFor='password'>Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder='Enter your password'
                      onChange={handleLoginChange}
                      value={loginData.password.toString()}
                      autoComplete='current-password'
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
                    <p className='text-black'>Dont have an account?  <span> <Link href="/register" className='textColorBg'> Register</Link></span></p>
                  </div>
                  <div className="ml-72 mt-7">
                    <Button BtnName="Submit" type="submit" />
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

export default Login
