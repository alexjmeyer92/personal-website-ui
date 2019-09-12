import React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import Slide from '@material-ui/core/Slide';
import ResumeCard from './ResumeCard';

const useStyles = makeStyles({
  resumeGrid: {
    paddingTop: '10px',
    paddingRight: '5px',
    paddingLeft: '5px',
    margin: '0px',
  },
});

const ResumeItems = () => {
  // <Slide left>
  //   <h1>Hello Resume Page</h1>
  // </Slide>;
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      className={classes.resumeGrid}
      direction="row"
      justify="center"
      alignItems="stretch"
    >
      <Slide
        in={true}
        direction="left"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12} md={3}>
          <ResumeCard cardText="Product Management" />
        </Grid>
      </Slide>
      <Slide
        in={true}
        direction="left"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12} md={3}>
          <ResumeCard cardText="Software Engineering" />
        </Grid>
      </Slide>
      <Slide
        in={true}
        direction="right"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12} md={3}>
          <ResumeCard cardText="Data & Analytics" />
        </Grid>
      </Slide>
      <Slide
        in={true}
        direction="right"
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
        <Grid item xs={12} md={3}>
          <ResumeCard cardText="Supply Chain" />
        </Grid>
      </Slide>
    </Grid>
  );
};

export default ResumeItems;
