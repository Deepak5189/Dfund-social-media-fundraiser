import Image from 'next/image'
import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'
import { FaComment, FaHeart, FaShare } from 'react-icons/fa6'

const CampaignCard = () => {
  return (
    <div className="w-[500px] sm:w-[50vw]">
      <div className="mx-auto shadow rounded p-5 shadow-gray-700 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={`./logo.svg`} width={40} height={40} className='rounded-full object-contain' alt='person1'/>
            <div className="flex flex-col items-start">
              <h1 className="text-semibold">John Doe</h1>
              <p className="text-xs">Tue, 12:30 pm</p>
            </div>
          </div>
          <button >
            <FaEllipsisV/>
          </button>
        </div>
        <div className="">
          <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quisquam quis enim, repellat molestiae eius laboriosam mollitia sequi! Reprehenderit ea eum iure quo dolore quibusdam totam fugit pariatur vero in?</div>
          <div className="w-full aspect-[16/9] relative">
            <Image src={`https://img.freepik.com/free-vector/gradient-album-cover-template_23-2150597431.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid`} alt='cover image' className='object-fill' layout='responsive' width={16} height={9}/>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex-1 flex items-center gap-3">
            <FaHeart fill='#ffffff' className='text-black font-bold drop-shadow-lg stroke-black stroke text-xl'/>
            <FaComment className='text-black font-bold drop-shadow-lg stroke-black stroke text-xl'/>
            <FaShare className='text-black font-bold drop-shadow-lg stroke-black stroke text-xl'/>
          </div>
          <div>
            <button className='bg-[#6663A6] text-white px-2 py-1 rounded shadow'>Fund Me $1</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampaignCard