import Head from 'next/head';
import React from 'react';

export default function about() {
  return (
    <>
      <Head>
        <title>Eddie Kuo | About</title>
      </Head>
      <main>
        <div className='h-screen flex justify-center items-center'>
          <p>About Component</p>
        </div>
      </main>
    </>
  );
}
