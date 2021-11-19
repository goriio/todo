import { useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import { StyledTodoCount } from './TodoCount.styles';

const TodoCount = () => {
  const { todoList } = useContext(TodoListContext);
  const [todoListUncomplete, setTodoListUncomplete] = useState(0);

  useEffect(() => {
    const newTodoListUncomplete = todoList.filter((todo) => !todo.completed);

    setTodoListUncomplete(newTodoListUncomplete);
  }, [todoList]);

  return <StyledTodoCount>{todoListUncomplete.length}</StyledTodoCount>;
};

export default TodoCount;
