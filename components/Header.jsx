import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';

export default function Header() {
  return (
    <header className='sticky w-full h-20 z-[100] flex justify-between items-center px-24 py-8 mx-auto'>
      <div className='md:hidden'>
        <p>Menu</p>
      </div>
      <motion.div
        className='hidden md:flex'
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
        className='hidden md:flex space-x-5'
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
      </motion.div>
    </header>
  );
}
