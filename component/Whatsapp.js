'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import WhatsappIcon from '@/Assets/Icon/whatsappIcon.webp'
import whatsAppBg from '@/Assets/Icon/whatsappbg.webp'
import logo from '@/Assets/Logo/Acs.png'
import Image from 'next/image'

const Whatsapp = () => {
    const [show, setShow] = React.useState(false)

    const showvarient = {
        initial: {
            opacity: 0,
            width: 0,
        },
        animate: {
            width: "16rem",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }
    const messageVarient = {
        initial: {
            x: -100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    }


    const handleClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile ? 'whatsapp://send?phone=919910741417&text=Hello' : 'https://wa.me/919910741417?text=Hello';
        window.open(url, '_blank');
    };
    return (
        <AnimatePresence>
            <div onClick={() => setShow(!show)} className='fixed bottom-3 right-3 md:bottom-6 md:right-6 z-50 cursor-pointer'>
                {
                    !show && (
                        <span className='absolute -top-4 -left-1  z-10 bg-red-500 text-white rounded-full flex justify-center items-center p-3 w-4 h-4 text-xs'>1</span>
                    )
                }
                <Image src={WhatsappIcon} width={100} height={100} alt="WhatsApp Icon on Mstyenterprises in Delhi" className='w-12 lg:size-16 h-12  drop-shadow-2xl  ' />

                <motion.div
                    variants={showvarient}
                    initial="initial"
                    animate={show ? "animate" : "initial"}
                    className="border-2 border-x-gray-100 absolute flex flex-col justify-between top-0 right-12 -translate-y-[100%] w-40 lg:w-60  shadow-2xl aspect-[3/4] rounded-xl overflow-hidden bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${whatsAppBg.src})` }}>
                    <div className="flex gap-2 px-2 py-1 items-center bg-gray-700 ">
                        <div className="relative before:top-0 before:right-0 before:absolute before:w-3 before:h-3 before:rounded-full before:bg-green-400">
                            <Image src={logo} alt="msty enterprises in Delhi, India" className='w-10 h-10 p-1 bg-black border-white border-2 rounded-full' />
                        </div>
                        <div className="py-2">
                            <p className='text-white font-bold text-sm '>Apna Chhota School</p>
                            <p className='text-xs font-semibold text-neutral-400'>Online</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                        <motion.div
                            variants={messageVarient}
                            initial="initial"
                            animate={show ? "animate" : "initial"}
                            className="bg-white text-sm w-fit px-2 py-1 rounded-md shadow-lg">
                            Hello 🙏, How may I help you?
                        </motion.div>
                        <button onClick={handleClick} className='bg-green-600 text-sm lg:text-base text-white px-6 py-2 rounded-3xl block mx-auto items-end'> Connect</button>
                    </div>
                </motion.div>

            </div>
        </AnimatePresence >
    )
}

export default Whatsapp