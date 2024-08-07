import Image from "next/image";
import React, { useEffect } from "react";

function ZigBox({ title, description, data }) {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const handlescroll = () => {
      
    }
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <div className="flex flex-col w-full items-center justify-center text-white">
      <div className="header text-center">
        {title && <h2 className="text-[2.5rem] font-bold">{title}</h2>}
        {description && (
          <p className="text-[1rem] mt-2 font-semibold text-slate-500">
            {description}
          </p>
        )}
      </div>
      <div className="zigBody w-full ">
        {data?.map(({ title, description, image, extraButton, date, wing, isUpcoming, isClub,imageactions }, index) => {
          {if(!isUpcoming || isClub){return (
            <div key={index+title}
              className={`flex ${index % 2 ? "flex-col-reverse md:flex-row" : "flex-col-reverse md:flex-row-reverse"
                } justify-evenly my-5 items-center`}
            >
              <div className="text w-80 md:w-50 content-center mb-5">
                <div className="flex flex-row justify-start items-center">
                  <h2 className="text-[1.2rem] md:text-[1.8rem] font-[700]">{title}</h2>
                  {wing && <p className="text-[10px] md:text-[14px]  px-[8px] mx-3 text-white bg-[#1d50c3] rounded-full">{wing}</p>}
                </div>
                {date && <div className="flex flex-row items-center justify-start mt-3 text-gray-200">
                  <i className="fa-solid fa-calendar-days"></i>
                  <p className="ml-2 text-[0.8rem] font-medium ">
                    {typeof date === "string" ? date : 
                      <>
                        {date.toDate().getDate()}.{date.toDate().getMonth()+1}.{date.toDate().getFullYear()}
                      </>
                    }
                  </p>
                </div>}
                <p className="text-p 2xl:text-h3 font-[500] mt-4 text-slate-200">{description}</p>
                {/* {extraButton && <button
          className="border-2 rounded-sm px-5 py-1 transition-all delay-[.1s] my-5 shadow-lg hover:text-black hover:bg-white/90 hover:border-white"
          onClick={handleScrollToContact}
        >
          {extraButton.name}
        </button>} */}
              </div>
              <div className={`image mb-5 md:mb-0 drop-shadow-lg hover:scale-[1.03] transition-all ${imageactions?.brightness ?"hover:brightness-150":""}`}>
                <Image
                  src={image}
                  alt={title}
                  height={200}
                  width={400}
                  className=""
                />
              </div>
            </div>
          );}}
        })}
      </div>
      <div className="flex justify-center items-center m-2">
          <a
            href="#contact"
            rel="noopener noreferrer"
            className="border-2 rounded-sm px-5 py-2 transition-all delay-[.1s] shadow-lg hover:text-black hover:bg-white/90 hover:border-white sm:px-7 sm:py-3 md:px-10 md:py-4"
            onClick={handleScrollToContact}
          >
            Book Now
          </a>
      </div>
    </div>
  );
}

export default ZigBox;
