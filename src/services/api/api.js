import axios from 'axios';

const API_KEY = '33451110-755b0e25228b8bf26b71483d6';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 12;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  per_page: PER_PAGE,
};

export const getImages = async (imageName, page) => {
  const config = {
    params: {
      q: imageName,
      page: page,
    },
  };
  const images = await axios.get('', config);
  return images.data;
};
