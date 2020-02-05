import React from 'react';
import axios from 'axios';
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
    width: '80vw',
  },
  title: {
    fontSize: 16,
  },
  menu: {
    width: 250,
  },
  textField: {
    width: '90%',
  },
});

const ContactCard = props => {
  const { handleClose } = props;
  const classes = useStyles();

  const [values, setValues] = React.useState({
    firstName: null,
    lastName: null,
    email: null,
    comments: null,
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const issueJson = {
    title: `Contact from ${values.firstName}`,
    body: `First: ${values.firstName} 
           Last: ${values.lastName}
           Email: ${values.email}
           Notes: ${values.comments}`,
  };

  const createGitIssue = props => {
    const { issueJson } = props;
    const gitToken = 'e873ca2b1bd9b909cc1b87d54a901405423be084';

    axios
      .post(
        'https://api.github.com/repos/alexjmeyer92/personal-website-ui/issues',
        issueJson,
        {
          auth: {
            username: 'alexjmeyer92',
            password: gitToken,
          },
        },
      )
      .catch(function(error) {
        console.log(error);
      });
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
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <TextField
            className={classes.textField}
            id="outlined-comments"
            label="Contact Comments"
            multiline
            rows="6"
            defaultValue="Enter Comments Here"
            margin="normal"
            variant="outlined"
            value={values.comments}
            onChange={handleChange('comments')}
          />
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            createGitIssue({ issueJson: issueJson });
            handleClose();
          }}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default ContactCard;
