import React from 'react'
import Image from 'next/image';
import img from '@/assets/humtoo.jpeg';
function Welcome(){
    return (
     <div className='w-full bg-stone-300  rounded-xl drop-shadow-2xl'>
  <div className="flex  flex-col md:flex-row">
    <div className="md:w-1/3 flex justify-center md:justify-start">
      <Image src={img} className="h-36 w-36 rounded-full ml-5 mt-4 md:mt-10" alt="logo" />
    </div>
    <div className='h-auto md:h-64 text-center md:text-left mr-10 px-4 py-6 md:p-6 md:w-2/3'>
      <h1 className='text-white text-2xl md:text-4xl mb-4'>Welcome All</h1>
      <h2 className='text-white text-base md:text-lg'>
        Greetings one and all. I, Nirmalya Humtoo Dey the Founder and Director of NHD warmly welcome you to our website. We through our website will be taking you through a harmonic ride of symphony creation, presentation, and even live coaching sessions.
      </h2>
    </div>
  </div>
</div> )
}
export default Welcome