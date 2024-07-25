import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

ReactDOM.render(
  <React.StrictMode>
    <App toggleTheme={toggleTheme} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
