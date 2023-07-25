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
import {Nhdlive_data} from '@/assets/content';
import ZigzagBullate from '@/components/ZigzagBullate';
import {nhdlive} from '@/assets/content';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  const imageUrls = [
    'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
    'https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_640.jpg',
  ];
  return (
    <div className='h-full w-full'>
      <div className=" w-full h-[40vh] relative ">
       <Image src="/cover1.jpg" alt='cover'  fill={true} />
      </div>
     <div className='mt-20'>
     {/* <ImageSlider imageUrls={imageUrls}/> */}
     </div>
   <div className='flex flex-col justify-center items-center '>
   <ZigzagBullate data={nhdlive}/>
   </div>
      <ImageSlider imageUrls={imageUrls}/>
      <ContactUs/>
      
    </div>
  )
}

export default About;