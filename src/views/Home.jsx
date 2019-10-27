import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../assets/personal_site_background.svg';
import PersonalLogo from '../assets/box_with_arrow_logo.svg';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 350,
    maxHeight: 600,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    color: 'black',
  },
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    position: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundImage: `url(${BackgroundImage})`,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      {/* <img src={NightSky} alt="bg"/> */}
      <Card className={classes.card}>
        <CardMedia>
          <img src={PersonalLogo} className={classes.logo} alt="Alex Meyer Logo"/>
        </CardMedia>
        <CardContent>
          My name is Alex Meyer. I am a product manager and sofware developer with experience creating data driven software products that drive efficiency and innovation across the 
          supply chain space.          
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button} href="/resume">
            Interactive Resume
          </Button>
          <Button size="small" className={classes.button} href="/contact">
            Contact Me
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
