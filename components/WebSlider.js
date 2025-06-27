'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import HeroImage1 from '@/Assets/Home/HeroImage.jpg'
import HeroImage2 from '@/Assets/Home/HeroImage2.jpg'
import { Luckiest_Guy } from 'next/font/google';

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight:['400']
})
const slides = [
    {
        title: 'Welcome to Apna Chhota School',
        description: 'Empowering Minds, Shaping Futures',
        background: HeroImage1,
        color: 'bg-pink-300',
        page: '/contact',
        buttonText: 'Enroll Now',
    },
    {
        title: '',
        description: '',
        background: HeroImage2,
        color: 'bg-pink-100',

    },
];

export default function WebSlider() {
    const swiperRef = useRef(null)
    return (
        <div className=' lg:aspect-[8/3] overflow-hidden h-fit pt-0 md:pt-10'>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect="cube"
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper relative "
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={` flex items-center aspect-[15/6] bg-center md:aspect-[8/3] bg-cover lg:bg-center `}
                            style={{ backgroundImage: `url('${slide.background.src}')` }}
                        >
                            <div className=" container mx-auto text-white w-full h-full flex flex-col justify-center items-start relative">
                                <div className='flex flex-col items-start md:px-10 2xl:px-0  md:items-start  '>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        delay={0.2}
                                        className={` text-lg md:text-6xl 2xl:text-7xl max-w-46 md:leading-none leading-4 h-fit font-bold font-Lucky -tracking-normal md:tracking-wider md:mb-4 lg:max-w-[600px] 2xl:max-w-[800px] ${lucky.className} `}>{slide.title}</motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        delay={0.4}
                                        className="text-[9px] md:text-2xl 2xl:text-3xl ">
                                        {slide.description}
                                    </motion.p>
                                    {slide.page && (
                                        <Link
                                            href={slide.page}
                                            className="md:mt-4 inline-block text-[9px] xl:text-lg bg-amber-600 hover:bg-orange-600 text-white font-semibold py-0.5 px-1 md:py-2 md:px-4 rounded-md transition duration-300"
                                        >
                                            {slide.buttonText}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
