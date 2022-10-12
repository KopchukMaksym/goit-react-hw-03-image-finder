import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28740529-a5c8b6a6d9e9b336b906aaf7a';
export const fetchApi = (query, page) => {
  return axios.get(`${BASE_URL}`, {
    params: {
      q: query,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });
};
