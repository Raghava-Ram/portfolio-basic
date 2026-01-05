// pages/skills.js
import Navbar from '../components/Navbar';
import SkillCard from '../components/SkillCard';
import FadeInSection from '../components/FadeInSection';
import Head from 'next/head';

import {
  SiPython, SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiPytorch, SiTensorflow, SiKeras,
  SiGit, SiDocker, SiFlask, SiStreamlit, SiTableau, SiPlotly,
  SiGithubactions, SiDvc, SiMlflow, SiGnu, SiYaml, SiKalilinux, SiAmazons3
} from 'react-icons/si';
import { FaBrain, FaRobot, FaChartBar, FaUsers, FaLightbulb, FaCogs, FaProjectDiagram, FaSearch, FaJava } from 'react-icons/fa';
import { TbMathFunction } from 'react-icons/tb';

const skillSections = [
  {
    icon: <>📚</>,
    title: 'Languages & Libraries',
    color: '#4f8cff',
    skills: [
      { name: 'Python', icon: <SiPython />, url: 'https://www.python.org/' },
      { name: 'Java', icon: <FaJava />, url: 'https://www.java.com/' },
      { name: 'SQL', icon: <SiMysql />, url: 'https://www.mysql.com/' }, // Using MySQL as proxy for SQL
      { name: 'NumPy', icon: <SiNumpy />, url: 'https://numpy.org/' },
      { name: 'Pandas', icon: <SiPandas />, url: 'https://pandas.pydata.org/' },
      { name: 'Scikit-learn', icon: <SiScikitlearn />, url: 'https://scikit-learn.org/' },
      { name: 'NLTK', icon: <FaRobot />, url: 'https://www.nltk.org/' }, // Generic Robot for NLP
      { name: 'YAML', icon: <SiYaml />, url: 'https://yaml.org/' },
    ],
  },
  {
    icon: <>🤖</>,
    title: 'Machine Learning',
    color: '#3ecf8e',
    skills: [
      { name: 'Supervised Learning', icon: <FaBrain />, url: 'https://en.wikipedia.org/wiki/Supervised_learning' },
      { name: 'Unsupervised Learning', icon: <FaProjectDiagram />, url: 'https://en.wikipedia.org/wiki/Unsupervised_learning' },
      { name: 'Feature Engineering', icon: <FaCogs />, url: 'https://en.wikipedia.org/wiki/Feature_engineering' },
      { name: 'Model Evaluation', icon: <FaSearch />, url: 'https://scikit-learn.org/stable/modules/model_evaluation.html' },
    ],
  },
  {
    icon: <>🧠</>,
    title: 'Deep Learning',
    color: '#a259e6',
    skills: [
      { name: 'Neural Networks', icon: <FaBrain />, url: 'https://en.wikipedia.org/wiki/Neural_network' },
      { name: 'CNNs', icon: <TbMathFunction />, url: 'https://en.wikipedia.org/wiki/Convolutional_neural_network' },
      { name: 'RNNs', icon: <TbMathFunction />, url: 'https://en.wikipedia.org/wiki/Recurrent_neural_network' },
      { name: 'Transfer Learning', icon: <FaRobot />, url: 'https://en.wikipedia.org/wiki/Transfer_learning' },
    ],
  },
  {
    icon: <>⚙️</>,
    title: 'MLOps',
    color: '#ff7f50',
    skills: [
      { name: 'Git', icon: <SiGit />, url: 'https://git-scm.com/' },
      { name: 'DVC', icon: <SiDvc />, url: 'https://dvc.org/' },
      { name: 'MLflow', icon: <SiMlflow />, url: 'https://mlflow.org/' },
      { name: 'Docker', icon: <SiDocker />, url: 'https://www.docker.com/' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, url: 'https://github.com/features/actions' },
      { name: 'AWS S3', icon: <SiAmazons3 />, url: 'https://aws.amazon.com/s3/' },
      { name: 'CI/CD', icon: <FaCogs />, url: 'https://en.wikipedia.org/wiki/CI/CD' },
    ],
  },
  {
    icon: <>🛠️</>,
    title: 'Frameworks & Tools',
    color: '#ffb400',
    skills: [
      { name: 'TensorFlow', icon: <SiTensorflow />, url: 'https://www.tensorflow.org/' },
      { name: 'Keras', icon: <SiKeras />, url: 'https://keras.io/' },
      { name: 'Flask', icon: <SiFlask />, url: 'https://flask.palletsprojects.com/' },
      { name: 'Streamlit', icon: <SiStreamlit />, url: 'https://streamlit.io/' },
    ],
  },
  {
    icon: <>📊</>,
    title: 'Visualization Tools',
    color: '#4f8cff',
    skills: [
      { name: 'Tableau', icon: <SiTableau />, url: 'https://www.tableau.com/' },
      { name: 'Power BI', icon: <FaChartBar />, url: 'https://powerbi.microsoft.com/' },
      { name: 'Plotly', icon: <SiPlotly />, url: 'https://plotly.com/' },
      { name: 'Matplotlib', icon: <FaChartBar />, url: 'https://matplotlib.org/' },
      { name: 'Seaborn', icon: <FaChartBar />, url: 'https://seaborn.pydata.org/' },
    ],
  },
  {
    icon: <>💡</>,
    title: 'Soft Skills',
    color: '#3ecf8e',
    skills: [
      { name: 'Problem Solving', icon: <FaLightbulb />, url: '#' },
      { name: 'Teamwork', icon: <FaUsers />, url: '#' },
      { name: 'Communication', icon: <FaUsers />, url: '#' },
      { name: 'Creativity', icon: <FaLightbulb />, url: '#' },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills - Raghava Ram | ML Engineer & Data Scientist</title>
        <meta name="description" content="Explore my technical skills in Machine Learning, Deep Learning, MLOps, Python, TensorFlow, Data Analysis, and more. View my expertise in AI/ML technologies." />
        <meta name="keywords" content="Machine Learning skills, Deep Learning, MLOps, Python, TensorFlow, Data Analysis, Data Science skills, AI Engineer skills" />

        {/* Open Graph */}
        <meta property="og:title" content="Skills - Raghava Ram | ML Engineer & Data Scientist" />
        <meta property="og:description" content="Explore my technical skills in Machine Learning, Deep Learning, MLOps, Python, TensorFlow, Data Analysis, and more." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/skills" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Skills - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="Explore my technical skills in Machine Learning, Deep Learning, MLOps, Python, TensorFlow, Data Analysis, and more." />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navbar />
      <div className="skills-main">
        <h1 className="skills-heading">My Skills</h1>
        <div className="skills-grid">
          {skillSections.map((section, idx) => (
            <FadeInSection key={section.title}>
              <SkillCard
                icon={section.icon}
                title={section.title}
                color={section.color}
                skills={section.skills}
              />
            </FadeInSection>
          ))}
        </div>

        <div className="coming-soon">
          ACQUIRING NEW SKILLS ... UPGRADE IN PROGRESS <span>⚡</span>
        </div>
      </div>
      <style jsx>{`
        .skills-main {
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
          padding: 3rem 10rem;
          color: #fff;
        }
        
        .skills-heading {
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
        
        .skills-heading::before, .skills-heading::after {
          content: 'MY SKILLS';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #14141e00;
        }

        .skills-heading::before {
          left: 2px;
          text-shadow: -1px 0 #00ffff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .skills-heading::after {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          justify-content: center;
        }

        .coming-soon {
          margin-top: 12rem;
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
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skills-heading { font-size: 2.8rem; }
        }

        @media (max-width: 1100px) {
          .skills-main {
            padding: 2rem 1rem 120px 1rem; /* Extra padding for bottom navbar */
          }
          .skills-heading {
            font-size: 2.2rem;
          }
          .skills-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
