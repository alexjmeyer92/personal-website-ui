import React from 'react';
// import makeStyles from '@material-ui/core/styles/makeStyles'
import Grid from '@material-ui/core/Grid';
import { CircularProgress } from '@material-ui/core';
import Layout from '../components/Layout/Layout';
import headshot from '../assets/alex_headshot.jpeg';

// const useStyles = makeStyles({
//   bg: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: 'white',
//     position: 'fixed',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center center',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed',
//   },
// });

const Resume = () => {
  // const classes = useStyles();

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h3>
            My Name is Alex Meyer, I am a product and technology leader with
            deep supply chain experience. I have a background in Inventory
            Mangement and Supply Chain Analytics. I have managed inventory and
            P&L's for retail businesses with more than $100,000,000 in annual
            sales and helped to stand up a network forecasting and S&OP fucntion
            at Target. I lead teams building next generation supply chain
            technology products that enable highly integrated, collaborative,
            and precise management of the First, Middle, and Final mile of
            Target's global supply chain. I am passionate about solving complex
            problems and building diverse teams that are rooted in continuous
            learning, and collaborative problem solving.
          </h3>
        </Grid>
        <Grid item xs={4}>
          <img src={headshot} height="350px" width="350px" alt="" />
        </Grid>
        <Grid item xs={8}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <h1>Experiences & Accomplishments</h1>
            </Grid>
            <Grid item xs={11}>
              <h2>Artemis Labor and Production Planning</h2>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h2>R Library Author / Maintainer</h2>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h2>Final Mile Delivery Performance</h2>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h2>Predicting Package Delivery Status</h2>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h2>S&OP Network Forecast Modeling</h2>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={4}>
          <Grid item xs={12}>
            <h3>Technical Skills</h3>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={95} />
            <p>Python</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={85} />
            <p>R</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={70} />
            <p>ReactJS</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={100} />
            <p>SQL</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={100} />
            <p>Data Mining</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={100} />
            <p>Data Wrangling</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={85} />
            <p>Microservices</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={90} />
            <p>Simulation</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={60} />
            <p>Machine Learning</p>
          </Grid>
          <Grid item xs={12}>
            <h3>Product Skills</h3>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={95} />
            <p>Agile</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={100} />
            <p>Roadmapping</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={90} />
            <p>User Research</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={75} />
            <p>Market Analysis</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={100} />
            <p>Prototyping</p>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress variant="static" value={85} />
            <p>Product Adoption</p>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
