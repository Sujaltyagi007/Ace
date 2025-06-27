import Pencil from '@/Assets/Home/pencil.png'
import Image from 'next/image'
import Img1 from '@/Assets/Home/Image.jpg'
import Cloud from '@/Assets/Home/cloud-2.png'
import Grow from '@/Assets/Svg/Growth.svg'
import Layer from '@/Assets/Home/Layer 7.png'
import { Bubblegum_Sans } from 'next/font/google'
const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})

export default function About() {
    return (
        <section className=' relative w-full pt-5 bg-white '>
            <Image src={Cloud} width={1600} height={100} alt='apna chhota school' className=' absolute z-10 transform -translate-y-12 md:-translate-y-24 w-full  ' />
            <div className='mx-auto flex-col-reverse md:flex-row container flex justify-between md:items-center items-start p-4  '>
                <div className='flex justify-center items-center md:h-[70vh] min-h-fit py-6 md:py-0 gap-4 md:gap-10 md:w-2/5 w-full '>
                    <div className=' rounded-2xl overflow-hidden md:w-3/5 '>
                        <Image src={Img1} width={400} height={200} alt='Apna chhota school' />
                    </div>
                    <div className=' flex flex-col justify-between py-6 h-full md:w-2/5 w-full md:gap-10 gap-2 '>
                        <div className=' flex justify-center items-center h-full w-full '>
                            <Image src={Pencil} width={50} height={50} alt='Apna chhota school' className='' />
                        </div>
                        <div className=' flex flex-col text-center h-full justify-center p-2 items-center rounded-xl bg-amber-500/40 '>
                            <Image src={Grow} alt='Grow' width={40} height={40} className=' md:w-12 w-8 ' />
                            <p className=' font-bold'>Academy</p>
                            <p className=' md:text-[12px] text-[10px]'>Learning Leading School</p>
                        </div>
                        <div className=' flex flex-col h-full hover:bg-gray-300/50 group md:text-center justify-center shadow md:px-4 px-2 items-center rounded-xl '>
                            <p className=' flex text-start w-full md:px-2 text-2xl font-extrabold text-[#20fa8d] '>10+</p>
                            <p className=' md:text-[12px] text-[10px] text-gray-400 transition-all duration-150 ease-in-out group-hover:text-black group-hover:font-bold '> Learning Ladder School</p>
                        </div>

                    </div>
                </div>
                <div className=' md:w-2/5 w-full h-full flex flex-col md:gap-8 gap-2 ' >
                    <div>
                        <h2 className={`${bubble.className} text-[#20fa8d] md:text-[21px] text-[16px] `}>
                            About Us
                        </h2>
                        <p className=' font-bold md:text-[34px] text-[20px] md:leading-10 pr-10'>
                            Unlocking Potential, One Child at a just time in school.
                        </p>
                    </div>
                    <p>
                        Apna Chhota School is a nurturing preschool that focuses on holistic early childhood development through play-based learning, care, and creativity in a safe and joyful environment.
                    </p>
                    <button className=' p-3 text-[12px] md:text-[15px] cursor-pointer w-fit rounded-lg border border-black/50'>
                        Explore Now
                    </button>
                </div>
                <div className=' absolute w-full md:mt-10 left-0 flex top-10 justify-end pointer-events-none'>
                    <Image src={Layer} width={170} height={100} alt='Cartoon' className=' md:w-36 w-22 2xl:translate-y-2 ' />
                </div>
            </div>
        </section>
    )
}
