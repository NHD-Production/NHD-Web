import React from 'react'
import Dropdown from './Dropdown'

function ContactUs() {
  return (
    <div className='flex flex-col p-2 xl:flex-row xl:p-5 relative'>
        <div className="w-full xl:w-1/2 bg-white/20  flex flex-col justify-center items-start p-8">
          <p className='text-[3rem] xl:text-[4rem] text-white'>Get in touch !</p>
          <span className='bg-white h-1 w-10'></span>
          <div className="flex flex-col py-7 gap-4 justify-center items-start w-full xl:w-[80%] ">
            <input type="text" className='w-full h-[3rem] text-[1.3rem] px-2 bg-white/20 shadow-lg rounded-sm placeholder-black/75 focus:placeholder-black/95' name="" id="" placeholder='Enter Your Name'/>
            <input type="text" className='w-full h-[3rem] text-[1.3rem] px-2 bg-white/20 shadow-lg rounded-sm  placeholder-black/75 focus:placeholder-black/95' name="" id="" placeholder='Enter a valid email address'/>
           <div className='flex justify-between w-full'> <Dropdown/> 
            <input type="text" className='w-[80%] h-[3rem] text-[1.3rem] px-2 mt-3 bg-white/20 shadow-lg rounded-sm  placeholder-black/75 focus:placeholder-black/95' name="" id="" placeholder='Subject'/></div>
            <textarea name="" className='w-full resize-none text-[1.3rem] p-2  bg-white/20 shadow-xl rounded-sm  placeholder-black/75 focus:placeholder-black/95' id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
            <input className='bg-white/20 shadow-xl rounded-sm text-white px-8 py-2 hover:scale-[1.09] hover:shadow-2xl cursor-pointer' type="button" value="Submit" />
          </div>
        </div>
        <div className="w-full xl:w-1/2 bg-white/20 ">
            <div className="w-full xl:w-[45%] h-[80%]  bg-white/50 xl:absolute xl:top-1/2 xl:left-2/3 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col-reverse xl:flex-row  justify-start items-center ">
                <div className="add flex flex-col w-full xl:w-[30%] h-full  p-5 xl:p-10">
                    <h2 className='font-semibold uppercase text-[1.3rem] py-5'>Address</h2>
                    <p className='text-slate-600 text-xl py-2'>123 Mg road ,21 Avenue , Kolkata , 700009 </p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Call Us</h2>
                    <p className='text-slate-600 text-xl py-2'> +91 84587 45474 </p>
                    <p className='text-slate-600 text-xl py-2'> +911 94587 45474 </p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Opening</h2>
                    <p className='text-slate-600 text-xl py-2'>24/7 10AM to 7PM</p>
                </div>
                <div className="map w-full xl:w-[70%] h-[20rem] xl:h-full bg-slate-200">

                <iframe className="h-full w-full" frameBorder="0"   src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=NHD Productions and studios&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs