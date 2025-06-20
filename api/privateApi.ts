import axios from 'axios';
import Cookies from 'js-cookie';

// const token = Cookies.get('authToken') ?? ''
// const token = localStorage.getItem('authToken') ?? ''

export const privateApi = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

privateApi.interceptors.request.use((config) => {
  const token = Cookies.get('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
