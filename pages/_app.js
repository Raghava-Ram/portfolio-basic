// pages/_app.js
import '../styles/globals.css';
// import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Spidey from '../components/Spidey';  // <-- import here

export default function MyApp({ Component, pageProps, router }) {
  // const audioRef = useRef(null);
  // const nextRouter = useRouter();

  // useEffect(() => {
  //   audioRef.current = new Audio('/sounds/thwip.mp3');

  //   const handleRouteChangeStart = () => {
  //     if (audioRef.current) {
  //       audioRef.current.currentTime = 0;
  //       audioRef.current.play();
  //     }
  //   };

  //   nextRouter.events.on('routeChangeStart', handleRouteChangeStart);
  //   return () => {
  //     nextRouter.events.off('routeChangeStart', handleRouteChangeStart);
  //   };
  // }, [nextRouter.events]);

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Raghava Ram - ML Engineer & Data Scientist Portfolio</title>
        <meta name="title" content="Raghava Ram - ML Engineer & Data Scientist Portfolio" />
        <meta name="description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps. View my projects, skills, and experience in AI/ML." />
        <meta name="keywords" content="ML Engineer, Data Scientist, Machine Learning, Deep Learning, AI Engineer, MLOps, Python, TensorFlow, Data Analysis, Portfolio" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Raghava Ram" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/" />
        <meta property="og:title" content="Raghava Ram - ML Engineer & Data Scientist Portfolio" />
        <meta property="og:description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps. View my projects, skills, and experience in AI/ML." />
        <meta property="og:image" content="https://raghavaram-portfolio.vercel.app/pfp.jpg" />
        <meta property="og:site_name" content="Raghava Ram Portfolio" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://raghavaram-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Raghava Ram - ML Engineer & Data Scientist Portfolio" />
        <meta property="twitter:description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps. View my projects, skills, and experience in AI/ML." />
        <meta property="twitter:image" content="https://raghavaram-portfolio.vercel.app/pfp.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff0000" />
        <link rel="canonical" href="https://raghavaram-portfolio.vercel.app/" />
        
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
