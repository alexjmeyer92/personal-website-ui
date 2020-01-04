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
        circleRatio={0.75}
        styles={buildStyles({
          rotation: 1 / 2 + 1 / 8,
          strokeLinecap: 'round',
          trailColor: '#CED7D6',
          pathColor: '#05CF18',
        })}
      />
    </div>
  );
};

export default SkillGuage;
