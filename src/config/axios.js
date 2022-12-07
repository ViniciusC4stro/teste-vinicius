import axios from 'axios/dist/axios';

const BASE_URL = 'https://backend-cliente-dev.azurewebsites.net/';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;