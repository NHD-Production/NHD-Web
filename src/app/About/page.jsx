'use client'
import { GlobalContext } from '@/context/Globalcontext';
import React from 'react'
import { useContext } from 'react';
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  return (
    <div>
      About Page
Theme ({Themecolor})
    </div>
  )
}

export default About;