import React, { useEffect } from 'react';
import TodoItem from '../../molecules/TodoItem';
import TodoInput from '../../molecules/TodoInput';
import useTodos from '../../../lib/TodosContext/useTodos';

const TodoList: React.FC = () => {
  const { todos, getAllTodos } = useTodos();

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <h1 className="mb-8 text-center text-5xl font-extrabold">TODO LIST</h1>
      <TodoInput />
      <ul className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
