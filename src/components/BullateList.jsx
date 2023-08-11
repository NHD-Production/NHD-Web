import React from 'react';

const BulletList = ({ items, bullatetype, title , subtitle ,children}) => {
  let orderlist = (
    <div>
      <ol className='list-decimal text-white text-base '>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
  let unorderedlist = (
    <div>
      <ul className='list-disc text-white text-base '>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="flex justify-start flex-col my-2 p-5 rounded-lg">
      {title && <p className='text-white text-[1.7rem]  font-bold'>{title}</p>}
      {subtitle && <p className='text-white text-[1.1rem] font-bold'>{subtitle}</p>}
      {bullatetype ? orderlist : unorderedlist}
      {children}
    </div>
  );
};

export default BulletList;
