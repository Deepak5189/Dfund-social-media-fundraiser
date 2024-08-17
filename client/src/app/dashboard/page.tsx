import HomeComponent from '@/components/HomeComponent'
import SidebarLeft from '@/components/Sidebars/SidebarLeft'
import SidebarRight from '@/components/Sidebars/SidebarRight'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="w-full py-5 pl-2 col-span-2 border-r-2">
        <div className="overflow-scroll">
         <SidebarLeft/>
        </div>
      </div>
      <div className="col-span-8 drop-shadow h-[620px]">
        <HomeComponent/>
      </div>
      <div className="w-full py-5 px-2 col-span-2 border-l-2">
        <div className="overflow-scroll scroll-p-2">
          <SidebarRight/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard