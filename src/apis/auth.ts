import { AxiosResponse } from 'axios';
import client from './client';
import User from '../types/User';

type AuthRequest = User;

export const signup = (req: AuthRequest): Promise<AxiosResponse<void>> => {
  return client.post('/auth/signup', req);
};

interface SigninResponse {
  access_token: string;
}

export const signin = (
  req: AuthRequest,
): Promise<AxiosResponse<SigninResponse>> => {
  return client.post('/auth/signin', req);
};
