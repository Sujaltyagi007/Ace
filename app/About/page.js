import AboutBanner from '@/component/About/AboutBanner'
import AboutGallery from '@/component/About/AboutGallery'
import Creativity from '@/component/About/Creativity'
import Facility from '@/component/About/Facility'
import GalleryDemo from '@/components/GalleryDemo'

export default function page() {
    return (
        <>
            <AboutBanner />
            <Facility />
            <Creativity />
            <AboutGallery />
            {/* <GalleryDemo /> */}
        </>
    )
}
