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
import SocialMediaContainer from '@/components/SocialMediaContainer';
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
  ]
  const audiolist1 = [
    'Tascam US16x16',
    'Soundcraft Signature 12MTK'

  ]
  const daw = [
    'Cubase 12 Pro',
    'Logic Pro',
    'Studio One 6',
    'Nuendo'

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

  const preamps = [
    'ART (Applied Research And Technology) Tube MP',
    'ART (Applied Research And Technology) Tube MP Studio'
  ]
  const ucs = [
    'Behringer X Touch One'
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
  const data= [
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667045/cubase_h70hhr.png',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667048/logic_x_algpxk.png',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667046/studioone_1_asb0ng.png',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667049/Neuendo_gkfnwe.png'
   ]
  return (
    <div className='h-full w-full'>
      <div id='home' className=" w-full h-[50vh] relative">
        <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691606888/NHD_studio_c29jpv.png" quality={100} alt='cover' fill={true} />
      </div>
      <div className="content mt-10 mb-20" >

        <ZigBox data={Nhdstudio_data} />
      </div>

      <div className=" flex justify-start flex-col">

      <div className=' w-100 md:w-30  mx-auto' id='about' >
        <BullateList items={studioService} bullatetype={false} title={'Services that we provide:'} />
      </div>


      <div className='flex justify-center items-center'><SocialMediaContainer data={data}/></div>

      
      <div className=' mt-10 w-100 md:w-30 mx-auto'>
        <BullateList items={equipmentList}
          bullatetype={false}
          title={'Equipment List:'}>
        
       
          <BullateList
            items={audiolist1}
            bullatetype={false}
            subtitle="Audio Interface :"/>


     

          <BullateList
            items={daw}
            bullatetype={false}
            subtitle="DAW( Digital Audio Workstation ) of NHD :"/>

      
      
 
          <BullateList
            items={microphone}
            bullatetype={false}
            subtitle="Microphones :"/>


 
          <BullateList
            items={preamps}
            bullatetype={false}
            subtitle=" Preamps :"/>


     
          <BullateList
            items={ucs}
            bullatetype={false}
            subtitle="Univercal Control Serface (UCS) :"/>

          </BullateList>
          </div>
    <div className=""  id='charges'> <ImageSlider imageUrls={imageUrls}/></div>
    <div className='w-100 md:w-30 mx-auto  '>
        <BullateList items={booking} bullatetype={false} title={'Booking Charges:'} />
      </div>
              </div>
      <div className="" id='contact'>
        <ContactUs />
      </div>
     

      

    </div>
  )
}

export default About;