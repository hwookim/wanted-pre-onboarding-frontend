import { createContext } from 'react';
import Todo from '../../types/Todo';

export type TodosContextType = {
  todos: Todo[];

  getAllTodos: () => Promise<void>;
  createTodo: (value: string) => void;
  toggleTodo: (toggled: Todo) => void;
  removeTodo: (id: number) => void;
  editTodo: (edited: Todo) => void;
};

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <TodoContext>.');
};

const initialContext: TodosContextType = {
  todos: [],

  getAllTodos: stub,
  createTodo: stub,
  toggleTodo: stub,
  removeTodo: stub,
  editTodo: stub,
};

const TodosContext = createContext<TodosContextType>(initialContext);

export default TodosContext;
