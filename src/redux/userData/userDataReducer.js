import { SET_USERDATA, RESET_USERDATA } from './userDataTypes';

const initialState = {
  userData: { name: '', email: '', date: '' },
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERDATA:
      const { Name: name, Email: email, Date: date } = action.payload;
      return { ...state, userData: { ...state.userData, name, email, date } };
    case RESET_USERDATA:
      return initialState;
    default:
      return state;
  }
};

export default userDataReducer;
