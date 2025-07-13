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
        <meta property="og:description" content="Get in touch with Raghava Ram, ML Engineer and Data Scientist. Contact me for collaborations, job opportunities, or questions about AI/ML projects." />
        <meta property="og:url" content="https://raghavaram-portfolio.vercel.app/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Contact - Raghava Ram | ML Engineer & Data Scientist" />
        <meta name="twitter:description" content="Get in touch with Raghava Ram, ML Engineer and Data Scientist. Contact me for collaborations, job opportunities, or questions about AI/ML projects." />
        <meta name="twitter:card" content="summary" />
      </Head>

      <Navbar />

      <div className="outer-wrapper">
        <motion.div
          className="contact-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-heading">🕸️ Contact Me</h1>

          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">
              <FaPaperPlane style={{ marginRight: '0.6em', marginBottom: '-0.15em' }} />
              Send Message
            </button>
          </form>

          <div className="social-links">
            <h2 className="reach-heading">Or Reach Me at:</h2>
            <div className="icon-links">
              <a href="mailto:raghavaram219@gmail.com" className="icon-link" aria-label="Email">
                <FaEnvelope className="icon" />
              </a>
              <a href="https://github.com/Raghava-Ram" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/raghava-ram-1a9729306" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .outer-wrapper {
          display: flex;
          justify-content: flex-start;
          padding: 4rem 1rem;
        }

        .contact-container {
          width: 100%;
          max-width: 600px;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.75);
          border: 2px solid red;
          border-radius: 20px;
          box-shadow: 0 0 25px rgba(255, 0, 0, 0.4);
          color: #fff;
          font-family: 'Comic Neue', cursive;
          margin-left: 2rem;
        }

        .contact-heading {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #ff4c4c;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 1px 4px #000a;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          background: #111;
          border: 2px solid red;
          color: white;
          border-radius: 10px;
          outline: none;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #ff4d4d;
          background: #1a1a1a;
        }

        .contact-form button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
          padding: 0.85rem 0;
          background: #f44336;
          color: #fff;
          font-weight: bold;
          border: none;
          border-radius: 12px;
          font-size: 1.13rem;
          font-family: 'Comic Neue', cursive;
          box-shadow: 0 2px 12px #ff4c4c33;
          transition: background 0.3s, color 0.2s, transform 0.18s, box-shadow 0.18s;
          margin-top: 1.2rem;
        }

        .contact-form button:hover {
          background: #d32f2f;
          color: #fff;
          box-shadow: 0 0 20px #fff, 0 0 20px #ff4c4c99;
          transform: scale(1.05) rotate(-2deg);
        }

        .social-links {
          margin-top: 2rem;
          font-size: 1.1rem;
        }

        .social-links h2 {
          color: #ff4c4c;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 1px 4px #000a;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          letter-spacing: 0.03em;
        }

        .icon-links {
          display: flex;
          gap: 1.3rem;
          margin-top: 0.7rem;
        }

        .icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.2rem;
          height: 3.2rem;
          border-radius: 50%;
          background: #C62828;
          border: 2.5px solid #A0E7FF;
          box-shadow: 0 0 8px #C6282822, 0 0 10px #A0E7FF22;
          transition: all 0.3s cubic-bezier(.4,1.5,.5,1), box-shadow 0.3s;
          text-decoration: none;
          position: relative;
          overflow: visible;
        }

        .icon-link:hover, .icon-link:focus {
          transform: scale(1.13) translateY(-2px);
          animation: bounce 0.5s;
          box-shadow: 0 0 24px 8px #A0E7FF, 0 0 12px #C6282822;
          outline: none;
        }

        @keyframes bounce {
          0%   { transform: scale(1) translateY(0); }
          30%  { transform: scale(1.15, 0.92) translateY(-6px); }
          50%  { transform: scale(0.98, 1.03) translateY(1px); }
          70%  { transform: scale(1.03, 0.98) translateY(-1px); }
          100% { transform: scale(1.13) translateY(-2px); }
        }

        .icon {
          font-size: 1.8rem;
          color: #A0E7FF;
          transition: color 0.18s, text-shadow 0.18s;
          text-shadow: none;
        }

        .icon-link:hover .icon, .icon-link:focus .icon {
          color: #A0E7FF;
          text-shadow: 0 0 18px #A0E7FF, 0 0 8px #A0E7FF;
        }

        @media (max-width: 600px) {
          .contact-container {
            padding: 1.5rem;
            margin-left: 0;
          }

          .contact-heading {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}
