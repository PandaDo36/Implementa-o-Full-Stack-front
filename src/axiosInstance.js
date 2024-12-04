import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/livros',
});

export default axiosInstance;
