import axios from 'axios';
import { POSTS_PER_PAGE } from 'constants/constans';

const KEY = '37674283-63cb49660a0badf2685ca236d';

const instance = axios.create({
  baseURL: `https://pixabay.com/api`,
  params: {
    page: 1,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: POSTS_PER_PAGE,
  },
});

export const requestGalleryList = async (category, page) => {
  const { data } = await instance.get(`/`, {
    params: { q: category, page: page },
  });
  return data;
};
