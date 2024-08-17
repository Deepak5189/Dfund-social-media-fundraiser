"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaHome, FaPlusCircle, FaSearch, FaUser } from 'react-icons/fa'
import { FaBullhorn, FaCirclePlus, FaMessage, FaMicrophone, FaPlus, FaUserGroup, FaWallet } from 'react-icons/fa6'

const MainNavbar = () => {
  return (
    <nav className='flex mx-24 py-3 items-center'>
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
      <div className="flex-1 flex ml-32 gap-20 text-3xl text-slate-500">
        <Link href='/dashboard' className='active:text-[#6663A6]'><FaHome/></Link>
        <Link href='/dashboard'><FaUserGroup/></Link>
        <Link href='/dashboard'><FaCirclePlus/></Link>
        <Link href='/dashboard'><FaBullhorn/></Link>
        <Link href='/dashboard'><FaMessage/></Link>
      </div>
      <div className="flex items-center gap-10">
        <ul className='flex items-center gap-10'>
          {/* <li><Link href='/dashboard/create-campaign'>Create Campaign</Link></li> */}
          {/* <li><Link href='/dashboard/your-campaigns'>Your campaigns</Link></li> */}
          <li><Link href='/dashboard/wallet' className='relative text-3xl flex flex-col gap-0 items-center'><FaWallet/> <span className=" text-[12px] text-center font-bold p-0 leading-[12px]">Wallet</span></Link></li>
        </ul>
        <button className='bg-purple-950 drop-shadow-lg text-white text-2xl  rounded-full p-3' onClick={()=>{}}><FaUser/></button>
      </div>
    </nav>
  )
}

export default MainNavbar