import React, { useEffect } from 'react';

const ZigzagBullate = ({ data }) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlescroll = () => {
      
    };

    window.addEventListener('scroll', handlescroll);

    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  return (
    <div className="w-full mx-auto text-white">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col h-auto w-full ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          } items-center justify-between p-10`}
        >
          <div className="flex-1">
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto md:max-w-lg md:max-h-100 object-cover rounded-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl pt-5 md:w-20 font-bold border-dashed border-b-2 border-white ">{item.title}</h3>
            <p className="pt-2">{item.description}</p>
            <ul className="list-disc p-10">
              {item.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {item.buttonText && (
              <a
                href={item.buttonURL || '#contact'}
                rel="noopener noreferrer"
                className="border-2 rounded-sm px-5 py-2 transition-all delay-[.1s] my-5 shadow-lg hover:text-black hover:bg-white/90 hover:border-white"
                onClick={handleScrollToContact}
              >
                {item.buttonText}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZigzagBullate;
