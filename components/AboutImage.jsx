import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutImage({ width, height }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0.8 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-full h-0full'
    >
      <Image
        src='/images/aboutPic.jpeg'
        alt='profile-picture'
        width={350}
        height={450}
        priority
        className='w-60 h-60 rounded-full md:w-[350px] md:h-[400px] md:rounded-lg lg:w-[500px] lg:h-[600px]'
      />
    </motion.div>
  );
}

{
  /* <Image
initial={{ x: -20, opacity: 0.8 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.5 }}
src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/FBD69CB0-F50D-4F79-AFCE-DEB49D9309ED_1_201_a.jpeg'
alt='profile-picture'
width={350}
height={450}
className='w-60 h-60 rounded-full md:w-[350px] md:h-[400px] md:rounded-lg lg:w-[500px] lg:h-[600px]'
/> */
}
