// pages/contact.js
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dict4vb',
      'template_mx21hse',
      formRef.current,
      'gl9QWyd67_jo17M4p'
    )
      .then(
        (result) => {
          alert('Message sent successfully! 🕸️');
          formRef.current.reset(); // clear the form
        },
        (error) => {
          alert('Oops! Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <Head>
        <title>Contact - Raghava Ram | ML Engineer & Data Scientist</title>
        <meta name="description" content="Get in touch with Raghava Ram, ML Engineer and Data Scientist. Contact me for collaborations, job opportunities, or questions about AI/ML projects." />
        <meta name="keywords" content="contact ML engineer, contact data scientist, hire ML engineer, AI consultant, machine learning expert contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact - Raghava Ram | ML Engineer & Data Scientist" />
        <meta property="og:description" content="Get in touch with Raghava Ram, ML Engineer and Data Scientist." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Contact - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="Get in touch with Raghava Ram, ML Engineer and Data Scientist." />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Navbar />

      <div className="contact-main">
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-heading">GET IN TOUCH</h1>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <input type="text" name="user_name" placeholder="Name" required />
            </div>
            <div className="input-group">
              <input type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="input-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">
              SEND MESSAGE <FaPaperPlane style={{ fontSize: '0.9em' }} />
            </button>
          </form>

          <div className="social-section">
            <p>OR CONNECT VIA</p>
            <div className="social-icons">
              <a href="mailto:raghavaram219@gmail.com" className="social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Raghava-Ram" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/raghava-ram-1a9729306" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact-main {
          min-height: calc(100vh - 80px); /* Adjust for navbar */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .contact-card {
          width: 100%;
          max-width: 500px;
          background: var(--glass-bg);
          border: 1px solid rgba(255, 76, 76, 0.2);
          border-radius: 24px;
          padding: 3rem;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-heading {
          font-size: 3rem;
          margin-bottom: 2.5rem;
          color: #fff;
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          position: relative;
          text-shadow: 2px 2px 0px var(--primary-red);
        }

        .contact-heading::before, .contact-heading::after {
          content: 'GET IN TOUCH';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: #14141e00;
        }

        .contact-heading::before {
          left: 2px;
          text-shadow: -1px 0 #00ffff;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }

        .contact-heading::after {
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

        .contact-form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-group {
          position: relative;
        }

        input, textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        input:focus, textarea:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--primary-red);
          box-shadow: 0 0 15px rgba(255, 76, 76, 0.2);
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1rem 2rem;
          background: transparent;
          border: 2px solid var(--primary-red);
          color: var(--primary-red);
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          font-size: 1.1rem;
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0%; height: 100%;
          background: var(--primary-red);
          z-index: -1;
          transition: width 0.4s ease;
        }

        .submit-btn:hover {
          color: #fff;
          box-shadow: 0 0 20px var(--primary-red);
        }

        .submit-btn:hover::before {
          width: 100%;
        }

        .social-section {
          margin-top: 3rem;
          text-align: center;
          width: 100%;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
        }

        .social-section p {
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Orbitron', sans-serif;
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .social-icon {
          font-size: 1.8rem;
          color: #fff;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-icon:hover {
          color: var(--primary-red);
          background: rgba(255, 76, 76, 0.1);
          border-color: var(--primary-red);
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(255, 76, 76, 0.3);
        }

        @media (max-width: 600px) {
          .contact-card {
            padding: 2rem 1.5rem;
          }
          .contact-heading {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </>
  );
}
