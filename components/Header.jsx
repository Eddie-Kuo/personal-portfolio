import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import CustomLink from './CustomLink';

//*responsiveness of home page + header into side menu
//* need better adaptability for small-medium screens
//* make sure that the circles stay in main and not go into the header

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  console.log(isOpen);

  return (
    <header className='w-full h-20 flex justify-between items-center px-16 py-8 mx-auto z-0'>
      <button
        className='md:hidden flex flex-col justify-center items-center'
        onClick={handleClick}
      >
        <span
          className={`bg-[#161616] w-6 h-0.5 rounded-sm transition-all duration-300 block ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-[#161616] w-6 h-0.5 rounded-sm transition-all duration-100 block my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-[#161616] w-6 h-0.5 rounded-sm transition-all duration-300 block ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <motion.div
        className='hidden md:flex mr-10'
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
        <CustomLink href='/' title='Home' className='mr-6 text-[#161616]' />
        <CustomLink
          href='/about'
          title='About'
          className='mx-6 text-[#161616]'
        />
        <CustomLink
          href='/projects'
          title='Projects'
          className='ml-6 text-[#161616]'
        />
      </motion.div>
      <motion.div
        className='hidden md:flex space-x-5'
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
        />
        <SocialIcon
          url='https://github.com/Eddie-Kuo'
          fgColor='#424242'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/the_eddiekuo/'
          fgColor='#424242'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/eddie.kuo.520/'
          fgColor='#424242'
          bgColor='transparent'
        />
        <span className='w-8 h-8 bg-black rounded-full self-center'></span>
      </motion.div>
    </header>
  );
}
