import React, { ChangeEvent, useRef, useState } from 'react';
import TodoItem from '../../molecules/TodoItem';

const TodoPage: React.FC = () => {
  const [newTodoValue, setNewTodoValue] = useState<string>('');
  const [todos, setTodos] = useState<
    { id: number; todo: string; isCompleted: boolean }[]
  >([]);
  const id = useRef(todos[todos.length - 1]?.id || 0);

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
      prev.map((todo) =>
        todo.id !== id ? todo : { ...todo, isCompleted: !todo.isCompleted },
      ),
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
          <TodoItem key={todo.id} {...todo} onToggle={handleToggleTodo} />
        ))}
      </ul>
    </>
  );
};

export default TodoPage;
