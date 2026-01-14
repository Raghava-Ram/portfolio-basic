import Navbar from '../components/Navbar';
import Head from 'next/head';
import FadeInSection from '../components/FadeInSection';
import { SiPython, SiCoursera, SiKaggle, SiGithub, SiPytorch, SiTableau } from 'react-icons/si';
import { FaBook, FaLaptopCode, FaDatabase, FaVideo, FaExternalLinkAlt, FaMicrochip, FaNetworkWired } from 'react-icons/fa';

export default function Resources() {
  const resources = [
    {
      name: 'Git commands',
      link: 'https://docs.google.com/document/d/1saORG2CXuSHWBKGwK0vlmQ1F55LL4kbIUsYYNzXqfOg/edit?usp=sharing',
      icon: <SiGithub />,
      category: 'Document',
      description: 'Git commands for version control.'
    },
    {
      name: 'AI Engineer Roadmap',
      link: 'https://drive.google.com/drive/folders/16mLuCBh9t717qZOT8ss3CdQm-wjm1Co-?usp=sharing',
      icon: <FaLaptopCode />,
      category: 'Document',
      description: 'AI Engineer Roadmap for beginners.'
    },
    {
      name: 'AI Engineer Roadmap website',
      link: 'https://ai-engineer-roadmap-eight.vercel.app/',
      icon: <FaNetworkWired />,
      category: 'Roadmap',
      description: 'AI Engineer Roadmap for beginners.'
    },
    {
      name: 'Introduction to Python',
      link: 'https://courses.analyticsvidhya.com/courses/introduction-to-data-science',
      icon: <SiPython />,
      category: 'Course',
      description: 'Master the basics of Python programming for Data Science.'
    },
    {
      name: 'Data Analyst Path',
      link: 'https://courses.analyticsvidhya.com/courses/take/a-comprehensive-learning-path-to-become-a-data-analyst-in-2025/lessons/60608781-introduction',
      icon: <FaDatabase />, // Generic database icon
      category: 'Career Path',
      description: 'A comprehensive roadmap to becoming a skilled Data Analyst.'
    },
    {
      name: 'Deep Learning Specialization',
      link: 'https://www.coursera.org/specializations/deep-learning',
      icon: <SiCoursera />,
      category: 'Specialization',
      description: 'Master Deep Learning with Andrew Ng on Coursera.'
    },
    {
      name: 'Fast.ai Practical DL',
      link: 'https://course.fast.ai/',
      icon: <SiPytorch />, // Fast.ai relies heavily on Pytorch (though they have their own lib, built on it)
      category: 'Course',
      description: 'Top-down approach to deep learning for coders.'
    },
    {
      name: 'Papers with Code',
      link: 'https://paperswithcode.com/',
      icon: <FaBook />,
      category: 'Research',
      description: 'The latest ML papers with code implementations.'
    },
    {
      name: 'Kaggle Learn',
      link: 'https://www.kaggle.com/learn',
      icon: <SiKaggle />,
      category: 'Interactive',
      description: 'Hands-on micro-courses for data science skills.'
    },
    {
      name: 'Awesome ML GitHub',
      link: 'https://github.com/josephmisiti/awesome-machine-learning',
      icon: <SiGithub />,
      category: 'Collection',
      description: 'A curated list of awesome machine learning frameworks.'
    },
  ];

  return (
    <>
      <Head>
        <title>Resources - Raghava Ram | ML Engineer & Data Scientist</title>
        <meta name="description" content="Curated list of learning resources for Machine Learning, Data Science, Python, Deep Learning, and AI. Recommended courses, tutorials, and materials for aspiring ML engineers." />
        <meta name="keywords" content="machine learning resources, data science courses, python tutorials, deep learning courses, AI learning resources, ML engineer resources" />

        {/* Open Graph */}
        <meta property="og:title" content="Resources - Raghava Ram | ML Engineer & Data Scientist" />
        <meta property="og:description" content="Curated list of learning resources for Machine Learning, Data Science, Python, Deep Learning, and AI." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/resources" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Resources - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="Curated list of learning resources for Machine Learning, Data Science, Python, Deep Learning, and AI." />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navbar />
      <div className="resources-container">
        <h1>MY RESOURCES</h1>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <FadeInSection key={index}>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card-link"
              >
                <div className="resource-card">
                  <div className="resource-icon">{resource.icon}</div>
                  <span className="resource-category">{resource.category}</span>
                  <h3>{resource.name}</h3>
                  <p>{resource.description}</p>
                  <div className="visit-btn">
                    Visit Resource <FaExternalLinkAlt style={{ marginLeft: '8px', fontSize: '0.8em' }} />
                  </div>
                </div>
              </a>
            </FadeInSection>
          ))}
        </div>

        <div className="coming-soon">
          ESTABLISHING UPLINK ... MORE DATA INCOMING <span>📶</span>
        </div>
      </div>

      <style jsx>{`
        .resources-container {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          padding: 3rem 10rem;
          color: #fff;
        }

        h1 {
          text-align: center;
          font-size: 4rem;
          margin-bottom: 4rem;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 4px;
          position: relative;
          text-shadow: 2px 2px 0px var(--primary-red);
        }

        h1::before, h1::after {
          content: 'MY RESOURCES';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #14141e00;
        }

        h1::before {
          left: 2px;
          text-shadow: -1px 0 #00ffff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        h1::after {
          left: -2px;
          text-shadow: -1px 0 #ff00c1;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(14px, 9999px, 122px, 0); }
          5% { clip: rect(78px, 9999px, 86px, 0); }
          10% { clip: rect(44px, 9999px, 66px, 0); }
          15% { clip: rect(12px, 9999px, 55px, 0); }
          20% { clip: rect(89px, 9999px, 2px, 0); }
          25% { clip: rect(28px, 9999px, 96px, 0); }
          30% { clip: rect(64px, 9999px, 14px, 0); }
          35% { clip: rect(54px, 9999px, 10px, 0); }
          40% { clip: rect(22px, 9999px, 20px, 0); }
          45% { clip: rect(4px, 9999px, 83px, 0); }
          50% { clip: rect(96px, 9999px, 49px, 0); }
          55% { clip: rect(100px, 9999px, 30px, 0); }
          60% { clip: rect(6px, 9999px, 67px, 0); }
          65% { clip: rect(48px, 9999px, 88px, 0); }
          70% { clip: rect(55px, 9999px, 11px, 0); }
          75% { clip: rect(2px, 9999px, 5px, 0); }
          80% { clip: rect(74px, 9999px, 4px, 0); }
          85% { clip: rect(33px, 9999px, 99px, 0); }
          90% { clip: rect(11px, 9999px, 12px, 0); }
          95% { clip: rect(98px, 9999px, 8px, 0); }
          100% { clip: rect(56px, 9999px, 56px, 0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { clip: rect(65px, 9999px, 100px, 0); }
          100% { clip: rect(12px, 9999px, 65px, 0); }
        }

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6rem;
          justify-content: center;
        }

        .resource-card-link {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }

        .resource-card {
          background: var(--glass-bg);
          border: 1px solid rgba(255, 76, 76, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100%;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .resource-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), transparent);
          z-index: 1;
        }

        .resource-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.4), var(--neon-glow);
          border-color: var(--primary-red);
        }

        .resource-icon {
          font-size: 3rem;
          color: var(--primary-red);
          margin-bottom: 1rem;
          z-index: 2;
          transition: transform 0.3s;
        }

        .resource-card:hover .resource-icon {
          transform: scale(1.1) rotate(5deg);
          text-shadow: 0 0 15px var(--primary-red);
        }

        .resource-category {
          background: rgba(255, 76, 76, 0.15);
          color: #ff8a80;
          padding: 0.3em 0.8em;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          z-index: 2;
          border: 1px solid rgba(255, 76, 76, 0.3);
        }

        h3 {
          margin: 0 0 0.8rem 0;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-size: 1.4rem;
          z-index: 2;
          line-height: 1.3;
        }

        p {
          font-size: 0.95rem;
          color: #ccc;
          font-family: 'Poppins', sans-serif;
          margin-bottom: 1.5rem;
          z-index: 2;
          flex-grow: 1;
        }

        .visit-btn {
          margin-top: auto;
          color: var(--primary-red);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          transition: all 0.3s;
          border: 1px solid var(--primary-red);
          padding: 0.6em 1.2em;
          border-radius: 8px;
        }

        .resource-card:hover .visit-btn {
          background: var(--primary-red);
          color: #fff;
          box-shadow: 0 0 10px var(--primary-red);
        }

        .coming-soon {
          margin-top: 5rem;
          text-align: center;
          font-size: 1.5rem;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          letter-spacing: 3px;
          padding: 3rem;
          border: 1px solid var(--primary-red);
          border-radius: 20px;
          background: rgba(20, 20, 30, 0.6);
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255, 76, 76, 0.1);
          animation: pulse-border 2s infinite alternate;
        }

        .coming-soon::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 76, 76, 0.2), transparent);
          animation: scan-line 3s infinite linear;
        }

        @keyframes pulse-border {
          0% { box-shadow: 0 0 10px rgba(255, 76, 76, 0.1), inset 0 0 5px rgba(255, 76, 76, 0.1); border-color: rgba(255, 76, 76, 0.3); }
          100% { box-shadow: 0 0 25px rgba(255, 76, 76, 0.4), inset 0 0 15px rgba(255, 76, 76, 0.2); border-color: var(--primary-red); }
        }

        @keyframes scan-line {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        @media (max-width: 1100px) {
          .resources-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .resources-grid {
            grid-template-columns: 1fr;
          }
           h1 { font-size: 2.8rem; }
        }

        @media (max-width: 1100px) {
          .resources-container {
            padding: 2rem 1rem 120px 1rem; /* Extra padding for bottom navbar */
          }
          h1 {
            font-size: 2.2rem;
          }
          .resources-grid {
            gap: 1.5rem;
          }
          .resource-link {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}
