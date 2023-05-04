import React from 'react';
import { AiOutlineFolderOpen, AiOutlineGithub } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';

export default function AdditionalProjectCard({ deployedLink, githubLink }) {
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
            <a href={githubLink} target='_blank'>
              <AiOutlineGithub size={30} color='grey' />
            </a>
            <a href={deployedLink} target='_blank'>
              <BiExit size={30} color='grey' />
            </a>
          </div>
        </div>
        <p className='pt-4 text-start'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          perferendis beatae esse odio saepe sit tenetur provident sint expedita
          placeat totam aspernatur numquam, corrupti nobis repellat enim.
          Libero, eum dignissimos!
        </p>
        <ul className='flex flex-row items-start gap-2 pt-8'>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
          <li>Tech</li>
        </ul>
      </a>
    </>
  );
}
