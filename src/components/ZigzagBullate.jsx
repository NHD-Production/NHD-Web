import React from 'react';

const ZigzagBullate = ({ data }) => {
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
            <h3 className="text-2xl p-20">{item.title}</h3>
            <p>{item.description}</p>
            <ul className="list-disc p-10">
              {item.bulletPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {item.buttonText && (
              <a
                href={item.buttonURL || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-white hover:text-black"
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
