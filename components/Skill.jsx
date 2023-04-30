import Image from 'next/image';
import React from 'react';

export default function Skill({ image, name }) {
  return (
    <div>
      <Image
        src={image}
        width={75}
        height={75}
        alt='icon-badge'
        className='border rounded-full border-dark p-0.5 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32'
      />
      <h3 className='text-center'>{name}</h3>
    </div>
  );
}