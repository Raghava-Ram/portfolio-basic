import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import FadeInSection from '../components/FadeInSection';
import Head from 'next/head';

export default function Projects() {
  const projects = [
    {
      image: '/med-rec-sys-img.jpg', // Placeholder for future image
      category: 'Healthcare AI',
      categoryIcon: <>🩺</>,
      title: 'Medicine Recommendation System',
      description: 'A system that recommends medicines based on patient symptoms and history using machine learning algorithms.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      github: 'https://github.com/Raghava-Ram/Medicine-Recommendation-System',
    },
    {
      image: '/kidney-dis-DL.jpeg',
      category: 'Deep Learning',
      categoryIcon: <>🧬</>,
      title: 'Kidney Disease Classification DL Project',
      description: 'Deep learning project for classifying kidney disease using scanning image data and neural networks.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Pandas'],
      github: 'https://github.com/Raghava-Ram/Kidney-disease-detection',
    },
    {
      image: '/netflix-logo.jpeg',
      category: 'Data Analysis',
      categoryIcon: <>📊</>,
      title: 'Netflix Content Strategy Analysis',
      description: 'Comprehensive analysis of Netflix\'s content release strategy in 2023, uncovering patterns in timing, audience engagement, and the impact of holidays and weekends on viewership.',
      tech: ['pandas', 'plotly', 'matplotlib'],
      github: 'https://github.com/Raghava-Ram/Netflix-Content-Strategy-Analysis',
    },
    {
      image: '/veh-ins.jpeg',
      category: 'MLOps',
      categoryIcon: <>⚙️</>,
      title: 'Vehicle Insurance Data Pipeline',
      description: 'End-to-End ML Project with CI/CD, MLflow, DVC, Docker, Cloud Deployment, and MLOps practices for vehicle insurance data processing and model deployment.',
      tech: ['Python', 'MLflow', 'DVC', 'Docker', 'CI/CD', 'Cloud Deployment'],
      github: 'https://github.com/Raghava-Ram/Vehicle-Insurance-Data-Pipeline',
    },
    {
      image: '/spam.jpeg',
      category: 'MLOps',
      categoryIcon: <>⚙️</>,
      title: 'Spam or Ham Detection',
      description: 'Complete ML pipeline for spam detection using DVC for experiment tracking and data versioning with AWS S3. Covers end-to-end understanding for creating ML pipelines.',
      tech: ['sklearn', 'nltk', 'dvc', 'pandas', 'yaml', 'aws', 's3'],
      github: 'https://github.com/Raghava-Ram/MLOPs-Day5-Complete-ML-Pipeline',
    },
    {
      image: '/docker-logo.jpg',
      category: 'DevOps',
      categoryIcon: <>🐳</>,
      title: 'Docker Implementation',
      description: 'Docker MasterClass project implementing containerization with Flask application. Covers Docker theory, practical implementation, and container deployment.',
      tech: ['flask', 'docker'],
      github: 'https://github.com/Raghava-Ram/MLOPs-Day8-Docker-MasterClass',
    },
    {
      image: '/cont-int.png',
      category: 'DevOps',
      categoryIcon: <>🔄</>,
      title: 'CI Implementation',
      description: 'End-to-end implementation of Continuous Integration (CI) demonstrating automated testing, building, and deployment workflows using GitHub Actions.',
      tech: ['streamlit', 'github actions'],
      github: 'https://github.com/Raghava-Ram/MLOPs-Day7-CI-MasterClass',
    },
  ];

  return (
    <>
      <Head>
        <title>Projects - Raghava Ram | ML Engineer & Data Scientist</title>
        <meta name="description" content="Explore my ML projects including Medicine Recommendation System, Kidney Disease Classification, Netflix Analysis, MLOps pipelines, and more. View my GitHub repositories and technical implementations." />
        <meta name="keywords" content="ML projects, Machine Learning projects, Deep Learning projects, MLOps projects, Data Analysis projects, Python projects, GitHub repositories" />

        {/* Open Graph */}
        <meta property="og:title" content="Projects - Raghava Ram | ML Engineer & Data Scientist" />
        <meta property="og:description" content="Explore my ML projects including Medicine Recommendation System, Kidney Disease Classification, Netflix Analysis, MLOps pipelines, and more." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/projects" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Projects - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="Explore my ML projects including Medicine Recommendation System, Kidney Disease Classification, Netflix Analysis, MLOps pipelines, and more." />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navbar />
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <FadeInSection key={idx}>
              <ProjectCard {...project} />
            </FadeInSection>
          ))}
        </div>
        <div className="coming-soon">
          FORGING NEW PROJECTS ... DEPLOYMENT IMMINENT <span>🏗️</span>
        </div>
      </div>
      <style jsx>{`
        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
          color: #fff;
          /* Removed background box to let global background shine */
        }
        h1 {
          text-align: center;
          font-size: 4rem;
          margin-bottom: 4rem;
          color: #fff;
          font-family: 'Orbitron', sans-serif; /* Tech/Modern Look */
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 4px;
          position: relative;
          text-shadow: 2px 2px 0px var(--primary-red);
        }
        
        h1::before, h1::after {
          content: 'MY PROJECTS';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #14141e00; /* Transparent */
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          justify-content: center;
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
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 700px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          h1 { font-size: 2.8rem; }
        }
        @media (max-width: 600px) {
          .projects-container {
            padding: 2rem 1rem 100px 1rem; /* Extra padding for bottom navbar */
          }
          h1 { font-size: 2.2rem; }
        }
      `}</style>
    </>
  );
}
