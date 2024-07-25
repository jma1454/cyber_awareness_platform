import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/NavBar.css';

const Navbar = ({ toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <button className="theme-toggle" onClick={toggleTheme}>
          Dark/Light Mode
        </button>
        <h1>Cyber Awareness Platform</h1>
        <ul className="auth-links">
          <li>
            <Link to="/login" onClick={handleLinkClick}>Login</Link>
          </li>
        </ul>
        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li>
          <Link to="/educational-content" onClick={handleLinkClick}>Educational Content</Link>
        </li>
        <li>
          <Link to="/interactive-quizzes" onClick={handleLinkClick}>Interactive Quizzes</Link>
        </li>
        <li>
          <Link to="/forums" onClick={handleLinkClick}>Forums</Link>
        </li>
        <li>
          <Link to="/learning-paths" onClick={handleLinkClick}>Learning Paths</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
