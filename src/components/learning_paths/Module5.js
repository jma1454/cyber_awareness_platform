import React from 'react';
import '../../styles.css';

const Module5 = () => {
  return (
    <section>
      <h2>Module 5: Network Security Fundamentals</h2>
      <p>This module provides an overview of network security concepts and practices essential for protecting data and systems.</p>
      
      <h3>What is Network Security?</h3>
      <p>Network security involves measures taken to protect the integrity, confidentiality, and availability of data and resources as they are transmitted across or connected to networks. It includes hardware and software technologies and policies designed to protect against threats.</p>

      <h3>Key Network Security Concepts</h3>
      <ul>
        <li><strong>Firewalls:</strong> Devices or software that monitor and control incoming and outgoing network traffic based on predetermined security rules.</li>
        <li><strong>Intrusion Detection Systems (IDS):</strong> Systems that monitor network traffic for suspicious activity and known threats, alerting administrators when potential security breaches are detected.</li>
        <li><strong>Virtual Private Networks (VPNs):</strong> Secure connections over the internet that provide encrypted communication between remote users and a network.</li>
        <li><strong>Network Segmentation:</strong> Dividing a network into smaller segments to control traffic and enhance security by limiting access to sensitive data.</li>
      </ul>

      <h3>Common Network Security Threats</h3>
      <ul>
        <li><strong>Malware:</strong> Malicious software that can damage or disrupt systems and networks.</li>
        <li><strong>Denial-of-Service (DoS) Attacks:</strong> Attacks that overwhelm a network or system, making it unavailable to users.</li>
        <li><strong>Man-in-the-Middle (MitM) Attacks:</strong> Attacks where the attacker intercepts and manipulates communication between two parties.</li>
        <li><strong>Phishing:</strong> Attempts to steal sensitive information by pretending to be a trustworthy entity.</li>
      </ul>

      <h3>Best Practices for Network Security</h3>
      <ul>
        <li>Implement and regularly update firewalls to filter incoming and outgoing traffic.</li>
        <li>Use IDS/IPS (Intrusion Prevention Systems) to monitor and protect against network threats.</li>
        <li>Utilize VPNs for secure remote access to the network.</li>
        <li>Apply network segmentation to isolate sensitive data and critical systems.</li>
        <li>Regularly update and patch network devices and software to protect against vulnerabilities.</li>
        <li>Conduct regular network security assessments and penetration testing.</li>
      </ul>

      <h3>Creating a Network Security Policy</h3>
      <p>A network security policy outlines the protocols and procedures for protecting network resources. It should include:</p>
      <ul>
        <li>Access control measures and user authentication procedures.</li>
        <li>Data encryption standards for protecting data in transit and at rest.</li>
        <li>Guidelines for network monitoring and incident response.</li>
        <li>Procedures for regular updates and patch management.</li>
        <li>Employee training and awareness programs.</li>
      </ul>
    </section>
  );
}

export default Module5;
