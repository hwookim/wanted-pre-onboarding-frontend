import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_SESSION } from '../../../utils/constnats';
import TodoItem from '../../molecules/TodoItem';

const TodoPage: React.FC = () => {
  const navigate = useNavigate();

  const [newTodoValue, setNewTodoValue] = useState<string>('');
  const [todos, setTodos] = useState<
    { id: number; todo: string; isCompleted: boolean }[]
  >([]);
  const id = useRef(todos[todos.length - 1]?.id || 0);

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (!token) {
      navigate('/signin');
    }
  }, []);

  const handleNewTodo = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNewTodoValue(value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: id.current++,
      todo: newTodoValue,
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoValue('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((el) =>
        el.id !== id ? el : { ...el, isCompleted: !el.isCompleted },
      ),
    );
  };

  const handleRemoveTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number, value: string) => {
    setTodos((prev) =>
      prev.map((el) => (el.id !== id ? el : { ...el, todo: value })),
    );
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
