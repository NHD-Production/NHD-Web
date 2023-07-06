'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
import ZigBox from '@/components/ZigBox';
import { data } from '@/assets/content';
import Welcome from '@/components/Welcome';
import Nhd_gallery from '@/components/Nhd_gallery';
import Nhd_section from '@/components/Nhd_section';
import AudioPlayer from '@/components/AudioPlayer';
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
  return (
    <div className='flex flex-col'>
    <div className='grid sm:grid-cols-12 h-[93vh] overflow-y-auto '>
     <div className='col-span-10 sm:col-span-9 flex flex-col  justify-between'>
      <div className="h-[calc(100%/3)] sm:h-auto overflow-hidden flex justify-center items-center p-2">
        <Welcome/>
      </div>
      <div className="h-[160vh] sm:h-[calc(100%/3)] flex-grow-2 p-2 overflow-hidden flex justify-center items-center">
        <Nhd_section/>

        </div>
      <div className="h-[calc(100%/3)] p-2 overflow-hidden flex justify-center items-center">
      <AudioPlayer/>
      </div>
     </div>
     <div className='h-[150vh] sm:h-auto col-span-10 sm:col-span-3 flex flex-col justify-between '>
      <div className="h-[67%] overflow-hidden flex justify-center items-center p-2"><Nhd_gallery/></div>
      <div className="h-[33%]  overflow-hidden flex justify-center items-center p-2">
        <AudioPlayer/>
      </div>
     </div>
    </div>
    <div>
      
  </div>
    </div>
  )
}

export default Home