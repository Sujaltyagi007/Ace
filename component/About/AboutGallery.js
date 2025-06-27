import Image from "next/image";
import Img1 from '@/Assets/About/Gallery/Image1.jpg'
import Img2 from '@/Assets/About/Gallery/Image2.jpg'
import Img3 from '@/Assets/About/Gallery/Image3.jpg'
import Img4 from '@/Assets/About/Gallery/Image4.jpg'
import Img5 from '@/Assets/About/Gallery/Image5.jpg'
import Img6 from '@/Assets/About/Gallery/Image6.jpg'
import Eyes from '@/Assets/Svg/Eyes.svg'
import GalletIcon from '@/Assets/Svg/Image-Section-Svg.svg'
import Link from "next/link";
import { Bubblegum_Sans } from "next/font/google";
import GalleryDemo from "@/components/GalleryDemo";

const bubble = Bubblegum_Sans({
  subsets: ['latin'],
  weight: ['400']
})
export default function AboutGallery() {
  const Data = [
    {
      title: 'Gallery',
      des: ' A glimpse into the joyful moments where our children learn, grow, and thrive through fun and play.',
      link:'Gallery',
      images: {
        'img1': Img1,
        'img2': Img2,
        'img3': Img3,
        'img4': Img5,
        'img5': Img4,
        'img6': Img6
      }
    },
  ]
  return (
    <>
      {
        Data.map((item, index) => (
          <GalleryDemo key={index} item={item} />
        ))
      }
    </>
  )
}
// <section className="w-full py-10 mx-auto container">
//   <span className=" flex items-center gap-2">
//     <Image src={GalletIcon} width={1000} height={1000} alt="" className=" size-8 " />
//     <h1 className={`${bubble.className} text-[#EB1551] text-2xl `}>
//       Gallery
//     </h1>
//   </span>
//   <p className=" font-bold px-2 w-1/2 ">
//     A glimpse into the joyful moments where our children learn, grow, and thrive through fun and play.

//   </p>
//   <div className="grid grid-cols-12 gap-4 py-4 h-[70vh] ">
//     <div className="relative col-span-5 group cursor-pointer h-full  ">
//       <Link href={'/Gallery'}>
//         <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//           <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//             <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//           </div>
//         </div>
//         <Image
//           src={Img1}
//           alt="about-Image"
//           fill
//           className="object-cover rounded-3xl "
//         />
//       </Link>
//     </div>
//     <div className=" relative col-span-7 gap-4 grid grid-cols-24 h-full ">
//       <div className=" flex flex-col gap-4 col-span-13 ">
//         <div className=" relative flex gap-4 h-1/2 ">
//           <div className=" relative w-1/2 group cursor-pointer ">
//             <Link href={'/Gallery'}>
//               <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//                 <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//                   <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//                 </div>
//               </div>
//               <Image src={Img2} fill alt="Gallery-Image-AboutSection" className="rounded-3xl " />
//             </Link>
//           </div>
//           <div className=" relative w-1/2 group cursor-pointer " >
//             <Link href={'/Gallery'}>
//               <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//                 <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//                   <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//                 </div>
//               </div>
//               <Image src={Img4} fill alt="Gallery-Image-AboutSection" className="rounded-3xl " />
//             </Link>
//           </div>
//         </div>
//         <div className=" relative flex h-1/2 group cursor-pointer ">
//           <Link href={'/Gallery'}>
//             <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//               <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//                 <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//               </div>
//             </div>
//             <Image src={Img3} fill alt="Gallery-Image-AboutSection" className=" rounded-3xl " />
//           </Link>
//         </div>
//       </div>
//       <div className=" gap-4 grid grid-rows-12 col-span-11  ">
//         <div className=" relative grid row-span-7 group cursor-pointer ">
//           <Link href={'/Gallery'}>
//             <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//               <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//                 <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//               </div>
//             </div>
//             <Image src={Img5} fill alt="Gallery-Image-AboutSection" className=" border-amber-500 rounded-3xl" />
//           </Link>
//         </div>
//         <div className=" relative grid row-span-5 group cursor-pointer">
//           <Link href={'/Gallery'}>
//             <div className="absolute z-10 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto scale-[100%] group-hover:scale-[102%] transition-all duration-300 ease-in border group-hover:border-6 border-orange-500 rounded-3xl p-4">
//               <div className=" bg-orange-500/50 w-full h-full flex justify-center items-center rounded-3xl ">
//                 <Image src={Eyes} width={100} height={100} alt="About-Eyes" className="" />
//               </div>
//             </div>
//             <Image src={Img6} fill alt="Gallery-Image-AboutSection" className=" rounded-3xl" />
//           </Link>
//         </div>
//       </div>
//     </div>
//     {/* </Link> */}
//   </div>
// </section >