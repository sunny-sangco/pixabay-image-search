import axios from 'axios';
import config from '../../config';
import {Alert} from 'react-native';

// Get Images form pixabay
export const getImages = async (q, pages, perPage) => {
  const resp = await axios.get(
    `${config.API_URL}?key=${config.API_KEY}&q=${q}&page=${pages}&per_page=${perPage ? perPage : 10}`,
  );
  !resp?.data?.hits.length > 0 ? Alert.alert('result not found') : '';
  return resp?.data?.hits;
};
