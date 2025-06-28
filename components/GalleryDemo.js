import Image from "next/image";
import Eyes from '@/Assets/Svg/Eyes.svg'
import GalletIcon from '@/Assets/Svg/Image-Section-Svg.svg'
import Link from "next/link";
import { Bubblegum_Sans } from "next/font/google";

const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})

export default function GalleryDemo({item}) {
    return (
        <section className="w-full py-10 mx-auto px-4 sm:px-0 container">
            <span className=" flex flex-col items-center justify-center gap-2">
                <Image src={GalletIcon} width={1000} height={1000} alt="" className=" size-8 " />
                <h1 className={`${bubble.className} text-[#EB1551] text-2xl `}>
                    {item.title}
                </h1>
            <p className=" font-bold text-center px-2 w-[90%] sm:w-1/2 ">
                {item.des}
            </p>
            </span>
            <div className="grid grid-rows-2 grid-cols-none sm:grid-rows-none sm:grid-cols-12 gap-2 sm:gap-4 py-4 h-fit sm:h-[70vh] ">
                <div className="relative col-span-1 sm:col-span-5 group cursor-pointer h-full  ">
                    <Link href={`${item.link}`}>
                        <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                            <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                            </div>
                        </div>
                        <Image
                            src={item.images.img1}
                            alt="about-Image"
                            fill
                            className="object-cover rounded-xl sm:rounded-3xl "
                        />
                    </Link>
                </div>
                <div className=" relative col-span-1 sm:col-span-7 gap-2 sm:gap-4 grid grid-rows-2 w-full sm:grid-rows-1 grid-cols-1 sm:grid-cols-24 h-full ">
                    <div className=" flex flex-col  gap-2 sm:gap-4 col-span-1 sm:col-span-13 w-full h-full ">
                        <div className=" relative flex flex-row gap-2 sm:gap-4 h-full sm:h-1/2 ">
                            <div className=" relative w-full sm:w-1/2 group cursor-pointer ">
                                <Link href={`${item.link}`}>
                                    <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                                        <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                            <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                        </div>
                                    </div>
                                    <Image src={item.images.img2} fill alt="Gallery-Image-AboutSection" className="rounded-xl sm:rounded-3xl " />
                                </Link>
                            </div>
                            <div className=" relative w-full sm:w-1/2 group cursor-pointer " >
                                <Link href={`${item.link}`}>
                                    <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                                        <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                            <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                        </div>
                                    </div>
                                    <Image src={item.images.img3} fill alt="Gallery-Image-AboutSection" className="rounded-xl sm:rounded-3xl " />
                                </Link>
                            </div>
                        </div>
                        <div className=" relative hidden sm:flex h-full sm:h-1/2 group cursor-pointer ">
                            <Link href={`${item.link}`}>
                                <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                                    <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                        <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                    </div>
                                </div>
                                <Image src={item.images.img4} fill alt="Gallery-Image-AboutSection" className=" rounded-xl sm:rounded-3xl " />
                            </Link>
                        </div>
                    </div>
                    <div className=" gap-2 sm:gap-4 grid min-h-[25vh] grid-rows-1 grid-cols-2 sm:grid-cols-none sm:grid-rows-12 sm:col-span-11  ">
                        <div className=" relative grid sm:row-span-7 group cursor-pointer ">
                            <Link href={`${item.link}`}>
                                <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                                    <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                        <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                    </div>
                                </div>
                                <Image src={item.images.img5} fill alt="Gallery-Image-AboutSection" className=" border-amber-500 rounded-xl sm:rounded-3xl" />
                            </Link>
                        </div>
                        <div className=" relative grid sm:row-span-5 group cursor-pointer">
                            <Link href={`${item.link}`}>
                                <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-xl sm:rounded-3xl p-4">
                                    <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-xl sm:rounded-3xl ">
                                        <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                    </div>
                                </div>
                                <Image src={item.images.img6} fill alt="Gallery-Image-AboutSection" className=" rounded-xl sm:rounded-3xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}