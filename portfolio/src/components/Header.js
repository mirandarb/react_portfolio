import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentSection, setCurrentSection }) => {
  return (
    <header>
      <h1>Your Name</h1>
      <nav>
        <Link to="/" onClick={() => setCurrentSection('About Me')}>About Me</Link>
        <Link to="/portfolio" onClick={() => setCurrentSection('Portfolio')}>Portfolio</Link>
        <Link to="/contact" onClick={() => setCurrentSection('Contact')}>Contact</Link>
        <Link to="/resume" onClick={() => setCurrentSection('Resume')}>Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
