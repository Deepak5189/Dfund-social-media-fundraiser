"use client"
import React, { useState } from 'react'
import ForYouFeeds from './Feeds/ForYouFeeds';
import ExploreFeeds from './Feeds/ExploreFeeds';

const HomeComponent = () => {

  const [feed, setFeed]=useState('for-you');

  const handleFeed=(changeFeed)=>{
    setFeed(changeFeed);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-around items-center w-full py-5 shadow-lg">
        <div className={`mx-auto cursor-pointer font-bold`} style={{color: feed=='for-you'?'#6663A6':''}}><button onClick={()=>{handleFeed('for-you')}}>For You</button></div>
        <div className="mx-auto cursor-pointer font-bold"><button onClick={()=>{handleFeed('explore')}} style={{color: feed=='explore'?'#6663A6':''}}>Explore</button></div>
      </div>
      <div className="mx-auto">
        {feed=='for-you' && <ForYouFeeds/>}
        {feed=='explore' && <ExploreFeeds/>}
      </div>
    </div>
  )
}

export default HomeComponent