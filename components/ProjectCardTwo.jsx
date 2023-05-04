import React from 'react';
import ProjectImage from './ProjectImage';
import { motion } from 'framer-motion';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';

export default function ProjectCardTwo() {
  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0.75 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='relative flex md:flex-row md:justify-between justify-center w-full h-96 items-center max-w-5xl mt-5'
      >
        <div className='hidden md:flex flex-col text-start justify-center max-w-[70%] '>
          <h5 className='font-serif text-sm font-bold pb-3'>
            Featured Project
          </h5>
          <h3 className='z-10 font-serif text-2xl font-bold pb-3'>
            Sound Palette
          </h3>
          <p className='z-20 rounded-md bg-dark/80 font-serif text-light pl-3 pr-1 py-2'>
            Create your own palette of sound with this interactive 3D music app.
            Users can select from a variety of instrument sounds and render
            colors on key press that turn into gradients when multiple keys are
            pressed together on the virtual keyboard, creating a mesmerizing
            experience.
          </p>
          <ul className='flex flex-row gap-2 justify-start z-10 font-serif text-md pt-3'>
            <li>React</li>
            <li>ThreeJs</li>
            <li>React-Piano</li>
          </ul>
          <ul className='flex flex-row gap-2 justify-start font-serif text-md pt-3'>
            <a
              href='https://github.com/ryanjeffrey/sound-palette'
              target='_blank'
            >
              <AiOutlineGithub size={30} />
            </a>
            <a href='https://sound-palette.netlify.app/' target='_blank'>
              <AiOutlineLink size={30} />
            </a>
          </ul>
        </div>

        <ProjectImage
          className='rounded-lg w-[700px] h-[380px] md:w-[450px] md:h-[300px] lg:w-[550px] lg:h-[400px] absolute right-0 top-0 bottom-0 md:mt-10 lg:mt-0 opacity-80 hover:opacity-100'
          link='https://sound-palette.netlify.app/'
          image={
            'https://user-images.githubusercontent.com/73365865/218589321-98ceaccf-2dfb-4cdb-8067-1e7ca791acf2.jpg'
          }
        />

        <div className='absolute rounded-lg bg-dark/75 top-0 bottom-0 right-0 left-0 flex flex-col items-start justify-center md:hidden z-10 px-8 gap-0.5'>
          <a className='text-blueRings font-serif text-sm'>Featured Project</a>
          <a className='text-highlight font-serif text-xl'>Sound Palette</a>
          <p className='text-light font-serif text-sm py-5'>
            Create your own palette of sound with this interactive 3D music app.
            Users can select from a variety of instrument sounds and render
            colors on key press that turn into gradients when multiple keys are
            pressed together on the virtual piano keyboard.
          </p>
          <ul className='flex flex-row gap-2 text-[#b0b0b0] font-serif text-sm'>
            <li>React</li>
            <li>ThreeJs</li>
            <li>React-Piano</li>
          </ul>
          <ul className='flex flex-row gap-2 text-[#b0b0b0] font-serif text-xs'>
            <a
              href='https://github.com/ryanjeffrey/sound-palette'
              target='_blank'
            >
              <AiOutlineGithub size={30} />
            </a>
            <a href='https://sound-palette.netlify.app/' target='_blank'>
              <AiOutlineLink size={30} />
            </a>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
