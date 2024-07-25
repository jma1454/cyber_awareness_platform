import React, { useState } from 'react';
import '../../styles.css';

const quizzes = [
  {
    id: 1,
    title: 'Quiz 1: Password Management',
    questions: [
      {
        question: 'What is the recommended minimum length for a strong password?',
        options: ['8 characters', '10 characters', '12 characters', '14 characters'],
        correct: '12 characters'
      },
      {
        question: 'Which of the following is NOT a good practice for password management?',
        options: ['Using a password manager', 'Writing down passwords', 'Using a mix of characters', 'Changing passwords regularly'],
        correct: 'Writing down passwords'
      }
    ]
  },
  {
    id: 2,
    title: 'Quiz 2: Phishing Detection',
    questions: [
      {
        question: 'Which of the following is a common sign of a phishing email?',
        options: ['Generic greeting', 'Sense of urgency', 'Suspicious attachments or links', 'All of the above'],
        correct: 'All of the above'
      },
      {
        question: 'What should you do if you suspect an email is a phishing attempt?',
        options: ['Click on the link to check', 'Ignore the email', 'Report it to your IT department', 'Forward it to friends'],
        correct: 'Report it to your IT department'
      }
    ]
  },
  {
    id: 3,
    title: 'Quiz 3: Secure Browsing',
    questions: [
      {
        question: 'What does HTTPS stand for?',
        options: ['HyperText Transfer Protocol Secure', 'HyperText Transfer Protocol Standard', 'HyperText Transfer Protocol Simple', 'HyperText Transfer Protocol Service'],
        correct: 'HyperText Transfer Protocol Secure'
      },
      {
        question: 'Which of the following should you avoid when browsing the web?',
        options: ['Using public Wi-Fi for sensitive transactions', 'Checking the URL for HTTPS', 'Updating your browser regularly', 'Using a VPN on public networks'],
        correct: 'Using public Wi-Fi for sensitive transactions'
      }
    ]
  },
  {
    id: 4,
    title: 'Quiz 4: Data Protection',
    questions: [
      {
        question: 'Which of the following is a good practice for data protection?',
        options: ['Regularly backing up data', 'Using weak passwords', 'Sharing passwords via email', 'Ignoring software updates'],
        correct: 'Regularly backing up data'
      },
      {
        question: 'What is encryption used for?',
        options: ['To scramble data to prevent unauthorized access', 'To delete old data', 'To increase data size', 'To share data with everyone'],
        correct: 'To scramble data to prevent unauthorized access'
      }
    ]
  },
  {
    id: 5,
    title: 'Quiz 5: Incident Response',
    questions: [
      {
        question: 'What is the first step in an incident response plan?',
        options: ['Detection', 'Preparation', 'Eradication', 'Recovery'],
        correct: 'Preparation'
      },
      {
        question: 'Who should be notified immediately when a security incident is detected?',
        options: ['Your IT department', 'The media', 'Your family', 'No one'],
        correct: 'Your IT department'
      }
    ]
  },
  {
    id: 6,
    title: 'Quiz 6: Social Engineering',
    questions: [
      {
        question: 'What is social engineering?',
        options: ['Manipulating people to divulge confidential information', 'Hacking into computers', 'Installing malware', 'Phishing attempts'],
        correct: 'Manipulating people to divulge confidential information'
      },
      {
        question: 'Which of the following is a common tactic used in social engineering?',
        options: ['Impersonation', 'Shoulder surfing', 'Tailgating', 'All of the above'],
        correct: 'All of the above'
      }
    ]
  },
  {
    id: 7,
    title: 'Quiz 7: Ransomware',
    questions: [
      {
        question: 'What is ransomware?',
        options: ['A type of malware that encrypts files and demands payment', 'A phishing scam', 'A social engineering tactic', 'A type of adware'],
        correct: 'A type of malware that encrypts files and demands payment'
      },
      {
        question: 'What should you do if your computer is infected with ransomware?',
        options: ['Pay the ransom', 'Disconnect from the network and report it to your IT department', 'Ignore it', 'Restart your computer'],
        correct: 'Disconnect from the network and report it to your IT department'
      }
    ]
  },
  {
    id: 8,
    title: 'Quiz 8: Multi-Factor Authentication (MFA)',
    questions: [
      {
        question: 'What is multi-factor authentication (MFA)?',
        options: ['A method of confirming identity using two or more factors', 'A single password', 'A backup email', 'A security question'],
        correct: 'A method of confirming identity using two or more factors'
      },
      {
        question: 'Which of the following is an example of MFA?',
        options: ['Password and security question', 'Password and a code sent to your phone', 'Password and a backup email', 'Password only'],
        correct: 'Password and a code sent to your phone'
      }
    ]
  },
  {
    id: 9,
    title: 'Quiz 9: Network Security',
    questions: [
      {
        question: 'Which of the following is a common network security measure?',
        options: ['Firewall', 'Antivirus software', 'Strong passwords', 'All of the above'],
        correct: 'All of the above'
      },
      {
        question: 'What does a firewall do?',
        options: ['Monitors and controls incoming and outgoing network traffic', 'Increases network speed', 'Deletes old files', 'Encrypts data'],
        correct: 'Monitors and controls incoming and outgoing network traffic'
      }
    ]
  },
  {
    id: 10,
    title: 'Quiz 10: Mobile Security',
    questions: [
      {
        question: 'Which of the following is a good practice for mobile security?',
        options: ['Using strong passwords or biometric authentication', 'Connecting to unsecured Wi-Fi networks', 'Ignoring software updates', 'Downloading apps from unknown sources'],
        correct: 'Using strong passwords or biometric authentication'
      },
      {
        question: 'What should you do if you lose your mobile device?',
        options: ['Report it to your service provider and enable remote wiping', 'Do nothing', 'Change your passwords', 'Buy a new device and forget about it'],
        correct: 'Report it to your service provider and enable remote wiping'
      }
    ]
  }
];

const InteractiveQuizzes = () => {
  const [results, setResults] = useState({});

  const checkQuiz = (quizId, questions) => {
    const quizElement = document.getElementById(`quiz${quizId}`);
    let score = 0;
    questions.forEach((question, index) => {
      const selectedOption = quizElement.querySelector(`input[name="quiz${quizId}q${index + 1}"]:checked`);
      if (selectedOption && selectedOption.value === question.correct) {
        score++;
      }
    });
    setResults((prevResults) => ({ ...prevResults, [quizId]: `You scored ${score}/${questions.length} correct answers.` }));
  };

  return (
    <section id="quizzes">
      <h2>Interactive Quizzes</h2>
      <p>Test your knowledge on various cybersecurity topics through our interactive quizzes.</p>
      {quizzes.map((quiz) => (
        <div className="quiz-container" key={quiz.id}>
          <h3>{quiz.title}</h3>
          <div id={`quiz${quiz.id}`}>
            {quiz.questions.map((question, index) => (
              <div className="question" key={index}>
                <p>{question.question}</p>
                {question.options.map((option, idx) => (
                  <div key={idx}>
                    <label>
                      <input type="radio" name={`quiz${quiz.id}q${index + 1}`} value={option} /> {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            <button onClick={() => checkQuiz(quiz.id, quiz.questions)}>Submit</button>
            <p>{results[quiz.id]}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InteractiveQuizzes;
