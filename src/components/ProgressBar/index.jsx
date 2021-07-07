import React from 'react';
import { StepBar, StyledIcon } from './style';

const ProgressBar = ({ step }) => {
  return (
    <StepBar>
      <StyledIcon className="fas fa-check-square"></StyledIcon>
      <StyledIcon
        className={`${step >= 2 ? 'fas' : 'far'} fa-check-square`}
      ></StyledIcon>
      <StyledIcon
        className={`${step === 3 ? 'fas' : 'far'} fa-check-square`}
      ></StyledIcon>
    </StepBar>
  );
};

export default ProgressBar;
