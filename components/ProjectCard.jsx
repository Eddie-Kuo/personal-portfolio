import Link from 'next/link';
import React from 'react';
import ProjectImage from './ProjectImage';

export default function ProjectCard() {
  return (
    <>
      {/* <div className='relative flex md:flex-row flex-col justify-between w-full'>
        <ProjectImage className='rounded-lg md:w-[650px] md:h-[450px] sm:h-full sm:w-full' />
        <div className='hidden sm:absolute sm:right-0 sm:top-0 sm:bottom-0 sm:flex md:text-end text-center flex-col gap-2 justify-center md:max-w-[60%] z-10'>
          <h4 className='z-10'>Featured Project</h4>
          <h3 className='z-10'>Project Name</h3>
          <p className='z-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            voluptates, reprehenderit delectus neque accusamus iste earum dolor
            quis accusantium quaerat reiciendis exercitationem aperiam
            perspiciatis. Accusamus officiis necessitatibus repellat quis
            quaerat!
          </p>

          <ul className='flex flex-row gap-2 md:justify-end justify-center z-10'>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
          </ul>
          <ul className='flex flex-row gap-2 md:justify-end justify-center z-10'>
            <li>GitHub</li>
            <li>Deployed</li>
          </ul>
        </div>
        <div className='absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center z-30 bg-dark/40'>
          <p>test</p>
        </div>
      </div> */}
      <div className='relative flex md:flex-row md:justify-between justify-center w-full h-96 items-center max-w-5xl'>
        <ProjectImage className='rounded-lg w-[700px] h-[375px] md:w-[450px] md:h-[300px]' />

        <div className='absolute rounded-lg bg-dark/75 top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-center md:hidden z-10 px-8 gap-0.5'>
          <a className='text-light font-serif text-sm'>Featured Project</a>
          <a className='text-light font-serif text-lg'>Name of Project</a>
          <p className='text-light font-serif text-sm py-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quo
            maiores numquam totam deleniti delectus deserunt officia architecto
            perferendis enim unde saepe, ipsa sapiente ex autem reprehenderit
            dolor omnis laborum!
          </p>
          <ul className='flex flex-row gap-2 text-light font-serif text-sm'>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
          </ul>
          <ul className='flex flex-row gap-2 text-light font-serif text-xs'>
            <li>Github</li>
            <li>Deployment</li>
          </ul>
        </div>

        <div className='hidden md:flex flex-col text-end justify-center absolute right-0 top-0 bottom-0 max-w-[70%]'>
          <h5 className='font-serif text-sm font-bold pb-3'>
            Featured Project
          </h5>
          <h3 className='z-10 font-serif text-2xl font-bold pb-3'>
            Name of Project
          </h3>
          <p className='z-10 bg-dark/80 font-serif text-light px-3 py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            iste error cum illum voluptatem ducimus inventore at, deserunt in
            earum quam rerum tempora, sint modi accusantium. Fuga dignissimos
            cupiditate nostrum!
          </p>
          <ul className='flex flex-row gap-2 justify-end z-10 font-serif text-md pt-3'>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
            <li>Tech</li>
          </ul>
          <ul className='flex flex-row gap-2 justify-end font-serif text-md pt-3'>
            <li>Github</li>
            <li>Deployment</li>
          </ul>
        </div>
      </div>
    </>
  );
}
