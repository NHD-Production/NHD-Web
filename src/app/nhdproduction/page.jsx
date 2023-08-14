'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React from 'react'
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import About_humtoo from '@/components/About_humtoo';
import ImageSlider from '@/components/ImageSlider';
import {Nhdprod_data} from '@/assets/content';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  const imageUrls = [
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860301318-Enhanced_fcukli.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860281006_wmli14.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691859991006_msidly.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691860272974_zaszqf.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691859937861_htyzlq.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691860226589-Enhanced_kxm0mk.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859968447_pawomw.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859929135_fg5o5h.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859951612_nafv5i.jpg'

  ];
  return (
    <div id='home' className='h-full w-full'>
      <div className=" w-full h-[40vh] relative mb-20">
       <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691607683/nhd_production_banner_showreel_usd6hh.png" alt='cover'  fill={true} />
      </div>
      
      <div className="content mt-20 mb-40">
        
       <ZigBox data={Nhdprod_data}/>
      </div>
      <div id='gallery'>
      <ImageSlider imageUrls={imageUrls}/>
      </div>
     <div id='contact' className='mt-20'>
     <ContactUs />
     </div>
      
    </div>
  )
}

export default About;