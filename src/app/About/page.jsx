'use client'
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React from 'react'
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  return (
    <div className='h-full w-full'>
      <div className=" w-full h-[40vh] relative">
       <Image src="/cover1.jpg" alt='cover'  fill={true} />
      </div>
      <div className="content">
        
       <ZigBox data={demoData}/>
      </div>
      <ContactUs/>
    </div>
  )
}

export default About;