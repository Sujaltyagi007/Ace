import WebSlider from "@/components/WebSlider"
import MobSlider from "@/components/MobSlider"
export default function HomeBanner() {
    return (
        <>
            <div className=' hidden md:block'>
                <WebSlider />
            </div>
            <div className=' block md:hidden'>
                <MobSlider />
            </div>
        </>
    )
}
