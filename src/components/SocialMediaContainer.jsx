import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaImdb, FaSpotify,FaYoutube } from 'react-icons/fa';

const SocialMediaContainer = () => {
  const socialMediaData = [
    { icon: FaFacebookSquare, link: 'https://www.facebook.com/', color: '#4267B2' },
    { icon: FaTwitterSquare, link: 'https://www.twitter.com/', color: '#1DA1F2' },
    { icon: FaInstagramSquare, link: 'https://www.instagram.com/', color: '#E4405F' },
    { icon: FaImdb, link: 'https://www.imdb.com/', color: '#F5C518' },
    { icon: FaSpotify, link: 'https://www.spotify.com/', color: '#1DB954' },
    {icon:FaYoutube,link:'https://www.youtube.com', color: '#E4405F'}
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-6">
      {socialMediaData.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center backdrop-blur-md items-center w-12 h-12 md:w-14 md:h-14 rounded-full hover:scale-[1.1] transition duration-300 shadow-lg"
          style={{ backgroundColor: item.color }}
        >
          <item.icon size={20} className="text-white text-xl  md:text-2xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaContainer;
