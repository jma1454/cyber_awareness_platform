import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import EducationalContent from './components/pages/EducationalContent';
import InteractiveQuizzes from './components/pages/InteractiveQuizzes';
import Forums from './components/pages/Forums';
import LearningPaths from './components/pages/LearningPaths';
import LiveSessions from './components/pages/LiveSessions';
import DataProtection from './components/articles/DataProtection';
import IncidentResponse from './components/articles/IncidentResponse';
import PasswordManagement from './components/articles/PasswordManagement';
import PhishingDetection from './components/articles/PhishingDetection';
import SecureBrowsing from './components/articles/SecureBrowsing';
import Thread1 from './components/threads/Thread1';
import Thread2 from './components/threads/Thread2';
import Thread3 from './components/threads/Thread3';
import Thread4 from './components/threads/Thread4';
import Thread5 from './components/threads/Thread5';
import Thread6 from './components/threads/Thread6';
import Module1 from './components/learning_paths/Module1';
import Module2 from './components/learning_paths/Module2';
import Module3 from './components/learning_paths/Module3';
import Module4 from './components/learning_paths/Module4';
import Module5 from './components/learning_paths/Module5';
import Module6 from './components/learning_paths/Module6';
import Module7 from './components/learning_paths/Module7';
import Module8 from './components/learning_paths/Module8';
import Module9 from './components/learning_paths/Module9';
import Module10 from './components/learning_paths/Module10';
import Module11 from './components/learning_paths/Module11';
import Module12 from './components/learning_paths/Module12';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Users from './components/pages/Users';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivacyPolicy from './components/footer/PrivacyPolicy';
import TermsOfService from './components/footer/TermsOfService';
import './styles.css';
import './App.css';
import './index.css';
import './components/auth/Auth.css';

const App = ({ toggleTheme }) => {
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <Router>
      <div className='app'>
        <Navbar toggleTheme={toggleTheme} />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/educational-content" element={<EducationalContent />} />
            <Route path="/interactive-quizzes" element={<InteractiveQuizzes />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/learning-paths" element={<LearningPaths />} />
            <Route path="/live-sessions" element={<LiveSessions />} />
            <Route path="/data-protection" element={<DataProtection />} />
            <Route path="/incident-response" element={<IncidentResponse />} />
            <Route path="/password-management" element={<PasswordManagement />} />
            <Route path="/phishing-detection" element={<PhishingDetection />} />
            <Route path="/secure-browsing" element={<SecureBrowsing />} />
            <Route path="/thread1" element={<Thread1 />} />
            <Route path="/thread2" element={<Thread2 />} />
            <Route path="/thread3" element={<Thread3 />} />
            <Route path="/thread4" element={<Thread4 />} />
            <Route path="/thread5" element={<Thread5 />} />
            <Route path="/thread6" element={<Thread6 />} />
            <Route path="/module1" element={<Module1 />} />
            <Route path="/module2" element={<Module2 />} />
            <Route path="/module3" element={<Module3 />} />
            <Route path="/module4" element={<Module4 />} />
            <Route path="/module5" element={<Module5 />} />
            <Route path="/module6" element={<Module6 />} />
            <Route path="/module7" element={<Module7 />} />
            <Route path="/module8" element={<Module8 />} />
            <Route path="/module9" element={<Module9 />} />
            <Route path="/module10" element={<Module10 />} />
            <Route path="/module11" element={<Module11 />} />
            <Route path="/module12" element={<Module12 />} />
            <Route path="/users" element={<Users />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
