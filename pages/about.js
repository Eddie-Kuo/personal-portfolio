/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import skills from '../components/utils/skills';
import skillSetTwo from '../components/utils/skillSetTwo';
import Skill from '../components/Skill';

export default function About() {
  const topSkillsList = skills.map((skill) => (
    <Skill key={skill.id} name={skill.name} image={skill.link} />
  ));
  const bottomSkillsList = skillSetTwo.map((skill) => (
    <Skill key={skill.id} name={skill.name} image={skill.link} />
  ));

  return (
    <>
      <Head>
        <title>Eddie Kuo | About</title>
      </Head>
      <main className='flex flex-col items-center bg-light dark:bg-dark'>
        <div className='max-w-7xl py-10 px-5 w-full'>
          {/* ABOUT ME */}
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-8 sm:my-16 text-darkText dark:text-light'
          >
            About Me
          </motion.h3>
          <div className='flex flex-col md:flex-row items-center gap-10 w-full p-3'>
            <motion.img
              initial={{ x: -200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              src='https://ozkuzfbdevqwhsqwknht.supabase.co/storage/v1/object/public/portfolio-pictures/FBD69CB0-F50D-4F79-AFCE-DEB49D9309ED_1_201_a.jpeg'
              alt='profile-picture'
              width={350}
              height={450}
              className='w-60 h-60 rounded-full md:w-[350px] md:h-[400px] md:rounded-lg lg:w-[500px] lg:h-[600px]'
            />
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
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
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='uppercase tracking-[10px] md:tracking-[15px] text-xl font-bold text-center my-8 sm:my-16 text-darkText dark:text-light'
          >
            Tech Stack
          </motion.h3>
          <div className='flex flex-col items-center w-full py-3  max-w-7xl'>
            <div className='grid grid-cols-4 gap-2'>{topSkillsList}</div>
          </div>
          <div className='flex flex-col items-center w-full max-w-7xl pb-3 mb-32'>
            <div className='grid grid-cols-4 gap-2'>{bottomSkillsList}</div>
          </div>
          {/* <h3 className='uppercase tracking-[20px] text 2xl font-bold'>
            Education
          </h3> */}
          {/* <motion.h3
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            className='uppercase tracking-[20px] text-xl font-bold text-center my-8 sm:my-16'
          >
            Education
          </motion.h3>
          <div className='flex flex-col items-center py-3'>
            <p></p>
          </div> */}
        </div>
      </main>
    </>
  );
}
