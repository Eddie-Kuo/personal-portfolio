import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ image, name }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
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
