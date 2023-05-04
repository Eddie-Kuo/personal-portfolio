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
      initial={{ y: 30, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
    >
      <div
        onClick={handleClick}
        className='flex flex-col border border-dark bg-darkBase/30 p-5 hover:-translate-y-2 duration-300 hover:bg-highlight/60 cursor-pointer h-full'
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
        <ul className='flex flex-row items-start gap-2 mt-8'>{techStack}</ul>
      </div>
    </motion.div>
  );
}
