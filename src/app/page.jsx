'use client'
import React, { useEffect,useContext } from 'react'
import { GlobalContext } from '@/context/Globalcontext';
import ZigBox from '@/components/ZigBox';
import { data, demoData } from '@/assets/content';
import {Nhd_data} from '@/assets/content';
import Welcome from '@/components/Welcome';
import Nhd_gallery from '@/components/Nhd_gallery';
import Nhd_section from '@/components/Nhd_section';
import AudioPlayer from '@/components/AudioPlayer';
import GalleryApp from '@/components/ImageSlider';
import ImageSlider from '@/components/ImageSlider';
import ContactUs from '@/components/ContactUs';
import Nhd_music from '@/components/Nhd_music';
import About_nhd from '@/app/About/page'
import About_humtoo from '@/components/About_humtoo';
import AudioPlayerLarge from '@/components/AudioPlayerLarge';
import SocialMediaContainer from '@/components/SocialMediaContainer';
import NhdImageGallery from '@/components/NhdImageGalley';

function Home() {
    const images = [
      'https://i.ibb.co/S6ZMjwJ/90-A3708-min.jpg',
      'https://i.ibb.co/479NmxY/90A4147.jpg',
      'https://i.ibb.co/HVhjJ1n/90-A3794-min.jpg',
      'https://i.ibb.co/Ht510Z9/90A3855.jpg',
    ];
    const imageUrls = [
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
      'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
    ];
  return (
    <div className='flex flex-col'>
    <div className='grid sm:grid-cols-12 xl:h-[93vh]  '>
     <div className='col-span-12 xl:col-span-9 flex flex-col  justify-between '>
      <div className="sm:h-[40vh] xl:h-[calc(100%/3)] h-auto overflow-hidden flex  justify-center items-center p-2">
        <Welcome/>
      </div>
      <div className=" min-h-auto grow-1 max-h-[160vh] md:min-h-[50vh]   md:max-h-[50vh] xl:min-h-[25vh]  xl:max-h-[50vh]  sm:h-[calc(100%/3)] flex-grow-3 p-2 flex justify-center items-start">
        <Nhd_section/>
      </div>
      <div className="sm:h-[40vh] xl:h-[calc(100%/3)] h-[30vh] p-2 overflow-hidden  flex justify-center items-center">
        <AudioPlayerLarge />
      </div>
     </div>
     <div className='h-[150vh] xl:h-auto col-span-12 xl:col-span-3 flex flex-col justify-between '>
      <div className="h-[67%] overflow-hidden flex justify-center items-center"><Nhd_gallery images={images} /></div>
      <div className="h-[33%]  overflow-hidden flex justify-center items-center p-2">
      <AudioPlayer/>
      </div>
     </div>
    </div>
    <div className='mt-10'><SocialMediaContainer/></div>
    <div className="content mt-28">
        
       <ZigBox data={Nhd_data}/>
      </div>
      <div className='h-[50vh] w-[full] mt-16'> <ImageSlider imageUrls={imageUrls}/></div>
      <div className='flex flex-col justify-center items-center m-10'>
      <a href={<Nhd_music/>} targer='_blank'>
        <button className='bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 flex justify-center items-center rounded-md'>Visit to the Gallery</button>
      </a>
   </div>
     <div className='mt-28'><Nhd_music/></div>
    <div className='mt-20 h-full mb-20'>
      <NhdImageGallery/>
    </div>
  
   
    <ContactUs/>
    <div>
      
  </div>
    </div>
  )
}

export default Home