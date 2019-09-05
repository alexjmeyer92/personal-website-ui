import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    maxWidth: 425,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hello
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Welcome to my website!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href="/resume">
            Interactive Resume
          </Button>
          <Button size="small" color="primary" href="/contact">
            Contact Me
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
