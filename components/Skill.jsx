import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ image, name }) {
  const loadingCircleVariants = {
    start: {
      y: '25%',
    },
    end: {
      y: '0%',
    },
  };
  const loadingCircleTransition = {
    duration: 0.5,
    ease: 'easeInOut',
  };
  return (
    <motion.div
      variants={loadingCircleVariants}
      transition={loadingCircleTransition}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center'
    >
      <Image
        src={image}
        width={75}
        height={75}
        alt='icon-badge'
        className='border rounded-full border-darkText dark:border-lightBlueText/40 p-0.5 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32'
      />
      <h3 className='text-center text-darkText dark:text-light'>{name}</h3>
    </motion.div>
  );
}
