import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Layout from '../components/Layout/Layout';
import BackgroundImage from '../assets/background_image.jpg';
import ResumeBody from '../components/Resume/ResumeBody';

const useStyles = makeStyles({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${BackgroundImage})`,
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
