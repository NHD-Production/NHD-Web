import React from 'react';
import logo from '@/assets/nhd_logo.png';
import { RiLiveLine } from "react-icons/ri"
import { MdOutlineArrowForwardIos } from "react-icons/md"
import { SiYoutubestudio } from 'react-icons/si'
import { SiMusicbrainz } from 'react-icons/si'
import { SiGoogleclassroom } from 'react-icons/si'
import Link from 'next/link';
function Nhd_section() {
  return (
    <div className="flex  flex-wrap h-auto  xl:h-full">
      <a href="/nhdlive" className="w-full h-[15rem] md:w-1/2 xl:w-1/4 px-2 py-2 sm:h-full " target="_blank" rel="noopener noreferrer">
       
          <div className=" h-full flex flex-col overflow-hidden rounded-xl shadow-2xl backdrop-blur-lg bg-gradient-to-t from-indigo-100/10 via-purple-500/50 to-pink-500/50 items-start hover:scale-[1.02] transform transition-scale duration-200 cursor-pointer p-4">
            <div className='flex justify-between w-full'>
              <div className="">
                <RiLiveLine size={30} color='white' />
              </div>

              <div className="bg-white/20 h-[34px] w-[34px] rounded-full flex items-center justify-center shadow-xl">
                <MdOutlineArrowForwardIos size={20} color='white' />
              </div>
            </div>
            <h2 className="text-base font-bold text-white ">NHD</h2>
            <h4 className="font-bold text-fuchsia-500">Live</h4>
            <p className="w-full text-p 2xl:text-h3 text-white">
              A premium band created in collaboration with the finest musicians that caters to the live audience&apos;s classic charm as well as creative wilderness.
            </p>
          </div>
      </a>
      <a href="/nhdstudio" className="w-full h-[15rem] md:w-1/2 xl:w-1/4 px-2  py-2 sm:h-full" target="_blank" rel="noopener noreferrer">

          <div className="flex h-full  flex-col overflow-hidden rounded-xl shadow-2xl backdrop-blur-md bg-gradient-to-t from-indigo-100/10 via-purple-500/50 to-pink-500/50 items-start hover:scale-[1.02] transform transition-scale duration-200 cursor-pointer p-4">
            <div className='flex justify-between w-full'>
              <div className="">
                <SiYoutubestudio size={30} color='white' />
              </div>
              <div className="bg-white/20 h-[34px] w-[34px] rounded-full flex items-center justify-center shadow-xl">
                <MdOutlineArrowForwardIos size={20} color='white' />
              </div>
            </div>
            <h2 className="text-base font-bold text-white">NHD</h2>
            <h4 className="font-bold text-fuchsia-500">Studio</h4>
            <p className=" text-p 2xl:text-h3 text-white">
              A lucrative haven for sounding recording and studio renting pursuits guided by our experienced in-house sound engineers.
            </p>
          </div>
      </a>
      <a href="/nhdproduction" className="w-full h-[15rem] md:w-1/2 xl:w-1/4 px-2 py-2  sm:h-full" target="_blank" rel="noopener noreferrer">
       
          <div className="flex h-full  flex-col overflow-hidden rounded-xl backdrop-blur-md shadow-2xl bg-gradient-to-t from-indigo-100/10 via-purple-500/50 to-pink-500/50 items-start hover:scale-[1.02] transform transition-scale duration-200 cursor-pointer p-4">
            <div className='flex justify-between w-full'>
              <div className="">
                <SiMusicbrainz size={30} color='white' />
              </div>
              <div className="bg-white/20 h-[34px] w-[34px] rounded-full flex items-center justify-center shadow-xl">
                <MdOutlineArrowForwardIos size={20} color='white' />
              </div>
            </div>
            <h2 className="text-base font-bold text-white">NHD</h2>
            <h4 className="font-bold text-fuchsia-500 ">Production</h4>
            <p className="text-p 2xl:text-h3 text-white">
              A seamless arrangement of audio post-production for music and movie ventures curated meticulously by industry-level musicians and composers.
            </p>
          </div>
      </a>
      <a href="/nhdclasses" target="_blank" className="w-full h-[15rem] md:w-1/2 xl:w-1/4 px-2 py-2  sm:h-full" rel="noopener noreferrer">
        
          <div className="flex h-full  flex-col overflow-hidden rounded-xl shadow-2xl backdrop-blur-md bg-gradient-to-t from-indigo-100/10 via-purple-500/50 to-pink-500/50 items-start hover:scale-[1.02] transform transition-scale duration-200 cursor-pointer p-4">
            <div className='flex justify-between w-full'>
              <div className="">
                <SiGoogleclassroom size={30} color='white' />
              </div>
              <div className="bg-white/20 h-[34px] w-[34px] rounded-full flex items-center justify-center shadow-xl">
                <MdOutlineArrowForwardIos size={20} color='white' />
              </div>
            </div>
            <h2 className="text-base font-bold text-white">NHD</h2>
            <h4 className="font-bold text-fuchsia-500 relative">Classes</h4>
            <p className="text-p 2xl:text-h3 text-white ">
              A unique blend of woodwinds, flute, audio-production, sound engineering and playback-vocal master level classes and specialization.
            </p>
          </div>
      </a>
    </div>
  );
}

export default Nhd_section;
