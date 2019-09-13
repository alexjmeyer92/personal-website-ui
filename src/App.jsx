import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import './styles/style.css';
import Resume from './views/Resume';
import Contact from './views/Contact';
import GlobalContext from './components/Context/GlobalContext';

const App = () => {
  const [contextValues, setContextValues] = React.useState({
    resumeSelection: null,
  });

  return (
    <GlobalContext.Provider vlaue={{ contextValues, setContextValues }}>
      <Router primary={false}>
        <Home path="/" />
        <Resume path="/resume" />
        <Contact path="/contact" />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
