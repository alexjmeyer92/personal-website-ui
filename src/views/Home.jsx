import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import BackgroundImage from '../assets/personal_site_background.svg';
import PersonalLogo from '../assets/box_with_arrow_logo.svg';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    maxHeight: 600,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  cardBottom: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
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
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <img
              src={PersonalLogo}
              className={classes.logo}
              alt="Alex Meyer Logo"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <h1>Alex Meyer</h1>
          </Grid>
        </Grid>

        <CardContent className={classes.cardBottom}>
          Product Manager || Software Engineer || Supply Chain Analytics Expert
        </CardContent>
        <CardActions className={classes.cardBottom}>
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
