// ImageSlider.jsx
import { useEffect, useState } from 'react';
import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
SwiperCore.use([Autoplay]);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'
import Image from 'next/image';
const imageUrls = [
  'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
  'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
  'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
  'https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_640.jpg',
  'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_640.jpg',
];

export default function ImageSlider() {
  const [slider,setSlider] = useState(false)
  useEffect(()=>{
    setSlider(true)
  })
 const [scount, setscount] = useState(3);
  
 useEffect(() => {
  // Event listener 
  const handleResize = () => {
    if(window.innerWidth<=500){
      setscount(1)
    }
    else{
      setscount(3);
    }
  };

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
},[])
  
  return (
    <>
      {slider&&< Swiper 
        slidesPerView={scount}
        spaceBetween={1}
        loop={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <Image className='w-[500px] h-[350px] shadow-2xl' height={300} width={200} src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>}
    </>
  );
}
