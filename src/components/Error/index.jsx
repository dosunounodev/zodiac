import React from 'react';
import { StyledTitle, StyledText } from './style';

const Error = ({ errormsj }) => {
  return (
    <>
      <StyledTitle>
        <span>Oops!</span>Algo salió mal.
      </StyledTitle>
      <StyledText>{errormsj}</StyledText>
    </>
  );
};

export default Error;
