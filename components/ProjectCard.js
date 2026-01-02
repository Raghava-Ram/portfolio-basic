import React from 'react';
import Image from 'next/image';

export default function ProjectCard({ image, category, categoryIcon, title, description, tech, github }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
            sizes="(max-width: 600px) 90vw, 370px"
          />
        ) : null}
      </div>
      <div className="project-content">
        <div className="project-category">
          <span className="category-icon">{categoryIcon}</span>
          <span className="category-text">{category}</span>
        </div>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-tech-list">
          {tech.map((t, idx) => (
            <span className="project-tech-tag" key={idx}>{t}</span>
          ))}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
      <style jsx>{`
        .project-card {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 76, 76, 0.2); /* Thinner, consistent with index */
          border-radius: 32px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          width: 100%;
          /* Removed fixed max-width and margin to fit grid */
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s;
        }
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.4), var(--neon-glow);
          border-color: var(--primary-red);
        }
        .project-card:hover .project-image img {
          transform: scale(1.1);
        }
        .project-image {
          width: 100%;
          height: 180px; /* Slightly taller for better view */
          background: linear-gradient(135deg, #2d2d3a 60%, #ff4c4c22 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4c4c44;
          font-size: 2.5rem;
          position: relative;
          overflow: hidden; /* For image zoom */
        }
        .project-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          flex-grow: 1; /* Ensure content fills height */
          height: 100%; /* Explicit height for flex alignment */
        }
        /* ... existing styles ... */
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
          /* removed margin-top: auto to let tags sit naturally */
        }
        .project-tech-tag {
          background: rgba(255, 76, 76, 0.08);
          color: #fff;
          border: 1px solid rgba(255, 76, 76, 0.4);
          border-radius: 20px;
          padding: 0.4em 1em;
          font-size: 0.85rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy transition */
          cursor: default;
        }
        .project-tech-tag:hover {
          background: rgba(255, 76, 76, 0.25);
          box-shadow: 0 5px 15px rgba(255, 76, 76, 0.3);
          border-color: var(--primary-red);
          transform: translateY(-4px) scale(1.05); /* Moving effect */
        }
        .github-link {
          position: relative;
          color: var(--primary-red);
          background: transparent;
          border: 2px solid var(--primary-red);
          border-radius: 12px;
          padding: 0.5em 1.2em; /* Reduced padding */
          font-weight: 700;
          font-size: 0.9rem; /* Reduced font size */
          font-family: 'Orbitron', sans-serif; /* Tech font */
          text-decoration: none;
          margin-top: auto;
          text-align: center;
          letter-spacing: 1px;
          overflow: hidden;
          transition: all 0.4s ease;
          z-index: 1;
          text-transform: uppercase;
          width: 100%;
          align-self: center;
        }

        .github-link::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0%;
          height: 100%;
          background: var(--primary-red);
          z-index: -1;
          transition: width 0.4s ease;
        }

        .github-link:hover {
          color: #fff;
          box-shadow: 0 0 20px var(--primary-red);
          transform: translateY(-3px);
          border-color:transparent;
        }

        .github-link:hover::before {
          width: 100%;
        }
        @media (max-width: 600px) {
          .project-card {
            min-width: unset;
            max-width: 100%;
            margin: 0;
            border-radius: 18px;
          }
          .project-image {
            height: 90px;
          }
          .project-content {
            padding: 0.7rem 0.7rem 1rem 0.7rem;
          }
          h3 {
            font-size: 1.05rem;
          }
          .project-desc {
            font-size: 0.93rem;
            min-height: 32px;
          }
          .project-tech-tag {
            font-size: 0.92rem;
            padding: 0.22em 0.7em;
          }
          .github-link {
            font-size: 0.98rem;
            padding: 0.4em 0.8em;
          }
        }
      `}</style>
    </div>
  );
} 