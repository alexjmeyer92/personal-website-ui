import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: 16,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  menu: {
    width: 250,
  },
});

const ContactCard = () => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    firstName: null,
    lastName: null,
    email: null,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Contact Me
        </Typography>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item>
            <TextField
              id="outlined-first-name"
              label="First Name"
              value={values.firstName}
              onChange={handleChange('firstName')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-last-name"
              label="Last Name"
              value={values.lastName}
              onChange={handleChange('lastName')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <Grid item>
            <TextField
              id="outlined-email"
              label="Email"
              value={values.email}
              onChange={handleChange('email')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
