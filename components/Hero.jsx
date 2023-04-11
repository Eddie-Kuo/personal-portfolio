import React from 'react';
import BackgroundCircles from './BackgroundCircles';

export default function Hero({ children, className = '' }) {
  return (
    <div className='h-screen flex items-center justify-center'>
      <BackgroundCircles />
    </div>
  );
}
