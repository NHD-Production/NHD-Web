"use client";
import About_humtoo from "@/components/About_humtoo";
import BullateList from "@/components/BullateList";
import ContactUs from "@/components/ContactUs";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Nhd_gallery from "@/components/Nhd_gallery";
import React, { useEffect, useState } from "react";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import ZigBox from "@/components/ZigBox";
import { useContext } from "react";
import { FaArrowUp } from "react-icons/fa";
import { demoData } from "@/assets/content";
import musicIcon  from "@/assets/music_letters.png";
import { Nhdstudio_data } from "@/assets/content";
import { GlobalContext } from "@/context/Globalcontext";

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
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692015059/My_project_gdtj1n.png',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667046/studioone_1_asb0ng.png',
    'https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691667049/Neuendo_gkfnwe.png'
   ]
  return (
    <div className='h-full w-full'>
      <div id='home' className=" w-full h-[20vh] lg:h-[50vh] relative">
        <Image src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691606888/NHD_studio_c29jpv.png" quality={100} alt='cover' fill={true} />
      </div>
      <div className='flex flex-col xl:flex-row items-center justify-evenly text-white text-2xl p-3 bg-black/80'>
        <Image src={musicIcon} alt="floating_music_image" />
        <p className="p-1 w-90 text-[1rem] xl:text-[1.6rem] text-center leading-normal">
      A lucrative haven for sounding recording and studio renting pursuits guided by our experienced in-house sound engineers.
     </p>
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