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
    <div className="mt-5">
      <Link href='/dashboard/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2 mb-5'>
      <Image src={user.profile} alt='User' width={50} height={50}/>
        {user.name}
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link>
      <Link href='/dashborad/profile' className='flex items-center gap-5 text-lg font-semibold hover:bg-slate-300 py-2 rounded pl-2'>
      <Image src={user.profile} alt='User' width={30} height={30}/>
        {user.name}
      </Link>
    </div>
  )
}

export default SidebarLeft