import React from 'react';
import Layout from './components/Layout/Layout';
import { Router } from '@reach/router';
import Home from './views/Home';
import './styles/style.css';
import Resume from './views/Resume';
import Contact from './views/Contact';

const App = () => {
  return (
    <Layout>
      <Router primary={false}>
        <Home path="/" />
        <Resume path="/resume" />
        <Contact path="/contact" />
      </Router>
    </Layout>
  );
};

export default App;
