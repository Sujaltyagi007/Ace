import Image from "next/image";
import image from "@/Assets/Home/Program2.jpg";
import badge from "@/Assets/Icon/badge.png";

import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Nursery = () => {
  return (
    <section className=" w-full lg:mb-24 ">
      <div className="container mx-auto h-full p-4 flex flex-col lg:flex-row gap-8 justify-center items-start my-4 lg:my-48">
        <div className="w-full lg:w-1/2 h-full lg:pr-8 ">
          <div className="relative w-full aspect-video  rounded-lg ">
            <div className="absolute z-10 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <Image
                src={badge}
                alt="Nursery"
                width={100}
                height={100}
                className="w-12 lg:w-24 "
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
          <h1 className="text-3xl lg:text-5xl font-bold">Nursery</h1>
          <div className="flex flex-col">
            <span>
              <span className="text-2xl lg:text-xl font-bold">Age:</span>{"  "}
              <span> 2.5 to 3.5 years</span>
            </span>
            <span>
              <span className="text-2xl lg:text-xl font-bold">Duration:</span>{"  "}
              <span> 1 year</span>
            </span>

            
          </div>
         
          <p className="text-base lg:text-lg">
            Our Nursery class offers a safe, welcoming space where toddlers
            learn to separate from parents, build trust, and engage with the
            world around them. Activities are designed to enhance sensory
            development, motor skills, and basic communication.
          </p>
          <div className="mt-4">
            <span className="text-2xl lg:text-3xl font-bold">
              Key Features:
            </span>
            <ul className="flex flex-col gap-2 text-lg mt-4">
              <li><MdKeyboardDoubleArrowRight className="mr-2 inline" /> Gentle introduction to routine</li>
              <li><MdKeyboardDoubleArrowRight className="mr-2 inline" /> Focus on socialization and emotional security</li>
              <li><MdKeyboardDoubleArrowRight className="mr-2 inline" /> Music, storytelling, and sensory play</li>
              <li><MdKeyboardDoubleArrowRight className="mr-2 inline" /> Fine motor skill development through creative activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nursery;
