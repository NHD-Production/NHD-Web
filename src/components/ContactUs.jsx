import React,{useState,useEffect} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {BiSolidCheckCircle} from "react-icons/bi";

function ContactUs() {
  const [formValue,setFormValue] = useState({ name: '' , email: '', type: '' , subject:'' , body: '' })
  const [deliveryStatus,setDelivaryStatus] = useState(true)
  const [Loading,setLoading] = useState(false)
  useEffect(() => {
    if(deliveryStatus){
     const delivarytimer = setTimeout(() => {
        setDelivaryStatus(false)
      }, 2000);
      return ()=> clearTimeout(delivarytimer)
    }

    return ()=>null
  },[deliveryStatus])
  return (
    <div className='flex flex-col p-2 xl:flex-row xl:p-5 relative' id='contact'>
        <div className="w-full xl:w-1/2 bg-white/20  flex flex-col justify-center items-start p-3  md:p-8">
          <p className='text-[2.5rem] xl:text-[4rem] text-white'>Get in touch !</p>
          <span className='bg-white h-1 w-10'></span>
       {!deliveryStatus ?   <Formik
       initialValues={formValue}
       validationSchema={Yup.object({
        name : Yup.string().required('Please Enter Name'),
        email: Yup.string().required('Please Enter Email'),
        type: Yup.string().required('Please Select Email Type'),
        subject: Yup.string().required('Please Enter Email Subject'),
        body: Yup.string().required('Please Enter Email Body')
      })}
       onSubmit={ async (values) => {
         setLoading(true)
         await emailjs.send('service_g1cwgf8', 'template_wmblkvi', values, 'HDABb1Hz76qpigItG')
         .then((res) => {
          setLoading(false)
          setFormValue({ name: '' , email: '', type: '' , subject:'' , body: '' })
          setDelivaryStatus(true)
  })
  .catch((error) => {
        console.log("Not OK not 200")
        console.log(error)
       })}}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
          <form className="text-white flex flex-col py-7 gap-4 justify-center items-start w-full xl:w-[80%]  " onSubmit={handleSubmit}>
            <input type="text" className='w-full h-[3rem] text-[1.3rem] px-2 bg-white/20 shadow-lg rounded-sm placeholder-white/75 focus:placeholder-white/95' name="name" id="name" placeholder='Enter Your Name'  onChange={handleChange}
             onBlur={handleBlur} required
             value={values.name}/>
            <input type="text" className=' w-full h-[3rem] text-[1.3rem] px-2 bg-white/20 shadow-lg rounded-sm  placeholder-white/75 focus:placeholder-white/95' name="email" id="email" placeholder='Enter a valid email address'  onChange={handleChange}
             onBlur={handleBlur} required
             value={values.email}/>
           <div className='flex gap-4 md:gap-2 flex-col md:flex-row justify-between w-full items-center'>
           <select
        className="block w-full  md:w-[30%] h-[3rem] bg-white/20  border border-fuchsia-700 shadow-xl px-1 focus:outline-none focus:border-blue-500" name="type" required onChange={handleChange}
        onBlur={handleBlur}
        value={values.type}>
        <option className='text-black' value="">Choose Any</option>
        <option className='text-black' value="Nhd_Live">Nhd_Live</option>
        <option className='text-black' value="Nhd_Studio">Nhd_Studio</option>
        <option className='text-black' value="Nhd_Production">Nhd_Production</option>
        <option className='text-black' value="Nhd_Classes">Nhd_Classes</option>
      </select>
            <input type="text" className='w-full md:w-[80%] h-[3rem] text-[1.3rem] px-2  bg-white/20 shadow-lg rounded-sm  placeholder-white/75 focus:placeholder-white/95' name="subject" id="subject" placeholder='Subject'  onChange={handleChange}
             onBlur={handleBlur} required
             value={values.subject}/></div>
            <textarea name="body" className='w-full resize-none text-[1.3rem] p-2  bg-white/20 shadow-xl rounded-sm  placeholder-white/75 focus:placeholder-white/95' id="" cols="30" rows="10"  placeholder='Enter your message'  onChange={handleChange}
             onBlur={handleBlur} required
             value={values.body}></textarea>
             {
              Loading ?
              <button className='bg-white/20 shadow-xl rounded-sm text-white w-full md:w-auto px-8 py-2 hover:scale-[1.09] cursor-pointer'>Sending...</button>
              :<input  className='bg-white/20 shadow-xl rounded-sm text-white w-full md:w-auto px-8 py-2 hover:scale-[1.09] cursor-pointer' type="submit" value="Submit" />
             }
            
        </form>
       )}
        </Formik> : <div className='h-[65vh]  w-full xl:w-[80%] flex justify-center items-center flex-col '>
        <BiSolidCheckCircle className='text-green-500' size={100}/>
        <p className='text-white text-[2.5rem] font-bold'>Success</p>
        
        </div>}
          </div>
          <div/>
        <div className="w-full xl:w-1/2 bg-white/20 ">
            <div className="w-full xl:w-[50%] h-[80%]  bg-white/50 xl:absolute xl:top-1/2 xl:left-2/3 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col-reverse xl:flex-row  justify-start items-center ">
                <div className="add flex flex-col w-full xl:w-[40%] h-full  p-5 xl:p-10">
                    <h2 className='font-semibold uppercase text-[1.3rem] py-5'>Address :</h2>
                    <p className='text-slate-600 text-xl '>76 Jyotish Roy Road</p>
                    <p className='text-slate-600 text-xl '>1st floor New Alipore </p>
                    <p className='text-slate-600 text-xl '>Kolkata</p>
                    <p className='text-slate-600 text-xl '>West Bengal 700053</p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Call Us</h2>
                    <p className='text-slate-600 text-xl py-2'>+91 9892727256</p>
                    <p className='text-slate-600 text-xl py-2'>+91 9653494407</p>
                    <p className='text-slate-600 text-xl py-2'>+91 8582872045</p>
                    <h2 className='uppercase font-semibold text-[1.3rem] py-5'>Opening</h2>
                    <p className='text-slate-600 text-xl py-2'>24 hours open</p>
                    <p className='uppercase font-semibold text-[1.3rem] py-5'>Mail us</p>
                    <p className='text-slate-600 font-bold text-base xl:relative xl:right-4'>nhumtoodproductions@gmail.com</p>
                    
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