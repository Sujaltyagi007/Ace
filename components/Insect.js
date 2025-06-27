'use client'
import Inset from '@/Assets/Svg/Insect.svg'
import Image from 'next/image'
import { motion } from 'motion/react'
export default function Insect({direction}) {
    return (
        <motion.div
            animate={{
                x: [5, -2, 5, -3, 5, -3, 6, 7, 1, -4, 5],
                y: [5, -5, 3, 8, 5, 1, -5, 3, 7, -4, 5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
            <Image src={Inset} width={120} height={80} alt="Insect" className={` ${direction === 'right'? ' rotate-180':' rotate-0 '} cursor-pointer select-none`} />
        </motion.div>
    )
}
