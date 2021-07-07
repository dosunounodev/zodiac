import axios from 'axios';
import { API_URL_HOROSCOPE } from './settings';

export const getHoroscope = async () => {
  const response = await axios.get(API_URL_HOROSCOPE);
  const horoscope = response.data.horoscopo;
  return horoscope;
};
