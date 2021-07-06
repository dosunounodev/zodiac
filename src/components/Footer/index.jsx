import React from 'react';
import { StyledFooter, FooterText } from './styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Made with 🧡 by{' '}
        <a href="https://dosunounodev.com/" target="_blank" rel="noreferrer">
          dosunounodev
        </a>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
