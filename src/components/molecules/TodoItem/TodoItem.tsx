import React, { ChangeEvent, useState } from 'react';
import Todo from '../../../types/Todo';

interface TodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
  onToggle: (toggled: Todo) => void;
  onRemove: (id: number) => void;
  onEdit: (edited: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { id, todo, isCompleted, onToggle, onRemove, onEdit } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingValue, setEditingValue] = useState<string>('');

  const handleToggleTodo = () => {
    onToggle({ id, todo, isCompleted: !isCompleted });
  };

  const handleRemoveTodo = () => {
    onRemove(id);
  };

  const handleClickEdit = () => {
    setEditingValue(todo);
    setIsEditing(true);
  };

  const handleChangeEditingValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEditingValue(value);
  };

  const handleEdit = () => {
    onEdit({ id, todo: editingValue, isCompleted });
    setEditingValue('');
    setIsEditing(false);
  };

  const handleCancleEdit = () => {
    setEditingValue('');
    setIsEditing(false);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleTodo}
        />
        {isEditing ? (
          <input
            data-testid="modify-input"
            value={editingValue}
            onChange={handleChangeEditingValue}
          />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEditing ? (
        <>
          <button data-testid="submit-button" onClick={handleEdit}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={handleCancleEdit}>
            취소
          </button>
        </>
      ) : (
        <>
          <button data-testid="modify-button" onClick={handleClickEdit}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleRemoveTodo}>
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
