import React from 'react';
import { AiOutlineFolderOpen, AiOutlineGithub } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';

export default function AdditionalProjectCard({
  deployedLink,
  githubLink,
  name,
  description,
  tech,
}) {
  const techStack = tech.map((entry) => (
    <li className='font-serif' key={entry}>
      {entry}
    </li>
  ));
  return (
    <>
      <a
        href={deployedLink}
        target='_blank'
        className='flex flex-col justify-center border border-dark bg-darkBase/30 p-5 hover:-translate-y-2 duration-300 hover:bg-highlight/60 cursor-pointer'
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
        <h3 className='my-2 font-serif font-bold h-[20%]'>{name}</h3>
        <p className='text-start font-serif h-[50%]'>{description}</p>
        <ul className='flex flex-row items-start gap-2 mt-8'>{techStack}</ul>
      </a>
    </>
  );
}
