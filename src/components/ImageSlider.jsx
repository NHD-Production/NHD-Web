// ImageSlider.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';

SwiperCore.use([Autoplay]);

export default function ImageSlider({ imageUrls }) {
  const [slider, setSlider] = useState(false);
  useEffect(() => {
    setSlider(true);
  }, []);

  const [scount, setscount] = useState(3);

  useEffect(()=>{
    if(window.innerWidth<=500){
      setscount(1)
    }
    else{
      setscount(3)
    }
  },[])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        setscount(1);
      } else if(window.innerWidth <= 1000) {
        setscount(2);
      }
      else{
        setscount(3);
      }
    };

    const resize = window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize' ,resize);

    };
  }, [scount]);

  return (
    <>
      {slider && (
        <Swiper
          slidesPerView={scount}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper p-0 m-0"
        >
          {imageUrls?.map((imageUrl,index) => (
            <SwiperSlide key={index}>
              <Image
                className='w-[550px] h-[250px] md:h-[350px] shadow-2xl'
                height={300}
                width={1000}
                src={imageUrl}
                quality={100}
                alt={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      )}
    </>
  );
}
