'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner1 from '@/Assets/Home/mob-bnr.jpg'
import Banner2 from '@/Assets/Home/mob-bnr-2.jpg'
import Image from 'next/image';

export default function MobSlider() {
    return (
        <div className=' pt-12 aspect-square '>
            <Swiper
                modules={[Autoplay, Navigation]}
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
                <SwiperSlide>
                    <Image src={Banner1} width={500} height={400} alt='Banner1' className='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner2} width={500} height={400} alt='Banner2' className='' />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}
