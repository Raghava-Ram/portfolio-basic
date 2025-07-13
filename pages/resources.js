import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function Resources() {
  const resources = [
    {
      name: 'Introduction to Python',
      link: 'https://courses.analyticsvidhya.com/courses/introduction-to-data-science',
    },
    {
      name: 'A Comprehensive Learning Path to Become a Data Analyst',
      link: 'https://courses.analyticsvidhya.com/courses/take/a-comprehensive-learning-path-to-become-a-data-analyst-in-2025/lessons/60608781-introduction',
    },
    {
      name: 'Deep Learning Specialization by Andrew Ng',
      link: 'https://www.coursera.org/specializations/deep-learning',
    },
    {
      name: 'Fast.ai Practical Deep Learning',
      link: 'https://course.fast.ai/',
    },
    {
      name: 'Papers with Code',
      link: 'https://paperswithcode.com/',
    },
    {
      name: 'Kaggle Learn',
      link: 'https://www.kaggle.com/learn',
    },
    {
      name: 'Awesome Machine Learning GitHub',
      link: 'https://github.com/josephmisiti/awesome-machine-learning',
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
        <h1>Resources</h1>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                {resource.name}
              </a>
            </div>
          ))}
        </div>

        <div className="coming-soon">
          Adding more Resources soon ... <span>🚀</span>
        </div>
      </div>

      <style jsx>{`
        .resources-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 1.5rem 2rem;
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

        .resources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .resource-card {
          background: linear-gradient(135deg, rgba(255, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
          border: 2px solid #ff4d4d;
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .resource-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.7);
        }

        .resource-link {
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          display: block;
          text-shadow: 1px 1px 3px #000;
          transition: color 0.3s ease;
        }

        .resource-link:hover {
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
          .resources-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2.2rem;
          }

          .resource-link {
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
