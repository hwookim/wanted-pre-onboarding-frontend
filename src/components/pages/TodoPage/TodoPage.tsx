import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { USER_SESSION } from '../../../utils/constnats';
import TodosProvider from '../../../lib/TodosContext/TodosProvider';
import TodoList from '../../organisms/TodoList/TodoList';

const TodoPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(USER_SESSION);
    if (!token) {
      navigate('/signin');
    }
  });

  return (
    <TodosProvider>
      <TodoList />
    </TodosProvider>
  );
};

export default TodoPage;
