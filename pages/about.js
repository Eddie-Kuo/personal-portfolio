/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';
import { motion, loadingContainer } from 'framer-motion';
import skills from '../components/utils/skills';
import Skill from '../components/Skill';

export default function About() {
  const skillSet = skills.map((skill) => (
    <Skill key={skill.id} name={skill.name} image={skill.link} />
  ));

  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    end: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Eddie Kuo | About</title>
      </Head>
      <main className='flex flex-col items-center bg-light dark:bg-dark w-full'>
        <div className='max-w-7xl sm:py-10 px-5 w-full'>
          {/* ABOUT ME */}
          <motion.h3
            initial={{ y: -10, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-8 sm:my-16 text-darkText dark:text-light'
          >
            About Me
          </motion.h3>
          <div className='flex flex-col md:flex-row items-center gap-10 w-full p-3'>
            <motion.img
              initial={{ y: 20 }}
              animate={{ y: 0, opacity: [0.9, 1] }}
              transition={{ duration: 0.5 }}
              src={'/images/aboutPic.jpeg'}
              alt='profile-picture'
              width={350}
              height={450}
              className='w-60 h-60 rounded-full md:w-[350px] md:h-[400px] md:rounded-lg lg:w-[500px] lg:h-[600px]'
            />
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0, opacity: [0, 0, 0.2, 0.4, 0.8, 0.9, 1] }}
              transition={{ duration: 2 }}
              className='text-base text-darkText dark:text-light'
            >
              Hi! My name is Eddie and I'm a full-stack software engineer based
              in Austin, Texas. With a specialty in Javascript and experience in
              building out full-stack applications from scratch, I have found a
              passion in writing software that is focused on delivering the best
              user experience. <br />
              <br /> What first intrigued me about tech was the power we are
              given as users. All the information in the world rests right in
              the palm of our hands. Now as the developer, I have made it my
              goal to create applications that will in hopes, simplify people's
              lives one line of code at a time.
            </motion.div>
          </div>

          {/* TECH STACK */}
          <motion.h3
            initial={{ y: -10, opacity: 0.2 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-8 sm:my-16 text-darkText dark:text-light'
          >
            Tech Stack
          </motion.h3>
          <div className='flex flex-col items-center w-full py-3  max-w-7xl'>
            <motion.div
              style={loadingContainer}
              variants={loadingContainerVariants}
              initial='start'
              animate='end'
              className='grid grid-cols-4 gap-2'
            >
              {skillSet}
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}
