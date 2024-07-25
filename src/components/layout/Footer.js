import React from 'react';
import '../styling/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Cybersecurity Awareness Platform</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
