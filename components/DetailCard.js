import Image from "next/image"

export default function DetailCard({bgImage, title , bgColor}) {
    return (
        <div className={"  min-w-[300px]  lg:max-w-[350px] m-3  lg:mx-auto cursor-pointer flex flex-col justify-center p-2 shadow-lg rounded-3xl   " + (bgColor ? bgColor : "")}>
            <div className="card relative rounded-3xl   h-[15rem] bg-slate-300 overflow-hidden  ">
                <Image src={bgImage.src} width={400} height={400} alt="Apna chhota School" className="  brightness-90 absolute top-0  w-full h-full object-cover object-center" loading="lazy" />
            </div>
            <div className="title">
                {
                    title ? (<h5 className="text-center text-white font-bold text-xl mt-2">
                        {title}
                    </h5>)
                        : null
                }
            </div>
        </div>
    )
}
