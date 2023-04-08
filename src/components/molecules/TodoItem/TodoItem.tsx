import React, { ChangeEvent, useState } from 'react';
import useTodos from '../../../lib/TodosContext/useTodos';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

interface TodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
  const { id, todo, isCompleted } = props;

  const { toggleTodo, removeTodo, editTodo } = useTodos();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingValue, setEditingValue] = useState<string>('');

  const handleToggleTodo = () => {
    toggleTodo({ id, todo, isCompleted: !isCompleted });
  };

  const handleRemoveTodo = () => {
    removeTodo(id);
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
    editTodo({ id, todo: editingValue, isCompleted });
    setEditingValue(editingValue);
    setIsEditing(false);
  };

  const handleCancleEdit = () => {
    setEditingValue(todo);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center gap-4">
      <label className="w-1/2 flex gap-4">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleToggleTodo}
        />
        {isEditing ? (
          <Input
            data-testid="modify-input"
            value={editingValue}
            onChange={handleChangeEditingValue}
          />
        ) : (
          <span className="w-full break-all">{todo}</span>
        )}
      </label>
      <div className="w-1/2 flex gap-4">
        {isEditing ? (
          <>
            <Button data-testid="submit-button" onClick={handleEdit}>
              제출
            </Button>
            <Button
              data-testid="cancel-button"
              color="red"
              onClick={handleCancleEdit}
            >
              취소
            </Button>
          </>
        ) : (
          <>
            <Button data-testid="modify-button" onClick={handleClickEdit}>
              수정
            </Button>
            <Button
              data-testid="delete-button"
              color="red"
              onClick={handleRemoveTodo}
            >
              삭제
            </Button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
