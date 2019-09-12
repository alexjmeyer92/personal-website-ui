import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import './styles/style.css';
import Resume from './views/Resume';
import Contact from './views/Contact';

const App = () => {
  return (
    <Router primary={false}>
      <Home path="/" />
      <Resume path="/resume" />
      <Contact path="/contact" />
    </Router>
  );
};

export default App;
