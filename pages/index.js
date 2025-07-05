import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

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
            <h1 className="styled-name">Hi, I'm Raghava Ram</h1>
            <TypingAnimation texts={titles} />
            <p className="styled-bio">{bioText}</p>

            {/* Resume Download Button */}
            <a
              href="/RAGHAVA_RAM.pdf"
              download
              className="resume-button fadeInResume"
            >
              <FaDownload style={{ marginRight: '0.7em', marginBottom: '-0.15em' }} />
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
          transform: scale(1.05) rotate(-2deg);
          letter-spacing: 0.04em;
        }
        .fadeInResume {
          animation: fadeInUp 1.2s cubic-bezier(.4,1.5,.5,1) 0.7s both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .styled-name {
          color: #fff;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-size: 2.7rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-shadow: -1.5px -1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 1.5px 0 #000, 0 2px 8px #000a;
          margin-bottom: 0.7rem;
        }
        .styled-bio {
          white-space: pre-line;
          color: #A0E7FF;
          font-size: 1.32rem;
          margin-top: 1.1rem;
          text-shadow: 0 1px 2.5px #fff8, 0 1px 0 #fff, 0 0 2px #A0E7FF33;
          line-height: 1.7;
          letter-spacing: 0.01em;
          font-weight: 500;
          border-radius: 0.5em;
          padding: 0.2em 0.1em;
        }
        .styled-title {
          font-family: 'Poppins', 'Comic Neue', cursive, sans-serif;
          font-size: 1.7rem;
          font-weight: 900;
          min-height: 2.4rem;
          margin-bottom: 0.3em;
          letter-spacing: 0.04em;
          background: linear-gradient(90deg, #A0E7FF 0%, #4f8cff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          text-shadow: 0 2px 18px #A0E7FF88, 0 1px 0 #fff, 0 0 12px #4f8cff44;
          display: inline-block;
          position: relative;
        }
        .styled-title::after {
          content: '';
          display: block;
          margin: 0.3em auto 0 auto;
          width: 60%;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #A0E7FF 0%, #4f8cff 100%);
          opacity: 0.7;
          animation: underlineFadeIn 1.2s cubic-bezier(.4,1.5,.5,1) 0.2s both;
        }
        @keyframes underlineFadeIn {
          0% { width: 0; opacity: 0; }
          100% { width: 60%; opacity: 0.7; }
        }
     `}</style>
    </>
  );
}
