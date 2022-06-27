import '../styles/globals.css';
import Head from 'next/head';
import Header from '../Components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className='page'>
      <Head>
        <title>
          Leona Christen | Dev Full-Stack
        </title>
      </Head>
      <Header/>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;