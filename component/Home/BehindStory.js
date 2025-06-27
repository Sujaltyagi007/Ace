import React from 'react'
import { Eye } from 'lucide-react'
import { PiPlant, PiShootingStar } from "react-icons/pi";
import { HiOutlineFire } from "react-icons/hi";
import Girl from '@/Assets/Home/story-side.png'
import Image from 'next/image';

export default function BehindStory() {
    const content = [
        {
            "icon": <Eye className='text-blue-500 h-10 w-10' />,
            "title": "Vision",
            "description": "The school was founded with the belief that every child, regardless of their background, deserves access to quality education. Our mission is to break the cycle of poverty in slum communities by providing education and support to children in need."
        },
        {
            "icon": <PiPlant className='text-green-500 h-10 w-10' />,
            "title": "Starting Small, Dreaming Big",
            "description": "The school began with just a handful of students, operating in a small rented space. Over time, it grew as the community realized the importance of education and rallied behind the cause."
        },
        {
            "icon": <HiOutlineFire className='text-orange-500 h-10 w-10' />,
            "title": "Challenges Faced:",
            "description": "From limited funding and resources to overcoming societal barriers, such as child labor and lack of parental support, the journey has been difficult but rewarding. Despite these challenges, the school has continued to thrive and expand its reach."
        },
        {
            "icon": <PiShootingStar className='text-yellow-500 h-10 w-10' />,
            "title": "Looking to the Future:",
            "description": "As we continue to expand, we aim to create more opportunities for children to succeed, including vocational training, mentorship programs, and stronger partnerships with other organizations. Our goal is to empower the next generation to break free from the cycle of poverty and build a brighter future."
        }
    ]
    return (
        <section className=' relative py-4 pb-8'>
            <div className=' absolute left-2 md:left-0 lg:left-0 2xl:left-0 -top-10 translate-y-[36%] md:-translate-y-[22%] lg:translate-y-18 '>
                <Image src={Girl} width={150} height={100} alt='Girl-Child' className=' w-15 h-30 md:w-18 md:h-28 2xl:w-[100px] 2xl:h-[180px] ' />
            </div>
            <div className=" relative mx-[5%] flex flex-col lg:flex-row gap-8  ">
                <div className="flex lg:w-1/3 lg:justify-center text-3xl font-bold  ">
                    <div className=" flex justify-center md:justify-start items-center md:items-start w-full ">
                        <div className=''>
                            <span className='text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-red-400 '>Story</span><br />
                            Behind <br />
                            <span className='text-2xl xl:text-3xl text-nowrap 2xl:text-4xl font-extrabold '>Apna Chhota School</span>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-2/3 grid lg:grid-cols-2 gap-8">
                    {
                        content.map((item, index) => (
                            <div key={index} className="rounded-xl border border-gray-300 bg-zinc-100 hover:border-2 transition-all p-6 shadow-2xl">
                                {item.icon}
                                <h4 className="text-xl lg:text-3xl font-extrabold pb-2" >{item.title}</h4>
                                <p className='text-xs xl:line-clamp-4 lg:text-base '>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
