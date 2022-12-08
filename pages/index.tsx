import { SocialIcons } from '@/components/app'
import { Hero } from '@/sections'
import { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className='px-[25px] md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[200px]'>
      {/* Fixed while scrolling */}
      <SocialIcons />

      {/* Stick to top */}


      {/* Scrollable */}
      <Hero />
    </div>
  )
}

export default Home