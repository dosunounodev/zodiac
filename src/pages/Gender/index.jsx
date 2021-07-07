import React from 'react';
import { useSelector } from 'react-redux';
import ProgressBar from 'components/ProgressBar';
import Button from 'components/Button';
import GenderSelectWrapper from 'components/GenderSelectWrapper';
import { GenderPageWrapper, StyledTitle } from './style';

const Gender = () => {
  const selectedGender = useSelector((state) => state.gender.selectedGender);
  return (
    <GenderPageWrapper>
      <div>
        <ProgressBar step={1}></ProgressBar>
        <StyledTitle>Ingresa Tu Género</StyledTitle>
      </div>
      <GenderSelectWrapper />
      {selectedGender ? (
        <Button isLink to="/dataform">
          Seleccionar
        </Button>
      ) : (
        <Button disabled={!selectedGender}>Seleccionar</Button>
      )}
    </GenderPageWrapper>
  );
};

export default Gender;
