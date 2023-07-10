import React from 'react';
import logo from '@/assets/nhd_logo.png';
import {RiLiveLine} from "react-icons/ri"
import {MdOutlineArrowForwardIos} from "react-icons/md"
import {SiYoutubestudio} from 'react-icons/si'
import {SiMusicbrainz} from 'react-icons/si'
import {SiGoogleclassroom} from 'react-icons/si'
function Nhd_section() {
  return (
    <div className="flex flex-wrap sm:h-full">
      <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2 sm:h-full ">
        <div className=" h-full flex flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-start hover:scale-[1.06] transform transition-scale duration-200 cursor-pointer p-4">
        <div className='flex justify-between w-full'>
           <div className="">
                  <RiLiveLine size={50} color='white'/>
            </div>
           <div className="bg-white/20 h-[34px] w-[34px] rounded-full flex items-center justify-center ">
              <MdOutlineArrowForwardIos size={20} />
          </div>
        </div>
          <h2 className="text-lg font-bold ">NHD</h2>
          <h4 className="font-bold text-fuchsia-800">Live</h4>
          <p className="mt-2 text-sm text-white">
          A premium band created in collaboration with the finest musicians that caters to the live audience's classic charm as well as creative wilderness.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2  md:w-1/4 px-2  py-2 sm:h-full">
        <div className="flex h-full  flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-start hover:scale-[1.06] transform transition-scale duration-200 cursor-pointer p-4">
        <div className='flex justify-between w-full'>
           <div className="text-5xl text-white">
                  <SiYoutubestudio/>
            </div>
           <div className="text-6xl text-gray-400">
              <MdOutlineArrowForwardIos/>
          </div>
        </div>
          <h2 className="text-lg font-bold">NHD</h2>
          <h4 className="font-bold text-fuchsia-800">Studio</h4>
          <p className="mt-2 text-sm text-white">
          A lucrative haven for sounding recording and studio renting pursuits guided by our experienced in-house sound engineers.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 px-2 py-2  sm:h-full">
        <div className="flex h-full  flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-start hover:scale-[1.06] transform transition-scale duration-200 cursor-pointer p-4">
        <div className='flex justify-between w-full'>
           <div className="text-5xl text-white">
                  <SiMusicbrainz/>
            </div>
           <div className="text-6xl text-gray-400">
              <MdOutlineArrowForwardIos/>
          </div>
        </div>
          <h2 className="text-lg font-bold">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 ">Production</h4>
          <p className="mt-2 text-sm text-white">
          A seamless arrangement of audio post-production for music and movie ventures curated meticulously by industry-level musicians and composers.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2  md:w-1/4 px-2 py-2  sm:h-full">
        <div className="flex h-full  flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-start hover:scale-[1.06] transform transition-scale duration-200 cursor-pointer p-4">
        <div className='flex justify-between w-full'>
           <div className="text-5xl text-white ">
                  <SiGoogleclassroom/>
            </div>
           <div className="text-6xl text-gray-400">
              <MdOutlineArrowForwardIos/>
          </div>
        </div>
          <h2 className="text-lg font-bold">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative">Institute</h4>
          <p className="mt-2 text-sm text-white">
          A unique blend of woodwinds, flute, audio-production, sound engineering and playback-vocal master level classes and specialization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nhd_section;
