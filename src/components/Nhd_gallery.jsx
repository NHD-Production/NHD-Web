import React from 'react';

function Nhd_gallery() {
  
  return (
    <div className="grid grid-cols-2 grid-rows-10 gap-1 h-full w-full">
      <div className=" row-span-4 bg-green-100 cursor-pointer hover:scale-125 transform transition-transform duration-100 ">
        1
      </div>
      <div className="row-span-5 bg-red-500 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        2
      </div>
      <div className= "row-span-6 bg-slate-200 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        3
      </div>
      <div className="row-span-5 bg-yellow-100 cursor-pointer hover:scale-125 transform transition-transform duration-300">
        4
        </div>
    </div>
  );
}

export default Nhd_gallery;
