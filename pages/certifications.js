import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const certifications = [
  {
    name: 'A Comprehensive Learning Path to Become a Data Analyst ',
    image: '/DataAnalyst.png',
    pdf: '/Data Analyst.pdf',
  },
  {
    name: 'Mastering Python, Pandas, Numpy',
    image: '/python_udemy.png',
    pdf: '/Mastering Python, Pandas, Numpy.pdf',
  },
  {
    name: 'AI Advance',
    image: '/AI_advance.png',
    pdf: '/AI_Advance.pdf',
  },
  {
    name: 'GitHub Certificate',
    image: '/github_cert.png',
    pdf: '/GitHub certificate.pdf',
  },
  {
    name: 'AI Foundation',
    image: '/AI_foundation.png',
    pdf: '/AI_Foundation.pdf',
  },
  {
    name: 'AWS Certificate',
    image: '/aws.png',
    pdf: '/AWS_Certificate.pdf',
  },
  {
    name: 'Blackbucks GenAI',
    image: '/blackbuks_genAI.png',
    pdf: '/Blackbucks.pdf',
  },
  {
    name: 'Deloitte Job Simulation',
    image: '/deloitte_sim.png',
    pdf: '/Delitte_job_simulation.pdf',
  },
  {
    name: 'ML Connect',
    image: '/ML_connect.png',
    pdf: '/ML connect.pdf',
  },
  {
    name: 'Power BI Certificate',
    image: '/powerbi.png',
    pdf: '/Power BI Certificate.pdf',
  },
  {
    name: 'Power BI Udemy Certificate',
    image: '/powerbi_udemy.png',
    pdf: '/Power BI Udemy Certificate.pdf',
  },
  {
    name: 'Python Certificate',
    image: '/python.png',
    pdf: '/PythonCertificate.pdf',
  },
  {
    name: 'Tableau Beginners',
    image: '/tableau_big.png',
    pdf: '/Tableau beginners.pdf',
  },
  {
    name: 'Twitter Sentiment Analysis',
    image: '/twitter.png',
    pdf: '/Twitter sentiment analysis.pdf',
  },
];

export default function Certifications() {
  return (
    <>
      <Navbar />
      <div className="certificates-container">
        <h1>My Certificates</h1>
        <div className="certificates-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="certificate-card">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover', borderRadius: '12px', border: '2px solid #ff4c29' }}
                />
                <h2 style={{ marginTop: '1.5rem', color: '#ff4c29', textAlign: 'center', fontWeight: 700, fontSize: '1.5rem', textShadow: '1px 1px 6px #000' }}>{cert.name}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .certificates-container {
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
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #ff1a1a;
          text-shadow: 2px 2px 10px #000;
        }
        .certificates-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
        }
        .certificate-card {
          background: rgba(20, 20, 30, 0.95);
          border-radius: 24px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          padding: 2rem;
          max-width: 350px;
          border: 2px solid #ff4c29;
          margin: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        @media (max-width: 900px) {
          .certificates-grid {
            gap: 1rem;
          }
        }
        @media (max-width: 600px) {
          .certificates-container {
            padding: 0.5rem 0.1rem;
            border-radius: 10px;
          }
          h1 {
            font-size: 2rem;
          }
          .certificates-grid {
            flex-direction: column;
            gap: 1.2rem;
            padding: 0.2rem 0;
          }
        }
      `}</style>
    </>
  );
} 