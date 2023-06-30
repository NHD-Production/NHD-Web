'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
import ZigBox from '@/components/ZigBox';
import { data } from '@/assets/content';
import Welcome from '@/components/Welcome';
import Nhd_gallery from '@/components/Nhd_gallery';
import Nhd_section from '@/components/Nhd_section';
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
  return (
    <div className='grid sm:grid-cols-10  bg-blue-500 h-[100%] overflow-y-auto sm:overflow-hidden'>
     <div className='bg-red-400 col-span-10 sm:col-span-7 flex flex-col justify-around'>
      <div className="h-[33%] bg-yellow-500 overflow-hidden flex justify-center items-center">
        <Welcome/>
      </div>
      <div className="h-[33%] bg-green-500 overflow-hidden flex justify-center items-center"><Nhd_section/></div>
      <div className="h-[33%] bg-gray-500 overflow-hidden flex justify-center items-center">3</div>
     </div>
     <div className='bg-black col-span-10 sm:col-span-3 flex flex-col justify-between '>
      <div className="h-[67%] overflow-hidden flex justify-center items-center"><Nhd_gallery/></div>
      <div className="h-[33%] bg-green-500 overflow-hidden flex justify-center items-center">5</div>
     </div>
    </div>
  )
}

export default Home