import React from 'react'
import Image from "next/image";
import img from '@/assets/humtoo.jpeg';
import ContactUs from './ContactUs';

function About_humtoo() {
    return (
        <div>
            <div className='w-full flex justify-center gap-10'>
                <div className='w-1/2'>
                    <h1 className='text-3xl text-white'>Niramalya Humtoo Dey</h1>
                    <p className='text-white p-5' >
                        N-H-D got introduced to the flute at the age of 6. He started playing professionally at the age of 13 and is the sixth generation musician in his family. He got his initial training from his Grandfather Lt. Aloke Nath Dey (renowned flautist and music composer) and Pandit Ajay Chakravorty. Acclaimed artist having experience of 100+ national and international performances. N-H-D has performed with the stalwarts like Ustad Amjad Ali Khan, Manna Dey, Arati Mukherjee, Richa Sharma, Rahat Fateh Ali Khan, Arijit Singh, Sukhwinder Singh, Adnan Sami, Shreya Ghosal,
                        Bhupinder and Mitali Singh, and Mohit Chauhan.N-H-D have also been a part of various directorial ventures by Sandeep Ray,Mrinal Sen, Goutam Ghose, Rituparno Ghosh, Karan Johar, Sanjay Leela Bhansali, Ram Gopal Verma to name a few.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    <Image className='h-[250px] w-[350px] shadow-xl cursor-pointer'
                        src={img}
                        alt='Humtoo'
                    ></Image>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-3 mt-16'>
                <h1 className='text-4xl text-white'>Professional Synopsis</h1>
                <p className='text-base text-white'>19 years of experience in Music Industry</p>
                <div className='flex justify-center gap-16 mt-12'>
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
                <div className='flex justify-center items-center flex-col mt-10 gap-5'>
                    <h1 className='text-4xl text-white'>Traning:</h1>
                    <p className='text-base text-white'>Got his first training under guidance of my grandfather Shri Aloke Nath Dey. Also got talim from Pt. Ajay Chakravorty.</p>
                </div>
                <div className='flex justify-center items-center flex-col mt-10 gap-5'>
                    <h1 className='text-4xl text-white'>Area of Expertise:</h1>
                    <div className='flex justify-center gap-16 mt-12'>
                        <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
                            Woodwinds
                        </button>
                        <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
                            Composing for Ad-Jingles.
                        </button>
                        <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full">
                            Audio Production.
                        </button>
                    </div>
                    <button className="bg-white/30 hover:bg-blue-700/30 text-white items-center px-8 py-1 rounded-full relative right-5">
                        Background score for Feature Films.
                    </button>
                </div>
                <div className='flex justify-center items-center flex-col mt-10 gap-10'>
                    <h1 className='text-4xl text-white'>Experiences:</h1>
                    <div className='w-1/2' >
                        <h1 className='text-2xl text-white'>Live Performances</h1>
                        <p className='text-white text-md mt-2' >
                            Frequent performances in All India Radio and Doordarshan (Kolkata). N-H-D accompanied the stalwarts like Dr. Bhupen Hazarika, Mrs. Shipra Bose, Pt. Ajay Chakravorty, and Manna Dey in many public performances. N-H-D performed the compositions of great Ustad Amjad Ali Khan, along with his sons Ayan Ali and Amaan Ali Bangash. From the year 2005, he had been accompanying Mr. Adnan Sami for his musical tours all the way to the United States of America, Canada, several cities of The United kingdom, Australia, Holland, Bangkok and Thailand and many places in the United Arab Emirates.
                        </p>
                    </div>
                    <div className='w-1/2' >
                        <h1 className='text-2xl text-white'>Film Career</h1>
                        <p className='text-white text-md mt-2' >
                            N-H-D played for several renowned directors like Mr. Goutam Ghosh, Mr. Sandip Ray, Mr. Mrinal Sen, Mr. Rituparno Ghosh, Mr. Ram Gopal Verma, Mrs. Farah Khan, Mr. Sanjay Leela Bansali, Mr. Karan Johar and many others.
                        </p>
                    </div>
                    <div className='w-1/2' >
                        <h1 className='text-2xl text-white'>Experience as a Session Musician</h1>
                        <p className='text-white text-md mt-2' >
                            It will not be out of place to mention here that in many private album recordings N-H-D have accompanied singers like Mr. Manna Dey, Pt Ajoy Chakravorty, Mrs. Arati Mukherjee, Mr. Sriaknta Achariya, Mr. Idraneel Sen, Mr. Nachiketa Chakravorty, Mr. Jubeen Garg,Ms Sunidhi Chouhan,Mr Benny Dayal, Ms Shreya Ghoshal, Mr Kumar Sanu, Mr. Babul Supriyo, Mr. Abhijeet Bhattachariya, Mr. Adnan Sami and many others.
                        </p>
                    </div>

                    <div className='flex justify-center items-center flex-col mt-10 gap-5'>
                        <h1 className='text-4xl text-white'>Achievements:</h1>
                        <div className='w-1/2' >
                            <p className='text-white text-md' >
                            N-H-D also had the privilege of performing solo flute recitals before the Honourable President Of India, DR. Sankar Dayal sharma in the year 1995 at RASTRAPATI BHABAN.
Also got privileged to perform infront of our former Prime Minister Of India P.V.Narashima Rao in the same year at his residence.
                            </p>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                <ContactUs/>
                </div>

            </div>


        </div>
    )
}

export default About_humtoo