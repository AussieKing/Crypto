import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
console.log('API_BASE_URL:', API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
});
axiosInstance.get('/test-endpoint')
   .then(response => console.log(response))
   .catch(error => console.log(error));

export default axiosInstance;
