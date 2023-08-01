import React from 'react';
import Image from 'next/image';
import img from '@/assets/humtoo.jpeg';

function Welcome() {
  return (
    <div className='w-full h-[30rem] sm:h-full backdrop-blur-sm bg-white/20 rounded-2xl drop-shadow-2xl'>
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 h-full  flex justify-center items-center">
          <Image src='https://res.cloudinary.com/dct1gazgb/image/upload/v1690380371/_E7A3683_a8shga.jpg' width={100} height={100}  className="h-100 w-[10rem] h-[10rem] rounded-full outline outline-white outline-4 shadow-lg" alt="logo" />
        </div>
        <div className='h-auto md:h-100  text-center md:text-left md:p-6 md:w-2/3 sm:mb-10'>
          <h1 className='text-white text-2xl md:text-[3rem] mb-2'>Welcome All</h1>
          <h2 className='text-white text-base md:text-base md:text-[1.5 rem]'>
            Greetings one and all. I, Nirmalya Humtoo Dey the Founder and Director of NHD warmly welcome you to our website. We through our website will be taking you through a harmonic ride of symphony creation, presentation, and even live coaching sessions.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
