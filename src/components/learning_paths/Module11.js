import React from 'react';
import '../../styles.css';

const Module11 = () => {
  return (
    <section>
      <h2>Module 11: Securing Your Business Network</h2>
      <p>This module covers essential practices for securing your business network against cyber threats.</p>
      
      <h3>Why Network Security Matters</h3>
      <p>Securing your business network is crucial for protecting sensitive data, maintaining operational continuity, and preventing unauthorized access.</p>

      <h3>Implementing Strong Access Controls</h3>
      <ul>
        <li>Use strong, unique passwords for all network devices and systems.</li>
        <li>Enable multi-factor authentication (MFA) for accessing critical systems.</li>
        <li>Implement role-based access control (RBAC) to limit access based on user roles.</li>
      </ul>

      <h3>Network Segmentation</h3>
      <p>Network segmentation involves dividing your network into smaller segments to control traffic and enhance security. It helps limit the impact of a breach by containing it within a specific segment.</p>

      <h3>Using Firewalls</h3>
      <p>Firewalls are essential for monitoring and controlling incoming and outgoing network traffic. They can be configured to block unauthorized access and protect against various types of attacks.</p>

      <h3>Deploying Intrusion Detection and Prevention Systems (IDS/IPS)</h3>
      <p>IDS and IPS systems monitor network traffic for suspicious activity and known threats. IDS systems alert administrators to potential threats, while IPS systems can take action to block or mitigate them.</p>

      <h3>Regularly Updating and Patching Systems</h3>
      <p>Keep all network devices, operating systems, and applications up-to-date with the latest security patches to protect against known vulnerabilities.</p>

      <h3>Implementing VPNs for Remote Access</h3>
      <p>Virtual private networks (VPNs) provide secure remote access to your network, encrypting data transmitted between remote users and the network.</p>

      <h3>Monitoring Network Traffic</h3>
      <p>Regularly monitor network traffic to detect and respond to unusual or suspicious activity. Use tools such as SIEM systems to analyze security alerts and events.</p>

      <h3>Creating a Network Security Policy</h3>
      <p>Develop and enforce a comprehensive network security policy that outlines the protocols and procedures for securing your network. Include guidelines for access controls, data encryption, network monitoring, and incident response.</p>

      <h3>Conducting Regular Security Assessments</h3>
      <p>Regularly assess your network security posture through vulnerability assessments, penetration testing, and security audits. Identify and address any weaknesses to strengthen your network defenses.</p>

      <h3>Training Employees</h3>
      <p>Provide regular training to employees on network security best practices and the importance of following security protocols. Encourage a culture of security awareness within your organization.</p>
    </section>
  );
};

export default Module11;
