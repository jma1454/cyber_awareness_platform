import React from 'react';
import '../../styles.css';

const Module4 = () => {
  return (
    <section>
      <h2>Module 4: Recognizing Phishing Attacks</h2>
      <p>In this module, you will learn how to identify and avoid phishing attacks, which are among the most common cyber threats.</p>
      
      <h3>What is Phishing?</h3>
      <p>Phishing is a type of social engineering attack where attackers impersonate legitimate entities to trick individuals into providing sensitive information such as usernames, passwords, and credit card numbers.</p>

      <h3>Common Signs of Phishing Emails</h3>
      <ul>
        <li><strong>Generic Greetings:</strong> Phishing emails often use generic greetings like "Dear Customer" instead of your name.</li>
        <li><strong>Sense of Urgency:</strong> Messages that create a sense of urgency, such as threatening account suspension, are common in phishing emails.</li>
        <li><strong>Suspicious Links:</strong> Hovering over links may reveal URLs that do not match the legitimate website's address.</li>
        <li><strong>Unexpected Attachments:</strong> Phishing emails may contain unexpected attachments that can infect your device with malware.</li>
        <li><strong>Poor Grammar and Spelling:</strong> Many phishing emails contain grammatical and spelling errors.</li>
      </ul>

      <h3>Types of Phishing Attacks</h3>
      <ul>
        <li><strong>Email Phishing:</strong> The most common form, where attackers send emails pretending to be from legitimate organizations.</li>
        <li><strong>Spear Phishing:</strong> A targeted form of phishing that focuses on specific individuals or organizations.</li>
        <li><strong>Smishing:</strong> Phishing attacks conducted through SMS messages.</li>
        <li><strong>Vishing:</strong> Phishing attacks conducted over the phone.</li>
      </ul>

      <h3>Protecting Yourself from Phishing</h3>
      <ul>
        <li>Do not click on links or download attachments from unknown or suspicious emails.</li>
        <li>Verify the sender's email address and look for signs of phishing.</li>
        <li>Use anti-phishing tools and services provided by your email provider.</li>
        <li>Report phishing attempts to your IT department or email provider.</li>
        <li>Regularly educate yourself and your employees on the latest phishing tactics.</li>
      </ul>

      <h3>Responding to a Phishing Attack</h3>
      <p>If you believe you have received a phishing email or have fallen victim to a phishing attack:</p>
      <ul>
        <li>Immediately change your passwords for the affected accounts.</li>
        <li>Contact your IT department or service provider for assistance.</li>
        <li>Monitor your accounts for any suspicious activity.</li>
        <li>Report the phishing attempt to the relevant authorities.</li>
      </ul>
    </section>
  );
}

export default Module4;
