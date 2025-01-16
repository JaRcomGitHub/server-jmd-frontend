import axios from 'axios';
import { passTokenToHeadersAxios } from '../utilities/helpers';

// axios.defaults.baseURL = 'https://backend.jarcom.info';
axios.defaults.baseURL = 'http://195.206.233.221:3001';
passTokenToHeadersAxios();

export const addPet = async newPet => {
  const { data } = await axios.post('/pets', newPet);
  return data;
};

export const deletePet = async id => {
  const { data } = await axios.delete(`/pets/${id}`);
  return data;
};
