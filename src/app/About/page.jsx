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
function About() {
  return (
    <div className='h-full w-full nhd-profile'>
      {/* <div className=" w-full h-[40vh] relative">
       <Image src="/cover1.jpg" alt='cover'  fill={true} />
      </div>
      
      <ContactUs/>
      <About_humtoo/>
      </div> */}
      
      <div className='mt-10'>
      <About_humtoo/>
      </div>
      <div className='mt-10'><ImageSlider/></div>
      <div className='mt-20'>
      <ContactUs/>
      </div>
    </div>
  )
}

export default About;