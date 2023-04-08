import axios, { AxiosInstance } from 'axios';

export interface ErrorResponse {
  statusCode: number;
  message: string;
  error: string;
}

const client: AxiosInstance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
});

export default client;
