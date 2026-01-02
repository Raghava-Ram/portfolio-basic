import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onFinished }) => {
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Fallback: if video doesn't end for some reason, finish after 4 seconds
        const timer = setTimeout(() => {
            handleVideoEnd();
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleVideoEnd = () => {
        setIsFading(true);
        setTimeout(() => {
            if (onFinished) onFinished();
        }, 500); // Wait for fade out animation
    };

    return (
        <div className={`loading-container ${isFading ? 'fade-out' : ''}`}>
            <video
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                className="loading-video"
            >
                <source src="/spidey_logo_loading_animation.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <style jsx>{`
        .loading-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: #000;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: opacity 0.5s ease-out;
        }
        .fade-out {
          opacity: 0;
          pointer-events: none;
        }
        .loading-video {
          width: 100%;
          height: 100%;
          object-fit: cover; /* or contain, depending on preference */
        }
        @media (min-width: 768px) {
            .loading-video {
                width: auto;
                height: 80%;
            }
        }
      `}</style>
        </div>
    );
};

export default LoadingScreen;
