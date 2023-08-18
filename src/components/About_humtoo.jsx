import React from 'react';
import Image from "next/image";
import img from '@/assets/humtoo.jpeg';
import ContactUs from './ContactUs';
import Nhd_gallery from '@/components/Nhd_gallery';
import ImageSlider from './ImageSlider';

function About_humtoo() {
  // const images = [
  //   'https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg',
  //   'https://cdn.pixabay.com/photo/2016/11/29/06/17/audience-1867754_640.jpg',
  //   'https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_640.jpg',
  //   'https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_640.jpg',
  // ];
  
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='w-full flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:gap-20'>
      <div className='md:w-1/2 m-auto'>
        <h1 className='text-3xl text-white font-semibold xl:pl-4 md:p-4 sm:pl-2 '>Nirmalya Humtoo Dey</h1>
        <p className='text-white p-1 tracking-wide'>
        Introduced to music at the tender age of 6 by his grandfather Lt. Alok Nath Dey (a renowned flautist and music composer), the right-hand man and arranger for Satyajit Ray for all his ventures starting from “Pather Panchali” till“Agantuk”. Being the 6th generation musician in his family, Nirmalya bears the legacy and preserves century-old instruments (especially flutes). In his initial training years, he was trained by his grandfather and Pandit Ajay Chakraborty. At the tender age of 13, he performed his first musical concert with the legendary Dr. Bhupen Hazarika in various public performances followed by performances with the stalwarts like Ustad Amjad Ali Khan and his sons, Manna Dey, Arati Mukherjee, Mrs. Shipra Bose, Amit Kumar, Ravindra Jain, M.M. Kreem, and in the recent past, he performed with acclaimed artists like Adnan Sami, Mohit Chauhan, Pritam Chakravarty, Ankit Tiwari,  Richa Sharma, Rahat Fateh Ali Khan, Sukhwinder Singh, Shreya Ghosal, Bhupinder and Mitali Singh. N-H-D has also been a part of various directorial ventures by Sandeep Ray, Mrinal Sen, Goutam Ghose, Rituparno Ghosh, Karan Johar, Sanjay Leela Bhansali,
  Ram Gopal Verma to name a few. Currently, he is the core member woodwinds artist in the Live band of Arijit Singh (ASL).
        </p>
      </div>
      <div className='flex w-full h-full p-5 xl:w-1/2 md:w-1/2 sm:h-full sm:w-full justify-center items-center'>
        <img className="w-full" src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090751/Nhd/Landing%20page/_90A7443_zrb2vk.jpg" alt="" />
      </div>
    </div>
      <div className='flex justify-center items-center flex-col gap-3 mt-16 p-1'>
        <h1 className='text-3xl text-white'>Professional Synopsis</h1>
        <p className='text-base text-white'>NHD has over 20 years of experience in the Music Industry as a Music Producer, Music Programmer, Arranger, Composer, Woodwind designer, and now a Teacher and an Inspirational Speaker as well.</p>
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
        <div className='flex justify-center items-center flex-col mt-10 gap-5 p-1'>
          <h1 className='text-2xl text-white items-center m-auto '>Professional Training:</h1>
          <ul className='list-disc'>
            <li className='text-white text-base'>Introduction to flute training -  Shri Aloke Nath Dey.</li>
            <li className='text-white text-base'>Talim and development in Hindustani Classical - Pt. Ajay Chakraborty.</li>
            <li className='text-white text-base'>World Music Training - Self-Adaptation and Training</li>
          </ul>
        </div>
        <div className='flex justify-center items-center flex-col mt-10 gap-5 p-1'>
          <h1 className='text-3xl text-white'>Area of Expertise:</h1>
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
            <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
              Mixing and Mastering
            </button>
          </div>
          <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full xl:relative xl:right-5">
            The background score for Feature Films, Serials and Web Series
          </button>
        </div>
        <div className='flex justify-center items-center flex-col mt-10 gap-10 p-10 '>
          <h1 className='text-4xl text-white'>Experiences:</h1>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Live Performances :</h1>
            <ul className='list-none text-xl text-teal-200 flex flex-col gap-2 mt-5'>
              <li> Budding Years:</li>
              <ul className='list-disc text-white text-base flex flex-col gap-2'>
                <li>He started his live Music career by performing at ‘All India Radio and Doordarshan’ (Kolkata).</li>
                <li>He then became a core member of the perennial ‘Bangla Band’ - “Paras Pathar”. Working with legendary artists like Dr. Bhupen Hazarika, Manna Dey, Ustad Amzad Ali Khan, Ravindra Jain, and M.M. Kareen is definitely one of the milestones in his professional career.</li>
                <li>From the year 2005, he had been accompanying Mr. Adnan Sami and Sunidhi Chauhan for his musical World Tour all the way to the United States of America, New Zealand, Canada, several cities in The United Kingdom, Australia, Holland, Bangkok and Thailand and many places in the United Arab Emirates.
                </li>
              </ul>
            </ul>
            <ul className='list-none text-xl text-teal-200 flex flex-col gap-2 mt-5'>
              <li> Recent Years (Current):</li>
              <ul className='list-disc text-white text-base flex flex-col gap-2'>
                <li>Recently since 2017, he has been performing and travelling with the Arijit Singh Live band as a core member for national and international voyages.</li>
                <li>He is also one of the founding members and a core member of the Eastern Folks Band.
                </li>
                <li>His current personal venture consists of the N-H-D Live band which seeks to create a national and later an international identity.
                </li>
              </ul>
            </ul>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Film Career</h1>
            <p className='text-white text-md mt-2'>
              N-H-D played for several renowned directors like Goutam Ghosh, Sandip Ray,  Mrinal Sen, Rituparno Ghosh, Ram Gopal Verma, Farah Khan, Sanjay Leela Bhansali, Karan Johar, Anurag Basu, Rohit Shetty and many more.
            </p>
          </div>
          <div className='w-full md:w-1/2'>
            <h1 className='text-2xl text-white'>Experience as a Session Musician</h1>
            <p className='text-white text-md mt-2'>
              It will not be out of place to mention here that in many private album recordings, N-H-D has accompanied singers like Manna Dey,  Pt Ajoy Chakraborty, Arati Mukherjee, Srikanta Achariya, Idraneel Sen, Nachiketa Chakravorty, Jubeen Garg,  Sunidhi Chauhan, Benny Dayal, Shreya Ghoshal, Kumar Sanu, Babul Supriyo, Abhijeet Bhattacharya, Adnan Sami and many others.
            </p>
          </div>
          <div className='flex justify-center items-center flex-col gap-5'>
            <h1 className='text-4xl text-white'>Achievements:</h1>
            <div className='w-full flex flex-col justify-center items-center'>
              <p className='text-white text-md flex flex-col'>
                NHD has outdone his own performances in movies, be it Bollywood or Tollywood, the Television Industry or the recent OTT platforms.
                <span className='flex justify-center items-center'>His mention worthy performances are:
                </span>
              </p>
              <ul className='list-none text-xl text-teal-200 flex flex-col justify-center items-center  gap-2 mt-5'>
                <li> BOLLYWOOD :</li>
                <ul className='list-disc text-white text-base'>
                  <li>Piya Tora Kaisa Abhiman -  Raincoat/ 2004, Pihu Bole - Parineeta/ 2005, Agar Tum - Zeher/ 2005, I Love You - Bodyguard/ 2011, All Songs of Barfi - Barfi/ 2012, Tum Hi Ho -  Aashiqui2 /2012, Title Track - Humari Adhuri Kahani/ 2015, Gerua- Dilwale/ 2015, Title Track - Ae Dil Hai Mushkil/2016, Shayad - Love Aaj Kal 2/ 2020.</li>
                  <li>He has also been part of several television and OTT ventures by Ekta Kapoor’s <span className='font-semibold tracking-wide'>“Balaji Productions”</span>.
                  </li>
                </ul>
              </ul>
              <ul className='list-none text-xl text-teal-200 flex flex-col justify-center items-center  gap-2 mt-5'>
                <li>TOLLYWOOD :</li>
                <ul className='list-disc text-white text-base'>
                  <li>N-H-D has had the privilege of performing a solo flute recital before the Honourable President of India, Dr.Shankar Dayal Sharma in the year 1995 at Rashtrapati Bhavan.
He also had the privilege of performing in a forum before former Prime Minister Shri P.V. Narasimha Rao.
</li>
                  <li>He even won the award of Best Music Director in 2015 for exclusive music in the movie <span className='font-semibold tracking-wide'>Pakaram</span>.
                  </li>
                </ul>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About_humtoo;
