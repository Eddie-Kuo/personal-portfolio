import React from 'react';
import ProjectImage from './ProjectImage';

export default function ProjectCard() {
  return (
    <div className='flex justify-between items-center w-[90%] p-5 border border-black'>
      <ProjectImage className='rounded-lg w-[500px] h-[370px]' />
      <div className='flex flex-col'>
        <h5 className=''>Featured Project</h5>
        <h3>Name of Project</h3>
        <div>
          <p>Description of project</p>
        </div>
        <div className='flex flex-row gap-3'>
          <p>Tech</p>
          <p>Tech</p>
          <p>Tech</p>
          <p>Tech</p>
        </div>
      </div>
    </div>
  );
}
