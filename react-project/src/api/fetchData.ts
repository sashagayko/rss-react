import axios from 'axios';

const API_KEY = '630df54df5ac4c07b193e7fc7d65284d';
const BASE_URL = `https://newsapi.org/v2/everything?q=`;

export const fetchData = async (inputValue: string) => {
  return await axios.get(`${BASE_URL}${inputValue}&apiKey=${API_KEY}`);
};
