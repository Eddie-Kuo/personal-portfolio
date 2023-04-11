import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <motion.div
      className='flex justify-center items-center z-0'
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
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[500px] w-[500px] animate-pulse mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[800px] w-[800px] mt-36' />
    </motion.div>
  );
}
