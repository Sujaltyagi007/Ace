import GalleryDemo from '@/components/GalleryDemo'
import React from 'react'
import img1 from '@/Assets/Gallery/pic1.jpg'
import img2 from '@/Assets/Gallery/pic2.jpg'
import img3 from '@/Assets/Gallery/pic3.jpg'
import img4 from '@/Assets/Gallery/pic4.jpg'
import img5 from '@/Assets/Gallery/pic5.jpg'
import img6 from '@/Assets/Gallery/pic6.jpg'
import img7 from '@/Assets/Gallery/pic7.jpg'
import img8 from '@/Assets/Gallery/pic8.jpg'
import img9 from '@/Assets/Gallery/pic9.jpg'
import img10 from '@/Assets/Gallery/pic10.jpg'
import img11 from '@/Assets/Gallery/pic11.jpg'
import img12 from '@/Assets/Gallery/pic12.jpg'
import img13 from '@/Assets/Gallery/pic13.jpg'
import img14 from '@/Assets/Gallery/pic14.jpg'
import img15 from '@/Assets/Gallery/pic15.jpg'
import img16 from '@/Assets/Gallery/pic16.jpg'
import img17 from '@/Assets/Gallery/pic17.jpg'
import img18 from '@/Assets/Gallery/pic18.jpg'
import img19 from '@/Assets/Gallery/pic19.jpg'

export default function GallerySection() {
    const Data = [
        {
            title: 'Events',
            des: 'Celebrating special days and fun-filled events that spark creativity, learning, and lasting memories for our little stars.',
            link: 'Gallery/Events',
            images: {
                'img1': img1,
                'img2': img2,
                'img3': img3,
                'img4': img4,
                'img5': img5,
                'img6': img6
            }
        }, {
            title: 'Activities',
            des: 'Engaging activities that inspire creativity, build skills, and make learning a fun adventure every day.',
            link:'Gallery/Activities',
            images: {
                'img1': img7,
                'img2': img8,
                'img3': img10,
                'img4': img12,
                'img5': img9,
                'img6': img11
            }
        }, {
            title: 'Fun-learning',
            des: 'Where play meets purpose—making every activity a joyful journey of learning and discovery.',
            link: 'Gallery/Fun-learning',
            images: {
                'img1': img13,
                'img2': img14,
                'img3': img15,
                'img4': img16,
                'img5': img17,
                'img6': img18
            }
        }
    ]
    return (
        <section>
            {
                Data.map((item, index) => (
                    <GalleryDemo key={index} item={item} />
                ))
            }
        </section>
    )
}
