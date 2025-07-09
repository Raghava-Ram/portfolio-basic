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
