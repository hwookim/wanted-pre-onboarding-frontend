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

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <TodosProvider>
      <button
        className="absolute top-10 right-10 text-lg"
        onClick={handleLogout}
      >
        로그아웃
      </button>
      <div className="mt-20 w-full flex justify-center">
        <div className="w-1/2 flex flex-col gap-4">
          <TodoList />
        </div>
      </div>
    </TodosProvider>
  );
};

export default TodoPage;
