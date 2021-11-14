import { useContext } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import Todo from '../Todo/Todo';
import { StyledTodoList } from './TodoList.styles';

const TodoList = () => {
  const { todoList } = useContext(TodoListContext);

  return (
    <StyledTodoList>
      {todoList.length
        ? todoList && todoList.map((todo) => <Todo key={todo.id} todo={todo} />)
        : 'Add a to do.'}
    </StyledTodoList>
  );
};

export default TodoList;
