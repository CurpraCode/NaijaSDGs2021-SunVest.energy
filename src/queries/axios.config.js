import axios from "axios";
import {decryptToken} from "./util/auth";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL_STAGING,
});


instance.interceptors.request.use(
    (config) => {
      let authState = window.localStorage.getItem('auth');
      authState = decryptToken(authState);
  
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${authState?.token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  export default instance;