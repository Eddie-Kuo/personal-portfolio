import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';

//*responsiveness of home page + header into side menu
//* need better adaptability for small-medium screens
//* make sure that the circles stay in main and not go into the header

export default function Header() {
  return (
    <header className='sticky w-full h-20 z-[100] flex justify-between items-center px-16 py-8 mx-auto'>
      <button className='sm:hidden flex flex-col justify-center items-center'>
        <span className='bg-[#161616] w-6 h-0.5 rounded-sm'></span>
        <span className='bg-[#161616] w-6 h-0.5 rounded-sm my-1'></span>
        <span className='bg-[#161616] w-6 h-0.5 rounded-sm'></span>
      </button>

      <motion.div
        className='hidden sm:flex mr-10'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <CustomLink href='/' title='Home' className='mr-6 text-[#161616]' />
        <CustomLink
          href='/about'
          title='About'
          className='mx-6 text-[#161616]'
        />
        <CustomLink
          href='/projects'
          title='Projects'
          className='ml-6 text-[#161616]'
        />
      </motion.div>
      <motion.div
        className='hidden sm:flex space-x-5'
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url='https://www.linkedin.com/in/eddie-kuo17/'
          fgColor='#424242'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/Eddie-Kuo'
          fgColor='#424242'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/the_eddiekuo/'
          fgColor='#424242'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/eddie.kuo.520/'
          fgColor='#424242'
          bgColor='transparent'
        />
        <span className='w-10 h-10 bg-black rounded-full'></span>
      </motion.div>
    </header>
  );
}
