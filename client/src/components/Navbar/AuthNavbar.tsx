"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AuthNavbar = () => {
  const router=useRouter();
  return (
    <nav className='flex mx-24 py-5 justify-between items-center'>
      <div className="flex items-end">
        <Link href='/'>
        <span className='text-xl font-semibold'>DF</span><span>und</span></Link>
      </div>
      <div className="flex items-center gap-5">
        <button onClick={()=>{router.push('/authentication/register')}}>Register</button>
        <button className='bg-black text-white px-3 py-1 rounded-md' onClick={()=>{router.push('/authentication/login')}}>Login</button>
      </div>
    </nav>
  )
}

export default AuthNavbar