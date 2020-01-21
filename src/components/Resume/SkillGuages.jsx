import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// docs and code sandbox for react progress bar library
// https://github.com/kevinsqi/react-circular-progressbar
// https://codesandbox.io/s/vymm4oln6y
const SkillGuage = props => {
  const { guageValue } = props;
  return (
    <div style={{ height: '60px', width: '60px' }}>
      <CircularProgressbar
        value={guageValue}
        strokeWidth={50}
        styles={buildStyles({
          strokeLinecap: 'butt',
          trailColor: '#d6d6d6',
          pathColor: '#00E45A',
        })}
      />
    </div>
  );
};

export default SkillGuage;
