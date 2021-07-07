import {
  SET_MALE,
  SET_INTERSEX,
  SET_FEMALE,
  RESET_GENDER,
} from './genderTypes';

const initialState = {
  selectedGender: null,
};

const genderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MALE:
      return { ...state, selectedGender: 'Male' };
    case SET_INTERSEX:
      return { ...state, selectedGender: 'Intersex' };
    case SET_FEMALE:
      return { ...state, selectedGender: 'Female' };
    case RESET_GENDER:
      return initialState;
    default:
      return state;
  }
};

export default genderReducer;
