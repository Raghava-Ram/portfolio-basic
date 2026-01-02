import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useRouter } from 'next/router';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Pages where the button should appear
  // Use simple partial matching or ensure exact match works
  const allowedRoutes = ['/projects', '/skills', '/certifications', '/resources'];

  // Check if current route matches or starts with allowed route (handles trailing slashes)
  const shouldShow = allowedRoutes.some(route => router.pathname.startsWith(route));

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) { // Lower threshold for visibility
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!shouldShow) return null;

  return (
    <>
      <button
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      <style jsx>{`
        .scroll-to-top {
          position: fixed;
          bottom: 40px; /* Standard visible position */
          left: 2rem; /* Moved to LEFT to avoid right sidebar */
          background: rgba(20, 20, 30, 0.9);
          color: var(--primary-red);
          border: 2px solid var(--primary-red);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
          z-index: 99999;
          box-shadow: 0 0 15px rgba(255, 76, 76, 0.5);
          backdrop-filter: blur(10px);
          animation: pulse-glow 2s infinite;
        }

        /* ... existing styles ... */

        @media (max-width: 600px) {
          .scroll-to-top {
            bottom: 110px; /* Keep high on mobile to clear bottom nav */
            left: 1.5rem; /* Left aligned on mobile too */
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
