// ImageSlider.jsx
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/css';
import 'swiper/css/pagination.css';
import 'swiper/css/navigation.css';
import './styles.css';
// swiper bundle style

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const imageUrls = [
  'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
  'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
  'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
  'https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341_640.jpg',
  'https://cdn.pixabay.com/photo/2016/11/19/11/11/dua-lipa-1838653_640.jpg',
];

export default function ImageSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
