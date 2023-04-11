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
      <div className='absolute border border-[#333333] rounded-full h-[50px] w-[50px] md:h-[200px] md:w-[200px] animate-ping mt-20 md:mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[150px] w-[150px] md:h-[300px] md:w-[300px] mt-20 md:mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[350px] w-[350px] md:h-[500px] md:w-[500px] animate-pulse mt-20 md:mt-36' />
      <div className='absolute border border-[#333333] rounded-full h-[450px] w-[450px] md:h-[600px] md:w-[600px] mt-20 md:mt-36' />
      <div className='absolute border border-[#2cdef9] rounded-full h-[600px] w-[600px] md:h-[800px] md:w-[800px] mt-20 md:mt-36' />
    </motion.div>
  );
}
