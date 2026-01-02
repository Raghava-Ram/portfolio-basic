import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import FadeInSection from '../components/FadeInSection';

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
      <Head>
        <title>Certifications - Raghava Ram | ML Engineer & Data Scientist</title>
        <meta name="description" content="View my professional certifications in Data Analysis, AI, Machine Learning, AWS, Python, Power BI, Tableau, and more. Download certificates and verify my qualifications." />
        <meta name="keywords" content="Data Analysis certification, AI certification, Machine Learning certification, AWS certification, Python certification, Power BI certification, Tableau certification, professional certificates" />

        {/* Open Graph */}
        <meta property="og:title" content="Certifications - Raghava Ram | ML Engineer & Data Scientist" />
        <meta property="og:description" content="View my professional certifications in Data Analysis, AI, Machine Learning, AWS, Python, Power BI, Tableau, and more." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/certifications" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Certifications - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="View my professional certifications in Data Analysis, AI, Machine Learning, AWS, Python, Power BI, Tableau, and more." />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Navbar />
      <div className="certificates-container">
        <h1>My Certificates</h1>
        <div className="certificates-grid">
          {certifications.map((cert) => (
            <FadeInSection key={cert.name}>
              <div className="certificate-card">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    width={320}
                    height={210}
                    style={{ objectFit: 'cover', borderRadius: '12px', border: '1px solid rgba(255,76,76,0.5)', transition: 'transform 0.4s' }}
                  />
                  <h2 style={{
                    marginTop: '1.5rem',
                    color: '#e0f7fa',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {cert.name}
                  </h2>
                </a>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
      <style jsx>{`
        .certificates-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
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
          content: 'MY CERTIFICATES';
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

        .certificates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          justify-content: center;
        }

        .certificate-card {
          background: var(--glass-bg);
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
          padding: 1.5rem;
          border: 1px solid rgba(255, 76, 76, 0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          width: 100%;
          height: 100%;
        }

        .certificate-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.4), var(--neon-glow);
          border-color: var(--primary-red);
        }

        @media (max-width: 1100px) {
          .certificates-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .certificates-grid {
            grid-template-columns: 1fr;
          }
          h1 { font-size: 2.8rem; }
        }

        @media (max-width: 600px) {
          .certificates-container {
            padding: 2rem 1rem;
          }
          h1 {
            font-size: 2.2rem;
          }
          .certificates-grid {
            gap: 1.5rem;
          }
        }
      `}</style>
    </>
  );
} 