import Image from 'next/image';
import React from 'react';
import BackgroundCircles from './BackgroundCircles';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Hi, My Name is Eddie Kuo',
      'Guy-who-loves-working-out.jsx',
      '<ButLovesToCodeMore />',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen w-full flex justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center text-center'>
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
          <h1 className='text-2xl lg:text-5xl font-semibold'>
            <span className='mr-2'>{text}</span>
            <Cursor cursorColor='#f7ab0a' />
          </h1>
        </div>
      </div>
    </div>
  );
}
