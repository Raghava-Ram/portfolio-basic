import React from 'react';

export default function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <span className="skill-tag" key={idx}>{skill}</span>
        ))}
      </div>
      <style jsx>{`
        .skill-card {
          background: rgba(20, 20, 30, 0.85);
          border: 2.5px solid #ff4c4c;
          border-radius: 32px;
          box-shadow: 0 0 18px 2px #ff4c4c44;
          padding: 2rem 1.5rem 1.5rem 1.5rem;
          margin: 1rem;
          min-width: 260px;
          max-width: 340px;
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.15s, box-shadow 0.2s;
        }
        .skill-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 0 32px 4px #ff4c4c99;
        }
        .icon {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          margin-bottom: 1rem;
          color: #ff4c4c;
          background: rgba(255, 76, 76, 0.08);
        }
        h3 {
          margin: 0 0 1.2rem 0;
          font-size: 1.5rem;
          color: #ff4c4c;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-weight: 700;
          text-align: center;
          text-shadow: 1px 1px 6px #000, 0 0 8px #ff4c4c44;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
        }
        .skill-tag {
          background: rgba(255, 76, 76, 0.13);
          color: #fff;
          border: 1.5px solid #ff4c4c;
          border-radius: 12px;
          padding: 0.4em 1em;
          font-size: 1rem;
          font-family: 'Comic Neue', cursive, sans-serif;
          font-weight: 500;
          box-shadow: 0 1px 6px #ff4c4c22;
          text-shadow: 1px 1px 4px #000;
          transition: box-shadow 0.25s, transform 0.18s, background 0.18s;
          cursor: pointer;
        }
        .skill-tag:hover {
          box-shadow: 0 0 16px 4px #ff4c4c, 0 1px 6px #ff4c4c22;
          background: rgba(255, 76, 76, 0.22);
          transform: scale(1.12) rotate(-2deg);
          z-index: 1;
        }
      `}</style>
    </div>
  );
} 