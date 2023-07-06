import React from 'react';
import img1 from '@/assets/DSC02015.JPG'
import Image from 'next/image';
function Nhd_gallery() {
  
  return (
    <div className="grid grid-cols-2 grid-rows-10 gap-1 h-full w-full">
      <div className=" row-span-4 cursor-pointer  ">
       <Image src={img1} className='h-full ' ></Image>
      </div>
      <div className="row-span-5 bg-red-500 cursor-pointer ">
         <Image src={img1} className='h-full ' ></Image>
      </div>
      <div className= "row-span-6 bg-slate-200 cursor-pointer ">
         <Image src={img1} className='h-full ' ></Image>
      </div>
      <div className="row-span-5 bg-yellow-100 cursor-pointer ">
         <Image src={img1} className='h-full ' ></Image>
        </div>
    </div>
  );
}

export default Nhd_gallery;
