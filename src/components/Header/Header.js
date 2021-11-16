import AddTodo from '../AddTodo/AddTodo';
import { StyledHeader, Sun, Moon, ThemeToggler } from './Header.styles';

const Header = ({ theme, setTheme }) => {
  const setMode = (mode) => {
    setTheme(mode);
    localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => {
    if (theme === 'default') {
      setMode('dark');
    } else {
      setMode('default');
    }
  };

  return (
    <StyledHeader>
      <div>
        <h1>To-do List</h1>
        <ThemeToggler onClick={toggleTheme}>
          {theme === 'default' ? <Moon /> : <Sun />}
        </ThemeToggler>
      </div>
      <AddTodo />
    </StyledHeader>
  );
};

export default Header;
