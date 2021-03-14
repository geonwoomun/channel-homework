import axios from 'axios';
import { URL } from '../constants';

const customAxios = axios.create({
  baseURL: URL
});

export async function getCountryListAPI() {
  const result = await customAxios.get('');
  return result.data;
}
