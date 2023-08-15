'use client'
import NhdImageGallery from '@/components/NhdImageGalley'
import React, { useEffect, useContext, useState } from "react";
import {FaArrowUp} from 'react-icons/fa'



const page = () => {
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
  const images = [
    {
      id: 1,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/pritam_iq8izz.jpg',
      alt: 'Image 1-',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/mohit_itxxcc.jpg',
      alt: 'Image 2-',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/12.jpeg_nnfskm.jpg',
      alt: 'Image 3-',
    },
    {
      id: 7,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/arijit_1_ln8jpz.jpg',
      alt: 'Image 7-',
    }
    ,
    {
      id: 8,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/lata_at_first_zrrunk.jpg',
      alt: 'Image 8-',
    }
    ,
    {
      id: 9,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/11.jpeg_o9qcbm.jpg',
      alt: 'Image 9-',
    },
    {
      id: 13,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/10.jpeg_ptqc7j.jpg',
      alt: 'Image 4-',
    },
    {
      id: 14,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/arijit_2_r1kajw.jpg',
      alt: 'Image 5-',
    }
    ,
    {
      id: 15,
      src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090781/Nhd/sendgb-kQgRcOs18SH/4.jpeg_vgcnjd.jpg',
      alt: 'Image 6-',
    }
  ];
  return (
   <> <div><NhdImageGallery images={images}/></div>
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
   </>
    
  )
}

export default page