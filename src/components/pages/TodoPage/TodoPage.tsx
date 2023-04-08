import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../../../apis';
import Todo from '../../../types/Todo';
import { USER_SESSION } from '../../../utils/constnats';
import TodoItem from '../../molecules/TodoItem';

const TodoPage: React.FC = () => {
  const navigate = useNavigate();

  const [newTodoValue, setNewTodoValue] = useState<string>('');
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

  const handleNewTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTodoValue(value);
  };

  const handleAddTodo = async () => {
    const { data } = await apis.todos.create({ todo: newTodoValue });
    setTodos((prev) => [...prev, data]);
    setNewTodoValue('');
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
      <input
        data-testid="new-todo-input"
        value={newTodoValue}
        onChange={handleNewTodo}
      />
      <button data-testid="new-todo-add-button" onClick={handleAddTodo}>
        추가
      </button>
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
