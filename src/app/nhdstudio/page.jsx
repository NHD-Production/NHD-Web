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
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690384063/_E7A3575-HDR_uaztz8.jpg',
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690380938/_E7A3600_ffrmy9.jpg',
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690380941/_E7A3638_phhlw3.jpg',
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690380363/_90A3708_lmn8eq.jpg',
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690384052/_E7A3547-HDR_knh5sj.jpg',
    'https://res.cloudinary.com/dct1gazgb/image/upload/v1690384058/_E7A3668_jrffr0.jpg',
  ];
  return (
    <div className='h-full w-full'>
      <div className=" w-full h-[50vh] relative">
        <Image src="https://res.cloudinary.com/dct1gazgb/image/upload/v1690380769/nhd_production_banner_showreel_u3g7so.jpg" alt='cover' fill={true} />
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