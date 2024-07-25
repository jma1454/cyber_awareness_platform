import React from 'react';
import '../../styles.css';

const Module10 = () => {
  return (
    <section>
      <h2>Module 10: Protecting Customer Data</h2>
      <p>This module focuses on the importance of protecting customer data and the practices to ensure its security.</p>
      
      <h3>Why Protecting Customer Data is Important</h3>
      <p>Customer data protection is crucial for maintaining trust, complying with legal requirements, and avoiding financial losses due to data breaches.</p>

      <h3>Types of Customer Data</h3>
      <ul>
        <li><strong>Personally Identifiable Information (PII):</strong> Information that can be used to identify an individual, such as names, addresses, and Social Security numbers.</li>
        <li><strong>Financial Information:</strong> Credit card numbers, bank account details, and transaction histories.</li>
        <li><strong>Health Information:</strong> Medical records and health insurance details.</li>
      </ul>

      <h3>Legal and Regulatory Requirements</h3>
      <p>Various laws and regulations require businesses to protect customer data, including:</p>
      <ul>
        <li><strong>GDPR:</strong> General Data Protection Regulation in the European Union.</li>
        <li><strong>CCPA:</strong> California Consumer Privacy Act.</li>
        <li><strong>HIPAA:</strong> Health Insurance Portability and Accountability Act for health information.</li>
        <li><strong>PCI-DSS:</strong> Payment Card Industry Data Security Standard for financial information.</li>
      </ul>

      <h3>Best Practices for Protecting Customer Data</h3>
      <ul>
        <li><strong>Data Encryption:</strong> Encrypt sensitive data both in transit and at rest to protect it from unauthorized access.</li>
        <li><strong>Access Controls:</strong> Implement strict access controls to ensure that only authorized personnel can access sensitive data.</li>
        <li><strong>Regular Audits:</strong> Conduct regular security audits and assessments to identify and address vulnerabilities.</li>
        <li><strong>Employee Training:</strong> Train employees on data protection best practices and the importance of safeguarding customer information.</li>
        <li><strong>Incident Response Plan:</strong> Develop and maintain an incident response plan to quickly address data breaches and mitigate their impact.</li>
      </ul>

      <h3>Data Protection Tools and Technologies</h3>
      <ul>
        <li><strong>Encryption Software:</strong> Tools that encrypt data to protect it from unauthorized access.</li>
        <li><strong>Data Loss Prevention (DLP) Solutions:</strong> Systems that detect and prevent potential data breaches.</li>
        <li><strong>Access Management Solutions:</strong> Tools that manage and control user access to sensitive data.</li>
        <li><strong>Security Information and Event Management (SIEM) Systems:</strong> Solutions that provide real-time analysis of security alerts generated by network hardware and applications.</li>
      </ul>

      <h3>Responding to Data Breaches</h3>
      <p>Steps to take in the event of a data breach:</p>
      <ul>
        <li><strong>Identify and Contain:</strong> Quickly identify the breach and take steps to contain it.</li>
        <li><strong>Notify Affected Parties:</strong> Inform customers, regulators, and other stakeholders about the breach.</li>
        <li><strong>Investigate and Remediate:</strong> Conduct a thorough investigation to understand the cause of the breach and take steps to remediate it.</li>
        <li><strong>Review and Improve:</strong> Review the incident response and data protection practices to prevent future breaches.</li>
      </ul>
    </section>
  );
};

export default Module10;
