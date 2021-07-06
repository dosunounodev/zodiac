import axios from 'axios';
import { API_URL_USERS } from './settings';

export const getRandomUser = async () => {
  const response = await axios.get(API_URL_USERS);
  const user = response.data.results[0];
  return user;
};
