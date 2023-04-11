import Image from 'next/image';
import React from 'react';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  return (
    <div className='h-screen flex justify-center items-center bg-slate-400'>
      <div className='flex flex-col items-center justify-center'>
        <BackgroundCircles />
        <Image
          src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/IMG_1218%202.JPG'
          width={200}
          height={200}
          alt='hero-picture'
          className='rounded-full h-40 w-40 object-cover'
        />
        <div className='z-20'>
          <h2 className='text-small uppercase text-gray-700 tracking-[15px] mt-5'>
            Software Engineer
          </h2>
          <h1>
            <span></span>
          </h1>
        </div>
      </div>
    </div>
  );
}
