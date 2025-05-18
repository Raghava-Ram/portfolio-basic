import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

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
    <h2 style={{ color: '#A0E7FF', fontWeight: '600', minHeight: '2rem' }}>
      {`${texts[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </h2>
  );
};

const bioText = `I teach machines to learn...
I find stories in data...
I decode AI mysteries by night 🕸️
I’m diving deep into neural networks with deep learning.
And I'm your friendly neighborhood coder 🕷️
Always ready to lend a helping hand with tech!`;

export default function Home() {
  const titles = [
    'ML Engineer',
    'Data Scientist',
    'Data Analyst',
    'DL Engineer',
    'AI Engineer',
  ];

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.profileSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/pfp.jpg"
              alt="My Profile Picture"
              width={150}
              height={150}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.bioText}>
            <h1 style={{ color: '#e0f7fa' }}>Hi, I’m Raghava Ram</h1>
            <TypingAnimation texts={titles} />
            <p style={{ whiteSpace: 'pre-line', color: '#b2ebf2', marginTop: '1rem' }}>{bioText}</p>

            {/* Resume Download Button */}
            <a
              href="/RAGHAVA_RAM.pdf"
              download
              className="resume-button"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .resume-button {
          display: inline-block;
          margin-top: 2rem;
          padding: 0.75rem 1.75rem;
          background-color: red;
          color: black;
          font-weight: bold;
          text-decoration: none;
          border: 2px solid #ff0000;
          border-radius: 12px;
          font-family: 'Comic Neue', cursive;
          font-size: 1.1rem;
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.7);
          transition: all 0.3s ease;
        }

        .resume-button:hover {
          background-color: #ff1a1a;
          color: white;
          box-shadow: 0 0 20px rgba(255, 50, 50, 1);
          transform: scale(1.05);
        }
     `}</style>
    </>
  );
}
