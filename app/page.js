import About from '@/component/Home/About'
import Activity from '@/component/Home/Activity'
import BehindStory from '@/component/Home/BehindStory'
import Form from '@/component/Home/Form'
import HomeBanner from '@/component/Home/HomeBanner'
import Mission from '@/component/Home/Mission'
import NewActivity from '@/component/Home/NewActivity'
import Programs from '@/component/Home/Programs'
import Testimonials from '@/component/Home/Testimonials'

export default function page() {
  return (
    <>
      <HomeBanner />
      <Form />
      <About />
      <Mission />
      <Activity />
      <BehindStory />
      <Programs />
      <NewActivity />
      <Testimonials />
    </>
  )
}
