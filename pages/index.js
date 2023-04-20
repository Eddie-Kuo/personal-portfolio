import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';

export default function Home() {
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
    <>
      <Head>
        <title>Eddie Kuo | Home</title>
      </Head>
      <main>
        <div className='h-screen flex flex-col justify-center items-center text-center overflow-x-hidden'>
          <BackgroundCircles />
          <Image
            src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/IMG_1218%202.JPG'
            width={200}
            height={200}
            alt='hero-picture'
            className='rounded-full h-40 w-40 object-cover'
          />

          <div className='z-5'>
            <h2 className='text-small uppercase text-gray-700 tracking-[15px] mt-5 px-5'>
              Software Engineer
            </h2>
            <h1 className='text-xl md:text-4xl lg:text-5xl font-semibold px-5'>
              <span className='mr-2'>{text}</span>
              <Cursor cursorColor='#f7ab0a' />
            </h1>

            <div className='pt-5'>
              <Link
                href='/resume.pdf'
                className='px-6 py-2 my-1 hover:border border-[rgb(54,69,79)] rounded-full uppercase text-sm tracking-widest text-gray-700 transition-all hover:text-[#f7ab08]/60'
                target='_blank'
              >
                Resume
              </Link>

              <Link
                href='mailto:eddiekuo97@gmail.com'
                className='px-6 py-2 my-1 hover:border hover:border-[rgb(54,69,79)] rounded-full uppercase text-sm tracking-widest text-gray-700 transition-all hover:text-[#f7ab08]/60'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
