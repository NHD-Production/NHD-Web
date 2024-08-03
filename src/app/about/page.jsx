'use client'
import Nhd_gallery from '@/components/Nhd_gallery';
import ZigBox from '@/components/ZigBox';
import { GlobalContext } from '@/context/Globalcontext';
import Image from 'next/image';
import React from 'react'
import { demoData } from '@/assets/content';
import { useContext } from 'react';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/Navbar';
import About_humtoo from '@/components/About_humtoo';
import ImageSlider from '@/components/ImageSlider';
import NhdImageGallery from '@/components/NhdImageGalley';
import { useEffect,useState} from 'react';
import {FaArrowUp} from 'react-icons/fa'
const images = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/pritam_iq8izz.jpg',
    alt: 'Image 1',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/arijit_1_ln8jpz.jpg',
    alt: 'Image 2',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/10.jpeg_ptqc7j.jpg',
    alt: 'Image 3',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691875067/950966ee-b4dc-447d-90c5-39bf71b4b8a2_1_d3hp4b.jpg',
    alt: 'Image 4',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/lata_at_first_zrrunk.jpg',
    alt: 'Image 5',
  }
  ,
  {
    id: 6,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/arijit_2_r1kajw.jpg',
    alt: 'Image 6',
  }
  ,
  {
    id: 7,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/12.jpeg_nnfskm.jpg',
    alt: 'Image 7',
  }
  ,
  {
    id: 8,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089431/about/11.jpeg_o9qcbm.jpg',
    alt: 'Image 8',
  }
  ,
  {
    id: 9,
    src: 'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089432/about/4.jpeg_rjm3cz.jpg',
    alt: 'Image 9',
  },
  {
    id:10,
    src:'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692300139/gallery_qut9iq.jpg',
    alt:'image10',

  }
];
function About() {
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
  return (
    <div className=' w-full nhd-profile flex flex-col '>
      {/* <div className=" w-full h-[40vh] relative">
       <Image src="/cover1.jpg" alt='cover'  fill={true} />
      </div>
      
      <ContactUs/>
      <About_humtoo/>
      </div> */}
      
      <div id='home' className='mt-10'>
      <About_humtoo/>
      </div>
      <div className=' h-auto ' id='gallery'>
      <NhdImageGallery images={images}/>
     
      </div>
      <div className='mt-20' id='contact'>
      <ContactUs/>
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

export default About;