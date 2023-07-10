// ImageSlider.jsx
import React from 'react';
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
        slidesPerView={3}
        spaceBetween={1}
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
            <img className='w-[500px] h-[350px]' src={imageUrl} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
