import React from 'react';
import { AiOutlineFolderOpen, AiOutlineGithub } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { motion } from 'framer-motion';

export default function AdditionalProjectCard({
  deployedLink,
  githubLink,
  name,
  description,
  tech,
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
    >
      <div
        onClick={handleClick}
        className='flex flex-col border border-dark/30 rounded-lg bg-darkBase/10 p-5 hover:-translate-y-2 duration-300 hover:bg-highlight/50 cursor-pointer h-full dark:bg-light/60 dark:hover:bg-light'
      >
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
        <h3 className='my-2 font-serif font-bold'>{name}</h3>
        <p className='text-start font-serif h-[50%]'>{description}</p>
        <ul className='flex flex-row items-start gap-2 mt-8 font-semibold'>
          {techStack}
        </ul>
      </div>
    </motion.div>
  );
}
