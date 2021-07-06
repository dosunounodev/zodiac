import React from 'react';
import { StyledButton, StyledLink } from './styles';

const Button = ({ children, onClick, isLink, to }) => {
  if (isLink) {
    return <StyledLink to={to}>{children}</StyledLink>;
  }
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
