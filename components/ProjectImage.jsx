import Image from 'next/image';
import React from 'react';

export default function ProjectImage({ className = '', image, link }) {
  return (
    <a className='cursor-pointer z-10' href={link} target='_blank'>
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
