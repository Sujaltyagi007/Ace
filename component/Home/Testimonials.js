"use client";
import { useState } from "react";
import Image from "next/image";
import StrawBerry from "@/Assets/Svg/Strawberry.svg";
import BackGround from "@/Assets/Home/BackGround-Image.png";
import { Bubblegum_Sans } from "next/font/google";
import Img1 from "@/Assets/Home/Img.jpeg";
import Img2 from "@/Assets/Home/Img2.jpeg";
import Img3 from "@/Assets/Home/Img3.jpeg";
import Img4 from "@/Assets/Home/Img4.jpeg";
import Img5 from "@/Assets/Home/Img5.jpeg";
import { FaStar } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";

import Insect from "@/components/Insect";




const bubble = Bubblegum_Sans({
    subsets: ["latin"],
    weight: ["400"],
});
export default function Testimonials() {
    const Reviews = [
        {
            parent_name: "Ramesh Kumar",
            review:
                "Apna Chhota School has been a wonderful experience for my child. The teachers are attentive and ensure that each child gets proper care and attention. The learning environment is playful yet educational, which helps kids enjoy while learning. I’ve noticed a big improvement in my son’s communication and social skills. ",
            job: "Business Man",
            Img: Img1,
        },
        {
            parent_name: "Sunita Sharma",
            review:
                "I am extremely happy with Apna Chhota School. The school maintains a great balance between academics and fun activities. My daughter looks forward to going to school every day. The staff is very warm and approachable, which makes it easier for parents to discuss any concerns. The school organizes regular events and keeps us informed about our child's progress. I highly recommend it to other parents.",
            job: "Shop Owner",
            Img: Img2,
        },
        {
            parent_name: "Anil Verma",
            review:
                "Apna Chhota School has exceeded our expectations in every way. The curriculum is well-designed and focuses on the overall development of children. My son has shown noticeable growth in his personality and learning skills. The teachers are passionate and put in a lot of effort to make learning enjoyable. The classroom atmosphere is cheerful, and the facilities are clean and child-friendly.",
            job: "Engineer",
            Img: Img3,
        },
        {
            parent_name: "Priya Joshi",
            review:
                "We erolled our child in Apna Chhota School six months ago and the experience has been amazing. The teachers are very dedicated and know how to handle young children with love and patience. I’ve seen my daughter become more curious and interactive. The school ensures that each child feels valued. The hygiene and safety standards are impressive, and communication with parents is regular and transparent.",
            job: "Doctor",
            Img: Img4,
        },
        {
            parent_name: "Rajeev Nair",
            review:
                "Choosing Apna Chhota School was the best decision for our child’s early education. The school fosters creativity, kindness, and confidence in children through a well-rounded curriculum. The educators are highly trained and approachable. What we love most is the school’s effort to keep learning fun and stress-free. Our child feels secure and happy here, and that’s what matters the most. ",
            job: "Teacher",
            Img: Img5,
        },
    ];
    const [ActiveSlide, setActiveSlide] = useState(1);
    return (
        <section className=" flex flex-col justify-center items-center w-full py-10 mb-4 md:mb-0 h-fit bg-[#fff9f4] text-[14px] md:text-[14px] lg:text-[16px] 2xl:text-[20px]">
            <div className="flex flex-col justify-center items-center md:gap-4 gap-2 ">
                <span className=" flex justify-center -translate-x-5 md:translate-x-0 items-center gap-4">
                    <Image
                        src={StrawBerry}
                        alt="StrawBerry-image"
                        width={40}
                        height={40}
                        className=""
                    />
                    <p className={`${bubble.className} text-[#eb1551]`}>Happy Parents</p>
                </span>
                <p className=" md:text-4xl text-2xl font-bold ml-4 ">Our Testimonial</p>
                <p className=" md:w-3/5 w-[90%] md:text-[16px] text-[14px] text-center">
                    At Apna Chhota School, parents share heartfelt experiences of their
                    children's joyful learning journey, caring teachers, and a nurturing
                    environment that helps every child grow with confidence and happiness.
                </p>
            </div>
            <AnimatePresence mode="wait">
                {ActiveSlide && (
                    <div className=" mx-auto w-full lg:container flex justify-center items-center my-8 bg-center bg-cover bg-no-repeat md:h-[60vh] h-fit "
                        style={{ backgroundImage: `url(${BackGround.src})` }} >
                        <div className="flex md:flex-row flex-col-reverse justify-around md:size-3/5 px-6 md:px-0  "
                            onClick={() =>
                                setActiveSlide(ActiveSlide === 4 ? 1 : ActiveSlide + 1)
                            } >
                            <div className=" w-full 2xl:h-[320px] lg:h-[240px] md:h-[200px] h-[300px] absolute left-0 z-10 justify-center md:items-center flex items-end ">
                                <div className=" mx-auto flex justify-between lg:container md:px-3 2xl:px-0  lg:px-20 px-9 w-full  ">
                                    <Insect direction={'left'} />
                                    <Insect direction={'right'} />
                                </div>
                            </div>
                            <motion.div
                                className=" flex flex-col justify-center w-full -translate-y-6 md:-translate-y-0 items-center lg:gap-4 md:gap-3 gap-2 text-white "
                                key={ActiveSlide}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <p className=" w-full h-1/5 flex justify-start items-end ">
                                    <span className=" flex">
                                        <FaStar className=" text-amber-400" />
                                        <FaStar className=" text-amber-400" />
                                        <FaStar className=" text-amber-400" />
                                        <FaStar className=" text-amber-400" />
                                        <FaStar className=" text-amber-400" />
                                    </span>
                                </p>
                                <div className="w-full line-clamp-3 md:line-clamp-none text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] md:w-full lg:leading-6 md:leading-5 leading-4 select-none">
                                    <p>{Reviews[ActiveSlide].review}</p>
                                </div>

                                <div className=" flex justify-between items-start w-full h-1/5 ">
                                    <p className=" text-4xl leading-0">.....</p>
                                    <p className=" flex flex-col justify-center items-center font-extrabold ">
                                        ~{Reviews[ActiveSlide].parent_name}
                                        <span className=" font-normal">{Reviews[ActiveSlide].job}</span>
                                    </p>
                                </div>
                            </motion.div>
                            <div className=" flex justify-start md:justify-center -translate-y-7 md:-translate-y-12 md:w-1/5 w-full h-full">
                                <motion.div
                                    className=" 2xl:w-38 2xl:h-38 lg:w-32 lg:h-32 md:w-28 md:h-28 w-24 h-24 bg-amber-500 flex justify-center items-center rounded-full"
                                    key={ActiveSlide}
                                    initial={{ rotateX: 325, rotateY: 135 }}
                                    animate={{ rotateX: 0, rotateY: 0 }}
                                    exit={{ rotateZ: 325, rotateY: 135 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                >
                                    <motion.div
                                        className="w-22 h-22 lg:w-28 2xl:w-34 2xl:h-34 lg:h-28 md:w-24 md:h-24 bg-white rounded-full bg-center bg-cover bg-no-repeat"
                                        style={{
                                            backgroundImage: `url(${Reviews[ActiveSlide].Img.src})`,
                                        }}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
