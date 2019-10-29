import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Layout from '../components/Layout/Layout';
import ResumeBody from '../components/Resume/ResumeBody';

const useStyles = makeStyles({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
});

const Resume = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.bg}>
        <ResumeBody />
      </div>
    </Layout>
  );
};

export default Resume;
