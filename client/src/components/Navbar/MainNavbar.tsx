"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'

const MainNavbar = () => {
  return (
    <nav className='flex mx-24 py-3 justify-between items-center'>
      <div className="flex items-end drop-shadow-lg p-0 m-0">
        <Image src='./logo.svg' width={50} height={50} alt='logo'/>
        {/* <span className='text-xl font-semibold'>DF</span><span>und</span> */}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 backdrop-blur-lg">
          <input type="text" className='bg-transparent border-b focus:outline-none px-1' placeholder='search for a campaign...'/>
          <button className=''><FaSearch/></button>
        </div>
        <ul className='flex items-center gap-5'>
          <li><Link href='/dashboard/create-campaign'>Create Campaign</Link></li>
          <li><Link href='/dashboard/your-campaigns'>Your campaigns</Link></li>
          <li><Link href='/dashboard/chat' className='relative'>Messages <span className="absolute -top-2 -right-2 text-[12px] bg-purple-950 rounded-full w-4 h-4 text-center text-white font-bold">0</span></Link></li>
        </ul>
        <button className='bg-purple-950 drop-shadow-lg text-white  rounded-full p-3' onClick={()=>{}}><FaUser/></button>
      </div>
    </nav>
  )
}

export default MainNavbar