import AddTodo from '../AddTodo/AddTodo';
import { StyledHeader } from './Header.styles';
import { BsSun } from 'react-icons/bs';

const Header = () => {
  return (
    <StyledHeader>
      <h1>To-do List</h1>
      <BsSun />
      <AddTodo />
    </StyledHeader>
  );
};

export default Header;
