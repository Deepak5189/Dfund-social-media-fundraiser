"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Navbar = () => {

  const router=useRouter()

  const [isMenuOpen, setIsMenuOpen]=useState(false);


  const handleLogin=()=>{
    router.push('authentication/login')
  };

  const handleMenu=(toggle:boolean)=>{
    setIsMenuOpen(toggle);
  }


  return (
    <nav className='flex  p-5 justify-between items-center'>
      <div className="flex items-end">
        <Image src='./logo.svg' alt='DFund' width={50} height={50} className='drop-shadow-lg'/>
        {/* <span className='text-xl font-semibold'>DF</span><span>und</span> */}
      </div>
      <div className="hidden items-center gap-5 sm:flex">
        <ul className='flex items-center gap-5'>
          <li><Link href='#home'>Home</Link></li>
          <li><Link href='#about'>About us</Link></li>
          <li><Link href='#contact'>Contact us</Link></li>
        </ul>
        <button className='bg-black text-white px-3 py-1 rounded-md' onClick={handleLogin}>Login</button>
      </div>
      <div className="sm:hidden">
        <button className='flex flex-col bg-white h-8 p-1 rounded-lg w-8 justify-around' onClick={()=>handleMenu(true)}>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
        </button>
        <div className={`${!isMenuOpen&& 'hidden'} absolute top-0 -right-[500px] w-[50%] z-[10] bg-[#6663A6] ${isMenuOpen && 'absolute right-0 transition-transform ease-in-out -translate-x-[500px]'}`}>
          <div className="absolute top-6 right-6 text-3xl font-semibold text-white cursor-pointer" onClick={()=>handleMenu(false)}>X</div>
          <ul className='flex flex-col text-white py-10 items-center gap-5'>
            <li><Link href='#home'>Home</Link></li>
            <li><Link href='#about'>About us</Link></li>
            <li><Link href='#contact'>Contact us</Link></li>
            <button className='bg-white text-black px-3 py-1 rounded-md' onClick={handleLogin}>Login</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar