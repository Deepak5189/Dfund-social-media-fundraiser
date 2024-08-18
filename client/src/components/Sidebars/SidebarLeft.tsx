import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const SidebarLeft = () => {
  
  const user={
    name:"John Doe",
    profile: 'https://cdn-icons-png.flaticon.com/512/10337/10337609.png',
    email: 'john.doe@example.com',
  };

  return (
    <div className="">
      <Link href='/dashboard/profile' className='pt-10 bg-[#6663A6] text-white flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2 mb-5'>
      <Image src={user.profile} alt='User' width={50} height={50}/>
        {user.name}
      </Link>
      <Link href='/dashboard/friends' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={`https://w7.pngwing.com/pngs/105/232/png-transparent-computer-icons-friendship-symbol-love-friends-miscellaneous-text-logo-thumbnail.png`} alt='User' width={30} height={30} className='rounded-full object-cover'/>
        Friends
      </Link>
      <Link href='/dashboard/your-campaigns' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={`https://cdn-icons-png.freepik.com/512/3122/3122573.png`} alt='User' width={30} height={30} className='rounded-full object-cover'/>
        Your Campaigns
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={`https://vectips.com/wp-content/uploads/2020/08/tutorial-preview-large-1.png`} alt='User' width={30} height={30} className='rounded-full object-cover'/>
        Messages
      </Link>
      {/* <Link href='/dashboard/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link> */}
      <Link href='/' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxCAYJ7l4QmWaq5FHuzZAQ5hldfsMQTQ5Dw&s`} alt='User' width={30} height={30} className='rounded-full object-contain'/>
        LogOut
      </Link>
    </div>
  )
}

export default SidebarLeft