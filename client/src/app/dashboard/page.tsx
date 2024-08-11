import HomeComponent from '@/components/HomeComponent'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="w-full py-5 px-2 col-span-2 border-r-2">
        <div className="fixed">Hello</div>
      </div>
      <div className="col-span-8 drop-shadow">
        <HomeComponent/>
      </div>
      <div className="w-full py-5 px-2 col-span-2 border-l-2">Sidebar Right</div>
    </div>
  )
}

export default Dashboard