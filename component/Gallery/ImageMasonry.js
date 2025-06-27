'use client'
import { Fragment, useState } from 'react'
import Eyes from '@/Assets/Svg/Eyes.svg'
import { GiCrossedBones } from "react-icons/gi";
import { FaDiagramNext } from "react-icons/fa6";
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
import img11 from '@/Assets/Gallery/pic11.jpg'
import img12 from '@/Assets/Gallery/pic12.jpg'
import img13 from '@/Assets/Gallery/pic13.jpg'
import img14 from '@/Assets/Gallery/pic14.jpg'
import img15 from '@/Assets/Gallery/pic15.jpg'
import img16 from '@/Assets/Gallery/pic16.jpg'
import img17 from '@/Assets/Gallery/pic17.jpg'
import img18 from '@/Assets/Gallery/pic18.jpg'
import img19 from '@/Assets/Gallery/pic19.jpg'
import { Luckiest_Guy } from 'next/font/google'

const lucky = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400']
})

const ImageMasonry = () => {
  const Images = [
    {
      name: 'Events',
      Images: [
        img1, img2,
        img3, img4,
        img5, img6,
        img7, img8,
        img9, img10,
        img11, img12,

      ]
    },
    {
      name: 'Activities',
      Images: [
        img7, img8,
        img9, img10,
        img11, img12,
        img13, img14,
        img15, img16,
        img17, img18,
        img19
      ]
    },
    {
      name: 'Fun-learning',
      Images: [
        img13, img14,
        img15, img16,
        img17, img18,
        img19, img1,
        img3, img4,
        img5, img6,
        img7, img8,
        img2,
      ]
    }
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
    <section className="container mx-auto px-4 py-10">
      <h1 className={`${lucky.className} text-center mb-6 align-middle text-3xl md:text-4xl text-amber-600`}>
        Apna Chhota School
      </h1>
      {
        Images.map((item, index) => (
          <Fragment key={index}>
            <div key={index} className=' border border-red-100'>
              <h2>{item.name}</h2>
              <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
                {item.Images.map((src, index) => (
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
            </div>
          </Fragment>
        ))
      }
      {/* <div className=' border border-red-100'>
        <h2>Events</h2>
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
                src={images[selectedImageIndex].src}
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
        )} */}
      {/* </div> */}

    </section >
  );
};

export default ImageMasonry;