import React from 'react';
import { Link } from 'react-router-dom';

function LearningPaths() {
  return (
    <section>
      <h2>Personalized Learning Paths</h2>
      <p>Follow our tailored learning paths to enhance your cybersecurity knowledge and skills.</p>

      <div className="learning-path-container">
        <h3>Learning Path: Basic Cybersecurity Awareness</h3>
        <div className="learning-modules">
          <div className="module">
            <Link to="/module1">Module 1: Introduction to Cybersecurity</Link>
          </div>
          <div className="module">
            <Link to="/module2">Module 2: Understanding Cyber Threats</Link>
          </div>
          <div className="module">
            <Link to="/module3">Module 3: Basics of Secure Passwords</Link>
          </div>
          <div className="module">
            <Link to="/module4">Module 4: Recognizing Phishing Attacks</Link>
          </div>
        </div>
      </div>

      <div className="learning-path-container">
        <h3>Learning Path: Advanced Cybersecurity Practices</h3>
        <div className="learning-modules">
          <div className="module">
            <Link to="/module5">Module 5: Network Security Fundamentals</Link>
          </div>
          <div className="module">
            <Link to="/module6">Module 6: Implementing Multi-Factor Authentication</Link>
          </div>
          <div className="module">
            <Link to="/module7">Module 7: Advanced Threat Detection</Link>
          </div>
          <div className="module">
            <Link to="/module8">Module 8: Incident Response Planning</Link>
          </div>
        </div>
      </div>

      <div className="learning-path-container">
        <h3>Learning Path: Cybersecurity for Small Businesses</h3>
        <div className="learning-modules">
          <div className="module">
            <Link to="/module9">Module 9: Cybersecurity Basics for SMBs</Link>
          </div>
          <div className="module">
            <Link to="/module10">Module 10: Protecting Customer Data</Link>
          </div>
          <div className="module">
            <Link to="/module11">Module 11: Securing Your Business Network</Link>
          </div>
          <div className="module">
            <Link to="/module12">Module 12: Responding to Cyber Incidents</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LearningPaths;
