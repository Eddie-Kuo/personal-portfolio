import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineFolderOpen, AiOutlineGithub } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';

export default function AdditionalProjectCard({
  deployedLink,
  githubLink,
  name,
  description,
  tech,
  picture,
  cover,
  note,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  function handleClick() {
    if (isOpen === false) {
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen === true) {
      const handleEvent = (event) => {
        const element = ref.current;
        if (element && !element.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener('pointerdown', handleEvent);

      return () => {
        document.removeEventListener('pointerdown', handleEvent);
      };
    }
  }, [isOpen]);

  const techStack = tech.map((entry, index) => (
    <li className='font-serif' key={entry}>
      {entry}
      {index !== tech.length - 1 && ','}
    </li>
  ));

  return (
    <motion.div
      initial={{ y: 60 }}
      whileInView={{ y: 0, opacity: [0.5, 0.8, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='py-2'>
      <h3 className='py-2 dark:text-light font-serif font-bold min-w-full'>
        {name}
      </h3>

      <div
        className='flex flex-col rounded-lg hover:-translate-y-2 duration-300 cursor-pointer overflow-x-hidden opacity-90 p-6 border border-dark/30 dark:border-light/30 max-w-md bg-darkBase/30 relative'
        // className='flex flex-col border border-dark/30 rounded-lg bg-darkBase/10 p-5 hover:-translate-y-2 duration-300 hover:bg-highlight/50 cursor-pointer h-[90%] dark:bg-light/60 dark:hover:bg-light overflow-x-hidden relative max-w-md  opacity-90'
        onClick={handleClick}>
        <div className='flex justify-center items-center h-44'>
          <Image
            src={picture}
            alt='project logo'
            fill
            className='hover:opacity-5'
          />

          <p className='dark:text-light text-md'>
            <span className='font-bold text-lg dark:text-highlight text-darkBlueText'>
              Description:{' '}
            </span>
            {description}
          </p>
        </div>
      </div>

      {isOpen ? (
        <div
          ref={ref}
          className='flex flex-col w-[70%] h-[50%] md:w-[60%] md:h-[60%] gap-2 top-1/2 left-1/2 fixed -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-md bg-dark/90 dark:bg-light/80 z-50 overflow-y-scroll'>
          <button
            className='flex flex-col justify-center items-center fixed top-0 right-0 p-10 z-50'
            onClick={closeModal}>
            <span className='bg-dark w-6 h-0.5 rounded-sm block rotate-45 translate-y-0.5'></span>
            <span className='bg-dark w-6 h-0.5 rounded-sm block -rotate-45 -translate-y-0'></span>
          </button>
          <div>
            <Image
              src={picture}
              alt='project logo'
              width={700}
              height={300}
              className='h-[100%] w-[100%]'
            />
          </div>

          <div className='flex flex-col items-center p-8'>
            <h4 className='text-blueRings dark:text-darkBlueText font-light'>
              App Name:
            </h4>
            <h1 className='font-semibold text-lg mb-4 text-light dark:text-darkText'>
              {name}
            </h1>

            <p className='font-light text-blueRings dark:text-darkBlueText'>
              Project Description:
            </p>
            <p className='text-center max-w-xl text-light dark:text-darkText mb-4'>
              {description}
            </p>

            <p className='font-light text-blueRings dark:text-darkBlueText'>
              Core Technologies:
            </p>
            <ul className='pb-6 flex flex-col sm:flex-row items-center gap-2 font-semibold text-md dark:text-darkText text-light'>
              {techStack}
            </ul>

            {note && (
              <div className='flex flex-col items-center'>
                <p className=' text-redText font-bold'>Project Note:</p>
                <p className='text-center max-w-xl text-light dark:text-darkText mb-4'>
                  {note}
                </p>
              </div>
            )}

            <div className='flex flex-row gap-2 pb-3'>
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
        </div>
      ) : null}
    </motion.div>
  );
}
