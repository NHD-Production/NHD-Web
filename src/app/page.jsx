'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
  return (
    <div>Home
        Theme ({Themecolor})
    </div>
  )
}

export default Home