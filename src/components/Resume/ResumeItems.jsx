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
          <ResumeCard
            cardText="Product Management"
            cardValue="productManagement"
          />
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
          <ResumeCard
            cardText="Software Engineering"
            cardValue="softwareEngineering"
          />
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
          <ResumeCard cardText="Data & Analytics" cardValue="dataAnalytics" />
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
          <ResumeCard cardText="Supply Chain" cardValue="supplyChain" />
        </Grid>
      </Slide>
    </Grid>
  );
};

export default ResumeItems;
