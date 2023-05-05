import '@/components/styles/globals.css';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
