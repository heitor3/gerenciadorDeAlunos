import axios from 'axios';

const api = axios.create({
  baseUrl: "https://localhost:44330",
});

export default api;