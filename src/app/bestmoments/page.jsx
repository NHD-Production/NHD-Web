"use client";
import ContactUs from "@/components/ContactUs";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import PopGallery from "@/components/PopGallery";
import Popover from "@/components/Popover";
import React, { useEffect, useState } from "react";
import musicIcon from "@/assets/music_letters.png";
import { FaArrowUp } from "react-icons/fa";
import { GlobalContext } from "@/context/Globalcontext";

function BestMoments() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const defaultGalleryState = { show: false, images: [] };
  const [toggleGallery, setToggleGallery] = useState(defaultGalleryState);

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

  const events = [
    {
      images: [
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743266890/Videoshot_20250316_131634_dkpuy8.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/c_fill,ar_3:4,g_auto/v1743268893/ADDU_1_lrixqr.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/c_fill,ar_1:1,g_auto/v1743266891/IMG_20250211_104546_p5jbrk.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/c_fill,ar_1:1,g_auto/v1743266890/IMG_20250211_102930_mnvhzh.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/c_pad,b_gen_fill,ar_1:1/v1743266890/IMG_20250211_103419_nlemdo.jpg",
      ],
      eventName: "RAIGANJ EVENT",
      date: "03/02/2025",
      description:
        "Our North Bengal tour was unforgettable, with a warm audience swaying to our melodies. The misty hills and Raiganj’s colonial charm made it magical.",
    },
    {
      images: [
      "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691147274/_90A3691_picdgk.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692514505/_90A3978_img_qndvji.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090758/Nhd/Landing%20page/_90A4147_wgdsg4.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_90A3853_vl3rgi.jpg",
       
      ],
      eventName: "JU SANSKARI EVENT",
      date: "24/04/2023",
      description:
        "This year’s band nights were special—NHD Live’s flute and instrumentals touched souls beyond barriers.",
    },
    {
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1721590317/Extra%20images/_E7A3873_ut9h9l.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089106/live/_E7A3995_opjijl.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089104/live/_E7A3920_zlshod.jpg",
      ],
      eventName: "SARAT SADAN EVENT",
      date: "15/07/2023",
      description:
        "A memorable musical night organised and donated for the specially abled and Autistically drown syndrome children.",
    },
    {
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743271444/IMG_20241209_233028230_ctxy3v.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743271516/IMG_20241210_020609726_k5ihiu.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743955548/deoghor_bju8yu.webp",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743955548/deoghor_2_tyzrbs.webp",
      ],
      eventName: "DEOGHAR EVENT",
      date: "09/12/2024",
      description:
        "Performing in Deoghar, Jharkhand, was unforgettable. The tranquil temple complex turned vibrant as our flutes, mandolins, guitars, drums resonated.",
    },{
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090773/Nhd/sendgb-kQgRcOs18SH/1.jpeg_miihie.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743270770/siliguri_ciqi2g.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/c_pad,b_gen_fill,ar_4:3/v1691090779/Nhd/sendgb-kQgRcOs18SH/2.jpeg_ucuirt.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743270767/asl_mo9rgt.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743270768/siliguri_2_dpbwjn.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1692383798/Nhd/Landing%20page/_MG_0203_cmwvfs.jpg"
      ],
      eventName: "ASL JOURNEY",
      date: "",
      description:
        "Feel the pulse of the  electrifying ASL band where NHD creates pure magic of multiple woodwinds on stage.",
    },
    {
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743272105/Screenshot_2025-03-29_at_23.39.42_xushtm.png",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743272103/Screenshot_2025-03-29_at_23.41.02_ivh2li.png",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743272103/Screenshot_2025-03-29_at_23.43.00_yaocs5.png",
         "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691090754/Nhd/Nhd%20live/Screen_Shot_2023-07-24_at_11.04.51_PM_dtkdys.png",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743272105/Screenshot_2025-03-29_at_23.40.19_otzpsp.png",
       
       
      ],
      eventName: "BALLYGANJ CULTURE EVENT",
      date: "",
      description:
        "NHD Band set the stage ablaze at Ballygunge Culture Club, captivating the audience with soul-stirring instrumentals!",
    }
  ];

  return (
    <div className="h-full w-full">
      <div id="home" className="w-full h-[20vh] lg:h-[50vh] relative">
        <Image
          src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1743267223/header_mtqkzr.png"
          alt="cover"
          fill={true}
        />
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-evenly text-white text-2xl p-3 bg-black/80">
        <Image src={musicIcon} alt="floating_music_image" />
        <p className="p-1 w-90 text-[1rem] xl:text-[1.6rem] text-center leading-normal">
          A premium band created in collaboration with the finest musicians that
          caters to the live audience&apos;s classic charm as well as creative
          wilderness.
        </p>
      </div>
      <div className="min-h-screen flex flex-wrap justify-center gap-6 p-6">
        {events.map((event, index) => (
          <EventCard
            key={index}
            images={event.images}
            eventName={event.eventName}
            date={event.date}
            description={event.description}
            setToggleGallery={setToggleGallery}
          />
        ))}

      <Popover showPopover={toggleGallery.show} onClose={()=>setToggleGallery(defaultGalleryState)}>
         <PopGallery images={toggleGallery?.images}/>
      </Popover>
      </div>
      <ContactUs />
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <div className="fixed bottom-10 right-10 z-[500]">
          <button
            className="bg-blue-600/50 text-cyan-50 hover:bg-slate-50 hover:text-black p-2 rounded-full flex justify-evenly items-center"
            onClick={scrollToTop}
          >
            <p className="mx-2 hidden md:block">Scroll to Top</p>
            <FaArrowUp size={15} color="white" />
          </button>
        </div>
      )}
    </div>
  );
}

export default BestMoments;
