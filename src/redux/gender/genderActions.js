import {
  SET_MALE,
  SET_INTERSEX,
  SET_FEMALE,
  RESET_GENDER,
} from './genderTypes';

export const setGenderMale = () => {
  return {
    type: SET_MALE,
  };
};

export const setGenderIntersex = () => {
  return {
    type: SET_INTERSEX,
  };
};

export const setGenderFemale = () => {
  return {
    type: SET_FEMALE,
  };
};

export const setGenderReset = () => {
  return {
    type: RESET_GENDER,
  };
};
