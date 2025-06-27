'use client'
import DetailCard from '@/components/DetailCard'
import Program1 from '@/Assets/Home/Program1.jpg'
import Program2 from '@/Assets/Home/Program2.jpg'
import Program3 from '@/Assets/Home/Program3.jpg'
import Program4 from '@/Assets/Home/Program4.jpg'
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Carousel() {
    var settings = {
        dots: true, // Show dots at the bottom
        infinite: true, // Infinite scroll
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 slides on desktop
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "ease-out",
        arrows: true, // Show navigation arrows
        responsive: [
            {
                breakpoint: 768, // At 768px or smaller
                settings: {
                    slidesToShow: 1, // Show 1 slide on mobile
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 960,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots: true,
                }
            }
        ],
    }
    return (
        <Slider className='' {...settings}>
            <DetailCard bgImage={Program1} title="Pre-Nursery" bgColor={"bg-orange-600"} />
            <DetailCard bgImage={Program2} title="Nursery" bgColor={"bg-blue-500"} />
            <DetailCard bgImage={Program3} title="LKG" bgColor={"bg-green-500"} />
            <DetailCard bgImage={Program4} title="UKG" bgColor={"bg-yellow-500"} />
        </Slider>
    );
}
