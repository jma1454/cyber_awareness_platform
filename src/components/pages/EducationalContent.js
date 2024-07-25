import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

function EducationalContent() {
  return (
    <div>
      <section id="educational-content">
        <h2>Educational Content</h2>
        <p>Explore our repository of articles, videos, and infographics covering essential cybersecurity topics such as password management, phishing detection, secure browsing, data protection, and incident response.</p>

        <h3>Articles</h3>
        <div className="article">
          <h4>Password Management</h4>
          <p>Learn about the importance of creating strong passwords, using password managers, and avoiding common pitfalls. Strong passwords are your first line of defense against cyber threats.</p>
          <Link to="/password-management" className="button">Read More</Link>
        </div>
        <div className="article">
          <h4>Phishing Detection</h4>
          <p>Phishing attacks are a common way for cybercriminals to steal your personal information. Learn how to detect and avoid phishing attempts to protect yourself online.</p>
          <Link to="/phishing-detection" className="button">Read More</Link>
        </div>
        <div className="article">
          <h4>Secure Browsing</h4>
          <p>Understand the best practices for secure browsing, including the use of HTTPS, avoiding suspicious websites, and using browser security settings effectively.</p>
          <Link to="/secure-browsing" className="button">Read More</Link>
        </div>
        <div className="article">
          <h4>Data Protection</h4>
          <p>Learn how to protect your data through encryption, backups, and secure storage methods. Data protection is crucial to maintaining privacy and security.</p>
          <Link to="/data-protection" className="button">Read More</Link>
        </div>
        <div className="article">
          <h4>Incident Response</h4>
          <p>Discover the steps to take when a cybersecurity incident occurs, including identification, containment, eradication, and recovery. Effective incident response minimizes damage and speeds up recovery.</p>
          <Link to="/incident-response" className="button">Read More</Link>
        </div>

        <h3>Videos</h3>
        <div className="video">
          <h4>Introduction to Cybersecurity</h4>
          <video controls width="100%" poster="images/intro-to-cybersecurity-thumb.png">
            <source src="videos/intro-to-cybersecurity.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video">
          <h4>Understanding Phishing</h4>
          <video controls width="100%" poster="images/understanding-phishing-thumb.png">
            <source src="videos/understanding-phishing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video">
          <h4>Secure Your Devices</h4>
          <video controls width="100%" poster="images/secure-your-devices-thumb.png">
            <source src="videos/secure-your-devices.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <h3>Infographics</h3>
        <div className="infographic-container">
          <div className="infographic">
            <h4>Cybersecurity Best Practices</h4>
            <img src="images/cybersecurity-best-practices.png" alt="Cybersecurity Best Practices Infographic" />
          </div>
          <div className="infographic">
            <h4>How to Spot Phishing Emails</h4>
            <img src="images/spot-phishing-emails.png" alt="How to Spot Phishing Emails Infographic" />
          </div>
          <div className="infographic">
            <h4>Steps to Protect Your Data</h4>
            <img src="images/protect-your-data.png" alt="Steps to Protect Your Data Infographic" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationalContent;
