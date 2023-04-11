import React from 'react';

export default function Hero({ children, className = '' }) {
  return (
    <div className='h-screen flex items-center justify-center'>
      <p className='text-3xl text-blue-400'>Hero Component</p>
    </div>
  );
}
