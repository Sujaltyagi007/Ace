'use client'
import { Luckiest_Guy } from "next/font/google"
import Eyes from '@/Assets/Svg/Eyes.svg'
import Image from 'next/image'
import img1 from '@/Assets/Gallery/pic1.jpg'
import img2 from '@/Assets/Gallery/pic2.jpg'
import img3 from '@/Assets/Gallery/pic3.jpg'
import img4 from '@/Assets/Gallery/pic4.jpg'
import img5 from '@/Assets/Gallery/pic5.jpg'
import img6 from '@/Assets/Gallery/pic6.jpg'
import img7 from '@/Assets/Gallery/pic7.jpg'
import img8 from '@/Assets/Gallery/pic8.jpg'
import img9 from '@/Assets/Gallery/pic9.jpg'
import img10 from '@/Assets/Gallery/pic10.jpg'
import { useState } from "react"
import { GiCrossedBones } from "react-icons/gi"
import { FaDiagramNext } from "react-icons/fa6"

const lucky = Luckiest_Guy({
    subsets: ['latin'],
    weight: ['400']
})

export default function EventGallery() {
    const Images = [
        img1, img2,
        img3, img4,
        img5, img6,
        img7, img8,
        img9, img10,
    ]
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const openModal = (index) => {
        setSelectedImageIndex(index);
    };
    const closeModal = () => {
        setSelectedImageIndex(null);
    };
    const nextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === Images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? Images.length - 1 : prevIndex - 1
        );
    };
    return (
        <section className="container mx-auto px-4 py-10 min-h-dvh ">
            <h1 className={`${lucky.className} text-center mb-6 align-middle text-3xl md:text-4xl text-amber-600`}>
                Apna Chhota School
            </h1>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
                {Images.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <div className="group relative rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div
                                onClick={() => openModal(index)}
                                className="absolute z-10 w-full cursor-pointer h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[110%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
                                <div className="bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl">
                                    <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
                                </div>
                            </div>
                            <img
                                src={src.src}
                                alt={`Image ${index + 1}`}
                                onClick={() => openModal(index)}
                                className="w-full object-cover rounded-lg sm:rounded-3xl transform group-hover:scale-102 transition-transform duration-300 cursor-pointer"

                            />
                        </div>
                    </div>
                ))}
            </div>
            {selectedImageIndex !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="relative max-w-4xl w-full mx-4">
                        <button
                            className="absolute -top-12 right-4 sm:top-4 text-white cursor-pointer text-2xl font-bold z-60"
                            onClick={closeModal}
                        >
                            <GiCrossedBones />
                        </button>
                        <img
                            src={Images[selectedImageIndex].src}
                            alt={`Image ${selectedImageIndex + 1}`}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />
                        <button
                            className="absolute left-4 sm:left-0 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-black/50 p-2 sm:p-4 rounded-full"
                            onClick={prevImage}
                        >
                            <FaDiagramNext className=' rotate-90' />
                        </button>
                        <button
                            className="absolute right-4 sm:right-0 top-1/2 transform -translate-y-1/2 text-white text-lg sm:text-2xl bg-black/50 p-2 sm:p-4 rounded-full"
                            onClick={nextImage}
                        >
                            <FaDiagramNext className=' rotate-270' />
                        </button>
                    </div>
                </div>
            )}
        </section >
    )
}
