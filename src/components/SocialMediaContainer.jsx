import React from 'react';

const SocialMediaContainer = ({ data }) => {
  const isSocialMediaData = Array.isArray(data) && data.every(item => item.link && item.icon && item.color);
  
  if (isSocialMediaData) {
    return (
      <div className="flex justify-center items-center space-x-4 md:space-x-6">
        {data?.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center backdrop-blur-md items-center w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-[1.1] transition duration-300 shadow-lg"
            style={{ backgroundColor: item.color }}
          >
            <item.icon size={20} className="text-white text-xl md:text-2xl" />
          </a>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-evenly items-center space-x-6 md:space-x-6 w-[35%]">
        {data?.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-[100px] h-[100px] md:w-14 md:h-14 p-1"
          />
        ))}
      </div>
    );
  }
};

export default SocialMediaContainer;
