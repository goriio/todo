import AddTodo from '../AddTodo/AddTodo';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <StyledHeader>
      <h1>To-do List</h1>
      <AddTodo />
    </StyledHeader>
  );
};

export default Header;
