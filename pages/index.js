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
      'Contact for Collabs!',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <Head>
        <title>Eddie Kuo | Home</title>
      </Head>
      <main className='flex justify-center items-center bg-light dark:bg-dark'>
        <div className='h-screen flex flex-col justify-center items-center text-center max-w-7xl overflow-x-hidden sm:overflow-visible'>
          <BackgroundCircles />
          <Image
            src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/IMG_1218%202.JPG'
            width={200}
            height={200}
            alt='hero-picture'
            className='rounded-full h-40 w-40 object-cover'
            priority={true}
          />

          <div className='z-10'>
            <h2 className='uppercase text-darkText dark:text-highlight tracking-[15px] mt-5 px-5'>
              Software Engineer
            </h2>
            <h1 className='text-xl md:text-4xl lg:text-5xl font-semibold px-5'>
              <span className='mr-2 text-darkText dark:text-light'>{text}</span>
              <Cursor cursorColor='#f7ab0a' />
            </h1>

            <div className='pt-5'>
              <Link
                href='/updatedResume.pdf'
                className='px-6 py-2 my-1 hover:border border-darkRings rounded-full uppercase text-sm tracking-widest text-darkText dark:text-light transition-all hover:text-highlight/60 dark:hover:text-highlight/80 dark:border-blueRings'
                target='_blank'
              >
                Resume
              </Link>

              <Link
                href='mailto:eddiekuo97@gmail.com'
                className='px-6 py-2 my-1 hover:border hover:border-darkRings rounded-full uppercase text-sm tracking-widest text-darkText dark:text-light transition-all hover:text-highlight/60 dark:hover:text-highlight/80 dark:border-blueRings'
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
