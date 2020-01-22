import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import './styles/style.css';
// import Resume from './views/Resume';
import GlobalContext from './components/Context/GlobalContext';

const App = () => {
  const [values, setValues] = React.useState({
    resumeSelection: '',
  });

  return (
    <GlobalContext.Provider value={{ values, setValues }}>
      <Router primary={false}>
        <Home path="/" />
        {/* <Resume path="/resume" /> */}
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
