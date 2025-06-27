'use client';
import Link from 'next/link';
import { FaPhone } from 'react-icons/fa';
import { motion } from 'motion/react';

const CallIcon = () => {
    return (
        <>
            <style jsx>{`
        @keyframes calling {
          0% {
            width: 100%;
            height: 100%;
            opacity: 1;
          }
          100% {
            width: calc(100% + 60px);
            height: calc(100% + 60px);
            opacity: 0;
          }
        }

        .animate-calling {
          animation: calling 2s ease-in-out infinite;
        }

        .animate-calling-delay {
          animation: calling 2s ease-in-out 0.35s infinite;
        }
      `}</style>

            <div className="fixed bottom-20 right-4 md:bottom-28 md:right-8 z-50 cursor-pointer">
                <Link href={'tel:+91-9910741417'}>
                    <div className="relative h-[40px] w-[40px]  md:h-[50px] md:w-[50px] rounded-full bg-blue-600 flex justify-center items-center cursor-pointer">
                        <span className="absolute h-full w-full rounded-full border border-blue-600 animate-calling"></span>
                        <span className="absolute h-full w-full rounded-full border border-blue-600 animate-calling-delay"></span>
                        <motion.span
                            style={{ originX: 0.5, originY: 0.5 }} // center origin
                            animate={{
                              rotate: [0, -5, 5, -5, 5, 0], // rotate back and forth
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatDelay:2,
                              ease: "easeInOut",
                            }}
                        >
                            <FaPhone className="text-white text-[1.5rem] rotate-90" />
                        </motion.span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default CallIcon;
