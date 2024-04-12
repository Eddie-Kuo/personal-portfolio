import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles';
import About from './about';
import ContactMe from './contactMe';
import Projects from './projects';

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
      <main className='flex flex-col justify-center items-center bg-light dark:bg-dark'>
        <div
          className='h-screen flex flex-col justify-center items-center text-center max-w-7xl overflow-x-hidden sm:overflow-visible pt-36 sm:pt-0'
          id='home'>
          <BackgroundCircles />
          <Image
            src='/images/headshot.jpeg'
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
                href='/Edlan_Kuo_Resume.pdf'
                className='px-6 py-2 my-1 hover:border border-darkRings rounded-full uppercase text-sm tracking-widest text-darkText dark:text-light transition-all hover:text-highlight/60 dark:hover:text-highlight/80 dark:border-blueRings'
                target='_blank'>
                Resume
              </Link>

              <Link
                href='mailto:eddiekuo97@gmail.com'
                className='px-6 py-2 my-1 hover:border hover:border-darkRings rounded-full uppercase text-sm tracking-widest text-darkText dark:text-light transition-all hover:text-highlight/60 dark:hover:text-highlight/80 dark:border-blueRings'>
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* about section */}
        <section id='about'>
          <About />
        </section>

        {/* projects section */}
        <section id='projects'>
          <Projects />
        </section>

        <section>
          <ContactMe />
        </section>
      </main>
    </>
  );
}
