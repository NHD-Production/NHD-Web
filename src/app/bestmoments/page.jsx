"use client";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "@/context/Globalcontext";
import Image from 'next/image';

function BestMoments() {
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
      "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515390/charulata_rlym08.jpg",
      "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1710515360/charulata_2_qrumtc.jpg"
    ];
    return (
      <div className='h-full w-full'>
        <div id='home' className=" w-full h-[20vh] lg:h-[50vh] relative ">
               <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159922/Artboard_1_oirguz.png" alt='cover'  fill={true} />
              </div>
              <div className='flex justify-center text-white text-2xl m-3 p-3'>
              A premium band created in collaboration with the finest musicians that caters to the live audience&apos;s classic charm as well as creative wilderness.
              </div>
         {/* Scroll to Top Button */}
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
  
  export default BestMoments;