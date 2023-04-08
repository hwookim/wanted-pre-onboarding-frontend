import React, { ChangeEvent, useState } from 'react';
import useTodos from '../../../lib/TodosContext/useTodos';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

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
    <div className="mb-4 flex gap-4">
      <Input
        data-testid="new-todo-input"
        value={todo}
        onChange={handleChange}
      />
      <span className="w-24">
        <Button data-testid="new-todo-add-button" onClick={handleAdd}>
          추가
        </Button>
      </span>
    </div>
  );
};

export default TodoInput;
