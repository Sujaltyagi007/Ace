import Image from "next/image"
import { Bubblegum_Sans } from "next/font/google"
import FacilityIcon from '@/components/FacilityIcon'
import Cloud1 from '@/Assets/About/Facility/Cloud1.svg'
import Cloud2 from '@/Assets/About/Facility/Cloud2.svg'
import Img1 from '@/Assets/About/Image/Image1.jpg'
import Img2 from '@/Assets/About/Image/Image2.jpg'
import Img3 from '@/Assets/About/Image/Image3.jpg'
import Img4 from '@/Assets/About/Image/Image4.jpg'
import Bottom from '@/Assets/About/Banner/About-Bottom.svg'

const bubble = Bubblegum_Sans({
    subsets: ['latin'],
    weight: ['400']
})
export default function Facility() {
    const clipath1 = `polygon( 0.287% 52.899%,0.287% 52.899%,0.319% 52.337%,0.427% 50.698%,0.629% 48.051%,0.944% 44.466%,1.392% 40.011%,1.99% 34.757%,2.758% 28.772%,3.715% 22.126%,4.879% 14.887%,6.268% 7.126%,6.268% 7.126%,6.281% 7.075%,6.3% 7.026%,6.324% 6.98%,6.353% 6.936%,6.388% 6.896%,6.427% 6.859%,6.471% 6.825%,6.52% 6.796%,6.573% 6.771%,6.63% 6.751%,6.63% 6.751%,7.97% 6.368%,10.286% 5.747%,13.486% 4.953%,17.473% 4.053%,22.155% 3.112%,27.437% 2.195%,33.224% 1.368%,39.424% 0.697%,45.941% 0.245%,52.682% 0.081%,52.682% 0.081%,58.941% 0.216%,64.875% 0.589%,70.432% 1.15%,75.564% 1.847%,80.221% 2.631%,84.354% 3.452%,87.913% 4.258%,90.848% 4.999%,93.11% 5.626%,94.65% 6.088%,94.65% 6.088%,94.803% 6.143%,94.944% 6.212%,95.075% 6.291%,95.193% 6.382%,95.298% 6.483%,95.389% 6.592%,95.465% 6.71%,95.525% 6.836%,95.57% 6.968%,95.597% 7.106%,95.597% 7.106%,95.814% 8.801%,96.131% 11.375%,96.527% 14.736%,96.981% 18.794%,97.47% 23.457%,97.974% 28.634%,98.472% 34.234%,98.942% 40.165%,99.362% 46.336%,99.713% 52.657%,99.713% 52.657%,99.742% 53.328%,99.788% 55.25%,99.789% 58.285%,99.682% 62.298%,99.406% 67.152%,98.897% 72.71%,98.094% 78.836%,96.935% 85.392%,95.358% 92.243%,93.299% 99.251%,93.299% 99.251%,93.257% 99.352%,93.199% 99.445%,93.128% 99.531%,93.045% 99.608%,92.951% 99.675%,92.848% 99.732%,92.736% 99.778%,92.618% 99.811%,92.495% 99.832%,92.368% 99.839%,9.351% 99.839%,9.351% 99.839%,9.289% 99.836%,9.228% 99.829%,9.169% 99.816%,9.112% 99.798%,9.059% 99.776%,9.009% 99.748%,8.962% 99.716%,8.921% 99.68%,8.884% 99.639%,8.853% 99.594%,8.853% 99.594%,8.268% 98.555%,7.34% 96.705%,6.177% 94.044%,4.883% 90.576%,3.563% 86.3%,2.324% 81.221%,1.272% 75.339%,0.511% 68.657%,0.147% 61.176%,0.287% 52.899% )`
    const clipath2 = `polygon( 0.862% 47.906%,0.862% 47.906%,0.907% 47.322%,1.063% 45.675%,1.358% 43.116%,1.823% 39.801%,2.486% 35.883%,3.379% 31.515%,4.531% 26.852%,5.97% 22.048%,7.728% 17.255%,9.833% 12.628%,9.833% 12.628%,9.936% 12.438%,10.046% 12.255%,10.164% 12.081%,10.289% 11.916%,10.421% 11.759%,10.56% 11.611%,10.706% 11.474%,10.859% 11.346%,11.018% 11.228%,11.183% 11.12%,11.183% 11.12%,12.565% 10.319%,14.581% 9.249%,17.208% 7.989%,20.424% 6.617%,24.208% 5.21%,28.537% 3.847%,33.389% 2.605%,38.742% 1.564%,44.574% 0.8%,50.862% 0.393%,50.862% 0.393%,57.989% 0.341%,64.314% 0.608%,69.848% 1.121%,74.605% 1.804%,78.596% 2.585%,81.834% 3.39%,84.332% 4.144%,86.1% 4.774%,87.152% 5.206%,87.5% 5.366%,87.5% 5.366%,87.753% 5.748%,88.454% 6.913%,89.513% 8.89%,90.841% 11.708%,92.349% 15.396%,93.947% 19.983%,95.547% 25.499%,97.059% 31.972%,98.393% 39.431%,99.461% 47.906%,99.461% 47.906%,99.5% 48.586%,99.585% 50.538%,99.663% 53.635%,99.686% 57.744%,99.603% 62.737%,99.364% 68.484%,98.918% 74.855%,98.215% 81.72%,97.205% 88.95%,95.838% 96.414%,95.838% 96.414%,95.805% 96.537%,95.761% 96.653%,95.706% 96.761%,95.642% 96.859%,95.568% 96.946%,95.486% 97.022%,95.397% 97.086%,95.302% 97.136%,95.201% 97.173%,95.095% 97.193%,95.095% 97.193%,93.447% 97.386%,90.853% 97.668%,87.419% 98.012%,83.254% 98.39%,78.464% 98.771%,73.159% 99.128%,67.444% 99.432%,61.428% 99.654%,55.218% 99.766%,48.922% 99.738%,48.922% 99.738%,48.096% 99.725%,45.777% 99.679%,42.204% 99.59%,37.619% 99.449%,32.26% 99.247%,26.368% 98.975%,20.182% 98.622%,13.943% 98.18%,7.89% 97.639%,2.263% 96.99%,2.263% 96.99%,2.163% 96.262%,1.9% 94.184%,1.533% 90.915%,1.118% 86.61%,0.714% 81.43%,0.378% 75.531%,0.167% 69.071%,0.139% 62.208%,0.351% 55.101%,0.862% 47.906% )`
    const data = [
        {
            'title': 'Interactive Class',
            'desc': '',
            'img': Img1
        },
        {
            'title': 'School Bus',
            'desc': '',
            'img': Img2
        },
        {
            'title': 'Play Ground',
            'desc': '',
            'img': Img3
        },
        {
            'title': 'Smart Class',
            'desc': '',
            'img': Img4
        }
    ]
    return (
        <>
            <section className=" bg-[#f7941e] text-white h-fit py-4  ">
                <div className=" absolute z-1 left-0 w-full flex justify-between items-center px-1 sm:px-4 ">
                    <div className=" sm:-translate-y-[55%] -translate-y-[30%] w-full ">
                        <Image src={Cloud1} width={1000} height={1000} className=" w-[40vw] sm:w-[30vw] " alt="About-Section-Cloud" />
                    </div>
                    <div className=" h-full">
                        <Image src={Cloud2} width={1000} height={1000} alt="About-Section-Cloud2" className="w-[30vw]" />
                    </div>
                </div>
                <div>
                    <div className=" heading flex sm:flex-col justify-center sm:gap-0 gap-2 items-center  ">
                        <FacilityIcon className='' />
                        <div className=" pt-2  ">
                            <h1 className={`${bubble.className} sm:text-2xl`}>Our Facilities</h1>
                        </div>
                    </div>
                    <div className=" subHeading text-center gap-3 flex justify-center items-center flex-col pt-4 ">
                        <h2 className=" text-lg md:text-4xl font-extrabold">
                            Find Out What Facility we Offer
                        </h2>
                        <p className=" md:w-[50%] w-[90%] text-sm ">
                            At Apna Chhota School, we provide a nurturing and stimulating environment where your child can grow, learn, and thrive. Our programs are thoughtfully designed to spark curiosity, creativity, and confidence.
                        </p>
                    </div>
                </div>
                <div className=" mx-auto container grid grid-cols-1 md:grid-cols-2 py-10 ">
                    {
                        data.map((item, index) => (
                            <div key={index} className="w-full h-full flex justify-center items-center p-4 text-white  ">
                                <div className=" w-auto h-full bg-[#005c6e] group cursor-pointer transition-colors duration-1000 hover:bg-red-500 flex justify-center items-center flex-col gap-4 p-4  "
                                    style={{
                                        clipPath: clipath1,
                                    }}
                                >
                                    <div
                                        className=" h-[230px] w-[280px] bg-center bg-cover  "
                                        style={{
                                            clipPath: clipath2,
                                            backgroundImage: `url(${item.img.src})`
                                        }}>
                                    </div>
                                    <div className=" w-full mx-auto max-w-96 text-center flex flex-col gap-2 justify-between items-center relative ">
                                        <h2 className=" font-extrabold text-2xl ">{item.title}</h2>
                                        <p className=" px-8">Empowering the next generation with the tools, mindset, and guidance they need to thrive and succeed in a changing world.</p>
                                        <span className=" bg-red-500 group-hover:bg-[#005c6e] transition-colors duration-1000 rounded-4xl w-fit px-14 py-2  font-bold translate-y-[5%]">
                                            click
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <div className="mb-15 sm:mb-4">
                <Image src={Bottom} width={2300} height={2300} alt="About-Section-Bottom" className=" w-full h-full " />
            </div>
        </>
    )
}
