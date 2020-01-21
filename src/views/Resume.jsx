import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout/Layout';
import SkillGuage from '../components/Resume/SkillGuages';

const Resume = () => {
  return (
    <Layout>
      <Grid container spacing={2} style={{ margin: '10px', marginTop: '65px' }}>
        <Grid container xs={12}>
          <Grid item xs={12}>
            <h2>Technical Skills</h2>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={95} />
            <p>Python</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={85} />
            <p>R</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={70} />
            <p>ReactJS</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={100} />
            <p>SQL</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={100} />
            <p>Data Mining</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={100} />
            <p>Data Wrangling</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={85} />
            <p>Microservices</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={90} />
            <p>Simulation</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={60} />
            <p>Machine Learning</p>
          </Grid>
          <Grid item xs={12}>
            <h2>Product Skills</h2>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={95} />
            <p>Agile</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={100} />
            <p>Strategy / Roadmapping</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={100} />
            <p>Prototyping</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={90} />
            <p>User Research</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={75} />
            <p>Market Analysis</p>
          </Grid>
          <Grid item xs={4} md={1}>
            <SkillGuage guageValue={85} />
            <p>Product Adoption</p>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <h2>Experiences & Accomplishments</h2>
            </Grid>
            <Grid item xs={11}>
              <h3>Artemis Labor and Production Planning</h3>
              <p>
                Artemis is a labor and production planning suite that leverages
                realtime data, discrete process simulation, and machine learning
                in a microservice architecture to efficiently allocate labor and
                create highly detailed production plans. This tool kit is
                currently used by Target Corp to plan and operate a nearly 2000
                node distribution network that handles approximately
                $70,000,000,000 in freight on an annual basis.
              </p>
              <p>
                I lead a team of between 6 and 8 across Target's Minneapolis and
                Bangalore offices in scoping, designing, and engineering a
                solution to this problem.
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>R Library Author / Maintainer</h3>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>Final Mile Delivery Performance</h3>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>Predicting Package Delivery Status</h3>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>S&OP Network Forecast Modeling</h3>
              <p>
                Some discussion of the specific project or accomplishment will
                go here when I eventually get around to writing all of this out
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
