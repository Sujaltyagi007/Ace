import Slide1 from '@/Assets/Home/Slide1.jpg'
import Student from '@/Assets/Svg/Student.svg'
import Image from 'next/image'

export default function Circle() {
    return (
        <div className=' cursor-pointer group' >
            <div className=' translate-y-5 w-full flex justify-center items-center group-hover:translate-y-1 transition-all ease-in delay-150 '>
                <Image src={Student} width={60} height={60} alt='School-icon' className='' />
            </div>
            <div className=' flex justify-center items-center w-full '>
                <p className=" absolute z-10 w-60 h-60 bg-red-400 bg-cover bg-center bg-no-repeat "
                    style={{
                        clipPath: `circle(50% at 50% 50%)`,
                        backgroundImage: `url(${Slide1.src})`
                    }} >
                </p>
                <p className=" relative w-68 h-68 bg-amber-300 "
                    style={{ clipPath: `circle(50% at 50% 50%)` }} >
                </p>
            </div>
            <div className=' w-full my-6 font-bold text-2xl flex justify-center items-center'>Individual Activity</div>
        </div>
    )
}
