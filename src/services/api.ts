import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL_API || 'https://todo-back-end-app.herokuapp.com',
});

export default api;
