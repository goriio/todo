import { useContext, useState } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import { StyledAddTodo } from './AddTodo.styles';

const AddTodo = () => {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (todo === '') {
      return setValidationMessage('Input is required');
    }

    const newTodo = {
      id: Date.now(),
      name: todo,
      completed: false,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    localStorage.setItem('todo-list', JSON.stringify(newTodoList));

    setTodo('');
    setValidationMessage('');
  };

  return (
    <StyledAddTodo onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
          placeholder='What to do today?'
        />
      </div>
      <small>{validationMessage}</small>
    </StyledAddTodo>
  );
};

export default AddTodo;
