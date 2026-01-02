import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Head from 'next/head';

// TypingAnimation component
const TypingAnimation = ({ texts, speed = 150, pause = 1000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pause);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  useEffect(() => {
    const blinkTimeout = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkTimeout);
  }, []);

  return (
    <h2 className="styled-title">
      {`${texts[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </h2>
  );
};

const bioText = `I teach machines to learn...
I find stories in data...
I decode AI mysteries by night 🕸️
I'm diving deep into neural networks with deep learning.
And I'm your friendly neighborhood coder 🕷️
Always ready to lend a helping hand with tech!`;

export default function Home() {
  const titles = [
    'ML Engineer',
    'Data Scientist',
    'Data Analyst',
    'DL Engineer',
    'AI Engineer',
    'MLOps Engineer',
  ];

  return (
    <>
      <Head>
        <title>Raghava Ram - ML Engineer & Data Scientist Portfolio</title>
        <meta name="description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps. View my projects, skills, and experience in AI/ML." />
        <meta name="keywords" content="ML Engineer, Data Scientist, Machine Learning, Deep Learning, AI Engineer, MLOps, Python, TensorFlow, Data Analysis, Portfolio" />

        {/* Open Graph */}
        <meta property="og:title" content="Raghava Ram - ML Engineer & Data Scientist Portfolio" />
        <meta property="og:description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Raghava Ram - ML Engineer & Data Scientist Portfolio" />
        <meta name="twitter:description" content="ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps." />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raghava Ram",
              "jobTitle": "ML Engineer",
              "description": "ML Engineer, Data Scientist, and AI enthusiast specializing in machine learning, deep learning, and MLOps.",
              "url": "https://raghavaram-portfolio.vercel.app/",
              "image": "https://raghavaram-portfolio.vercel.app/pfp.jpg",
              "sameAs": [
                "https://github.com/Raghava-Ram"
              ],
              "knowsAbout": [
                "Machine Learning",
                "Deep Learning",
                "Data Science",
                "MLOps",
                "Python",
                "TensorFlow",
                "Data Analysis"
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/pfp.jpg"
              alt="Raghava Ram - ML Engineer and Data Scientist"
              width={150}
              height={150}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.bioText}>
            <h1 className="styled-name">Hi, I&apos;m Raghava Ram</h1>
            <TypingAnimation texts={titles} />
            <p className="styled-bio">{bioText}</p>

            <a
              href="/RAGHAVA_RAM.pdf"
              download
              className={`${styles.resumeButton} ${styles.fadeInResume}`}
            >
              <FaDownload style={{ marginRight: '0.7em', marginBottom: '-0.15em' }} />
              Download Resume
            </a>

            <div className="social-hero">
              <a href="mailto:raghavaram219@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Raghava-Ram" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/raghava-ram-1a9729306" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .styled-name {
          text-shadow: 2px 2px 0 var(--primary-red);
        }
        .styled-title {
          font-family: 'Comic Neue', cursive;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #A0E7FF 0%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 2px var(--primary-blue));
        }

        .social-hero {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .social-hero a {
          font-size: 1.8rem;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-hero a:hover {
          color: var(--primary-red);
          transform: translateY(-5px);
          background: rgba(255, 76, 76, 0.1);
          border-color: var(--primary-red);
          box-shadow: 0 0 15px rgba(255, 76, 76, 0.4);
        }
      `}</style>
    </>
  );
}
