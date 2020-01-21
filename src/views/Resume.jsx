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
                I lead a team of 8 across Target's Minneapolis and Bangalore
                offices in scoping, designing, and engineering Target's Artemis
                platform.
              </p>
              <p>
                Artemis is a labor and production planning suite that leverages
                realtime data, discrete process simulation, and machine learning
                in a microservice architecture to efficiently allocate labor and
                create highly detailed production plans. This tool kit is
                currently used by Target Corp to plan and operate a nearly 2000
                node distribution network that handles approximately
                $70,000,000,000 in freight on an annual basis.
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>R Library Author / Maintainer</h3>
              <p>
                I am the author and primary maintainer of an inner-source R
                project called BullseyeConnect. This project creates a unified
                API and opinionated approach to leveraging data across multiple
                sources / platforms with in Target. The library facilites read
                and write connectivity from R to Teradata, Oracle, Postgres,
                Domo, Hadoop, and IBM DB2 in a consistent way that improves code
                sharability and interoprability between developers.
                BullseyeConnect currently is the library of choice for users
                across Target Data Science, Supply Chain, Finance, HR, Inventory
                Management, and Properties for connecting to data with R and
                servers 200+ users across Target.
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>Predicting Package Delivery Status</h3>
              <p>
                Developed an algorithm using a combination of gradient boosting
                tree algorithms and neural netowrks to predict if packages would
                be delivered late to guests. This algorithm was able to predict
                package delivery status with greater than 90% accuracy. The
                outputs of this prediction service were used to send proactive
                notifications to Target guests when packges were predicted to
                arrive after promised delivery dates.
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>Final Mile Delivery Performance</h3>
              <p>
                Cross functionally between teams in Transportation, Operations,
                and Data Sciences to develop, and refine an algorithm to perform
                defect assignment on the more than 100,000,000 packages that are
                shipped by Target annually. This algorithm enables users to
                undersand descrite defects in Target's fulfillment process and
                determine root cause of delivery failures.
              </p>
            </Grid>
            <Grid item xs={11}>
              <h3>S&OP Network Forecast Modeling</h3>
              <p>
                Designed and lead a team in developing the network modeling and
                S&OP processes for Target's ditribution network.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Resume;
