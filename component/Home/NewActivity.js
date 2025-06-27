import Image from "next/image";
import { Bubblegum_Sans, Nunito } from "next/font/google";
import Rainbow from '@/Assets/Svg/Rainbow.svg'
import ButterFly from '@/Assets/Svg/Butterfly.svg'
import Carousel2 from '@/components/Carousel2'
import Hat from '@/Assets/Svg/Hat.svg'

const bubble = Bubblegum_Sans({
    subsets: ["latin"],
    weight: ["400"],
});
const nunito = Nunito({
    subsets: ["latin"],
    weight: ["800"],
});

export default function NewActivity() {
    return (
        <section className=" relative flex flex-col items-center gap-4 py-10 ">
            <div className="absolute z-10 flex justify-between items-center px-4 md:px-24  w-full   ">
                <p className=" h-fit -translate-y-3 md:-translate-y-0 ">
                    <Image src={ButterFly} width={100} height={100} alt='Butter-Fly' className="w-16 md:w-32 " />
                </p>
                <p className=" h-fit md:-translate-y-10 -translate-y-8 ">
                    <Image src={Rainbow.src} width={150} height={150} alt="Apna Chhota School" className=" md:w-42 w-24 " />
                </p>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <Image src={Hat} width={50} height={50} alt="Hat" className="" />
                <p className={`${bubble.className} text-[#EB1551]`}>Activity Program</p>
                <p className={`${nunito.className} md:text-4xl text-2xl `}>Smart Activities</p>
                <p className=" flex justify-center text-[#474747] mt-4 md:mt-2 items-center text-[14px] md:text-[16px] text-center md:w-[60%] w-[90%] ">
                    Our activity sessions are thoughtfully designed to support every aspect
                    of a child's development. Through engaging play, children improve their
                    motor skills, social interaction, and creative thinking. These
                    experiences lay the foundation for confident, curious, and well-rounded
                    learners.
                </p>
            </div>
            <Carousel2 />
        </section>
    );
}
