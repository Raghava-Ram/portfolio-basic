import Navbar from '../components/Navbar';

export default function Projects() {
  const projects = [
    {
      name: 'Medicine-Recommendation-System',
      github: 'https://github.com/Raghava-Ram/Medicine-Recommendation-System',
    },
    {
      name: 'KidneyDiseaseClassification-DL-Project',
      github: 'https://github.com/Raghava-Ram/KidneyDiseaseClassification-DL-Project',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="projects-container">
        <h1>My Projects</h1>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.name}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>

        <div className="coming-soon">
          New Projects Coming Soon <span>🚀</span>
        </div>
      </div>

      <style jsx>{`
        .projects-container {
          max-width: 900px;
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
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
          border: 2px solid #ff4d4d;
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
        }

        h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          color: #ff6666;
          text-shadow: 1px 1px 3px #000;
        }

        .github-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          display: inline-block;
          text-shadow: 1px 1px 3px #000;
          transition: color 0.3s ease, text-decoration 0.3s ease;
        }

        .github-link:hover {
          color: #ff4d4d;
          text-decoration: underline;
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

        @media (max-width: 600px) {
          .projects-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2.2rem;
          }

          h3 {
            font-size: 1.2rem;
          }

          .github-link {
            font-size: 1rem;
          }

          .coming-soon {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
