import React from 'react'

import { PiPlanetDuotone, PiPottedPlantDuotone } from 'react-icons/pi'

const Overview = () => {

  

  return (
    <section className='w-full '>
        <div className="container mx-auto p-4 flex flex-col text-center  my-8 lg:my-32 ">
            <span><PiPottedPlantDuotone className='inline-block text-5xl text-black/40' /></span>
            <span className='font-bold text-lg text-orange-500'>Our Classes</span>
         <h1 className='text-3xl lg:text-5xl font-semibold mt-2' >Where Little Learners Take Big First Steps</h1>
          <p className='text-sm lg:text-base text-gray-500 max-w-[600px] mx-auto mt-4'>
          At ACS, our early years program is designed to create a strong foundation for lifelong learning. Each class is tailored to meet the developmental needs of young children through play, exploration, and guided discovery.
          </p>
        </div>
    </section>
  )
}

export default Overview
