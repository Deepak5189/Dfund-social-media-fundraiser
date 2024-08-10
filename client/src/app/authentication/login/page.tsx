"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'

const Login = () => {
  const router=useRouter();
  const [user, setUser]=useState<{email:string, password:string}>({
    email:'',
    password:'',
  });
  const [showPassword, setShowPassword]=useState<boolean>(false)

  const handleChange=(event:any)=>{
    event.preventDefault();
    setUser({...user, [event.target.name]: event.target.value})
    console.log(user)
  }

  const handleShowPassword=(event:any)=>{
    event.preventDefault();
    setShowPassword(!showPassword);
  }

  const handleLogin=(event:any)=>{
    event.preventDefault();
    console.log(user)
    // check for credentials...
    router.push('/dashboard');
  }

  return (
      <div className="p-5 shadow-lg bg-white rounded-lg bg-transparent flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Welcome Back!</h1>
        <div className="flex items-center justify-around border border-[#dadce] hover:bg-[#f5f5f5] transition-transform shadow-lg rounded-md px-2 py-1 cursor-pointer ">
          <FaGoogle/> <span>Login with Google</span>
        </div>
        <hr className=''/>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold">Login with credentials</h2>
          <form onSubmit={handleLogin} className='flex flex-col gap-5'>
            <input type="email" value={user.email} name='email' onChange={(e)=>handleChange(e)} placeholder='Enter Email...' className='bg-transparent border-b border-black outline-none'/>
            <span className='flex border-b border-black'>
            <input type={showPassword?"text":"password"} value={user.password} name='password' onChange={(e)=>handleChange(e)} placeholder='Enter Password...' className='bg-transparent outline-none'/>
            <button className="" onClick={handleShowPassword}>{showPassword?<FaEye/>:
            <FaEyeSlash/>}</button>
            </span>
            <span className='flex justify-between items-center'>
            <button className="shadow-lg w-fit px-3 py-1 bg-black rounded-lg text-white">Submit</button>
            <Link href='/authentication/reset-password' className="text-sm text-blue-600 hover:underline">Forget password</Link>
            </span>
          </form>
          <span className='text-sm text-center w-full'>New here?...<Link href='/authentication/register' className='text-blue-600 hover:underline'>Register</Link></span>
        </div>
      </div>
  )
}

export default Login