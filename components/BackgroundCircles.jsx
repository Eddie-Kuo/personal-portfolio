import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <motion.div
      className='relative flex justify-center items-center mt-20'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.5, 1.5, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className='absolute border border-darkRings rounded-full h-[180px] w-[180px] animate-ping mt-36' />
      <div className='absolute border border-darkRings rounded-full h-[250px] w-[250px] mt-36' />
      <div className='absolute border border-blueRings rounded-full h-[450px] w-[450px] animate-pulse mt-36' />
      <div className='absolute border border-darkRings rounded-full h-[550px] w-[550px] mt-36' />
      <div className='absolute border border-blueRings rounded-full h-[750px] w-[750px] mt-36' />
    </motion.div>
  );
}
