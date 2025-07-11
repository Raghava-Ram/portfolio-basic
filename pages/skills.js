// pages/skills.js
import Navbar from '../components/Navbar';
import SkillCard from '../components/SkillCard';

const skillSections = [
  {
    icon: <>📚</>,
    title: 'Languages & Libraries',
    color: '#4f8cff',
    skills: ['Python', 'Java', 'SQL', 'NumPy', 'Pandas', 'Scikit-learn', 'NLTK', 'YAML'],
  },
  {
    icon: <>🤖</>,
    title: 'Machine Learning',
    color: '#3ecf8e',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    icon: <>🧠</>,
    title: 'Deep Learning',
    color: '#a259e6',
    skills: ['Neural Networks', 'Convolutional Neural Networks (CNNs)', 'Recurrent Neural Networks (RNNs)', 'Transfer Learning'],
  },
  {
    icon: <>⚙️</>,
    title: 'MLOps',
    color: '#ff7f50',
    skills: ['Git & Version Control', 'DVC', 'Mlflow', 'Docker', 'GitHub Actions', 'AWS S3', 'AWS IAM', 'CI/CD', 'Learning.....'],
  },
  {
    icon: <>🛠️</>,
    title: 'Frameworks & Tools',
    color: '#ffb400',
    skills: ['TensorFlow', 'Keras', 'Git', 'Flask', 'Streamlit'],
  },
  {
    icon: <>📊</>,
    title: 'Visualization Tools',
    color: '#4f8cff',
    skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    icon: <>💡</>,
    title: 'Soft Skills',
    color: '#3ecf8e',
    skills: ['Problem Solving', 'Teamwork', 'Communication', 'Creativity', 'Time Management'],
  },
];

export default function Skills() {
  return (
    <>
      <Navbar />
      <div className="skills-main">
        <h1 className="skills-heading">My Skills</h1>
        <div className="skills-grid">
          {skillSections.map((section, idx) => (
            <SkillCard
              key={section.title}
              icon={section.icon}
              title={section.title}
              color={section.color}
              skills={section.skills}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-main {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 1rem 2rem;
          font-family: 'Comic Neue', cursive;
        }
        .skills-heading {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 2.5rem;
          color: #fff;
          font-family: 'Comic Neue', cursive;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-shadow: 0 4px 18px #222, 0 1px 0 #fff, 0 0 12px #C62828;
          position: relative;
        }
        .skills-heading::after {
          content: '';
          display: block;
          margin: 0.7rem auto 0 auto;
          width: 90px;
          height: 6px;
          border-radius: 3px;
          background: linear-gradient(90deg, #fff 0%, #C62828 100%);
          opacity: 0.95;
          box-shadow: 0 2px 8px #222a;
        }
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        @media (max-width: 900px) {
          .skills-grid {
            gap: 1rem;
          }
        }
        @media (max-width: 600px) {
          .skills-main {
            padding: 0.5rem 0.1rem;
          }
          .skills-heading {
            font-size: 1.5rem;
            margin-bottom: 1.2rem;
          }
          .skills-grid {
            flex-direction: column;
            gap: 1.2rem;
            padding: 0.2rem 0;
          }
        }
      `}</style>
    </>
  );
}
