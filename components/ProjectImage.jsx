import Image from 'next/image';
import React from 'react';

export default function ProjectImage({ className = '' }) {
  return (
    <a>
      <Image
        src={
          'https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/pexels-pixabay-160846.jpg'
        }
        height={300}
        width={400}
        alt='dog placeholder'
        className={className}
      />
    </a>
  );
}
