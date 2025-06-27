import React from 'react'

import Image from "next/image";
import image from "@/Assets/Home/Program4.jpg";
import badge from "@/Assets/Icon/badge.png";
import {  MdKeyboardDoubleArrowRight } from 'react-icons/md';

const UKG = () => {
  return (
    <section className=" relative w-full lg:mb-24 ">
       <div  className="absolute top-0 -left-10 -translate-y-1/2 z-10 rotate-45 ">
            <Image src="/icons/fan.webp" alt='fan' width={300} height={100}   />
        </div>
      <div className="container mx-auto h-full p-4 flex flex-col lg:flex-row gap-8 justify-center items-start my-4 lg:mb-48">
        <div className="w-full lg:w-1/2 h-full lg:pr-8 ">
          <div className="relative w-full  aspect-video  rounded-lg ">
            <div className="absolute z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <Image
                src={badge}
                alt="Nursery"
                width={100}
                height={100}
                className="w-12 lg:w-24  "
              />
            </div>
            <Image
              src={image}
              alt="Nursery"
              fill
              className=" object-cover object-top rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-4  ">
          <h1 className="text-3xl lg:text-5xl font-bold">Upper Kindergarten (UKG)</h1>
          <div className="flex flex-col">
            <span>
              <span className="text-2xl lg:text-xl font-bold">Age:</span>{"  "}
              <span>  4.5 to 5.5 years</span>
            </span>
            <span>
              <span className="text-2xl lg:text-xl font-bold">Duration:</span>{"  "}
              <span> 1 year</span>
            </span>

            
          </div>
          
          <p className="text-base lg:text-lg">
          In UKG, children deepen their foundational knowledge and gain readiness for Grade 1. Lessons encourage critical thinking, creativity, and responsibility, while keeping the joy of learning alive.
          </p>
          <div className="mt-2">
            <span className="text-2xl lg:text-3xl font-bold">
              Key Features:
            </span>
            <ul className='flex flex-col gap-2 text-lg mt-4'>
              <li><MdKeyboardDoubleArrowRight className='mr-2 inline' />Reading readiness and phonics</li>
              <li><MdKeyboardDoubleArrowRight className='mr-2 inline' />Basic arithmetic and problem-solving</li>
              <li><MdKeyboardDoubleArrowRight className='mr-2 inline' />Role play, art, and hands-on science exploration</li>
              <li><MdKeyboardDoubleArrowRight className='mr-2 inline' />Focus on listening, speaking, and writing skills</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UKG
