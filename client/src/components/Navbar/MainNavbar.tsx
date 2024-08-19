"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'
import { FaBullhorn, FaCirclePlus, FaMessage, FaUserGroup, FaWallet } from 'react-icons/fa6'

const MainNavbar = () => {

  const [isMenuOpen, setIsMenuOpen]=useState(false);

  const handleMenu=(toggle:boolean)=>{
    setIsMenuOpen(toggle);
  };


  return (
    <nav className='flex sm:mx-24 mx-[4vw] py-3 items-center justify-between'>
      <div className="flex items-center gap-5">
        <Link href='/dashboard' className="flex items-end drop-shadow-lg p-0 m-0">
          <Image src='/logo.svg' width={50} height={50} alt='logo'/>
          {/* <span className='text-xl font-semibold'>DF</span><span>und</span> */}
        </Link>
        <div className="flex items-center gap-3 backdrop-blur-lg bg-slate-200 px-2 py-2 rounded-full">
          <button className=''><FaSearch/></button>
          <input type="text" className='bg-transparent border-b focus:outline-none px-1' placeholder='search for a campaign...'/>
        </div>
      </div>
      <div className="flex-1 hidden sm:flex ml-32 gap-20 text-3xl text-slate-500">
        <Link href='/dashboard' className='active:text-[#6663A6]'><FaHome/></Link>
        <Link href='/dashboard'><FaUserGroup/></Link>
        <Link href='/dashboard'><FaCirclePlus/></Link>
        <Link href='/dashboard'><FaBullhorn/></Link>
        <Link href='/dashboard'><FaMessage/></Link>
      </div>
      <div className="sm:flex hidden items-center gap-10">
        <ul className='flex items-center gap-10'>
          {/* <li><Link href='/dashboard/create-campaign'>Create Campaign</Link></li> */}
          {/* <li><Link href='/dashboard/your-campaigns'>Your campaigns</Link></li> */}
          <li><Link href='/dashboard/wallet' className='relative text-3xl flex flex-col gap-0 items-center'><FaWallet/> <span className=" text-[12px] text-center font-bold p-0 leading-[12px]">Wallet</span></Link></li>
        </ul>
        <button className='bg-purple-950 drop-shadow-lg text-white text-2xl  rounded-full p-3' onClick={()=>{}}><FaUser/></button>
      </div>
      <div className="sm:hidden">
        <button className='flex flex-col bg-white h-8 p-1 rounded-lg w-8 justify-around' onClick={()=>handleMenu(true)}>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
          <span className='px-3 py-[1px] bg-[#6663A6]'></span>
        </button>
        <div className={`${!isMenuOpen&& 'hidden'} absolute top-0 -right-[500px] w-[50%] z-[10] bg-[#6663A6] ${isMenuOpen && 'absolute right-0'}`}>
          <div className="absolute top-6 right-6 text-3xl font-semibold text-white cursor-pointer" onClick={()=>handleMenu(false)}>X</div>
          <ul className='flex flex-col text-white text-[3vw] mt-10 py-10 items-center gap-2'>
            <Link href='/dashboard' className='active:text-[#6663A6] w-full px-5 active:bg-slate-300 py-1 rounded flex items-center gap-3'><FaHome/> Home</Link>
            <Link href='/dashboard' className='w-full px-5 active:bg-slate-300 py-1 rounded flex items-center gap-3'><FaUserGroup/>Friends</Link>
            <Link href='/dashboard' className='w-full px-5 active:bg-slate-300 py-1 rounded flex items-center gap-3'><FaCirclePlus/> Create Post</Link>
            <Link href='/dashboard' className='w-full px-5 active:bg-slate-300 py-1 rounded flex items-center gap-3'><FaBullhorn/> Notifications</Link>
            <Link href='/dashboard' className='w-full px-5 active:bg-slate-300 py-1 rounded flex items-center gap-3'><FaMessage/> Chat</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar