/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectCardTwo from '../components/ProjectCardTwo';
import ProjectCardThree from '../components/ProjectCardThree';
import AdditionalProjectCard from '../components/AdditionalProjectCard';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Eddie Kuo | Projects</title>
      </Head>
      <main className='flex flex-col items-center bg-light'>
        <div className='max-w-7xl p-10 w-full'>
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='uppercase tracking-[20px] text-xl font-bold text-center my-8 sm:mb-24 sm:mt-16'
          >
            Some Things I've Built
          </motion.h3>
          <div className='flex flex-col items-center my-10'>
            <ProjectCard />
            <ProjectCardTwo />
            <ProjectCardThree />
          </div>

          <motion.h3
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='tracking-[20px] text-xl font-bold text-center my-10 sm:my-24'
          >
            Other Notable Projects
          </motion.h3>
          <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            <AdditionalProjectCard />
            <AdditionalProjectCard />
            <AdditionalProjectCard />
            <AdditionalProjectCard />
            <AdditionalProjectCard />
            <AdditionalProjectCard />
          </div>
        </div>
      </main>
    </>
  );
}
