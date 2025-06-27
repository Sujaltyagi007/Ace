"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Starfish from "@/Assets/Home/starfish.png";
import Activity1 from "@/Assets/Home/republic.jpg";
import Activity2 from "@/Assets/Home/Activity2.jpg";
import Activity3 from "@/Assets/Home/Activity3.jpg";
import Activity4 from "@/Assets/Home/Activity4.jpg";
import Bg1 from "@/Assets/Home/BackGround1.png";
import Bg2 from "@/Assets/Home/Background2.png";
import Snale from "@/Assets/Home/Snale.png";
import ActivityCard from "@/components/Card";
import Education from '@/Assets/Svg/Education.svg'
import { Bubblegum_Sans } from "next/font/google";

const Bubble = Bubblegum_Sans({
  subsets:['latin'],
  weight:['400']
})
export default function Activity() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);
//   const x = useTransform(scrollYProgress, [0, 1], [700, 0]);
  const Activities = [
    {
      bgImage: Activity1,
      title: "Celebrating Republic Day",
      color: "#ffdbd2",
      Img: Bg1,
      fontColor: '#e95d3a'
    },
    {
      bgImage: Activity2,
      title: "Celebrating janmashtami Day",
      color: "#dff8ff",
      style: "lg:mt-16 mt-0",
      Img: Bg2,
      fontColor: '#167287'
    },
    {
      bgImage: Activity3,
      title: "Celebrating Gandhi Jayanti",
      color: "#ffefdf",
      style: "lg:mt-16 mt-0",
      Img: Bg1,
      fontColor: '#f68f29'
    },
    {
      bgImage: Activity4,
      title: "Celebrating Dussehra Day",
      color: "#e6f9e5",
      Img: Bg2,
      fontColor: '#5e9f5a'
    },
  ];
  return (
    <section ref={ref} className="relative overflow-hidden py-4 md:py-10 ">
      <motion.div
        style={{ x }}
        className="absolute z-10 -top-0 2xl:-left-40 2xl:top-48 w-full h-full "
      >
        <Image
          className="w-20 h-20 lg:w-48 lg:h-48 opacity-70"
          src={Starfish}
          alt="Starfish"
          width={200}
          height={200}
        />
      </motion.div>
      <div className="title md:py-8 md:pt-8 pt-8 px-4">
        <h3 className=" text-4xl lg:text-5xl font-extrabold text-center">
          <p className={`${Bubble.className} text-[14px] flex flex-col justify-center items-center py-2 text-[#eb1551] text-center`}>
            <span>
              <Image src={Education} width={60} height={60} alt="Eduaction" className="" />
            </span>
            Fun & Learning Adventures</p>
          Our Activities
        </h3>
        <div className="container mx-auto grid my-20 grid-cols-2 lg:grid-cols-4">
          {Activities.map((item, index) => (
            <ActivityCard key={index} item={item} />
          ))}
        </div>
        <motion.div className=" w-full flex justify-end translate-x-8 -translate-y-16  md:-translate-y-10 ">
          <Image
            src={Snale.src}
            width={500}
            height={100}
            alt="apna chhota school"
            className=" w-56 md:w-[480px]  "
          />
        </motion.div>
      </div>
    </section>
  );
}
