import Link from 'next/link';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';
import { FaHome, FaCode, FaTools, FaBook, FaEnvelope, FaAward } from 'react-icons/fa';

export default function Navbar() {
  const router = useRouter();

  const handleClick = (href) => {
    router.push(href); // navigate manually
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {router.pathname === '/' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/')}
            aria-label="Home"
            data-tooltip="Home"
          >
            <FaHome />
          </button>
        </li>
        <li>
          {router.pathname === '/projects' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/projects')}
            aria-label="Projects"
            data-tooltip="Projects"
          >
            <FaCode />
          </button>
        </li>
        <li>
          {router.pathname === '/certifications' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/certifications')}
            aria-label="Certificates"
            data-tooltip="Certificates"
          >
            <FaAward />
          </button>
        </li>
        <li>
          {router.pathname === '/skills' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/skills')}
            aria-label="Skills"
            data-tooltip="Skills"
          >
            <FaTools />
          </button>
        </li>
        <li>
          {router.pathname === '/resources' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/resources')}
            aria-label="Resources"
            data-tooltip="Resources"
          >
            <FaBook />
          </button>
        </li>
        <li>
          {router.pathname === '/contact' && <span className={styles.activeDot} />}
          <button
            className={styles.navButton}
            onClick={() => handleClick('/contact')}
            aria-label="Contact"
            data-tooltip="Contact"
          >
            <FaEnvelope />
          </button>
        </li>
      </ul>
    </nav>
  );
}
