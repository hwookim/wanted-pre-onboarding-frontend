import axios, { AxiosInstance } from 'axios';
import { USER_SESSION } from '../utils/constnats';

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const client: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem(USER_SESSION);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
