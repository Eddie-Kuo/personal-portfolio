import React from 'react';
import { AiOutlineFolderOpen, AiOutlineGithub } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AdditionalProjectCard({
  deployedLink,
  githubLink,
  name,
  description,
  tech,
  picture,
}) {
  function handleClick() {
    deployedLink
      ? window.open(deployedLink, '_blank')
      : window.open(githubLink, '_blank');
  }

  const techStack = tech.map((entry) => (
    <li className='font-serif' key={entry}>
      {entry}
    </li>
  ));

  return (
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0, opacity: [0.5, 0.8, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='py-2'
    >
      <h3 className='py-2 dark:text-light font-serif font-bold'>{name}</h3>
      <div
        onClick={handleClick}
        className='flex flex-col border border-dark/30 rounded-lg bg-darkBase/10 p-5 hover:-translate-y-2 duration-300 hover:bg-highlight/50 cursor-pointer h-[90%] dark:bg-light/60 dark:hover:bg-light overflow-x-hidden relative max-w-md'
      >
        <Image
          src={picture}
          fill
          alt='project image'
          className='hover:opacity-5 z-10'
        />

        <div className='flex flex-row justify-between w-full'>
          <AiOutlineFolderOpen size={30} color='grey' />
          <div className='flex flex-row gap-2'>
            {githubLink ? (
              <a href={githubLink} target='_blank'>
                <AiOutlineGithub size={30} color='grey' />
              </a>
            ) : (
              ''
            )}

            {deployedLink ? (
              <a href={deployedLink} target='_blank'>
                <BiExit size={30} color='grey' />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
        <p className='my-4 text-start font-serif h-[50%]'>{description}</p>
        <ul className='absolute bottom-0 py-2 flex items-start gap-2 font-semibold text-xs'>
          {techStack}
        </ul>
      </div>
    </motion.div>
  );
}
