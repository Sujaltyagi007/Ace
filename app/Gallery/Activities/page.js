import ActivityBanner from '@/component/About/Activities/ActivityBanner'
import ActivityGallery from '@/component/About/Activities/ActivityGallery'


export default function page() {
  return (
    <div className=' w-full h-full'>
      <ActivityBanner />
      <ActivityGallery />      
    </div>
  )
}
