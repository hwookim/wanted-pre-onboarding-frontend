import React, { ChangeEvent, useState } from 'react';

interface TodoInputProps {
  onAdd: (value: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = (props: TodoInputProps) => {
  const { onAdd } = props;
  const [todo, setTodo] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTodo(value);
  };

  const handleAdd = () => {
    onAdd(todo);
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
