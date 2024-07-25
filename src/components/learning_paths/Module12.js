import React from 'react';
import '../../styles.css';

const Module12 = () => {
  return (
    <section>
      <h2>Module 12: Responding to Cyber Incidents</h2>
      <p>This module provides guidelines for effectively responding to cyber incidents to minimize damage and ensure a swift recovery.</p>
      
      <h3>What is a Cyber Incident?</h3>
      <p>A cyber incident is an event that jeopardizes the confidentiality, integrity, or availability of information systems. This includes data breaches, malware infections, denial-of-service attacks, and unauthorized access.</p>

      <h3>Importance of Incident Response</h3>
      <p>Effective incident response is crucial for minimizing the impact of cyber incidents, restoring normal operations, and preventing future incidents. A well-prepared incident response plan (IRP) helps organizations respond swiftly and efficiently.</p>

      <h3>Incident Response Process</h3>
      <ul>
        <li><strong>Preparation:</strong> Develop and implement an incident response plan, establish an incident response team, and conduct regular training and drills.</li>
        <li><strong>Identification:</strong> Detect and determine the nature and scope of the incident. Use monitoring tools and alerts to identify potential incidents.</li>
        <li><strong>Containment:</strong> Implement measures to contain the incident and prevent further damage. This may involve isolating affected systems and blocking malicious traffic.</li>
        <li><strong>Eradication:</strong> Remove the cause of the incident, such as deleting malware or closing vulnerabilities. Ensure that the threat is completely eliminated.</li>
        <li><strong>Recovery:</strong> Restore affected systems and data to normal operation. Validate that systems are secure and functioning properly.</li>
        <li><strong>Lessons Learned:</strong> Conduct a post-incident review to analyze the incident and improve future response efforts. Update the incident response plan based on the lessons learned.</li>
      </ul>

      <h3>Building an Incident Response Team (IRT)</h3>
      <p>The incident response team is responsible for managing and responding to incidents. Key roles include:</p>
      <ul>
        <li><strong>Incident Response Coordinator:</strong> Oversees the incident response process and coordinates team activities.</li>
        <li><strong>Security Analysts:</strong> Investigate and analyze the incident to determine its cause and impact.</li>
        <li><strong>IT Support:</strong> Assist with technical aspects of incident containment, eradication, and recovery.</li>
        <li><strong>Legal and Compliance:</strong> Ensure that the response complies with legal and regulatory requirements.</li>
        <li><strong>Communication Specialist:</strong> Manage communication with stakeholders, including employees, customers, and media.</li>
      </ul>

      <h3>Communicating During an Incident</h3>
      <p>Effective communication is crucial during an incident. Keep stakeholders informed with regular updates on the incident status, actions being taken, and any impact on operations. Use predefined templates and communication channels to streamline the process.</p>

      <h3>Post-Incident Review</h3>
      <p>After resolving the incident, conduct a thorough review to understand what happened, how it was handled, and what can be improved. Document the incident, including timelines, actions taken, and lessons learned. Use this information to update your incident response plan and strengthen your security posture.</p>

      <h3>Continuous Improvement</h3>
      <p>Incident response is an ongoing process. Regularly review and update your incident response plan, conduct training and drills, and stay informed about new threats and best practices. Continuous improvement ensures that your organization is prepared to handle future incidents effectively.</p>
    </section>
  );
};

export default Module12;
