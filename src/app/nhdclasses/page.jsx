'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import About_humtoo from '@/components/About_humtoo';
import ImageSlider from '@/components/ImageSlider';
import Welcome from '@/components/Welcome';
import musicIcon  from "@/assets/music_letters.png";
import {Nhdclasses_data} from '@/assets/content';
import {FaArrowUp} from 'react-icons/fa'
function About() {
  const {theme} = useContext(GlobalContext)
  const [Themecolor,setThemecolor] = theme;
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Function to update screenWidth state
  //   const updateScreenWidth = () => {
  //     setScreenWidth(window.innerWidth);
  //   };

  //   // Attach the event listener when component mounts
  //   window.addEventListener('resize', updateScreenWidth);

  //   // Clean up the event listener when component unmounts
  //   return () => {
  //     window.removeEventListener('resize', updateScreenWidth);
  //   };
  // }, []); 

  
  const imageUrls = [
    'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
    'https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_640.jpg',
  ];
  return (
    <div id='home' className='h-full w-full'>
      <div className=" w-full h-[20vh] lg:h-[50vh] relative ">
       <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691868884/classes_banner_czcruh.png" quality={100} alt='cover'  fill={true} />
      </div>
      <div className='flex flex-col xl:flex-row items-center justify-evenly text-white text-2xl p-3 bg-black/80'>
        <Image src={musicIcon} alt="floating_music_image" />
        <p className="p-1 w-90 text-[1rem] xl:text-[1.6rem] text-center leading-normal">
      A unique blend of woodwinds, flute, audio-production, sound engineering and playback-vocal master level classes and specialization.
      </p>
      </div>
      <div className="content mt-40 mb-40" id='about'>
        
       <ZigBox data={Nhdclasses_data}/>
      </div>
      {/* <ImageSlider imageUrls={imageUrls}/> */}
      <div id='contact' className="mt-20"><ContactUs/></div>
      {showScrollButton && (
        <div className='fixed bottom-10 right-10 z-[500]'>
          <button
            className='bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 rounded-full flex justify-evenly items-center'
            onClick={scrollToTop}
          >
           <p className="mx-2 hidden md:block">
             Scroll to Top 
            </p> 
             <FaArrowUp size={15} color='white'/>
          </button>
        </div>
      )}
    </div>
  )
}

export default About;