import React from 'react';
import ResumeItems from '../components/Resume/ResumeItems';
import Layout from '../components/Layout/Layout';

const Resume = () => {
  return (
    <Layout>
      <ResumeItems />
      <h1>
        Conditionally render resume content based on what is clicked above
      </h1>
    </Layout>
  );
};

export default Resume;
