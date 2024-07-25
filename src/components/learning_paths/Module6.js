import React from 'react';
import '../../styles.css';

const Module6 = () => {
  return (
    <section>
      <h2>Module 6: Implementing Multi-Factor Authentication</h2>
      <p>This module explains what multi-factor authentication (MFA) is and how to implement it to enhance security.</p>
      
      <h3>What is Multi-Factor Authentication?</h3>
      <p>Multi-factor authentication (MFA) is a security mechanism that requires multiple forms of verification to prove the identity of a user. It combines two or more independent credentials: what the user knows (password), what the user has (security token), and what the user is (biometric verification).</p>

      <h3>Benefits of MFA</h3>
      <ul>
        <li>Increased security by adding layers of protection.</li>
        <li>Reduced risk of compromised accounts from phishing or password breaches.</li>
        <li>Enhanced compliance with regulatory requirements.</li>
        <li>Improved user trust and confidence.</li>
      </ul>

      <h3>Types of Authentication Factors</h3>
      <ul>
        <li><strong>Knowledge Factors:</strong> Something the user knows, such as a password or PIN.</li>
        <li><strong>Possession Factors:</strong> Something the user has, such as a smartphone or security token.</li>
        <li><strong>Inherence Factors:</strong> Something the user is, such as a fingerprint or facial recognition.</li>
      </ul>

      <h3>Implementing MFA</h3>
      <p>Steps to implement MFA in your organization:</p>
      <ul>
        <li><strong>Assess Your Needs:</strong> Determine the level of security required and identify the systems that need protection.</li>
        <li><strong>Select MFA Methods:</strong> Choose appropriate MFA methods based on user convenience and security requirements.</li>
        <li><strong>Integrate MFA:</strong> Implement MFA in your systems and applications, ensuring compatibility and ease of use.</li>
        <li><strong>Educate Users:</strong> Provide training and support to help users understand the importance of MFA and how to use it effectively.</li>
        <li><strong>Monitor and Maintain:</strong> Regularly review and update MFA configurations to adapt to new threats and changes in technology.</li>
      </ul>

      <h3>Challenges and Solutions</h3>
      <p>Common challenges in implementing MFA and solutions to address them:</p>
      <ul>
        <li><strong>User Resistance:</strong> Educate users on the importance of MFA and provide support to ease the transition.</li>
        <li><strong>Compatibility Issues:</strong> Ensure that your MFA solution is compatible with existing systems and applications.</li>
        <li><strong>Cost:</strong> Choose cost-effective MFA solutions that provide robust security without straining your budget.</li>
      </ul>
    </section>
  );
}

export default Module6;
