import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';
import Todo from '../../../types/Todo';
import { USER_SESSION } from '../../../utils/constnats';
import TodoItem from '../../molecules/TodoItem';
import TodoInput from '../../molecules/TodoInput';

const TodoPage: React.FC = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState<
    { id: number; todo: string; isCompleted: boolean }[]
  >([]);

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (!token) {
      navigate('/signin');
    }

    apis.todos.getAll().then(({ data }) => setTodos(data));
  }, []);

  const handleAddTodo = async (value: string) => {
    const { data } = await apis.todos.create({ todo: value });
    setTodos((prev) => [...prev, data]);
  };

  const handleToggleTodo = (toggled: Todo) => {
    const { id, todo, isCompleted } = toggled;
    apis.todos.update(id, { todo, isCompleted });
    setTodos((prev) =>
      prev.map((el) => (el.id !== id ? el : { ...el, isCompleted })),
    );
  };

  const handleRemoveTodo = (id: number) => {
    apis.todos.remove(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (edited: Todo) => {
    const { id, todo, isCompleted } = edited;
    apis.todos.update(id, { todo, isCompleted });
    setTodos((prev) => prev.map((el) => (el.id !== id ? el : { ...el, todo })));
  };

  return (
    <>
      <TodoInput onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            onToggle={handleToggleTodo}
            onRemove={handleRemoveTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoPage;
