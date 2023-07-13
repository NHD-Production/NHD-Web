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
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  return (
    <div className='h-full w-full'>
      <div className=" w-full h-[40vh] relative">
       <Image src="/cover1.jpg" width={"100%"} alt='cover'  fill={true} />
      </div>
      <div className="content">
        
       {/* <ZigBox data={demoData}/> */}
      </div>
      <ContactUs/>
      
    </div>
  )
}

export default About;