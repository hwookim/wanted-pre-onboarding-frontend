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
      <TodoInput />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
