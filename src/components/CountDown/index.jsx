import React from 'react';
import { getBdayCountdown } from 'helpers/getBdayCountdown';
import { StyledCountDown } from './style';

const CountDown = ({ bornDate }) => {
  const days = getBdayCountdown(bornDate);
  return (
    <StyledCountDown>
      {days === 0 && (
        <>
          Hoy tu cumpleaños! <span>Feliz Cumple!!! 🥳️🎂🎉</span>
        </>
      )}
      {days === 1 && (
        <>
          Mañana es tu cumpleaños! <span>🥳️🎂🎉</span>
        </>
      )}
      {days > 1 && `Faltan ${days} días para tu cumpleaños`}
      {days < 0 && `Faltan ${days + 365} días para tu cumpleaños`}
    </StyledCountDown>
  );
};

export default CountDown;
