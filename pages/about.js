/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function about() {
  return (
    <>
      <Head>
        <title>Eddie Kuo | About</title>
      </Head>
      <main className='h-screen flex flex-col items-center pt-10 bg-light'>
        <div className='max-w-7xl p-5'>
          <motion.h3
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='uppercase tracking-[20px] text-xl font-bold text-center p-3'
          >
            About Me
          </motion.h3>
          <div className='flex flex-col md:flex-row items-center gap-5 w-full p-3 max-w-5xl mt-5'>
            <Image
              src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/FBD69CB0-F50D-4F79-AFCE-DEB49D9309ED_1_201_a.jpeg'
              alt='profile-picture'
              width={400}
              height={500}
              className='w-60 h-60 rounded-full md:w-[350px] md:h-[450px] md:rounded-lg lg:w-[500px] lg:h-[600px]'
            />
            <div className='text-base'>
              Hi! My name is Eddie and I'm a full-stack software engineer based
              in Austin, Texas. With a specialty in Javascript and experience in
              building out full-stack applications from scratch, I have found a
              passion in writing software that is focused on delivering the best
              user experience. What first intrigued me about tech was the power
              we are given as users. All the information in the world rests
              right in the palm of our hands. Now as the developer, I have made
              it my goal to create applications that will in hopes, simplify
              people's lives one line of code at a time.
            </div>
            {/* About me paragraph
          Portrait/ photo  */}
          </div>
          {/* <h3 className='uppercase tracking-[20px] text 2xl font-bold'>
            Tech Stack
          </h3>
          <h3 className='uppercase tracking-[20px] text 2xl font-bold'>
            Education
          </h3>
          <h3 className='uppercase tracking-[20px] text 2xl font-bold'>
            Reviews (Recommendations)
          </h3> */}
        </div>
      </main>
    </>
  );
}
