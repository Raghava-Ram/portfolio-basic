// pages/skills.js
import Navbar from '../components/Navbar';

export default function Skills() {
  return (
    <>
      <Navbar />
      <div className="skills-container">
        <h1>My Skills</h1>

        <section>
          <h2 className="section-title">Languages & Libraries</h2>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>Scikit-learn</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Machine Learning</h2>
          <ul>
            <li>Supervised Learning</li>
            <li>Unsupervised Learning</li>
            <li>Feature Engineering</li>
            <li>Model Evaluation</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Deep Learning</h2>
          <ul>
            <li>Neural Networks</li>
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Recurrent Neural Networks (RNNs)</li>
            <li>Transfer Learning</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">MLOps</h2>
          <ul>
            <li>Git & Version Control</li>
            <li>Learning .....</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Frameworks & Tools</h2>
          <ul>
            <li>TensorFlow</li>
            <li>Keras</li>
            <li>Git</li>
            <li>Flask</li>
            <li>Streamlit</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Visualization Tools</h2>
          <ul>
            <li>Tableau</li>
            <li>Power BI</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Soft Skills</h2>
          <ul>
            <li>Problem Solving</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Creativity</li>
            <li>Time Management</li>
          </ul>
        </section>
      </div>

      <style jsx>{`
        .skills-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 1rem 2rem;
          font-family: 'Comic Neue', cursive;
          color: #fff;
          background: transparent;
        }

        h1 {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 2rem;
          color: red;
          text-shadow: 2px 2px 5px #000;
        }

        section {
          margin-bottom: 2.5rem;
        }

        .section-title {
          color: red;
          font-size: 1.6rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          padding: 0.3rem 0.75rem;
          background-color: rgba(255, 255, 255, 0.2);
          border: 2px solid red;
          border-radius: 10px;
          text-shadow: 1px 1px 2px black;
          font-weight: bold;
          display: inline-block;
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
        }

        ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: #f4f4f4;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 600px) {
          .skills-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2.2rem;
          }

          .section-title {
            font-size: 1.4rem;
          }

          ul {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
