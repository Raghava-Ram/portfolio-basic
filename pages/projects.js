import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

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
      <Navbar />
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <div className="coming-soon">
          New Projects Coming Soon <span>🚀</span>
        </div>
      </div>
      <style jsx>{`
        .projects-container {
          max-width: 1100px;
          margin: 2rem auto;
          padding: 1rem 2rem;
          font-family: 'Comic Neue', cursive;
          color: #fff;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        }
        h1 {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: #ff1a1a;
          text-shadow: 2px 2px 10px #000;
        }
        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .coming-soon {
          margin-top: 3rem;
          text-align: center;
          font-size: 1.5rem;
          color: #ff6666;
          text-shadow: 0 0 8px #ff4d4d;
          font-weight: bold;
          user-select: none;
        }
        @media (max-width: 900px) {
          .projects-grid {
            gap: 1rem;
          }
        }
        @media (max-width: 600px) {
          .projects-container {
            padding: 0.5rem 0.1rem;
            border-radius: 10px;
          }
          h1 {
            font-size: 2rem;
          }
          .projects-grid {
            flex-direction: column;
            gap: 1.2rem;
            padding: 0.2rem 0;
          }
          .coming-soon {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}
