import '@/components/styles/globals.css';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className=''>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
