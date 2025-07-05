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
            style={{ objectFit: 'cover' }}
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
          background: rgba(20, 20, 30, 0.85);
          border: 2.5px solid #ff4c4c;
          border-radius: 32px;
          box-shadow: 0 0 18px 2px #ff4c4c44;
          display: flex;
          flex-direction: column;
          min-width: 300px;
          max-width: 370px;
          margin: 1rem;
          overflow: hidden;
          transition: transform 0.18s, box-shadow 0.2s;
        }
        .project-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 0 32px 4px #ff4c4c99;
        }
        .project-image {
          width: 100%;
          height: 140px;
          background: linear-gradient(135deg, #2d2d3a 60%, #ff4c4c22 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff4c4c44;
          font-size: 2.5rem;
          position: relative;
        }
        .project-content {
          padding: 1.2rem 1.3rem 1.3rem 1.3rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .project-category {
          display: flex;
          align-items: center;
          margin-bottom: 0.7rem;
        }
        .category-icon {
          font-size: 1.3rem;
          margin-right: 0.5rem;
          color: #a259e6;
        }
        .category-text {
          color: #a259e6;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-weight: 700;
          font-size: 1.08rem;
        }
        h3 {
          margin: 0 0 0.7rem 0;
          font-size: 1.25rem;
          color: #ff4c4c;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-weight: 700;
          text-shadow: 1px 1px 6px #000, 0 0 8px #ff4c4c44;
        }
        .project-desc {
          color: #eee;
          font-size: 1.01rem;
          margin-bottom: 1.1rem;
          min-height: 48px;
        }
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.1rem;
        }
        .project-tech-tag {
          background: rgba(255, 76, 76, 0.13);
          color: #fff;
          border: 1.5px solid #ff4c4c;
          border-radius: 12px;
          padding: 0.32em 0.9em;
          font-size: 0.98rem;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-weight: 500;
          box-shadow: 0 1px 6px #ff4c4c22;
          text-shadow: 1px 1px 4px #000;
          transition: box-shadow 0.25s, transform 0.18s, background 0.18s;
          cursor: pointer;
        }
        .project-tech-tag:hover {
          box-shadow: 0 0 16px 4px #ff4c4c, 0 1px 6px #ff4c4c22;
          background: rgba(255, 76, 76, 0.22);
          transform: scale(1.12) rotate(-2deg);
          z-index: 1;
        }
        .github-link {
          color: #fff;
          background: #ff4c4c;
          border-radius: 8px;
          padding: 0.5em 1.2em;
          font-weight: bold;
          font-size: 1.05rem;
          text-decoration: none;
          margin-top: 0.5rem;
          box-shadow: 0 2px 8px #ff4c4c33;
          transition: background 0.2s, color 0.2s;
          align-self: flex-end;
        }
        .github-link:hover {
          background: #fff;
          color: #ff4c4c;
        }
        @media (max-width: 600px) {
          .project-card {
            min-width: 90vw;
            max-width: 98vw;
            margin: 0.5rem auto;
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