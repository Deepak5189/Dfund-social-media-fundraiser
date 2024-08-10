"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {

  const router=useRouter();

  const [otpSent, setOtpSent]=useState<boolean>(false);
  const [isVerified, setIsVerified]=useState<boolean>(false);
  const [newPassword, setNewPassword]=useState<{password:string, confirmPassword:string}>({
    password:'',
    confirmPassword:'',
  });
  const [showPassword, setShowPassword]=useState({
    password:false,
    confirmPassword:false,
  })


  const handleOtpSent=()=>{
    // 
    setOtpSent(!otpSent);
  };

  const handleVerified=()=>{
    // 
    setIsVerified(true);
  };

  const handleChange=(event:any)=>{
    event.preventDefault()
    setNewPassword({
      ...newPassword,
      [event?.target.name]:event?.target.value,
    })
  };

  const handleShowPassword=(event:any)=>{
    event.preventDefault();
    setShowPassword({
      ...showPassword,
      password: !showPassword.password
    });
  };

  const handleShowConfirmPassword=(event:any)=>{
    event.preventDefault();
    setShowPassword({
      ...showPassword,
      confirmPassword: !showPassword.confirmPassword
    });
  };

  const handleUpdatePassword=(event:any)=>{
    event.preventDefault();
    // 
    alert("password changed successfully!")
    router.push('/authentication/login');
  }

  // 

  return (
      <div className="shadow-lg p-5 bg-white rounded-lg flex flex-col items-center justify-center gap-5">
        <h3 className="text-xl font-semibold">Forget password?</h3>
        {!isVerified && 
        <div className='flex flex-col gap-5'>
          <span className='border border-black rounded-md pl-1 flex justify-between'>
          <input type="email" placeholder='Enter your email...' className='bg-transparent focus:outline-none'/>
          <button className='bg-black text-white rounded-md py-1 px-1' disabled={otpSent} onClick={handleOtpSent}>{otpSent?"OTP Sent":"send OTP"}</button>
        </span>
        {otpSent && <span className='border border-black rounded-md pl-1 flex justify-between'>
          <input type="text" placeholder='Enter OTP...' className='bg-transparent focus:outline-none'/>
          <button className='bg-black text-white rounded-md py-1 px-1' onClick={handleVerified}>Verify OTP</button>
        </span>}  
        </div>}
        {isVerified &&<div>
          <form className='flex flex-col gap-3' onSubmit={handleUpdatePassword}>
          <span className='flex border-b border-black items-center justify-between'>
            <input type={showPassword.password?"text":"password"} value={newPassword.password} name='password' onChange={(e)=>handleChange(e)} placeholder='Enter new password...' className='bg-transparent outline-none'/>
            <button className="" onClick={handleShowPassword}>{showPassword.password?<FaEye/>:
            <FaEyeSlash/>}</button>
            </span>
            <span className='flex border-b border-black items-center justify-between'>
            <input type={showPassword.confirmPassword?"text":"password"} value={newPassword.confirmPassword} name='confirmPassword' onChange={(e)=>handleChange(e)} placeholder='Confirm new password...' className='bg-transparent outline-none'/>
            <button className="" onClick={handleShowConfirmPassword}>{showPassword.confirmPassword?<FaEye/>:
            <FaEyeSlash/>}</button>
            </span>
            {newPassword.password!=newPassword.confirmPassword?<span className='text-red-600 text-[10px]'>passwords don&apos;t match.</span>:''}
            <button className='bg-black text-white w-fit m-auto px-2 py-1 rounded-md shadow-lg'>submit</button>
          </form>  
        </div>}
      </div>
  )
}

export default ResetPassword