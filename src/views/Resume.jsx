import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ResumeItems from '../components/Resume/ResumeItems';
import Layout from '../components/Layout/Layout';
import BackgroundImage from '../assets/background_image.jpg';

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
        <ResumeItems />
        <h1 style={{ color: 'white' }}>
          Conditionally render resume content based on what is clicked above
        </h1>
      </div>
    </Layout>
  );
};

export default Resume;
