// pages/_app.js
import '../styles/globals.css';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Spidey from '../components/Spidey';  // <-- import here

export default function MyApp({ Component, pageProps, router }) {
  const audioRef = useRef(null);
  const nextRouter = useRouter();

  useEffect(() => {
    audioRef.current = new Audio('/sounds/thwip.mp3');

    const handleRouteChangeStart = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    };

    nextRouter.events.on('routeChangeStart', handleRouteChangeStart);
    return () => {
      nextRouter.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [nextRouter.events]);

  return (
    <>
      <Head>
        {/* Fonts are loaded in _document.js */}
      </Head>

      <Spidey /> {/* Add Spidey here */}

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ padding: '2rem', minHeight: '100vh' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
