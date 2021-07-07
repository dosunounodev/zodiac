import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignButton from 'components/SignButton';
import Loader from 'components/Loader';
import Button from 'components/Button';
import HoroscopeWrapper from 'components/HoroscopeWrapper';
import CountDown from 'components/CountDown';
import useGetHoroscope from 'hooks/useGetHoroscope';
import { getSign } from 'helpers/getSign';
import { HoroscopePageWrapper, StyledTitle } from './style';

const Horoscope = () => {
  const selectedGender = useSelector((state) => state.gender.selectedGender);
  const userData = useSelector((state) => state.userData.userData);
  const sign = getSign(userData.date);
  const { horoscope, loading, error } = useGetHoroscope(sign);

  return (
    <HoroscopePageWrapper>
      {selectedGender === null && <Redirect to="/Gender"></Redirect>}
      {userData === null && <Redirect to="/DataForm"></Redirect>}
      {loading ? (
        <Loader />
      ) : (
        <>
          <SignButton sign={sign} />
          <StyledTitle>
            Hola <span>{userData.name.toUpperCase()}</span> este es tu Horóscopo
            de hoy:
          </StyledTitle>
          <HoroscopeWrapper horoscope={horoscope} />
          <CountDown bornDate={userData.date} />
          <Button secondary isLink to="/">
            Inicio
          </Button>
        </>
      )}
    </HoroscopePageWrapper>
  );
};

export default Horoscope;
