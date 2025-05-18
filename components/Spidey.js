// components/Spidey.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Spidey() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsVisible(false);
    };
    const handleRouteChangeComplete = () => {
      setIsVisible(true);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.img
          key="spidey"
          src="/spidey-hanging.png"
          alt="Spidey Hanging"
          initial={{ x: -150, opacity: 0, rotate: -15 }}
          animate={{ x: 20, opacity: 1, rotate: [ -15, 15, -15 ] }}
          exit={{ x: -150, opacity: 0, rotate: 0 }}
          transition={{
            x: { type: 'spring', stiffness: 100, damping: 10 },
            opacity: { duration: 0.4 },
            rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
          }}
          style={{
            position: 'fixed',
            top: 20,
            left: 20,
            width: 80,
            cursor: 'pointer',
            transformOrigin: 'top center',
            zIndex: 1000,
          }}
        />
      )}
    </AnimatePresence>
  );
}
