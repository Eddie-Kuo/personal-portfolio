import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactMe() {
  return (
    <main className='flex flex-col items-center max-w-7xl pb-32'>
      <motion.h3
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: true }}
        className='uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center text-darkText dark:text-light my-4'
      >
        Get In Touch!
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        viewport={{ once: true }}
        className='text-darkText dark:text-light/70 text-center px-4 py-4'
      >
        If you have any questions, interests in collaboration, or just want to
        say hi, my inbox is always open!
      </motion.p>
      <Link
        href='mailto:eddiekuo97@gmail.com'
        className='px-6 py-3 my-8 sm:my-4 border border-darkRings rounded-full uppercase text-sm tracking-widest text-darkText dark:text-light transition-all hover:text-highlight/60 dark:hover:text-highlight/80 dark:border-blueRings'
      >
        Say Hello 👋
      </Link>
    </main>
  );
}
