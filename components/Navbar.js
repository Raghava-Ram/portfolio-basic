import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import { FaHome, FaCode, FaTools, FaBook, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const audioRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    audioRef.current = new Audio('/sounds/thwip.mp3');
  }, []);

  const handleClick = (href) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    router.push(href); // navigate manually
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <button
            className={styles.navButton}
            onClick={() => handleClick('/')}
            title="Home"
            aria-label="Home"
          >
            <FaHome />
          </button>
        </li>
        <li>
          <button
            className={styles.navButton}
            onClick={() => handleClick('/projects')}
            title="Projects"
            aria-label="Projects"
          >
            <FaCode />
          </button>
        </li>
        <li>
          <button
            className={styles.navButton}
            onClick={() => handleClick('/skills')}
            title="Skills"
            aria-label="Skills"
          >
            <FaTools />
          </button>
        </li>
        <li>
          <button
            className={styles.navButton}
            onClick={() => handleClick('/resources')}
            title="Resources"
            aria-label="Resources"
          >
            <FaBook />
          </button>
        </li>
        <li>
          <button
            className={styles.navButton}
            onClick={() => handleClick('/contact')}
            title="Contact"
            aria-label="Contact"
          >
            <FaEnvelope />
          </button>
        </li>
      </ul>
    </nav>
  );
}
