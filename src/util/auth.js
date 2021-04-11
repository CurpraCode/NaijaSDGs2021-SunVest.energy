import { AES, enc } from 'crypto-js';

export const decryptToken = (data) => {
  try {
    if (data) {
      const bytes = AES.decrypt(data, process.env.REACT_APP_AUTH_KEY);
      return JSON.parse(bytes.toString(enc.Utf8));
    }
    window.location.replace('/login');
  } catch (error) {
    localStorage.clear();
    window.location.replace('/login');
  }
};
