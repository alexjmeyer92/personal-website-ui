import React from 'react';
import { Card } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import GlobalContext from '../Context/GlobalContext';
import productManagementResume from './ResumeContent/ProductManagement';
import softwareEngineeringResume from './ResumeContent/SoftwareEngineering';
import dataAnalyticsResume from './ResumeContent/DataAnalytics';
import supplyChainResume from './ResumeContent/SupplyChain';

const useStyles = makeStyles({
  card: {
    paddingTop: '10px',
    paddingRight: '5px',
    paddingLeft: '5px',
  },
});

const ResumeDetailCard = () => {
  const classes = useStyles();

  const {
    values: contextValues,
    // setValues: setContextValues,
  } = React.useContext(GlobalContext);

  const resumeItems = {
    productManagement: productManagementResume,
    softwareEngineering: softwareEngineeringResume,
    dataAnalytics: dataAnalyticsResume,
    supplyChain: supplyChainResume,
  };

  return (
    <Card className={classes.card}>
      <h1>This will Contain Resume Context</h1>
      <h2>{contextValues.resumeSelection}</h2>
      <h3>{JSON.stringify(resumeItems[contextValues.resumeSelection])}</h3>
    </Card>
  );
};

export default ResumeDetailCard;
