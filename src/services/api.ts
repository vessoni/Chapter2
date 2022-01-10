import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://goofy-lovelace-f1e0c6.netlify.app/api',
});
