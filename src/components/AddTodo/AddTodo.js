import { useContext, useEffect, useState } from 'react';
import { TodoListContext } from '../../contexts/TodoListContext';
import { FormControl, InputCount, StyledAddTodo } from './AddTodo.styles';

const TODO_MAX_LENGTH = 25;

const AddTodo = () => {
  const { todoList, setTodoList } = useContext(TodoListContext);
  const [todo, setTodo] = useState('');
  const [todoLength, setTodoLength] = useState(TODO_MAX_LENGTH);
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    setTodoLength(TODO_MAX_LENGTH - todo.length);
  }, [todo.length]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

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
      <FormControl>
        <input
          type='text'
          value={todo}
          onChange={onChange}
          maxLength={TODO_MAX_LENGTH}
          placeholder='What to do today?'
        />
        <InputCount todoLength={todoLength}>{todoLength}</InputCount>
      </FormControl>
      <small>{validationMessage}</small>
    </StyledAddTodo>
  );
};

export default AddTodo;
