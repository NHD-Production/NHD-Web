import React from 'react';
import logo from '@/assets/nhd_logo.png';

function Nhd_section() {
  return (
    <div className="flex flex-wrap ">
      <div className="w-full sm:w-1/2 mb-4 md:w-1/4 px-4">
        <div className="flex flex-col rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src={logo} alt="Logo 1" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold mt-6 relative ">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative mb-2">Live</h4>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea eos repudiandae
            provident dolor! Eveniet neque odit voluptatibus atque at sint dolor consequuntur
            magni, facere consequatur quas totam aperiam similique.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-4 md:w-1/4 px-4">
        <div className="flex flex-col rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo2.png" alt="Logo 2" className="w-12 h-12 relative " />
          <h2 className="text-lg font-bold mt-6 relative">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative  mb-2">Studio</h4>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea eos repudiandae
            provident dolor! Eveniet neque odit voluptatibus atque at sint dolor consequuntur
            magni, facere consequatur quas totam aperiam similique.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-4 md:w-1/4 px-4">
        <div className="flex flex-col rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo3.png" alt="Logo 3" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold mt-6 relative">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative mb-2">Production</h4>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea eos repudiandae
            provident dolor! Eveniet neque odit voluptatibus atque at sint dolor consequuntur
            magni, facere consequatur quas totam aperiam similique.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-4 md:w-1/4 px-4">
        <div className="flex flex-col rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 items-center hover:scale-125 transform transition-transform duration-100 cursor-pointer p-4">
          <img src="logo4.png" alt="Logo 4" className="w-12 h-12 relative" />
          <h2 className="text-lg font-bold mt-6 relative">NHD</h2>
          <h4 className="font-bold text-fuchsia-800 relative mb-2">Institute</h4>
          <p className="mt-2 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ea eos repudiandae
            provident dolor! Eveniet neque odit voluptatibus atque at sint dolor consequuntur
            magni, facere consequatur quas totam aperiam similique.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nhd_section;
