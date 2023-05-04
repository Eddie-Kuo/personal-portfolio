/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectCardTwo from '../components/ProjectCardTwo';
import ProjectCardThree from '../components/ProjectCardThree';
import AdditionalProjectCard from '../components/AdditionalProjectCard';
import { additionalProjects } from '../components/utils/additionalProjects';

export default function Projects() {
  const notableProjects = additionalProjects.map((project) => (
    <AdditionalProjectCard
      key={project.id}
      name={project.name}
      description={project.description}
      githubLink={project.githubLink}
      deployedLink={project.deployedLink}
      tech={project.tech}
    />
  ));
  return (
    <>
      <Head>
        <title>Eddie Kuo | Projects</title>
      </Head>
      <main className='flex flex-col items-center bg-light'>
        <div className='max-w-7xl py-10 px-6 w-full'>
          <motion.h3
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className='tracking-[20px] text-xl font-bold text-center my-10 sm:my-24'
          >
            Other Notable Projects
          </motion.h3>
          <div className='flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-32'>
            {notableProjects}
          </div>
        </div>
      </main>
    </>
  );
}
