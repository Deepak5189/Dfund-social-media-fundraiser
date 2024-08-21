import React from 'react'
import CampaignCard from '../Cards/CampaignCard'

const ForYouFeeds = () => {
  return (
    <div className='overflow-scroll p-10'>
      <div className="mx-[2vw] flex flex-col gap-10">
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
        <CampaignCard/>
      </div>
    </div>
  )
}

export default ForYouFeeds