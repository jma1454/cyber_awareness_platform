import React from 'react';
import { useParams } from 'react-router-dom';

const modules = {
  1: {
    title: 'Introduction to Cybersecurity',
    content: `
      <h3>What is Cybersecurity?</h3>
      <p>Cybersecurity refers to the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes.</p>
      <h3>Importance of Cybersecurity</h3>
      <p>Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative. Ensuring cybersecurity requires coordinated efforts throughout an information system, including:</p>
      <ul>
        <li><strong>Network Security:</strong> Protecting the network from unwanted users, attacks, and intrusions.</li>
        <li><strong>Application Security:</strong> Keeping software and devices free of threats.</li>
        <li><strong>Information Security:</strong> Protecting the integrity and privacy of data, both in storage and in transit.</li>
        <li><strong>Operational Security:</strong> Processes and decisions for handling and protecting data assets.</li>
      </ul>
      <h3>Key Principles of Cybersecurity</h3>
      <p>Three core principles, often referred to as the CIA Triad, are essential to cybersecurity:</p>
      <ul>
        <li><strong>Confidentiality:</strong> Ensuring that information is not disclosed to unauthorized individuals, entities, or processes.</li>
        <li><strong>Integrity:</strong> Maintaining the accuracy and completeness of data over its entire lifecycle.</li>
        <li><strong>Availability:</strong> Ensuring that information and systems are accessible when needed by authorized users.</li>
      </ul>
    `
  },
  2: {
    title: 'Understanding Cyber Threats',
    content: '<p>Details about understanding cyber threats...</p>'
  },
  3: {
    title: 'Basics of Secure Passwords',
    content: '<p>Details about secure passwords...</p>'
  },
  4: {
    title: 'Recognizing Phishing Attacks',
    content: '<p>Details about phishing attacks...</p>'
  },
  // ...add content for other modules
};

function Module() {
  const { id } = useParams();
  const module = modules[id];

  if (!module) {
    return <p>Module not found</p>;
  }

  return (
    <section>
      <h2>{module.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: module.content }} />
    </section>
  );
}

export default Module;
