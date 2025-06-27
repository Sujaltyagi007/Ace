import Slide4 from '@/Assets/Home/Slide2.jpg'
import Circle2 from '@/Assets/Svg/Circle2.svg'
import Image from 'next/image'

export default function Trapziod() {
    const clipPath = `polygon(11.014% 8.636%,11.014% 8.636%,11.298% 7.182%,11.734% 5.821%,12.307% 4.57%,13.006% 3.44%,13.817% 2.446%,14.727% 1.602%,15.724% 0.922%,16.794% 0.419%,17.925% 0.107%,19.103% 0%,81.065% 0%,81.065% 0%,82.245% 0.107%,83.377% 0.42%,84.449% 0.925%,85.447% 1.608%,86.358% 2.454%,87.169% 3.45%,87.867% 4.583%,88.44% 5.838%,88.874% 7.201%,89.157% 8.66%,99.836% 87.826%,99.836% 87.826%,99.955% 89.713%,99.812% 91.536%,99.428% 93.262%,98.823% 94.86%,98.019% 96.299%,97.037% 97.547%,95.897% 98.573%,94.621% 99.345%,93.229% 99.831%,91.743% 100%,8.279% 100%,8.279% 100%,6.791% 99.83%,5.398% 99.343%,4.12% 98.569%,2.98% 97.541%,1.997% 96.29%,1.194% 94.848%,0.59% 93.247%,0.208% 91.517%,0.067% 89.692%,0.19% 87.803%,11.014% 8.636%)`;

  return (
    <div className="cursor-pointer group">
      <div className="translate-y-4 w-full flex justify-center items-center group-hover:translate-y-0 transition-all ease-in delay-150">
        <Image
          src={Circle2}
          width={60}
          height={60}
          alt="School-icon"
          className=""
        />
      </div>
      <div className="flex justify-center items-center w-full">
        <div
          className="absolute z-10 w-60 h-60 bg-red-400 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Slide4.src})`,
            clipPath,
          }}
        ></div>
        <div
          className="relative w-[272px] h-[272px] bg-[#7cffbe]"
          style={{ clipPath }}
        ></div>
      </div>
      <div
        className={`w-full my-6 font-bold text-2xl flex justify-center items-center `}
      >
        Team Activity
      </div>
    </div>
    )
}
