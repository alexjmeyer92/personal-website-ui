import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/Layout/Layout';
import CenterLogo from '../assets/Main_Logo.svg';

const useStyles = makeStyles({
  mainLogo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70vw',
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div style={{ marginTop: '65px' }}>
        <img
          className={classes.mainLogo}
          src={CenterLogo}
          alt="Home Page Center Logo"
        />
      </div>
    </Layout>
  );
};

export default Home;
