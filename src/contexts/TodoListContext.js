import { createContext, useEffect, useState } from 'react';

export const TodoListContext = createContext();

export const TodoListProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('todo-list');
    const todoList = JSON.parse(data) || [];
    setTodoList(todoList);
  }, []);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
};
