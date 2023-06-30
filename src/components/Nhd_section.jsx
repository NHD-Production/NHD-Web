import React from 'react';
import logo from '@/assets/nhd_logo.png';

function Nhd_section() {
  return (
    <div className="flex flex-wrap ">
      <div className="w-full sm:w-1/2 md:w-1/4 px-2">
        <div className="flex flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src={logo} alt="Logo 1" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold relative ">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative">Live</h4>
          <p className="mt-2 text-sm text-white">
          A premium band created in collaboration with the finest musicians that caters to the live audience's classic charm as well as creative wilderness.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2  md:w-1/4 px-2">
        <div className="flex flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo2.png" alt="Logo 2" className="w-12 h-12 relative " />
          <h2 className="text-lg font-bold relative">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 ">Studio</h4>
          <p className="mt-2 text-sm text-white">
          A lucrative haven for sounding recording and studio renting pursuits guided by our experienced in-house sound engineers.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 px-2">
        <div className="flex flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo3.png" alt="Logo 3" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold relative">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative">Production</h4>
          <p className="mt-2 text-sm text-white">
          A seamless arrangement of audio post-production for music and movie ventures curated meticulously by industry-level musicians and composers.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2  md:w-1/4 px-2">
        <div className="flex flex-col rounded-xl bg-gradient-to-r backdrop-blur-md bg-white/20 hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo4.png" alt="Logo 4" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold relative">NHD</h2>
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
