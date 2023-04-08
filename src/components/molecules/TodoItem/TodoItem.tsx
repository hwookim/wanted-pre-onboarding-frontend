import React from 'react';

interface TodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { id, todo, isCompleted, onToggle } = props;

  const handleToggleTodo = () => {
    onToggle(id);
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
    </li>
  );
};

export default TodoItem;
