import Slide5 from '@/Assets/Home/Slide5.jpg'
import Circle3 from '@/Assets/Svg/Circle3.svg'
import Image from 'next/image'

export default function Triangle() {
    return (
        <div className=' cursor-pointer group'>
        <p className=' translate-y-4 w-full flex justify-center items-center group-hover:translate-y-0 transition-all ease-in delay-150 '>
            <Image src={Circle3} width={60} height={60} alt='School-icon' className='' />
        </p>
            <div className=' flex justify-center items-center w-full '>
                <p className=" absolute z-10 w-60 h-60 bg-red-400 translate-y-2 bg-cover bg-center bg-no-repeat  "
                    style={{
                        clipPath: `polygon(50% 0, 0% 100%, 100% 100%)`,
                        backgroundImage: `url(${Slide5.src})`
                    }} >
                </p>
                <p className=" relative w-68 h-68 bg-orange-500 "
                    style={{ clipPath: `polygon(50% 0, 0% 100%, 100% 100%)` }} >
                </p>
            </div>
            <div className=' w-full my-6 font-bold text-2xl flex justify-center items-center'>Swinning</div>
        </div>
    )
}
