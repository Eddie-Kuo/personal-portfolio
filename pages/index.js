import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='h-screen w-full'>
      <Head>
        <title>Eddie Kuo</title>
      </Head>
      <main>
        <Hero />
      </main>
    </div>
  );
}
