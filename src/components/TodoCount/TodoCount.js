import { useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import { StyledTodoCount } from './TodoCount.styles';

const TodoCount = () => {
  const { todoList } = useContext(TodoListContext);
  const [todoListUncomplete, setTodoListUncomplete] = useState(0);

  useEffect(() => {
    const newTodoListUncomplete = todoList.filter((todo) => !todo.completed);
    setTodoListUncomplete(newTodoListUncomplete);

    document.title = `(${todoListUncomplete.length}) To-do List`;
  }, [todoList, todoListUncomplete.length]);

  return <StyledTodoCount>{todoListUncomplete.length}</StyledTodoCount>;
};

export default TodoCount;
