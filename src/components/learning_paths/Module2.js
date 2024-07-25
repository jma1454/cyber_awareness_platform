import React from 'react';
import '../../styles.css';

const Module2 = () => {
  return (
    <section>
      <h2>Module 2: Understanding Cyber Threats</h2>
      <p>This module delves into the various types of cyber threats that pose risks to individuals and organizations.</p>
      
      <h3>Types of Cyber Threats</h3>
      <ul>
        <li><strong>Malware:</strong> Includes viruses, worms, trojans, ransomware, and spyware that damage or disrupt systems.</li>
        <li><strong>Phishing:</strong> Deceptive attempts to obtain sensitive information through fraudulent emails or websites.</li>
        <li><strong>Man-in-the-Middle (MitM) Attacks:</strong> Attackers intercept and manipulate communication between two parties.</li>
        <li><strong>Denial-of-Service (DoS) Attacks:</strong> Overloading a system to make it unavailable to legitimate users.</li>
        <li><strong>SQL Injection:</strong> Inserting malicious SQL code into a query to manipulate the database.</li>
        <li><strong>Zero-Day Exploits:</strong> Attacks on software vulnerabilities that are not yet known to the vendor.</li>
        <li><strong>Insider Threats:</strong> Malicious or negligent actions by trusted individuals within an organization.</li>
      </ul>

      <h3>Impact of Cyber Threats</h3>
      <p>Cyber threats can have severe consequences, including:</p>
      <ul>
        <li>Financial loss due to theft or fraud.</li>
        <li>Reputational damage from data breaches.</li>
        <li>Operational disruption causing downtime and loss of productivity.</li>
        <li>Legal consequences from regulatory non-compliance.</li>
      </ul>

      <h3>Recognizing Cyber Threats</h3>
      <p>It's crucial to be able to recognize signs of cyber threats, such as:</p>
      <ul>
        <li>Unexpected system slowdowns or crashes.</li>
        <li>Unauthorized access or login attempts.</li>
        <li>Suspicious emails or messages requesting sensitive information.</li>
        <li>Unusual network activity or data transfers.</li>
      </ul>

      <h3>Mitigating Cyber Threats</h3>
      <p>Effective mitigation strategies include:</p>
      <ul>
        <li>Implementing strong access controls and authentication methods.</li>
        <li>Regularly updating and patching software and systems.</li>
        <li>Conducting security awareness training for employees.</li>
        <li>Deploying security tools such as firewalls, antivirus, and intrusion detection systems.</li>
        <li>Establishing a robust incident response plan.</li>
      </ul>
    </section>
  );
}

export default Module2;
