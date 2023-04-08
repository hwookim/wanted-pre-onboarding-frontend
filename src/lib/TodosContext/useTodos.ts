import { useContext } from 'react';
import TodosContext from './context';

const useTodos = () => useContext(TodosContext);

export default useTodos;
