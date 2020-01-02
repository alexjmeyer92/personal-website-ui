import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import RadialSeparators from './RadialSeparator';

const SkillGuage = props => {
  const { guageValue } = props;
  return (
    <div>
      <CircularProgressbarWithChildren
        value={guageValue}
        text={`${guageValue}%`}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: 'butt',
        })}
      >
        <RadialSeparators
          count={12}
          style={{
            background: '#fff',
            width: '2px',
            // This needs to be equal to props.strokeWidth
            height: `${10}%`,
          }}
        />
      </CircularProgressbarWithChildren>
      ;
    </div>
  );
};

export default SkillGuage;
