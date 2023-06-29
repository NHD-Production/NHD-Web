'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
import ZigBox from '@/components/ZigBox';
import { data } from '@/assets/content';
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
  return (
    <div>

      <ZigBox data={data}/>
    </div>
  )
}

export default Home