import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../assets/background_image.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
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
    backgroundColor: 'black',
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
