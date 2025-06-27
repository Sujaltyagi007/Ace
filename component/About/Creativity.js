'use client'
import { Bubblegum_Sans } from 'next/font/google'
import Image from 'next/image'
import { motion } from 'motion/react'
import Hat from '@/Assets/Svg/Hat.svg'
import Img1 from '@/Assets/About/Creativity/a1.jpg'
import Img2 from '@/Assets/About/Creativity/a2.jpg'
import Active from '@/Assets/About/Creativity/acitivites-side.png'
import { inView } from 'motion'

const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})
export default function Creativity() {
    return (
        <section className=' relative h-fit py-10 my-4 overflow-hidden '>
            <motion.span
                animate={{ y: [10, -10, 10] }} // horizontal shake
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                className='absolute right-0 top-1/2 md:-translate-y-1/2'
            >
                <Image
                    src={Active}
                    width={1000}
                    height={1000}
                    alt='About-Section-ActiveSlide'
                    className='w-20 rotate-180'
                />
            </motion.span>

            <div className=' container mx-auto flex flex-col sm:flex-row justify-between items-center w-full  '>
                <div className=' flex flex-col gap-2 '>
                    <span className={`${bubble.className}`}>
                        <Image src={Hat} width={50} height={50} alt='Education' className='' />
                        <p className=' text-[#EB1551] '> Find Kid's Creativity </p> </span>
                    <h1 className=' text-3xl font-bold'>Your Children’s <br /> Creativity Works!</h1>
                    <p className=' max-w-80 text-sm '>
                        Every child is an artist—and here, their imagination comes to life!
                        From colorful drawings to playful crafts, explore the world through their eyes.
                        We celebrate creativity, curiosity, and the joy of self-expression.
                    </p>
                    <button className=" cursor-pointer group relative mt-2 text-sm overflow-hidden text-white bg-[#EB1551] rounded-full w-fit">
                        <span className=' group-hover:w-full group-hover:h-full rounded-full bottom-0 left-0 h-0 w-0 transition-all ease-linear duration-400 -rotate-6 group-hover:-rotate-0 z-10  absolute bg-green-500'></span>
                        <p className=' py-3 px-6 z-20 relative  '>Creative Works</p>
                    </button>
                </div>
                <div className=' flex flex-col md:flex-row justify-around item-center md:items-end md:self-end py-6 w-[80vw] md:w-fit sm:py-0 -translate-x-[10%] '>
                    <div
                        className='  aspect-[5/4] md:w-[350px] md:h-[280px] bg-center bg-cover rounded-br-full bg-no-repeat'
                        style={{
                            backgroundImage: `url(${Img1.src})`
                        }}
                    >
                    </div>
                    <div
                        className=' aspect-[5/4] md:w-[350px] md:h-[280px] bg-center rounded-tl-full bg-cover bg-no-repeat'
                        style={{
                            backgroundImage: `url(${Img2.src})`
                        }}
                    >
                    </div>
                </div>
            </div>
        </section>
    )
}
