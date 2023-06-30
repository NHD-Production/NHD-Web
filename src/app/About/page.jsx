'use client'
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import React from 'react'
import { useContext } from 'react';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  return (
    <div>
       <ZigBox/>
    </div>
  )
}

export default About;