import React from 'react';
import Image from "next/image";
import img from '@/assets/humtoo.jpeg';
import ContactUs from './ContactUs';
import Nhd_gallery from '@/components/Nhd_gallery';
import ImageSlider from './ImageSlider';

function About_humtoo() {
  const images = [
    'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
  ];
  return (
    <div>
      <div className='w-full flex flex-col items-center md:flex-row justify-center md:gap-10 '>
        <div className='md:w-1/2 m-auto'>
          <h1 className='text-3xl text-white'>Niramalya Humtoo Dey</h1>
          <p className='text-white p-5'>
            N-H-D got introduced to the flute at the age of 6. He started playing professionally at the age of 13 and is the sixth generation musician in his family. He got his initial training from his Grandfather Lt. Aloke Nath Dey (renowned flautist and music composer) and Pandit Ajay Chakravorty. Acclaimed artist having experience of 100+ national and international performances. N-H-D has performed with the stalwarts like Ustad Amjad Ali Khan, Manna Dey, Arati Mukherjee, Richa Sharma, Rahat Fateh Ali Khan, Arijit Singh, Sukhwinder Singh, Adnan Sami, Shreya Ghosal, Bhupinder and Mitali Singh, and Mohit Chauhan. N-H-D have also been a part of various directorial ventures by Sandeep Ray, Mrinal Sen, Goutam Ghose, Rituparno Ghosh, Karan Johar, Sanjay Leela Bhansali, Ram Gopal Verma to name a few.
          </p>
        </div>
        <div className='flex w-1/3 justify-center items-center '>
        {/* <Nhd_gallery  images={images} width="100" /> */}
        </div>
      </div>
      <div className='flex justify-center items-center flex-col gap-3 mt-16'>
        <h1 className='text-4xl text-white'>Professional Synopsis</h1>
        <p className='text-base text-white'>19 years of experience in Music Industry</p>
        <div className='flex flex-col md:flex-row justify-center gap-6 mt-12'>
          <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
            Woodwind player
          </button>
          <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
            Music Programmer
          </button>
          <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
            Arranger and Composer
          </button>
        </div>
        <div className='flex justify-center items-center flex-col mt-10 gap-5 p-10'>
          <h1 className='text-4xl text-white items-center m-auto'>Training:</h1>
          <p className='text-base text-white items-center'>Got his first training under the guidance of my grandfather Shri Aloke Nath Dey. Also got talim from Pt. Ajay Chakravorty.</p>
        </div>
        <div className='flex justify-center items-center flex-col mt-10 gap-5 p-10'>
          <h1 className='text-4xl text-white'>Area of Expertise:</h1>
          <div className='flex flex-col md:flex-row justify-center gap-6 mt-12'>
            <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
              Woodwinds
            </button>
            <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
              Composing for Ad-Jingles
            </button>
            <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
              Audio Production
            </button>
          </div>
          <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full xl:relative xl:right-5">
            Background score for Feature Films
          </button>
        </div>
        <div className='flex justify-center items-center flex-col mt-10 gap-10 p-10 '>
          <h1 className='text-4xl text-white'>Experiences:</h1>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Live Performances</h1>
            <p className='text-white text-md mt-2'>
              Frequent performances in All India Radio and Doordarshan (Kolkata). N-H-D accompanied the stalwarts like Dr. Bhupen Hazarika, Mrs. Shipra Bose, Pt. Ajay Chakravorty, and Manna Dey in many public performances. N-H-D performed the compositions of great Ustad Amjad Ali Khan, along with his sons Ayan Ali and Amaan Ali Bangash. From the year 2005, he had been accompanying Mr. Adnan Sami for his musical tours all the way to the United States of America, Canada, several cities of The United Kingdom, Australia, Holland, Bangkok and Thailand, and many places in the United Arab Emirates.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Film Career</h1>
            <p className='text-white text-md mt-2'>
              N-H-D played for several renowned directors like Mr. Goutam Ghosh, Mr. Sandip Ray, Mr. Mrinal Sen, Mr. Rituparno Ghosh, Mr. Ram Gopal Verma, Mrs. Farah Khan, Mr. Sanjay Leela Bansali, Mr. Karan Johar, and many others.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Experience as a Session Musician</h1>
            <p className='text-white text-md mt-2'>
              It will not be out of place to mention here that in many private album recordings N-H-D have accompanied singers like Mr. Manna Dey, Pt Ajoy Chakravorty, Mrs. Arati Mukherjee, Mr. Sriaknta Achariya, Mr. Idraneel Sen, Mr. Nachiketa Chakravorty, Mr. Jubeen Garg, Ms. Sunidhi Chouhan, Mr. Benny Dayal, Ms. Shreya Ghoshal, Mr. Kumar Sanu, Mr. Babul Supriyo, Mr. Abhijeet Bhattachariya, Mr. Adnan Sami, and many others.
            </p>
          </div>
          <div className='flex justify-center items-center flex-col mt-10 gap-5 p-10'>
            <h1 className='text-4xl text-white'>Achievements:</h1>
            <div className='w-full md:w-1/2'>
              <p className='text-white text-md'>
                N-H-D also had the privilege of performing solo flute recitals before the Honourable President Of India, DR. Sankar Dayal Sharma in the year 1995 at RASTRAPATI BHABAN. Also got privileged to perform in front of our former Prime Minister Of India P.V.Narashima Rao in the same year at his residence.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <ContactUs />
        </div>
       
      </div>
    </div>
  );
}

export default About_humtoo;
