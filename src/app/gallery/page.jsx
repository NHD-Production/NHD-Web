'use client'
import NhdImageGallery from '@/components/NhdImageGalley'
import { useState,useEffect } from 'react'
import {FaArrowUp} from 'react-icons/fa'
import { imgListOne,imgListTwo,imgListThree } from '@/assets/content'


const Gallery = () => {
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
  const images = [imgListOne,imgListTwo,imgListThree]
  return (
   <> <div><NhdImageGallery images={images}/></div>
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
   </>
    
  )
}

export default Gallery