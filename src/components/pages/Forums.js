import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

function Forums() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const category = event.target.category.value;
    const title = event.target.title.value;
    const content = event.target.content.value;
    const username = event.target.username.value;

    if (category && title && content && username) {
      setFormMessage('Thread posted successfully!');
      setTimeout(() => setFormMessage(''), 3000);
      event.target.reset();
    } else {
      setFormMessage('Please fill out all fields.');
    }
  };

  return (
    <div>
      <section>
        <h2>Live Q&A Sessions</h2>
        <p>Join our live Q&A sessions to get answers to your cybersecurity questions from experts in real-time.</p>
        <Link to="/live-sessions" className="button">Join Live Q&A Session</Link>
      </section>

      <section id="forums">
        <h2>Community Forums</h2>
        <p>Join the discussion and share your knowledge on various cybersecurity topics.</p>

        {/* Forum Categories */}
        <div className="forum-category">
          <h3>Password Management</h3>
          <div className="forum-thread">
            <h4>Thread: Best Practices for Creating Strong Passwords</h4>
            <p>Posted by User123 on July 1, 2024</p>
            <p>Let's discuss the best practices for creating strong passwords. What methods do you use to ensure your passwords are secure?</p>
            <Link to="/thread1" className="button">Read More</Link>
          </div>
          <div className="forum-thread">
              <h4>Thread: How Often Should You Change Your Password?</h4>
              <p>Posted by CyberSecGuru on June 25, 2024</p>
              <p>I've read different opinions on how often passwords should be changed. What do you think is the best frequency for changing passwords?</p>
              <Link to="/thread2" className="button">Read More</Link>
          </div>
        </div>

        <div className="forum-category">
          <h3>Phishing Detection</h3>
          <div className="forum-thread">
            <h4>Thread: Recognizing Phishing Emails</h4>
            <p>Posted by TechSavvy on June 30, 2024</p>
            <p>Phishing emails are getting more sophisticated. What are some key indicators to look out for to identify phishing attempts?</p>
            <Link to="/thread3" className="button">Read More</Link>
          </div>
          <div className="forum-thread">
            <h4>Thread: Phishing Attack Stories</h4>
            <p>Posted by User456 on June 20, 2024</p>
            <p>Share your experiences with phishing attacks. How did you recognize and respond to them?</p>
            <Link to="/thread4" className="button">Read More</Link>
          </div>
        </div>

        <div className="forum-category">
          <h3>Secure Browsing</h3>
          <div className="forum-thread">
            <h4>Thread: Best Browsers for Security</h4>
            <p>Posted by SecureUser on June 28, 2024</p>
            <p>Which browsers do you think offer the best security features? Share your recommendations and why you prefer them.</p>
            <Link to="/thread5" className="button">Read More</Link>
          </div>
          <div className="forum-thread">
            <h4>Thread: Browser Extensions for Enhanced Security</h4>
            <p>Posted by WebWarrior on June 18, 2024</p>
            <p>What browser extensions do you use to enhance your online security? Let's compile a list of the most effective ones.</p>
            <Link to="/thread6" className="button">Read More</Link>
          </div>
        </div>

        {/* New Thread Form */}
        <div className="new-thread">
          <h3>Create a New Thread</h3>
          <form id="new-thread-form" onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>
            <select id="category" name="category" required>
              <option value="">Select a category</option>
              <option value="Password Management">Password Management</option>
              <option value="Phishing Detection">Phishing Detection</option>
              <option value="Secure Browsing">Secure Browsing</option>
              <option value="Data Protection">Data Protection</option>
              <option value="Incident Response">Incident Response</option>
            </select>

            <label htmlFor="title">Thread Title:</label>
            <input type="text" id="title" name="title" required />

            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" rows="5" required></textarea>

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <button type="submit">Post Thread</button>
          </form>
          <p id="form-message" style={{ color: formMessage.includes('successfully') ? 'green' : 'red' }}>{formMessage}</p>
        </div>
      </section>
    </div>
  );
}

export default Forums;
