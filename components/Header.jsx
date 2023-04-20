import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';
import PopupNavLink from './PopupNavLink';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-full h-20 flex justify-between items-center px-16 py-8 mx-auto bg-light'>
      <button
        className='lg:hidden flex flex-col justify-center items-center mt-6 -ml-4 sm:mt-0 sm:ml-0 z-40 group hover:border hover:border-[rgb(54,69,79)] rounded-full h-10 w-10'
        onClick={handleClick}
      >
        <span
          className={`bg-dark w-6 h-0.5 rounded-sm transition-all duration-300 block ${
            isOpen ? 'rotate-135 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark w-6 h-0.5 rounded-sm transition-all duration-100 block my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark w-6 h-0.5 rounded-sm transition-all duration-300 block ${
            isOpen ? '-rotate-135 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <motion.div
        className='hidden lg:flex mr-10'
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <CustomLink href='/' title='Home' className='mr-6 text-dark' />
        <CustomLink href='/about' title='About' className='mx-6 text-dark' />
        <CustomLink
          href='/projects'
          title='Projects'
          className='ml-6 text-dark'
        />
      </motion.div>
      <motion.div
        className='hidden lg:flex space-x-5'
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          url='https://www.linkedin.com/in/eddie-kuo17/'
          fgColor='#424242'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://github.com/Eddie-Kuo'
          fgColor='#424242'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://www.instagram.com/the_eddiekuo/'
          fgColor='#424242'
          bgColor='transparent'
          target='_blank'
        />
        <SocialIcon
          url='https://www.facebook.com/eddie.kuo.520/'
          fgColor='#424242'
          bgColor='transparent'
          target='_blank'
        />
        <span className='w-8 h-8 bg-dark rounded-full self-center'></span>
      </motion.div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.01 }}
          className='flex flex-col justify-center items-center top-1/2 left-1/2 fixed z-30 bg-[#868686]/80 -translate-x-1/2 -translate-y-1/2 rounded-xl backdrop-blur-md md:p-16 transition ease-in duration-300'
        >
          <button
            className='hidden lg:flex flex-col justify-center items-center fixed top-0 left-0 p-10'
            onClick={handleClick}
          >
            <span className='bg-dark w-6 h-0.5 rounded-sm block rotate-45 translate-y-0.5'></span>
            <span className='bg-dark w-6 h-0.5 rounded-sm block -rotate-45 -translate-y-0'></span>
          </button>

          <nav className='flex flex-col sm:flex-row justify-center items-center pt-24 px-36'>
            <PopupNavLink href='/' title='Home' className='sm:mr-6 text-dark' />
            <PopupNavLink
              href='/about'
              title='About'
              className='sm:mx-6 text-dark'
            />
            <PopupNavLink
              href='/projects'
              title='Projects'
              className='sm:ml-6 text-dark'
            />
          </nav>

          <nav className='mt-10 pb-24 px-8 flex justify-center items-center'>
            <SocialIcon
              url='https://www.linkedin.com/in/eddie-kuo17/'
              fgColor='#424242'
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              url='https://github.com/Eddie-Kuo'
              fgColor='#424242'
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              url='https://www.instagram.com/the_eddiekuo/'
              fgColor='#424242'
              bgColor='transparent'
              target='_blank'
            />
            <SocialIcon
              url='https://www.facebook.com/eddie.kuo.520/'
              fgColor='#424242'
              bgColor='transparent'
              target='_blank'
            />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}
