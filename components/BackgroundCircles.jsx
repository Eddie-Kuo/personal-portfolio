import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <motion.div
      className='relative flex justify-center items-center mt-24 md:mt-80'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.5, 1.5, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '75%', '20%'],
      }}
      transition={{
        duration: 2,
      }}>
      <div className='absolute border border-darkRings dark:border-light rounded-full h-[180px] w-[180px] sm:h-[280px] sm:w-[280px]  animate-ping mt-36' />
      <div className='absolute border border-darkRings dark:border-light rounded-full h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] mt-36' />
      <div className='absolute border border-blueRings rounded-full h-[450px] w-[450px] sm:h-[550px] sm:w-[550px] animate-pulse mt-36' />
      <div className='absolute border border-darkRings dark:border-light rounded-full h-[550px] w-[550px] sm:h-[650px] sm:w-[650px] mt-36' />
      <div className='absolute border border-blueRings rounded-full h-[750px] w-[750px] sm:h-[850px] sm:w-[850px] mt-36' />
    </motion.div>
  );
}
