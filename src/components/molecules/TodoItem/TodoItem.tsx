import React from 'react';

interface TodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { id, todo, isCompleted, onToggle, onRemove } = props;

  const handleToggleTodo = () => {
    onToggle(id);
  };

  const handleRemoveTodo = () => {
    onRemove(id);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleTodo}
        />
        <span>{todo}</span>
      </label>
      <button data-testid="delete-button" onClick={handleRemoveTodo}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
