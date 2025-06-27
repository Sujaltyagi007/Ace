'use client'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/Assets/Logo/Acs.png'
import Cloud from '@/Assets/Home/cloud-2.png'
import { Comic_Neue, Luckiest_Guy } from 'next/font/google';
import { AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ImImage } from "react-icons/im";
import { SiStudyverse } from "react-icons/si";
import { ImagePlay, LandPlot, ScanText } from 'lucide-react';
import { IoMdArrowDropdown } from "react-icons/io";
const nunito = Comic_Neue({
    subsets: ['latin'],
    weight: ['700'],
})
const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400'],
})
export default function Navbar() {
    const [isVisible, setIsVisible] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null);;

    const list = [
        {
            name: 'About',
            link: '/About',
            icon: <ScanText />,
            submenu: false,
            submenuItem: false
        },
        {
            name: 'Classes',
            link: '/classes',
            icon: <LandPlot />,
            submenu: false,
            submenuItem: false
        },
        {
            name: 'Admission',
            link: '/Admission',
            icon: <ImagePlay />,
            submenu: false,
            submenuItem: false
        },
        {
            name: 'Gallery',
            link: '/Gallery',
            icon: <ImImage />,
            submenu: true,
            submenuItem: [
                'Events',
                'Activities',
                'Fun-learning'
            ]
        },
        {
            name: 'Curriculum',
            link: '/Curriculum',
            icon: <SiStudyverse />,
            submenu: false,
            submenuItem: false
        },
        {
            name: 'Announcement',
            link: '/Announcement',
            submenu: false,
            submenuItem: false
        },
        {
            name: 'Articles',
            link: '/Articles',
            submenu: false,
            submenuItem: false
        }
    ]
    return (
        <header className={` absolute z-30 top-0 left-0 right-0 font-bold h-10 lg:px-16 ${nunito.className} `}>
            <Image src={Cloud} width={1600} height={100} alt='Apna chhota school' className=' w-full hidden md:block absolute top-0 left-0 -translate-y-2 -rotate-x-180 ' />
            <div className="container mx-auto hidden md:flex justify-between items-center relative ">
                <div className="logo flex gap-4">
                    <Link href='/'>
                        <Image src={Logo} width={70} height={70} alt="Apna chhota school" className=' translate-y-2 ' />
                        {/* <div className={`hidden ${lucky.className} lg:flex tracking-wider cursor-pointer  items-center gap-2 lg:text-2xl`} loading="lazy">
                            Apna Chhota School
                        </div> */}
                    </Link>
                </div>
                <nav className='hidden md:block'>
                    <ul className="font-comic-Neue flex text-lg gap-4 relative">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                <Link href={item.link}>
                                    <li className="flex items-center cursor-pointer px-4 py-2 rounded-full hover:bg-orange-500/30 relative">
                                        {item.name}
                                        {item.submenu && (
                                            <IoMdArrowDropdown
                                                className={`ml-2 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                    </li>
                                </Link>

                                {item.submenu && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={
                                            activeIndex === index
                                                ? { height: 'auto', opacity: 1 }
                                                : { height: 0, opacity: 0 }
                                        }
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="absolute top-full left-0 mt-2 w-fit bg-white shadow-lg rounded-md overflow-hidden z-50"
                                        onMouseEnter={() => setActiveIndex(index)}
                                        onMouseLeave={() => setActiveIndex(null)}
                                    >
                                        {item.submenuItem?.map((subItem, subIndex) => (
                                            <Link key={subIndex} href={`/Gallery/${subItem}`} >
                                                <motion.li
                                                    
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.1 * subIndex }}
                                                    className="px-4 py-2 hover:bg-orange-500/30 cursor-pointer text-nowrap"
                                                >
                                                    {subItem}
                                                </motion.li>
                                            </Link>
                                        ))}
                                    </motion.ul>
                                )}
                            </div>
                        ))}
                    </ul>
                </nav>
                <Link href='/contact'><button className='text-white cursor-pointer bg-amber-600 px-4 py-2 rounded-md hidden md:block'>Contact Us</button></Link>
                <div className="md:hidden mx-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </div>
            <div className=' relative z-10 mx-auto container block md:hidden h-12 bg-white '>
                <div className=' flex justify-between items-center px-4 py-0.5 '>
                    <Link href='/'
                        onClick={() => setIsVisible(false)}
                    >
                        <div>
                            <Image src={Logo} width={60} height={60} alt='Logo' className=' w-14 h-14 ' />
                        </div>
                    </Link>
                    <AnimatePresence mode="wait">
                        {isVisible ? (
                            <motion.div
                                key="plus"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="rotate-45 lucide lucide-plus"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setIsVisible(!isVisible)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-10 h-10"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Image src={Cloud} width={1600} height={100} alt='Apna chhota school' className=' w-full block md:hidden -translate-y-2 -rotate-x-180 ' />
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ y: -400 }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', stiffness: 400, damping: 30 }
                        }}
                        exit={{
                            y: -400,
                            transition: { duration: 0.3 }
                        }}
                        className='md:hidden mx-auto container w-full bg-transparent px-4'
                    >
                        <div className='h-full rounded-2xl bg-white py-5 px-2 flex flex-col gap-2'>
                            {
                                list.map((item, index) => (
                                    <Link key={index} href={item.link} onClick={() => setIsVisible(false)}>
                                        <span className=' flex items-center gap-2 px-2'>{item.icon}<p>{item.name}</p></span>
                                    </Link>
                                ))
                            }
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
