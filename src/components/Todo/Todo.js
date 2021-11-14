import { useContext } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import Button from '../Button/Button';
import { StyledTodo } from './Todo.styles';

const Todo = ({ todo }) => {
  const { todoList, setTodoList } = useContext(TodoListContext);

  const toggleCompletedTodo = () => {
    const newTodoList = todoList.map((previousTodo) =>
      previousTodo.id === todo.id
        ? { ...previousTodo, completed: !previousTodo.completed }
        : previousTodo
    );
    setTodoList(newTodoList);
    localStorage.setItem('todo-list', JSON.stringify(newTodoList));
  };

  const deleteTodo = () => {
    const newTodoList = todoList.filter(
      (previousTodo) => previousTodo.id !== todo.id
    );
    setTodoList(newTodoList);
    localStorage.setItem('todo-list', JSON.stringify(newTodoList));
  };

  return (
    <StyledTodo todo={todo}>
      <p>{todo.name}</p>
      <div>
        <Button
          text={todo.completed ? 'Uncomplete' : 'Completed'}
          onClick={toggleCompletedTodo}
        />
        <Button text='Delete' onClick={deleteTodo} />
      </div>
    </StyledTodo>
  );
};

export default Todo;
