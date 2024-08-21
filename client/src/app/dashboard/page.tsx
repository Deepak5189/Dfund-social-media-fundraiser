import HomeComponent from '@/components/HomeComponent'
import SidebarLeft from '@/components/Sidebars/SidebarLeft'
import SidebarRight from '@/components/Sidebars/SidebarRight'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="sm:grid grid-cols-12">
      <div className="w-full pl-2 col-span-2 border-r-2">
        <div className="overflow-scroll md:flex flex-col hidden">
         <SidebarLeft/>
        </div>
      </div>
      <div className="col-span-8 drop-shadow h-[100vh] overflow-scroll">
        <HomeComponent/>
      </div>
      <div className="w-full py-5 px-2 col-span-2 border-l-2">
        <div className="overflow-scroll scroll-p-2 md:flex flex-col hidden">
          <SidebarRight/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard