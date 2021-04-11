import axios from 'axios';

export const login = async (body) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL_STAGING}/login`,
    body
  );
  return data;
};