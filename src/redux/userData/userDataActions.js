import { SET_USERDATA, RESET_USERDATA } from './userDataTypes';

export const setUserData = (payload) => {
  return {
    type: SET_USERDATA,
    payload,
  };
};

export const setUserDataReset = () => {
  return {
    type: RESET_USERDATA,
  };
};
