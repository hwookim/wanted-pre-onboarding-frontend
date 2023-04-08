import { AxiosResponse } from 'axios';
import Todo from '../types/Todo';
import client from './client';

export type CreateTodoRequest = Pick<Todo, 'todo'>;

export const create = (
  req: CreateTodoRequest,
): Promise<AxiosResponse<Todo>> => {
  return client.post('/todos', req);
};

export const getAll = (): Promise<AxiosResponse<Todo[]>> => {
  return client.get('/todos');
};

export type UpdateTodoRequest = Omit<Todo, 'id'>;

export const update = (
  id: number,
  req: UpdateTodoRequest,
): Promise<AxiosResponse<Todo>> => {
  return client.put('/todos/' + id, req);
};

export const remove = (id: number): Promise<AxiosResponse<void>> => {
  return client.delete('/todos/' + id);
};
