import Slide3 from '@/Assets/Home/Slide3.jpg'
import School from '@/Assets/Svg/School.svg'
import Image from 'next/image'
export default function Square() {
    return (
        <div className=' cursor-pointer group'>
            <p className=' translate-y-4 w-full flex justify-center items-center group-hover:translate-y-1 transition-all ease-in delay-150 '>
                <Image src={School} width={60} height={60} alt='School-icon' className='' />
            </p>
            <div className=' flex justify-center items-center w-full'>
                <p className=" absolute z-10 w-60 h-60 bg-red-400 bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(${Slide3.src})` }}
                >
                </p>
                <p className=" relative w-68 h-68 bg-blue-300 rounded-2xl " ></p>
            </div>
            <div className=' w-full my-6 font-bold text-2xl flex justify-center items-center'>Craft</div>
        </div>
    )
}
