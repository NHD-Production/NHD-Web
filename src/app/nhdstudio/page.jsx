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
import { Nhdstudio_data } from '@/assets/content';
import BullateList from '@/components/BullateList';
function About() {
  
  const studioService = [
    'Studio rental for voice recording',
    'Instrument Recording',
    'Dialogue Dubbing.',
    'Provision of an In-House Audio Engineer',
    'Provision of In-House Voice-Over Artist for film dubbing.'
  ];
  const equipmentList = [
    'Computer - M2 Max Mac Studio',
    'Studio Monitors - Yamaha HS8',
    'Audio Interface :',
  ]
  const audiolist1 = [
    'Tascam US16x16',
    'Soundcraft Signature 12MTK'

  ]
  const daw = [
    'Cubase 12 Pro',
    'Logic Pro',
    'Studio One 6.'

  ]
  const microphone = [
    'Warm Audio WA-251',
    'Tascam TM-80',
    'Samson C02',
    'Shure SM57',
    'SE Electronics X1A.'

  ]
  const booking = [
    'Studio Charges from 12 P.M. to 12 A.M. -  Rs. 700/ Hour',
    'Studio Charges from 12 A.M. to 12 P.M. - Rs. 900/ Hour',
    'Minimum Booking Hours: 2 Hours'
  ]

  const { theme } = useContext(GlobalContext)
  const [Themecolor, setThemecolor] = theme;
  const imageUrls = [
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3547-HDR-min_b0rvp0.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159272/_E7A3668-min_j7wavs.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159606/_E7A3459-HDR-min_bfzm81.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3575-HDR-min_nmd8g2.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159087/_E7A3619_uo5as6.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159086/_E7A3638_qyqqeb.jpg',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159086/_E7A3600_itaa2t.jpg'
  ];
  return (
    <div className='h-full w-full'>
      <div className=" w-full h-[50vh] relative">
        <Image src="/cover1.jpg" alt='cover' fill={true} />
      </div>
      <div className="content mt-10 mb-20">

        <ZigBox data={Nhdstudio_data} />
      </div>
      <div className='flex flex-col justify-center items-center m-10 '>
        <BullateList items={studioService} bullatetype={false} desc={'Services that we provide:'} />
      </div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <BullateList items={equipmentList}
          bullatetype={false}
          desc={'Equipment List:'}>
        </BullateList>
        <div className='relative bottom-5 left-3'>
          <BullateList
            items={audiolist1}
            bullatetype={false}
            desc={null}>

          </BullateList>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center relative bottom-5' >
        <ul className='list-disc text-base text-white relative left-8'>
          <li>DAW( Digital Audio Workstation ) of NHD</li>
        </ul>
        <div className='relative bottom-5 right-10'>
          <BullateList
            items={daw}
            bullatetype={false}
            desc={null}>
          </BullateList>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center relative bottom-10' >
        <ul className='list-disc text-lg text-white relative right-14'>
          <li>Microphones :</li>
        </ul>
        <div className='relative bottom-5 right-5 '>
          <BullateList
            items={microphone}
            bullatetype={false}
            desc={null}>
          </BullateList>
        </div>
      </div>
    <div className=""> <ImageSlider imageUrls={imageUrls}/></div>
    <div className='flex flex-col justify-center items-center m-10'>
        <BullateList items={booking} bullatetype={false} desc={'Booking Charges:'} />
      </div>
      <div className="">
        <ContactUs />
      </div>
     

      

    </div>
  )
}

export default About;