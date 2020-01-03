import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

// https://codesandbox.io/s/vymm4oln6y
const SkillGuage = props => {
  const { guageValue } = props;
  return (
    <div style={{ height: '45px', width: '45px' }}>
      <CircularProgressbar
        value={guageValue}
        text={''}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#3e98c7',
          textColor: '#fff',
          pathColor: '#fff',
          trailColor: 'transparent',
        })}
      />
    </div>
  );
};

export default SkillGuage;
