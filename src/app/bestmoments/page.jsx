"use client";
import React, { useEffect, useState } from "react";
import { GlobalContext } from "@/context/Globalcontext";
import Image from "next/image";
import musicIcon from "@/assets/music_letters.png";
import EventCard from "@/components/EventCard";
import { FaArrowUp } from "react-icons/fa";

function BestMoments() {
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

  const events = [
    {
      images: [
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 1",
      date: "13/01/2025",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    {
      images: [
      "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 2",
      date: "15/02/2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 3",
      date: "20/03/2025",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 3",
      date: "20/03/2025",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },{
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 3",
      date: "20/03/2025",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },{
      images: [
       "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089746/live/C0179.MP4.05_25_08_03.Still001_i7ldte.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089747/live/_90A7040_m2utet.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089720/live/_90A4178_roveoe.jpg",
        "https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691089752/live/_90A4081_y18iwk.jpg",
      ],
      eventName: "Event Name 3",
      date: "20/03/2025",
      description:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
  ];

  return (
    <div className="h-full w-full">
      <div id="home" className="w-full h-[20vh] lg:h-[50vh] relative">
        <Image
          src="https://res.cloudinary.com/dmv3vi7ks/image/upload/v1691159922/Artboard_1_oirguz.png"
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
          />
        ))}
      </div>
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
