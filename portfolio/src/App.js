import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <Router>
      <div>
        <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
        <Routes>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={AboutMe} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
