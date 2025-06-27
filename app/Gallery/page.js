import GalleryBanner from '@/component/Gallery/GalleryBanner'
import GallerySection from '@/component/Gallery/GallerySection'

import Post from '@/component/Gallery/ImageMasonry'
export default function page() {

    return (
        <div>
            <GalleryBanner />
            <GallerySection />
            {/* <Post /> */}
        </div>
    )
}
