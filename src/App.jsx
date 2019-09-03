import React from 'react';
import Layout from './components/Layout/Layout';
import { Router } from '@reach/router';
import Home from './views/Home';
import './styles/style.css'


const App = () => {
  
  return (
      <Layout>
        <Router primary={false}>
          <Home path="/" />
        </Router>
      </Layout>
  );
};

export default App;