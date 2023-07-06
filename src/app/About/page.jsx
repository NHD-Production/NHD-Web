'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import React from 'react'
import { useContext } from 'react';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  return (
    <div className='h-[100vh] w-full'>
       {/* <ZigBox/> */}
       <div className='h-[50%] w-[40%] bg-red-500'>
        <Nhd_gallery/>
       </div>
    </div>
  )
}

export default About;