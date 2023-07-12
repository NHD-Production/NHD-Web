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
import ContactUs from '@/components/ContactUs';
import Nhd_music from '@/components/Nhd_music';
import About_nhd from '@/app/About/page'
function Home() {
    const {theme} = useContext(GlobalContext)
    const [Themecolor,setThemecolor] = theme;
    const images = [
      'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
    ];
  return (
    <div className='flex flex-col'>
    <div className='grid sm:grid-cols-12 sm:h-[93vh] overflow-y-auto '>
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
      <div className="h-[67%] overflow-hidden flex justify-center items-center p-2"><Nhd_gallery images={images} /></div>
      <div className="h-[33%]  overflow-hidden flex justify-center items-center p-2">
        <AudioPlayer />
      </div>
     </div>
    </div>
  {/* <div className='h-[50vh] w-[full]'> <ImageSlider/></div> */}
   <About_nhd/>
   <Nhd_music/>
    <ContactUs/>
    <div>
      
  </div>
    </div>
  )
}

export default Home