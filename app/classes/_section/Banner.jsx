import React from 'react'
import { MdDoubleArrow } from 'react-icons/md'

const Banner = () => {
  return (
    <section className='w-full h-[70vh] bg-orange-300 '>
        <div className="container mx-auto h-full flex flex-col gap-4 justify-center items-center">
            <h1 className='text-3xl lg:text-7xl'>
                Our Classes
            </h1>
            <div className="flex justify-center items-center">
                <span>
                    Home
                </span>
                <MdDoubleArrow className='inline-block' />
                <span>
                    Classes
                </span>
            </div>
        </div>
    </section>
  )
}

export default Banner
