import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Layout from '../components/Layout/Layout';
import ContactCard from '../components/Contact/ContactCard';
// import BackgroundImage from '../assets/background_image.jpg';

const useStyles = makeStyles({
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    // backgroundImage: `url(${BackgroundImage})`,
  },
});

const Contact = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.bg}>
        <ContactCard />
      </div>
    </Layout>
  );
};

export default Contact;
