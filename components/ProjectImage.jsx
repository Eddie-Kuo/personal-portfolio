import Image from 'next/image';
import React from 'react';

export default function ProjectImage({ className = '', image }) {
  return (
    <a className='cursor-pointer z-10'>
      <Image
        src={image}
        height={300}
        width={400}
        alt='dog placeholder'
        className={className}
        priority={true}
      />
    </a>
  );
}
