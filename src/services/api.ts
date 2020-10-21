import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_API || 'http://localhost:5000',
});

export default api;
