import React from 'react';

export default function SkillCard({ icon, title, skills }) {
  return (
    <div className="skill-card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <a
            key={idx}
            href={skill.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-tag"
            style={{ textDecoration: 'none' }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-name">{skill.name}</span>
          </a>
        ))}
      </div>
      <style jsx>{`
        .skill-card {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 76, 76, 0.2);
          border-radius: 24px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          padding: 2rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .skill-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.4), var(--neon-glow);
          border-color: var(--primary-red);
        }
        .icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary-red);
          background: rgba(255, 76, 76, 0.08);
          border: 1px solid rgba(255, 76, 76, 0.3);
          box-shadow: 0 0 15px rgba(255, 76, 76, 0.1);
        }
        h3 {
          margin: 0 0 1.5rem 0;
          font-size: 1.4rem;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          text-align: center;
          letter-spacing: 1px;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }
        .skill-tag {
          background: rgba(255, 255, 255, 0.03);
          color: #e0f7fa;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.6em 1.2em;
          font-size: 0.95rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .skill-tag:hover {
          background: rgba(255, 76, 76, 0.2);
          border-color: var(--primary-red);
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 5px 15px rgba(255, 76, 76, 0.25);
          color: #fff;
        }
        .skill-icon {
          display: flex;
          align-items: center;
          font-size: 1.1rem;
          color: var(--primary-red);
        }
        .skill-tag:hover .skill-icon {
          color: #fff;
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.8));
        }
      `}</style>
    </div>
  );
} 