import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className='h-screen'>
      <Head>
        <title>Eddie Kuo</title>
      </Head>

      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
}
