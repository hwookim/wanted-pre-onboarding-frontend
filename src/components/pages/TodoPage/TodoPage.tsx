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
      <div className="mt-20 w-full flex justify-center">
        <div className="w-1/2 flex flex-col gap-4">
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
};

export default TodoPage;
