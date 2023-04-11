import Head from 'next/head';
import React from 'react';
import Hero from '../components/Hero';

export default function about() {
  return (
    <>
      <Head>
        <title>Eddie Kuo | About</title>
      </Head>
      <main>
        <div>
          <p>About Component</p>
        </div>
      </main>
    </>
  );
}
