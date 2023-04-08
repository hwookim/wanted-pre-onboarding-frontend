import React, { ReactElement, useState } from 'react';
import TodosContext, { TodosContextType } from './context';
import Todo from '../../types/Todo';
import apis from '../../apis';

interface TodosProviderProps {
  children: ReactElement | ReactElement[];
}

const TodosProvider: React.FC<TodosProviderProps> = ({
  children,
}: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getAllTodos = async () => {
    apis.todos.getAll().then(({ data }) => setTodos(data));
  };

  const createTodo = async (value: string) => {
    const { data } = await apis.todos.create({ todo: value });
    setTodos((prev) => [...prev, data]);
  };

  const toggleTodo = (toggled: Todo) => {
    const { id, todo, isCompleted } = toggled;
    apis.todos.update(id, { todo, isCompleted });
    setTodos((prev) =>
      prev.map((el) => (el.id !== id ? el : { ...el, isCompleted })),
    );
  };

  const removeTodo = (id: number) => {
    apis.todos.remove(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (edited: Todo) => {
    const { id, todo, isCompleted } = edited;
    apis.todos.update(id, { todo, isCompleted });
    setTodos((prev) => prev.map((el) => (el.id !== id ? el : { ...el, todo })));
  };

  const todosContext: TodosContextType = {
    todos,
    getAllTodos,
    createTodo,
    toggleTodo,
    removeTodo,
    editTodo,
  };

  return (
    <TodosContext.Provider value={todosContext}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
