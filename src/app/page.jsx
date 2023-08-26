"use client";
import React, { useEffect, useContext, useState } from "react";
import { GlobalContext } from "@/context/Globalcontext";
import ZigBox from "@/components/ZigBox";
import { data, demoData } from "@/assets/content";
import { Nhd_data } from "@/assets/content";
import Welcome from "@/components/Welcome";
import Nhd_gallery from "@/components/Nhd_gallery";
import Nhd_section from "@/components/Nhd_section";
import AudioPlayer from "@/components/AudioPlayer";
import GalleryApp from "@/components/ImageSlider";
import ImageSlider from "@/components/ImageSlider";
import ContactUs from "@/components/ContactUs";
import Nhd_music from "@/components/Nhd_music";
import About_nhd from "@/app/about/page";
import About_humtoo from "@/components/About_humtoo";
import AudioPlayerLarge from "@/components/AudioPlayerLarge";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import NhdImageGallery from "@/components/NhdImageGalley";
import {FaArrowUp} from 'react-icons/fa'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaImdb,
  FaSpotify,
  FaYoutube,
} from "react-icons/fa";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const images = [
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090758/Nhd/Nhd%20live/_90A3708_d6ndhi.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691147366/_90A4147_cut_rmqj3t.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090757/Nhd/Landing%20page/_90A3794_okzf8t.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691147274/_90A3691_picdgk.jpg",
  ];
  const imageUrls = [
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090770/Nhd/Nhd%20live/_90A7312_tntreg.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159271/_E7A3547-HDR-min_b0rvp0.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691609412/8.jpeg_eee3hw.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691158793/_E7A3716-min_bam3zn.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692514505/_90A3978_img_qndvji.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090778/Nhd/sendgb-kQgRcOs18SH/1_jq9d9h.jpg",
    "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692383798/Nhd/Landing%20page/_MG_0203_cmwvfs.jpg",
  ];
  const data = [
    {
      icon: FaFacebookSquare,
      link: "https://www.facebook.com/nhdlive?mibextid=ZbWKwL",
      color: "#4267B2",
    },
    {
      icon: FaTwitterSquare,
      link: "https://twitter.com/humtu?t=eLophkcmXdatJbVQ4Ox21w&s=08",
      color: "#1DA1F2",
    },
    {
      icon: FaInstagramSquare,
      link: "https://instagram.com/nhd_live?igshid=MzRlODBiNWFlZA==",
      color: "#E4405F",
    },
    {
      icon: FaImdb,
      link: "https://m.imdb.com/name/nm4897907/?ref_=ext_shr_lnk",
      color: "#F5C518",
    },
    {
      icon: FaSpotify,
      link: "https://open.spotify.com/artist/0P8grWtJ4Z4bMpOBRGyBEg?si=xwcFeZTBSs-cHXxb4U3Uvg",
      color: "#1DB954",
    },
    {
      icon: FaYoutube,
      link: "https://www.youtube.com/@humtoo1",
      color: "#E4405F",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="grid sm:grid-cols-12 xl:h-[93vh]">
        <div className="col-span-12 xl:col-span-9 flex flex-col  justify-between ">
          <div
            id="home"
            className="md:h-[40vh] xl:h-[calc(100%/3)] h-auto overflow-hidden flex  justify-center items-center p-2"
          >
            <Welcome />
          </div>
          <div className=" min-h-auto grow-1 max-h-[160vh] md:min-h-[50vh]    xl:min-h-[25vh]  xl:max-h-[60vh]  md:h-[calc(100%/2)] xl:h-[calc(100%/3)] flex-grow-3 p-2 flex justify-center items-start">
            <Nhd_section />
          </div>
          <div className="sm:h-[20vh] xl:h-[calc(100%/3)] h-[30vh] p-2 overflow-hidden  flex justify-center items-center">
            <AudioPlayerLarge />
          </div>
        </div>
        <div className="h-[100vh] md:h-[150vh] xl:h-auto col-span-12 xl:col-span-3 flex flex-col-reverse md:flex-col justify-start md:justify-between ">
          <div className="h-[55%] md:h-[67%] overflow-hidden flex justify-center items-center">
            <Nhd_gallery images={images} />
          </div>
          <div className="h-[45%] md:h-[33%]  overflow-hidden flex justify-center items-center p-2">
            <AudioPlayer />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <SocialMediaContainer data={data} />
      </div>
      <div className="content mt-28">
        <ZigBox data={Nhd_data} />
      </div>
      <div className="h-[50vh] w-[full] mt-16">
        {" "}
        <ImageSlider imageUrls={imageUrls} />
      </div>

      <div className="flex flex-col justify-center items-center md:m-10">
        <a href="/gallery" target="_blank">
          <button className="bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 flex justify-center items-center rounded-md">
            Visit to the Gallery
          </button>
        </a>
      </div>
      <div className="mt-28" id="music">
        <Nhd_music />
      </div>

      <ContactUs />
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <div className='fixed bottom-10 right-10 z-[500]'>
          <button
            className='bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 rounded-full flex justify-evenly items-center'
            onClick={scrollToTop}
          >
           <p className="mx-2 hidden md:block">
             Scroll to Top 
            </p> 
             <FaArrowUp size={15} color='white'/>
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
