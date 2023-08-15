'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React,{ useEffect, useState } from "react";
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import About_humtoo from '@/components/About_humtoo';
import ImageSlider from '@/components/ImageSlider';
import {Nhdlive_data} from '@/assets/content';
import ZigzagBullate from '@/components/ZigzagBullate';
import {nhdlive} from '@/assets/content';
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

  const imageUrls = [
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089751/live/_90A3739_zes7ux.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089751/live/_90A3767_nycw2k.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089104/live/_E7A3920_zlshod.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_E7A3995_opjijl.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_90A3853_vl3rgi.jpg',
  ];
  return (
    <div className='h-full w-full'>
      <div id='home' className=" w-full h-[50vh] relative ">
       <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159922/Artboard_1_oirguz.png" alt='cover'  fill={true} />
      </div>
     <div className=''>
     {/* <ImageSlider imageUrls={imageUrls}/> */}
     </div>
   <div className='flex flex-col justify-center items-center '>
   <ZigzagBullate data={nhdlive}/>
   </div>
      <div  id='gallery'>
      <ImageSlider imageUrls={imageUrls} />
      </div>
     <div id='contact'>
      <ContactUs/>
     </div>
       {/* Scroll to Top Button */}
       {showScrollButton && (
        <div className='fixed bottom-10 right-10'>
          <button
            className='bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 rounded-full flex justify-evenly items-center'
            onClick={scrollToTop}
          >
            Scroll to Top <FaArrowUp size={20} color='white'/>
          </button>
        </div>
      )}
      
    </div>
  )
}

export default About;