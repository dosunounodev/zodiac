import { combineReducers } from 'redux';
import genderReducer from './gender/genderReducer';
import userDataReducer from './userData/userDataReducer';

const rootReducer = combineReducers({
  gender: genderReducer,
  userData: userDataReducer,
});

export default rootReducer;
