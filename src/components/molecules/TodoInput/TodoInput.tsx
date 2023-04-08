import React, { ChangeEvent, useState } from 'react';
import useTodos from '../../../lib/TodosContext/useTodos';

const TodoInput: React.FC = () => {
  const { createTodo } = useTodos();

  const [todo, setTodo] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  };

  const handleAdd = () => {
    createTodo(todo);
    setTodo('');
  };

  return (
    <>
      <input
        data-testid="new-todo-input"
        value={todo}
        onChange={handleChange}
      />
      <button data-testid="new-todo-add-button" onClick={handleAdd}>
        추가
      </button>
    </>
  );
};

export default TodoInput;
