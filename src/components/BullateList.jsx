import React from 'react';

const BulletList = ({ items, bullatetype, desc}) => {
  let orderlist = (
    <div>
      <ol className='list-decimal text-white text-base'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
  let unorderedlist = (
    <div>
      <ul className='list-disc text-white text-base'>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <p className='text-white text-4 xl mb-5'>{desc}</p>
      {bullatetype ? orderlist : unorderedlist}
    </div>
  );
};

export default BulletList;
