import React from 'react';
import BackgroundImage from '../assets/mpls_downtown_south.jpg';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <img
        src={BackgroundImage}
        height="100%"
        width="100%"
        alt="home page background"
      />
    </Layout>
  );
};

export default Home;
