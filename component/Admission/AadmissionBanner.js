import Bannner from '@/Assets/Admission/Banner.png'
import { Comic_Neue } from 'next/font/google'
import Link from 'next/link'
import { MdOutlineDoubleArrow } from "react-icons/md"

const comic = Comic_Neue({
    subsets: ['latin'],
    weight: ['700']
})

export default function AdmissionBanner() {
    return (
        <section className=' relative mt-[12%] md:mt-[4.3%] lg:mt-[4%] xl:mt-[4%] w-full h-full  '>
            <div className=' w-full pl-[5%] bg-cover bg-center bg-no-repeat h-[25vh] sm:h-[60vh] md:h-[70vh] lg:[70vh] relative '
                style={{
                    backgroundImage: `url(${Bannner.src})`,
                }}
            >
                {/* <div className="absolute inset-0 z-20 bg-black opacity-40 flex justify-center items-center h-full top-0 left-0  w-full "></div> */}
                <div className=' absolute inset-0 z-20  flex flex-col gap-4 justify-center items-center h-full text-white '>
                    <p className={`${comic.className} font-extrabold text-3xl lg:text-7xl `}>Admission</p>
                    <span className=' flex justify-center items-center gap-1 text-[#ffbb01]'><Link href='/'><p>Home</p></Link><MdOutlineDoubleArrow /><Link href='/Admission'><p>Admission</p></Link></span>
                </div>
            </div>
        </section>
    )
}
