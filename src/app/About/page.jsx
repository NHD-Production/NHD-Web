'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React from 'react'
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
function About() {
  return (
    <div className='h-full w-full'>
     
      {/* <div className="content">
        
       <ZigBox data={demoData}/>
      </div>
      <ContactUs/> */}
    </div>
  )
}

export default About;