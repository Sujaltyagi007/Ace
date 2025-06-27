import Carousel from '@/components/Carousel'
import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import Planet from '@/Assets/Svg/Planet.svg'

const bubble = Bubblegum_Sans({
    subsets:['latin'],
    weight:['400']
})
export default function Programs() {
    return (
        <section className="relative md:h-fit py-6 md:py-10 ">
            <div className="title md:py-3 py-2 px-4">
                <p className={` ${bubble.className} text-[14px] flex flex-col justify-center items-center  text-[#eb1551] text-center `}>
                    <span className=''>
                        <Image src={Planet} width={80} height={60} alt='Planet' className=' size-24 ' />
                    </span>
                     Making a Difference
                </p>
                <h3 className=" text-4xl font-bold text-center  ">
                    Our Programs
                </h3>
            </div>
            <div className="py-8 px-4 overflow-hidden">
                <Carousel />
            </div>
        </section>
    )
}
