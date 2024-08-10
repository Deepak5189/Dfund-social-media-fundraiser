"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const router=useRouter()
  const handleLogin=()=>{
    router.push('authentication/login')
  }
  return (
    <nav className='flex mx-24 py-5 justify-between items-center'>
      <div className="flex items-end">
        <Image src='./logo.svg' alt='DFund' width={50} height={50} className='drop-shadow-lg'/>
        {/* <span className='text-xl font-semibold'>DF</span><span>und</span> */}
      </div>
      <div className="flex items-center gap-5">
        <ul className='flex items-center gap-5'>
          <li><Link href='#home'>Home</Link></li>
          <li><Link href='#about'>About us</Link></li>
          <li><Link href='#contact'>Contact us</Link></li>
        </ul>
        <button className='bg-black text-white px-3 py-1 rounded-md' onClick={handleLogin}>Login</button>
      </div>
    </nav>
  )
}

export default Navbar