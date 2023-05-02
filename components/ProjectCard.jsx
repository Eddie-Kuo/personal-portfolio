import React from 'react';
import ProjectImage from './ProjectImage';

export default function ProjectCard() {
  return (
    <>
      <div className='relative flex flex-row justify-between w-full'>
        <div className='flex justify-center items-center p-5'>
          <ProjectImage className='rounded-lg w-[500px] h-[425px]' />
        </div>
        <div className='absolute right-0 bottom-0 top-0 flex flex-col justify-center text-end md:max-w-[60%] lg:max-w-[70%] '>
          <h4 className='p-2'>Featured Project</h4>
          <h4 className='p-2'>Name of Project</h4>
          <p className='bg-[#b9b9b9] p-5 z-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            corrupti quasi nemo tenetur voluptate placeat consequatur rerum
            natus commodi quod modi ad accusamus repellendus assumenda, incidunt
            hic? Provident, tempore nesciunt.
          </p>
          <ul className='flex flex-row gap-2 justify-end p-2'>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
          </ul>
          <ul className='flex flex-row gap-2 justify-end p-2'>
            <li>GitHub</li>
            <li>Deployed</li>
          </ul>
        </div>
      </div>
    </>
  );
}
