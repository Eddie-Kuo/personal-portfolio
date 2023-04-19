import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles({ className = '' }) {
  return (
    <motion.div
      className='relative flex justify-center items-center md:mt-36'
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2,
      }}
    >
      <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] animate-ping mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[450px] w-[450px] animate-pulse mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[750px] w-[750px] mt-36' />
    </motion.div>
  );
}
