import Img1 from '@/Assets/Admission/tab1.jpg'
import Img2 from '@/Assets/Admission/tab2.jpg'
import Img3 from '@/Assets/Admission/tab3.jpg'
import Img4 from '@/Assets/Admission/tab4.jpg'
import Logo from '@/Assets/Logo/Acs.png'
import { Nunito } from 'next/font/google';
import { FaEarthAmericas } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { MapPinned, MessageSquareShare, Phone } from 'lucide-react';
const nun = Nunito({
    subsets: ['latin'],
    weight: ['600', '700', '400']
})
export default function Info() {
    const images = [Img1, Img2, Img3, Img4]
    return (
        <section className='flex flex-col md:flex-row h-fit w-full pb-10 '>
            <div className=' w-full md:w-3/5 flex bg-center bg-no-repeat flex-wrap h-full  '
                style={{
                    backgroundImage: `url(${Logo.src})`,
                    backgroundSize: '100px',
                }}
            >
                <div className='w-1/2 h-fit p-2 md:p-6  '>
                    <div className={`aspect-[5/4] rounded-br-full bg-center bg-cover bg-no-repeat`}
                        style={{
                            backgroundImage: `url(${Img1.src})`
                        }}>
                    </div>
                    <span></span>
                </div>
                <div className='w-1/2 h-full p-2 md:p-6 '>
                    <div className={`aspect-[5/4] rounded-bl-full md:rounded-bl-none rounded-tr-none md:rounded-tr-full  bg-center bg-cover bg-no-repeat`}
                        style={{
                            backgroundImage: `url(${Img2.src})`
                        }}>
                    </div>
                    <span></span>
                </div>
                <div className='w-1/2 h-fit p-2 md:p-6'>
                    <div className={`aspect-[5/4]  rounded-br-none md:rounded-br-full md:rounded-tr-none rounded-tr-full bg-center bg-cover bg-no-repeat`}
                        style={{
                            backgroundImage: `url(${Img3.src})`,
                        }}>
                    </div>
                    <span></span>
                </div>
                <div className='w-1/2 h-fit p-2 md:p-6'>
                    <div className={`aspect-[5/4] rounded-tl-full rounded-tr-none md:rounded-tl-none md:rounded-tr-full bg-center bg-cover bg-no-repeat`}
                        style={{
                            backgroundImage: `url(${Img4.src})`
                        }}>
                    </div>
                    <span></span>
                </div>
            </div>
            <div className=' w-full h-full md:w-2/5 py-10 self-center flex justify-center md:justify-end items-center ' >
                <div className=" h-full relative w-[90%] py-10 flex justify-center items-start rounded-4xl md:rounded-none rounded-tl-0 md:rounded-tl-[100px] rounded-bl-0 md:rounded-bl-[100px] bg-[#eb1551] text-white shadow-lg">
                    <div className=' absolute z-10 left-1/2 rotate-90 md:rotate-0 -top-[30%] md:-left-8 md:top-1/2 flex items-center -translate-x-1/2 md:translate-x-0 translate-y-0 md:-translate-y-1/2 w-0 md:w-8 h-3/5 bg-[#c55d0a] rounded-l-full '>
                        <div className=' w-[75px] z-20 absolute flex justify-center items-center h-[80%] bg-[#f7941e] rounded-r-full '>
                            <p className=' rotate-270 text-nowrap '>Apna Chhota School</p>
                        </div>
                    </div>
                    <address className=" translate-y-[5%] md:translate-y-0 p-10 w-11/12 flex flex-col items-start justify-around max-w-xl rounded-xl"
                        aria-label="Phone Contact Information" >
                        <div className="flex flex-col py-2 sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-4 md:gap-10">
                                <span className="mt-1 md:text-2xl" >
                                    <Phone aria-hidden="true" />
                                </span>
                                <div className={`${nun.className}`}>
                                    <h2 className="text-[16px] font-bold sm:text-lg sm:font-semibold sm:mb-2">Phone</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            <a href="tel:+919999955555" className="hover:underline">
                                                +91-99999 55555
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+919999989748" className="hover:underline">
                                                +91-99999 89748
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-2 sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-4 md:gap-10">
                                <span className="mt-1 text-2xl">
                                    <MessageSquareShare aria-hidden="true" />
                                </span>
                                <div className={`${nun.className}`}>
                                    <h2 className="text-[16px] font-bold sm:text-lg sm:font-semibold sm:mb-2">Email</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            <a href="mailto:info@example.com" className="">
                                                info@example.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="mailto:admin@example.com" className="">
                                                admin@example.com
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-2 sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-4 md:gap-10">
                                <span className="mt-1 text-2xl ">
                                    <MapPinned aria-hidden="true" />
                                </span>
                                <div className={`${nun.className}`}>
                                    <h2 className="text-[16px] font-bold sm:text-lg sm:font-semibold sm:mb-2">Location</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li>
                                            Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-2 sm:flex-row items-center justify-start gap-8 sm:text-2xl">
                            <div className="flex items-start gap-4 md:gap-10">
                                <FaEarthAmericas aria-hidden="true" className="mt-1 text-2xl" />
                                <div className={`${nun.className}`}>
                                    <h2 className="text-lg sm:text-lg font-semibold mb-2">Social Media</h2>
                                    <ul className="space-y-1 text-[14px] ">
                                        <li className=' flex gap-6 text-xl md:text-2xl'>
                                            <a href="mailto:info@example.com" className="">
                                                <CiFacebook />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <FaTwitter />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <CiLinkedin />
                                            </a>
                                            <a href="mailto:info@example.com" className="">
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </address>
                </div>
            </div>
        </section>
    )
}
