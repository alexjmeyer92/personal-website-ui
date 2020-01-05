import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import BackgroundImage from '../assets/mpls_downtown_south.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    maxHeight: 600,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    position: 'absolute',
    left: '50%',
    top: '40%',
    transform: 'translate(-50%, -60%)',
  },
  cardBottom: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  button: {
    color: 'grey',
  },
  bg: {
    height: '100%',
    width: '100%',
    backgroundColor: 'lightgrey',
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
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12}>
            <h1 style={{ color: 'grey' }}>Alex Meyer</h1>
          </Grid>
        </Grid>
        <CardActions className={classes.cardBottom}>
          <Button size="small" className={classes.button} href="/resume">
            Resume
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
