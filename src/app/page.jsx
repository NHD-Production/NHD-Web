'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
import ZigBox from '@/components/ZigBox';
import { data } from '@/assets/content';
import Welcome from '@/components/Welcome';
import Nhd_gallery from '@/components/Nhd_gallery';
import Nhd_section from '@/components/Nhd_section';
import AudioPlayer from '@/components/AudioPlayer';
import GalleryApp from '@/components/ImageSlider';
import ImageSlider from '@/components/ImageSlider';
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
  return (
    <div className='flex flex-col'>
    <div className='grid sm:grid-cols-12 h-[93vh] overflow-y-auto '>
     <div className='col-span-10 sm:col-span-9 flex flex-col justify-between'>
      <div className="h-[33%] sm:h-auto overflow-hidden flex justify-center items-center p-2">
        <Welcome/>
      </div>
      <div className="h-[200vh] sm:h-[33%] overflow-hidden flex justify-center items-center">
        <ImageSlider/>

        </div>
      <div className="h-[33.33%] p-2  overflow-hidden flex justify-center items-center">
      <AudioPlayer/>
      </div>
     </div>
     <div className='h-[150vh] sm:h-auto col-span-10 sm:col-span-3 flex flex-col justify-between '>
      <div className="h-[60%] overflow-hidden flex justify-center items-center p-4"><Nhd_gallery/></div>
      <div className="h-[40%]  overflow-hidden flex justify-center items-center p-2">
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