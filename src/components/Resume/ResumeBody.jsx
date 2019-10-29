import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GlobalContext from '../Context/GlobalContext';
import ResumeDetailCard from './ResumeDetailCard';
import ResumeItems from './ResumeItems';

const useStyles = makeStyles({
  content: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    width: '100%',
  },
});

const ResumeBody = () => {
  const classes = useStyles();

  const {
    values: contextValues,
    // setValues: setContextValues,
  } = React.useContext(GlobalContext);

  return (
    <div className={classes.content}>
      <ResumeItems />
      {contextValues.resumeSelection ? (
        <ResumeDetailCard />
      ) : (
        <h1 style={{ color: 'Black' }}>Click Above To See More</h1>
      )}
    </div>
  );
};

export default ResumeBody;
