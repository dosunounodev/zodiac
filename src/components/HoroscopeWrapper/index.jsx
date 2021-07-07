import React from 'react';
import { HoroscopeContainer, StyledText } from './style';

const HoroscopeWrapper = ({ horoscope }) => {
  return (
    <HoroscopeContainer>
      <StyledText>
        <span>Salud:</span> {horoscope.salud}
      </StyledText>
      <StyledText>
        <span>Amor: </span> {horoscope.amor}
      </StyledText>
      <StyledText>
        <span>Dinero:</span> {horoscope.dinero}
      </StyledText>
      <StyledText>
        <span>Color:</span> {horoscope.color}
      </StyledText>
      <StyledText>
        <span>Número:</span> {horoscope.numero}
      </StyledText>
    </HoroscopeContainer>
  );
};

export default HoroscopeWrapper;
