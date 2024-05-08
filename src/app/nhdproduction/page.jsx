"use client";
import About_humtoo from "@/components/About_humtoo";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Nhd_gallery from "@/components/Nhd_gallery";
import React, { useEffect, useState } from "react";
import ZigBox from "@/components/ZigBox";
import { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { demoData } from "@/assets/content";
import { Nhdprod_data } from "@/assets/content";
import { GlobalContext } from "@/context/Globalcontext";

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
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860301318-Enhanced_fcukli.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014246/FB_IMG_1691860281006_wmli14.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691859991006_msidly.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014245/FB_IMG_1691860272974_zaszqf.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691859937861_htyzlq.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014244/FB_IMG_1691860226589-Enhanced_kxm0mk.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859968447_pawomw.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859929135_fg5o5h.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692014243/FB_IMG_1691859951612_nafv5i.jpg'

  ];
  return (
    <div id='home' className='h-full w-full'>
      <div className=" w-full h-[20vh] lg:h-[50vh] relative mb-20">
       <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691607683/nhd_production_banner_showreel_usd6hh.png" alt='cover'  fill={true} />
      </div>
      <div className='flex justify-center text-white text-2xl m-3 p-3'>
      A seamless arrangement of audio post-production for music and movie ventures curated meticulously by industry-level musicians and composers.
      </div>
      
      <div className="content mt-20 mb-40">
        
       <ZigBox data={Nhdprod_data}/>
      </div>
      <div id='gallery'>
      <ImageSlider imageUrls={imageUrls}/>
      </div>
     <div id='contact' className='mt-20'>
     <ContactUs />
     </div>
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