"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa'

const Register = () => {

  const router=useRouter();

  const [newUser, setNewUser]=useState<{email:string, username:string, password:string, confirmPassword:string}>({
    email:'',
    username:'',
    password:'',
    confirmPassword:'',
  });
  const [showPassword, setShowPassword]=useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword]=useState<boolean>(false);

  const handleRegister=(event:any)=>{
    event.preventDefault();
    console.log(newUser);
    alert(`successfully created a new user with username: ${newUser.username}`);
    router.push('/authentication/login');
  };

  const handleChange=(event:any)=>{
    event.preventDefault();
    setNewUser({
      ...newUser,
      [event.target.name]:event.target.value,
    });
  };

  const handleShowPassword=(event:any)=>{
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  
  const handleShowConfirmPassword=(event:any)=>{
    event.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };


  return (
      <div className="p-5 shadow-lg bg-white rounded-lg bg-transparent flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Welcome To DFund!</h1>
        <div className="flex items-center justify-around border border-[#dadce] hover:bg-[#f5f5f5] transition-transform shadow-lg rounded-md px-2 py-1 cursor-pointer ">
          <FaGoogle/> <span>Get started with Google</span>
        </div>
        <hr className=''/>
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-semibold text-center">Register using credentials</h2>
          <form onSubmit={handleRegister} className='flex flex-col gap-5'>
            <input type="email" value={newUser.email} name='email' onChange={(e)=>handleChange(e)} placeholder='Enter your email...' className='bg-transparent border-b border-black outline-none'/>
            <input type="text" value={newUser.username} name='username' onChange={(e)=>handleChange(e)} placeholder='Enter a username...' className='bg-transparent border-b border-black outline-none'/>
            <span className='flex border-b border-black items-center justify-between'>
            <input type={showPassword?"text":"password"} value={newUser.password} name='password' onChange={(e)=>handleChange(e)} placeholder='Enter Password...' className='bg-transparent outline-none'/>
            <button className="" onClick={handleShowPassword}>{showPassword?<FaEye/>:
            <FaEyeSlash/>}</button>
            </span>
            <span className='flex border-b border-black items-center justify-between'>
            <input type={showConfirmPassword?"text":"password"} value={newUser.confirmPassword} name='confirmPassword' onChange={(e)=>handleChange(e)} placeholder='Enter Password...' className='bg-transparent outline-none'/>
            <button className="" onClick={handleShowConfirmPassword}>{showConfirmPassword?<FaEye/>:
            <FaEyeSlash/>}</button>
            </span>
            {newUser.password!=newUser.confirmPassword?<span className='text-red-600 text-[10px]'>passwords don&apos;t match.</span>:''}
            <span className='flex justify-between items-center'>
            <button className="shadow-lg w-fit px-3 py-1 bg-black rounded-lg text-white">Submit</button>
            <span className='text-sm text-center w-full'>Already registered?...<Link href='/authentication/login' className='text-blue-600 hover:underline'>Login</Link></span>
            </span>
          </form>
        </div>
      </div>
  )
}

export default Register