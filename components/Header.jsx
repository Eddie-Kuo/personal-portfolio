import Link from 'next/link';
import React from 'react';
import CustomLink from './CustomLink';

export default function Header() {
  return (
    <header className='sticky w-full h-20 z-[100] flex justify-between items-center px-24 py-8 max-w-full mx-auto'>
      <nav className='flex'>
        <CustomLink href='/' title='Home' className='mr-6' />
        <CustomLink href='/about' title='About' className='mx-6' />
        <CustomLink href='/projects' title='Projects' className='ml-6' />
      </nav>
      <div className='flex space-x-5'>
        <p className='text-xl'>S</p>
        <p className='text-xl'>S</p>
        <p className='text-xl'>S</p>
        <p className='text-xl'>S</p>
        <p className='text-xl'>S</p>
      </div>
    </header>
  );
}
