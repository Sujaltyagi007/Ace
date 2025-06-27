import Slide2 from '@/Assets/Home/Slide2.jpg'
import Circle from '@/Assets/Svg/Circle.svg'
import Image from "next/image";
export default function Rombus() {
  const clipPath = `polygon(20.901% 5.228%,20.901% 5.228%,21.435% 4.283%,22.023% 3.422%,22.661% 2.649%,23.343% 1.968%,24.064% 1.382%,24.821% 0.894%,25.607% 0.508%,26.418% 0.228%,27.25% 0.058%,28.096% 0%,71.967% 0%,71.967% 0%,72.818% 0.058%,73.654% 0.231%,74.469% 0.514%,75.259% 0.903%,76.019% 1.396%,76.743% 1.988%,77.427% 2.677%,78.066% 3.457%,78.655% 4.326%,79.188% 5.28%,98.126% 42.674%,98.126% 42.674%,98.743% 44.073%,99.222% 45.549%,99.564% 47.083%,99.768% 48.655%,99.834% 50.246%,99.762% 51.836%,99.553% 53.406%,99.206% 54.937%,98.722% 56.41%,98.101% 57.805%,79.19% 94.769%,79.19% 94.769%,78.656% 95.715%,78.068% 96.576%,77.431% 97.349%,76.748% 98.031%,76.027% 98.618%,75.27% 99.106%,74.483% 99.492%,73.672% 99.772%,72.841% 99.942%,71.994% 100%,28.069% 100%,28.069% 100%,27.227% 99.943%,26.4% 99.774%,25.593% 99.497%,24.81% 99.115%,24.057% 98.632%,23.337% 98.052%,22.657% 97.377%,22.021% 96.611%,21.434% 95.758%,20.9% 94.822%,1.788% 57.856%,1.788% 57.856%,1.157% 56.454%,0.666% 54.972%,0.314% 53.43%,0.101% 51.848%,0.029% 50.245%,0.096% 48.642%,0.303% 47.059%,0.65% 45.514%,1.136% 44.029%,1.763% 42.622%,20.901% 5.228%)`;
  return (
    <div className="cursor-pointer group">
      <div className="translate-y-4 w-full flex justify-center items-center group-hover:translate-y-0 transition-all ease-in delay-150">
        <Image
          src={Circle}
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
            backgroundImage: `url(${Slide2.src})`,
            clipPath,
          }}
        ></div>
        <div
          className="relative w-[272px] h-[264px] bg-[#ad5ff3]"
          style={{ clipPath }}
        ></div>
      </div>
      <div
        className={`w-full my-6 font-bold text-2xl flex justify-center items-center `}
      >
        Painting
      </div>
    </div>
  );
}
