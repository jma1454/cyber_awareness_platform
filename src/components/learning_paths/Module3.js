import React from 'react';
import '../../styles.css';

const Module3 = () => {
  return (
    <section>
      <h2>Module 3: Basics of Secure Passwords</h2>
      <p>This module covers the fundamentals of creating and managing secure passwords to protect your online accounts.</p>
      
      <h3>Why Secure Passwords Matter</h3>
      <p>Passwords are the first line of defense against unauthorized access to your accounts. Weak passwords can be easily guessed or cracked, leading to potential data breaches and identity theft.</p>

      <h3>Characteristics of a Strong Password</h3>
      <ul>
        <li><strong>Length:</strong> At least 12 characters long.</li>
        <li><strong>Complexity:</strong> Includes a mix of uppercase and lowercase letters, numbers, and special characters.</li>
        <li><strong>Unpredictability:</strong> Avoids easily guessable information such as names, birthdates, or common words.</li>
        <li><strong>Uniqueness:</strong> Different for each account to prevent a single compromised password from affecting multiple accounts.</li>
      </ul>

      <h3>Creating Secure Passwords</h3>
      <p>Here are some tips for creating secure passwords:</p>
      <ul>
        <li>Use a password manager to generate and store complex passwords.</li>
        <li>Combine random words to create a passphrase that's easy to remember but hard to guess.</li>
        <li>Avoid using common substitutions (e.g., "P@ssw0rd" instead of "Password").</li>
      </ul>

      <h3>Password Management Best Practices</h3>
      <ul>
        <li>Change your passwords regularly, especially if you suspect they have been compromised.</li>
        <li>Do not reuse passwords across different accounts.</li>
        <li>Enable multi-factor authentication (MFA) for an additional layer of security.</li>
        <li>Be cautious of phishing attempts that may try to steal your passwords.</li>
      </ul>

      <h3>Using Password Managers</h3>
      <p>Password managers are tools that help you generate, store, and manage your passwords securely. They can also autofill login forms, making it easier to use complex passwords without the need to remember them all.</p>
    </section>
  );
}

export default Module3;
