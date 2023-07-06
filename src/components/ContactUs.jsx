import React from 'react'

function ContactUs() {
  return (
    <div className='flex flex-col p-2 sm:flex-row sm:p-5 relative'>
        <div className="w-full bg-white/20  sm:w-1/2 flex flex-col justify-center items-start p-8">
          <p className='text-[3rem] sm:text-[4rem] text-white'>Get in touch !</p>
          <span className='bg-white h-1 w-10'></span>
          <div className="flex flex-col py-7 gap-4 justify-center items-start w-full sm:w-[80%] ">
            <input type="text" className='w-full h-[3rem] text-[1.3rem] px-2 ' name="" id="" placeholder='Enter Your Name'/>
            <input type="text" className='w-full h-[3rem] text-[1.3rem] px-2' name="" id="" placeholder='Enter a valid email address'/>
            <textarea resize name="" className='w-full resize-none text-[1.3rem] p-2' id="" cols="30" rows="10" placeholder='Enter your message'></textarea>
            <input className='bg-red-600 text-white px-8 py-2' type="button" value="Submit" />
          </div>
        </div>
        <div className="w-full sm:w-1/2 bg-white/20">
            <div className="w-full sm:w-[45%] h-[80%]  bg-white/50 sm:absolute sm:top-1/2 sm:left-2/3 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 flex flex-col-reverse sm:flex-row  justify-start items-center ">
                <div className="add flex flex-col w-full sm:w-[30%] h-full  p-5 sm:p-10">
                    <h2 className='font-semibold uppercase text-[1.3rem] py-5'>Address</h2>
                    <p className='text-slate-600 text-xl py-2'>123 Mg road ,21 Avenue , Kolkata , 700009 </p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Call Us</h2>
                    <p className='text-slate-600 text-xl py-2'> +91 84587 45474 </p>
                    <p className='text-slate-600 text-xl py-2'> +911 94587 45474 </p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Opening</h2>
                    <p className='text-slate-600 text-xl py-2'>24/7 10AM to 7PM</p>
                </div>
                <div className="map w-full sm:w-[70%] h-[20rem] sm:h-full bg-slate-200">

                <iframe className="h-full w-full" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=mumbai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs