import React from 'react';
import { StyledButton, StyledLink } from './styles';

const Button = ({ children, secondary, disabled, isLink, to, onClick }) => {
  if (isLink) {
    return (
      <StyledLink secondary={secondary} disabled={disabled} to={to}>
        {children}
      </StyledLink>
    );
  }
  return (
    <StyledButton secondary={secondary} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
