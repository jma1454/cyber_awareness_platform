import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home">
      <h2>Welcome to the Cybersecurity Awareness Platform</h2>
      <p>
        The increasing prevalence and sophistication of cyber threats pose significant risks to individuals and organizations. Our platform aims to bridge the gap in cybersecurity awareness and practices through comprehensive education and interactive learning.
      </p>
      
      <h3>What We Offer</h3>
      <ul>
        <li>
          <strong>Educational Content:</strong> Access a repository of articles, videos, and infographics covering essential cybersecurity topics such as password management, phishing detection, secure browsing, data protection, and incident response.
        </li>
        <li>
          <strong>Interactive Quizzes:</strong> Test your knowledge and reinforce learning with our interactive quizzes. Get immediate feedback and explanations for incorrect answers to improve your understanding of cybersecurity principles.
        </li>
        <li>
          <strong>Forums and Live Q&A Sessions:</strong> Join our community forums and participate in live Q&A sessions with cybersecurity experts. Share knowledge, ask questions, and learn from others to stay informed and prepared.
        </li>
        <li>
          <strong>Personalized Learning Paths:</strong> Follow customized learning paths tailored to your specific needs and skill levels. Whether you're an individual, a small business, or part of a large organization, our platform offers content suited to your requirements.
        </li>
      </ul>

      <h3>Why Cybersecurity Matters</h3>
      <p>
        Cyber threats are becoming more frequent and sophisticated, targeting both individuals and organizations. Without proper knowledge and practices, you are at risk of falling victim to cyber attacks such as malware, phishing, ransomware, and data breaches.
      </p>
      <p>
        By improving your cybersecurity awareness and practices, you can protect yourself, your data, and your organization from these threats. Our platform provides the tools and resources you need to stay safe in the digital world.
      </p>

      <h3>Get Started</h3>
      <p>
        Ready to enhance your cybersecurity knowledge and practices? Explore our platform and start learning today. Whether you're looking for educational content, interactive quizzes, or community support, we have something for everyone.
      </p>
      <Link to="/educational-content" className="button">Start Learning</Link>

      <section id="images">
        <h3>Our Features in Pictures</h3>
        <div className="image-gallery">
          <img src="/images/educational-content.png" alt="Educational Content" />
          <img src="/images/interactive-quizzes.png" alt="Interactive Quizzes" />
          <img src="/images/forums-community.png" alt="Forums and Community" />
          <img src="/images/personalized-learning-paths.png" alt="Personalized Learning Paths" />
        </div>
      </section>
    </section>
  );
}

export default Home;
