// pages/contact.js
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
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
        <title>Contact | Your Friendly Neighborhood Coder 🕷️</title>
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
            <button type="submit">Send Message 🕷️</button>
          </form>

          <div className="social-links">
            <h2 className="reach-heading">Or Reach Me at:</h2>
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:raghavaram219@gmail.com">raghavaram219@gmail.com</a>
            </p>
            <p>
              <FaGithub className="icon" />
              <a href="https://github.com/Raghava-Ram" target="_blank" rel="noopener noreferrer">
                github.com/Raghava-Ram
              </a>
            </p>
            <p>
              <FaLinkedin className="icon" />
              <a href="https://www.linkedin.com/in/raghava-ram-1a9729306" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/raghava-ram-1a9729306
              </a>
            </p>
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
          color: red;
          text-shadow: 2px 2px #000;
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
          padding: 0.75rem;
          background: red;
          color: black;
          font-weight: bold;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .contact-form button:hover {
          background: #e60000;
        }

        .social-links {
          margin-top: 2rem;
          font-size: 1.1rem;
        }

        .social-links h2 {
          color: red;
          margin-bottom: 1rem;
        }

        .social-links p {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
        }

        .social-links a {
          color: #ff4d4d;
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-links a:hover {
          color: #fff;
        }

        .icon {
          font-size: 1.4rem;
          color: red;
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
