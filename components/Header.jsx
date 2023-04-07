import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
      <header className='flex justify-between px-20 py-5'>
          <div className='flex'>
              <p className='mr-5'>Home</p>
              <p className='mx-5'>About</p>
              <p className='ml-5'>Projects</p>
          </div>
          <div className='flex space-x-5'>
              <p className='text-xl'>S</p>
              <p className='text-xl'>S</p>
              <p className='text-xl'>S</p>
              <p className='text-xl'>S</p>
              <p className='text-xl'>S</p>
          </div>
      </header>
  )
}
