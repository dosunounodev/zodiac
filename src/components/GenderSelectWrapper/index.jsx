import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGenderMale, setGenderIntersex, setGenderFemale } from '../../redux';
import Gen1 from 'assets/icons/gen-1.png';
import Gen2 from 'assets/icons/gen-2.png';
import Gen3 from 'assets/icons/gen-3.png';
import { Wrapper, IconContainer } from './style';

const GenderSelectWrapper = () => {
  const selectedGender = useSelector((state) => state.gender.selectedGender);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <IconContainer
        activeGender={selectedGender === 'Male'}
        onClick={() => dispatch(setGenderMale())}
      >
        <img src={Gen1} alt="Male" />
      </IconContainer>

      <IconContainer
        activeGender={selectedGender === 'Intersex'}
        onClick={() => dispatch(setGenderIntersex())}
      >
        <img src={Gen2} alt="Intersex" />
      </IconContainer>

      <IconContainer
        activeGender={selectedGender === 'Female'}
        onClick={() => dispatch(setGenderFemale())}
      >
        <img src={Gen3} alt="Female" />
      </IconContainer>
    </Wrapper>
  );
};

export default GenderSelectWrapper;
