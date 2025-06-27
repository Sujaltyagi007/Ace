"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import image from "@/Assets/Home/Program3.jpg";
import badge from "@/Assets/Icon/star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const LKG = () => {
  const trainRef = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
      const split = new SplitText(".text-upword", { type: "words,chars" });

    gsap.from(trainRef.current, {
      left: "90%",
      ease: "power1.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "top top",
        scrub: 3,
       
      },
    });

    gsap.from(split.words, {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none none",
          markers: true,
        },
      });

  });
  return (
    <section ref={container} className=" relative w-full  lg:mb-24  ">
      <div
        ref={trainRef}
        className="absolute top-0 -left-[10%]  -translate-y-[150%]"
      >
        <Image src="/icons/train.webp" alt="train" width={300} height={100} className="w-40 lg:w-60" />
      </div>
      <div className="container mx-auto h-full p-4 flex flex-col-reverse lg:flex-row gap-8 justify-center items-start my-4 lg:mb-48">
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-4  ">
          <h1 className="text-upword text-3xl lg:text-5xl font-bold">
            Lower Kindergarten (LKG)
          </h1>
          <div className="flex flex-col">
            <span>
              <span className=" text-upword text-2xl lg:text-xl font-bold">Age:</span>
              {"  "}
              <span className="text-upword" > 3.5 to 4.5 years</span>
            </span>
            <span>
              <span className="text-upword text-2xl lg:text-xl font-bold">Duration:</span>
              {"  "}
              <span className="text-upword"> 1 year</span>
            </span>
          </div>

          <p className=" text-upword text-base lg:text-lg">
            LKG is where early literacy and numeracy concepts begin to take
            shape. Children learn through structured play and teacher-led
            activities that encourage curiosity, confidence, and independence.
          </p>

          <div className="mt-2">
            <span className="text-upword text-2xl lg:text-3xl font-bold">
              Key Features:
            </span>
            <ul className="flex flex-col gap-2 text-lg mt-4">
              <li className="text-upword">
                <MdKeyboardDoubleArrowRight className="mr-2 inline" />
                Introduction to letters, numbers, shapes, and colors
              </li>
              <li className="text-upword">
                <MdKeyboardDoubleArrowRight className="mr-2 inline" />
                Theme-based learning with stories, rhymes, and puzzles
              </li>
              <li className="text-upword">
                <MdKeyboardDoubleArrowRight className="mr-2 inline" />
                Group activities to promote sharing and cooperation
              </li>
              <li className="text-upword">
                <MdKeyboardDoubleArrowRight className="mr-2 inline" />
                Outdoor play for physical development
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full lg:pr-8 ">
          <div className="relative w-full aspect-video  rounded-lg ">
            <div className="absolute z-10 top-0 left-0 -translate-x-1/2 -translate-y-1/2">
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
      </div>
    </section>
  );
};

export default LKG;
