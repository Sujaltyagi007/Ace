import Image from "next/image";
import Cloud from "@/Assets/Home/cloud.png";
import { Luckiest_Guy } from "next/font/google";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { GoMail } from "react-icons/go";
import Logo from "@/Assets/Home/logo.png";
import Owl from "@/Assets/Home/owl.png";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import FooterStudent from "@/Assets/Home/footer-student.png";
import DinaSour from "@/Assets/Home/dinasour.png";
import Cartoon from "@/Assets/Home/cartoon-1.png";
const lucky = Luckiest_Guy({
    subsets: ["latin"],
    weight: ["400"],
});
export default function Footer() {
    const Links1 = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
        {
            title: 'Gallery',
            link: '/gallery'
        }
    ];
    const Links2 = [
        {
            title: 'Programe',
            link: 'programe',
        }, {
            title: 'Activity',
            link: 'Activity'
        }, {
            title: 'Parent Info',
            link: 'Parent-Info'
        }, {
            title: 'Privacy-Policy',
            link: 'Privacy-policy'
        }
    ];
    const Images = [
        Cartoon,
        // Brush,
        FooterStudent,
        // Smile,
        DinaSour,
    ];
    return (
        <div className=" text-[12px] md:text-[14px] lg:text-[16px] 2xl:text-[20px] md:h-fit relative bg-orange-800 w-full flex flex-col justify-between ">
            <div className="absolute z-10 h-full flex flex-col justify-between items-center">
                <div className="relative flex flex-col justify-center items-center ">
                    <div className="absolute mx-auto container -translate-y-3 md:-translate-y-0 md:pt-3 lg:pt-6 2xl:pt-10 top-0 z-20 w-full flex justify-around px-10">
                        <Image
                            src={Owl}
                            alt="owl-Image"
                            width={80}
                            height={80}
                            className=" w-8 -translate-x-[55%] md:-translate-x-[150%] lg:-translate-x-[75%] xl:-translate-x-[50%] 2xl:-translate-x-[115%] md:w-14 lg:w-16 2xl:w-24 "
                        />
                        <Image
                            src={Owl}
                            alt="owl-Image"
                            width={80}
                            height={80}
                            className="rotate-y-180 w-8 -translate-x-[55%] md:-translate-x-[45%] lg:-translate-x-[145%] 2xl:-translate-x-[75%] md:w-14 lg:w-16 2xl:w-24 "
                        />
                    </div>
                    <Image
                        src={Cloud}
                        width={1600}
                        height={200}
                        alt="Cloud-1"
                        className="rotate-180 w-dvw -translate-y-1 "
                    />
                </div>
                <div className=" relative z-20 w-full ">
                    <div className=" h-fit bottom-0 absolute z-30">
                        <Image
                            src={Cloud}
                            width={1600}
                            height={200}
                            alt="Cloud-2"
                            className="w-dvw translate-y-1  "
                        />
                        <div className=" absolute md:bottom-0 z-40 w-full md:px-0 text-orange-800   ">
                            <div className=" mx-auto lg:container md:px-4 -translate-y-3 flex flex-row justify-around md:justify-between items-center ">
                                <div className=" text-nowrap hidden md:block w-3/10 ">
                                    <p>© {new Date().getFullYear()} Apna Chhota School. All rights reserved.</p>
                                    <p className=" text-[12px]">Crafted & Maintained with ❤ by <a href="https://mstyenterprises.com/" className=" px-0.5 font-extrabold " > Msty Enterprises.</a></p>
                                </div>
                                <div className={`${lucky.className} text-lg md:text-3xl uppercase w-3/5 md:w-4/10 text-center `}>
                                    Apna choota school
                                </div>
                                <div className=" text-gray-500 flex justify-end items-center w-2/5 md:w-3/10 gap-3 pr-3 ">
                                    <p className="">
                                        <RiFacebookFill className=" border p-2 text-3xl md:text-4xl rounded-full " />
                                    </p>
                                    <p className="">
                                        <FaInstagram className=" border p-2 text-3xl md:text-4xl rounded-full " />
                                    </p>
                                    <p className="">
                                        <FaLinkedinIn className=" border p-2 text-3xl md:text-4xl rounded-full overflow-visible " />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden flex flex-col justify-center items-center text-[8px] w-full h-14 bg-white ">
                            <p className=" font-bold text-orange-800 text-[10px] mt-3 ">© {new Date().getFullYear()} Apna Chhota School. All rights reserved.</p>
                            <p className=" flex justify-center items-center font-bold text-orange-800 ">Crafted & Maintained with ❤ by <a href="https://mstyenterprises.com/" className=" px-0.5 font-extrabold " > Msty Enterprises.</a></p>
                        </div>
                    </div>
                    <div className=" hidden relative md:flex w-full justify-between -translate-y-[37%] lg:pt-6 2xl:pt-10 z-10 ">
                        {
                            Images.map((item, index) => (
                                <Image key={index} alt='Apna Chhota School' src={item.src} width={360} height={280} className=" w-50 h-35  " />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className=" mx-auto lg:container py-10 md:px-8 md:pb-10 lg:px-0 lg:pb-14 2xl:pb-10 2xl:px-0 flex justify-between items-center">
                <div className=" relative z-40 py-8 md:py-[10%] 2xl:py-[14%] w-full grid md:grid-cols-2 gap-2 grid-cols-1 ">
                    <div className=" px-4 md:px-4 lg:px-6 2xl:px-10 py-2 md:py-4  ">
                        <p className=" flex items-center gap-2 md:gap-6 ">
                            <Image
                                src={Logo}
                                width={80}
                                height={80}
                                alt="apna chhota school"
                                className=" md:w-24 w-18 "
                            />
                            <span className={`${lucky.className} text-2xl text-white`}>
                                APNA Chhota School
                            </span>
                        </p>
                        <p className=" text-white mt-4 md:mt-2 leading-3 md:leading-6 md:text-start text-center ">
                            Apna Chhota School is a nurturing primary education institution
                            dedicated to fostering young minds. We provide a supportive
                            learning environment where children can grow, explore, and develop
                            essential skills. Our experienced teachers and innovative
                            curriculum ensure a strong foundation for your child's educational
                            journey.
                        </p>
                    </div>
                    <div className=" flex flex-col md:flex-row md:gap-2 lg:gap-4 2xl:gap-10 h-full justify-between w-full text-[15px]   ">
                        <div className=" w-full md:w-fit flex justify-center flex-col items-center h-full md:py-6 ">
                            <p
                                className={`w-full text-center ${lucky.className} py-2 text-center md:text-start text-2xl text-white `}
                            >
                                Quick Links
                            </p>
                            <div className=" flex h-fit md:font-normal font-bold gap-6 md:gap-10 uppercase text-white">
                                <div className=" h-full flex flex-col gap-2 ">
                                    {Links1.map((item, index) => (
                                        <Link key={index} href={item.link}>
                                            <span className=" flex justify-start gap-2 items-center">
                                                <FaRegStar className=" block md:hidden" />
                                                <p className="">{item.title}</p>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    {Links2.map((item, index) => (
                                        <Link key={index} href={item.link}>
                                            <span className=" flex justify-start gap-2 items-center">
                                                <FaRegStar className=" block md:hidden" />
                                                <p className=" text-nowrap ">{item.title}</p>
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" text-white flex flex-col gap-2 md:gap-2 px-6 md:px-2 py-6 md:py-12 w-full">
                            <p className={`${lucky.className} text-center md:text-start text-2xl px-0  `}>
                                Contact Us
                            </p>
                            <span className=" flex gap-2">
                                <p className=" text-2xl">
                                    <CiLocationOn />
                                </p>
                                <p className="pr-4">
                                    Basti Vikas Kendra, Harijan Basti, Chuna Bhatti, Near Nirankari- Satsang Bhawan, Kirti Nagar, New Delhi -110015
                                </p>
                            </span>
                            <span className=" flex gap-2">
                                <p className=" text-2xl">
                                    <MdOutlinePhone />
                                </p>
                                <p className="">
                                    <a href="tel:+919990770201">+91 99907 70201</a>
                                </p>
                            </span>
                            <span className=" flex gap-3">
                                <p className=" text-2xl">
                                    <GoMail />
                                </p>
                                <p className="">
                                    <a href="mailto:admin@careindiawelfaretrust.org">
                                        admin@careindiawelfaretrust.org
                                    </a>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
